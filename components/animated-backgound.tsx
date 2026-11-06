"use client";

import { useRef, useMemo, useSyncExternalStore } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ShaderPlaneProps {
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({ fragmentShader, uniforms }: ShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

function generateNoiseTexture(): THREE.DataTexture {
  const size = 256;
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    const v = Math.floor(Math.random() * 256);
    data[i * 4] = v;
    data[i * 4 + 1] = v;
    data[i * 4 + 2] = v;
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform sampler2D iChannel0;

  #define STEP 256
  #define EPS .001

  float smin( float a, float b, float k )
  {
      float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
      return mix( b, a, h ) - k*h*(1.0-h);
  }

  const mat2 m = mat2(.8,.6,-.6,.8);

  float noise( in vec2 x )
  {
    return sin(1.5*x.x)*sin(1.5*x.y);
  }

  float fbm6( vec2 p )
  {
      float f = 0.0;
      f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
      f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
      f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
      f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
      f += 0.015625*(0.5+0.5*noise( p ));
      return f/0.96875;
  }

  mat2 getRot(float a)
  {
      float sa = sin(a), ca = cos(a);
      return mat2(ca,-sa,sa,ca);
  }

  vec3 _position;

  float sphere(vec3 center, float radius)
  {
      return distance(_position,center) - radius;
  }

  float swingPlane(float height)
  {
      vec3 pos = _position + vec3(0.,0.,u_time * 5.5);
      float def =  fbm6(pos.xz * .25) * 0.5;

      float way = pow(abs(pos.x) * 34. ,2.5) *.0000125;
      def *= way;

      float ch = height + def;
      return max(pos.y - ch,0.);
  }

  float map(vec3 pos)
  {
      _position = pos;

      float dist;
      dist = swingPlane(0.);

      float sminFactor = 5.25;
      dist = smin(dist,sphere(vec3(0.,-15.,80.),60.),sminFactor);
      return dist;
  }

  vec3 getNormal(vec3 pos)
  {
      vec3 nor = vec3(0.);
      vec3 vv = vec3(0.,1.,-1.)*.01;
      nor.x = map(pos + vv.zxx) - map(pos + vv.yxx);
      nor.y = map(pos + vv.xzx) - map(pos + vv.xyx);
      nor.z = map(pos + vv.xxz) - map(pos + vv.xxy);
      nor /= 2.;
      return normalize(nor);
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
    vec2 uv = (fragCoord.xy-.5*u_resolution.xy)/u_resolution.y;

    vec3 rayOrigin = vec3(uv + vec2(0.,6.), -1. );

    vec3 rayDir = normalize(vec3(uv , 1.));

    rayDir.zy = getRot(.15) * rayDir.zy;

    vec3 position = rayOrigin;

    float curDist;
    int nbStep = 0;

    for(; nbStep < STEP;++nbStep)
    {
        curDist = map(position + (texture(iChannel0, position.xz) - .5).xyz * .005);

        if(curDist < EPS)
            break;
        position += rayDir * curDist * .5;
    }

    float f;

    float dist = distance(rayOrigin,position);
    f = dist /(98.);
    f = float(nbStep) / float(STEP);

    f *= .9;
    vec3 col = vec3(f);

    fragColor = vec4(col,1.0);
  }
  void main() {
    vec4 fragColor;
    vec2 fragCoord = vUv * u_resolution.xy;
    mainImage(fragColor, fragCoord);
    gl_FragColor = fragColor;
  }
`;

interface ShaderBackgroundProps {
  className?: string;
}

function ShaderBackground({
  className = "w-full h-full",
}: ShaderBackgroundProps) {
  const noiseTexture = useMemo(() => generateNoiseTexture(), []);
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      iChannel0: { value: noiseTexture },
    }),
    [noiseTexture],
  );

  return (
    <div className={className}>
      <Canvas className={className}>
        <ShaderPlane
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
        />
      </Canvas>
    </div>
  );
}

function LightBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 animate-fade-in overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-background to-background" />

      <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] animate-aurora-a rounded-full bg-primary/[0.15] blur-[110px]" />
      <div className="absolute left-[-8rem] top-[24%] h-[26rem] w-[26rem] animate-aurora-b rounded-full bg-accent/[0.14] blur-[120px]" />
      <div className="absolute right-[-7rem] top-[52%] h-[30rem] w-[30rem] animate-aurora-c rounded-full bg-primary/[0.1] blur-[130px]" />
      <div className="absolute left-[30%] top-[88%] h-[24rem] w-[24rem] animate-aurora-a rounded-full bg-accent/[0.1] blur-[120px]" />

      <div className="absolute inset-0 bg-dot bg-mesh-fade opacity-70" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />
    </div>
  );
}

function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

// Render the CSS backdrop during prerender so the WebGL shader (which reads
// Math.random for its noise texture) only ever mounts on the client.
function getServerThemeSnapshot() {
  return false;
}

export function AnimatedBackground() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  if (!isDark) {
    return <LightBackground />;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <ShaderBackground className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
