import { useState } from "react";

export default function Carrousel() {
  const [step, setStep] = useState(1);

  const handleSteps = (increment: boolean) => {
    if (!increment && step > 1) {
      setStep(step - 1);
    }
    if (increment && step < 5) {
      setStep(step + 1);
    }
    if (increment && step > 5) {
      setStep(1);
    }
    if (!increment && step < 1) {
      setStep(5);
    }
  };

  return (
    <div className="relative">
      <div className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {step === 1 && (
          <div className="flex flex-col text-center">
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/src/assets/step1.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col text-center">
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/src/assets/step2.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col text-center">
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/src/assets/step3.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col text-center">
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/src/assets/step4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col text-center">
            <img
              className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="/src/assets/step5.webp"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            step === 1 ? "bg-slate-400" : "bg-slate-200"
          } `}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            step === 2 ? "bg-slate-400" : "bg-slate-200"
          } `}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            step === 3 ? "bg-slate-400" : "bg-slate-200"
          } `}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            step === 4 ? "bg-slate-400" : "bg-slate-200"
          } `}
        />
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            step === 5 ? "bg-slate-400" : "bg-slate-200"
          } `}
        />
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => handleSteps(false)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={() => handleSteps(true)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
