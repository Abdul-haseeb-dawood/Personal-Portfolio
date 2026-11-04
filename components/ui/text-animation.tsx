import { useState } from "react";

export const TextAnimation = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full ">
      <p
        className=" text-transparent text-3xl sm:text-4xl md:text-6xl font-serif font-extrabold uppercase
        [-webkit-text-stroke:1.5px_#00E5F5]
        filter:drop-shadow(0_0_8px_#00E5F580)]"
      >
        Abdul-Haseeb
      </p>
    </div>
  );
};
