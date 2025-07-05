import { useState } from "react";

function TimerInput({ days = 0, hours = 0, minutes = 0, seconds = 0 }) {

    let daysPadded = String(days).padStart(2, '0');
    let hoursPadded = String(hours).padStart(2, '0');
    let minutesPadded = String(minutes).padStart(2, '0');
    let secondsPadded = String(seconds).padStart(2, '0');

    return (

        <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
            <div className="timer">
                <div className="rounded-xl border border-gray-50 py-1.5 flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
                    <input type="text" pattern="\d*" inputMode="numberic" className="bg-gray-50 border max-w-[50px] text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD" required defaultValue={daysPadded} />
                    <p className="text-sm font-inter capitalize font-normal text-gray-600 text-center w-full">days</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <div className="rounded-xl border border-gray-50 py-1.5 flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
                    <input type="text" pattern="\d*" inputMode="numberic" className="bg-gray-50 border max-w-[50px] text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HH" required defaultValue={hoursPadded} />
                    <p className="text-sm font-inter capitalize font-normal text-gray-600 text-center w-full">Hour</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <div className="rounded-xl border border-gray-50 py-1.5 flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
                    <input type="text" pattern="\d*" inputMode="numberic" className="bg-gray-50 border max-w-[50px] text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MM" required defaultValue={minutesPadded} />
                    <p className="text-sm font-inter capitalize font-normal text-gray-600 text-center w-full">Minutes</p>
                </div>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <div className="rounded-xl border border-gray-50 py-1.5 flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
                    <input type="text" pattern="[0-9]+" inputMode="numberic" className="bg-gray-50 border max-w-[50px] text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SS" required defaultValue={secondsPadded} />
                    <p className="text-sm font-inter capitalize font-normal text-gray-600 text-center w-full">Seconds</p>
                </div>
            </div>
        </div>
    );

}

export { TimerInput };