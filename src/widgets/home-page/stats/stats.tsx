'use client';

import { useCounterAnimation } from '@/hooks/useCounterAnimation';

const StatsSection = () => {
  const counter1Ref = useCounterAnimation(18779);
  const counter2Ref = useCounterAnimation(90);
  const counter3Ref = useCounterAnimation(58);
  const counter4Ref = useCounterAnimation(24000);

  return (
    <section className="flex justify-between items-center w-full max-h-[250px] py-12">
      <ul className="flex items-center justify-between w-full">
        <li className="flex flex-col w-[300px] space-y-4 ">
          <span className="flex justify-center gap-2 text-5xl text-center font-bold">
            <p 
              ref={counter1Ref} 
              className="opacity-0"
            >0</p> 
            <p>м&sup2;</p>
          </span>
          <p className="text-center font-serif italic">
            производственных и складских площадей
          </p>
        </li>
        <li className="flex flex-col w-[300px] space-y-4">
          <span className="flex justify-center gap-2 text-5xl text-center font-bold">
            <p 
              ref={counter2Ref} 
              className="opacity-0"
            >0</p> 
            <p>+</p>
          </span>
          <p className="text-center font-serif italic">единиц техники</p>
        </li>
        <li className="flex flex-col w-[300px] space-y-4">
          <span className="flex justify-center gap-2 text-5xl text-center font-bold">
            <p>&#62;</p> 
            <p 
              ref={counter3Ref} 
              className="opacity-0"
            >0</p>
          </span>
          <p className="text-center font-serif italic">Сданных объектов</p>
        </li>
        <li className="flex flex-col w-[300px] space-y-4">
          <span className="flex justify-center gap-2 text-5xl text-center font-bold">
            <p 
              ref={counter4Ref} 
              className="opacity-0"
            >0</p> 
            <p>м&sup3;</p>
          </span>
          <p className="text-center font-serif italic">
            объем производства в год
          </p>
        </li>
      </ul>
    </section>
  );
};

export default StatsSection;