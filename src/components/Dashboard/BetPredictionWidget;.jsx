"use client";

const BetPredictionWidget = () => {
  return (
    <section className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-4 py-14 my-auto rounded-[11.667px] bg-secondary min-w-60  w-full h-full  max-md:max-w-full">
      <div className="flex flex-col justify-between items-center min-h-[141px]">
        <h3 className="w-72 text-xl font-bold text-center text-white">
          🎯 Bet Big on Team C covering the spread!
        </h3>
        <hr className="self-stretch mt-7 w-full border border-solid border-neutral-100 border-opacity-30 min-h-px" />
        <div className="flex flex-col justify-center mt-7 w-72 max-w-full text-lg tracking-tight text-neutral-50">
          <p className="text-center">Spread: +5.5 odds</p>
          <p className="mt-6">📊 Consistent spread victories in last 3</p>
        </div>
      </div>
    </section>
  );
};

export default BetPredictionWidget