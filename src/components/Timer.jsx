function TimerInput({ days = 0, hours = 0, minutes = 0, seconds = 0 , onchange = () => {}}) {

    return (

        <div className="flex items-center justify-center w-full gap-1.5 count-down-main">
            <div className="timer">
                <NumberInput defaultValue={days} label="Days" placeholder="00" onchange={onchange}/>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <NumberInput defaultValue={hours} label="Hours" placeholder="00" maxValue="23" onchange={onchange}/>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <NumberInput defaultValue={minutes} label="Minutes" placeholder="00" maxValue="59" onchange={onchange}/>
            </div>
            <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
            <div className="timer">
                <NumberInput defaultValue={seconds} label="Seconds" placeholder="00" maxValue="59" oonchange={onchange}nchange/>
            </div>
        </div>

    );

}

function NumberInput({ maxValue, defaultValue = 0, paddedLength = 2, label = "", placeholder = "" , onchange = () => {}}) {

    let valuePadded = String(defaultValue).padStart(paddedLength, '0');

    return (
        <div className="rounded-xl border border-gray-50 py-1.5 flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
            <input type="number" inputMode="numberic" min={0} className="hide-arrow bg-gray-50 border max-w-[50px] text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
                defaultValue={valuePadded}
                max={maxValue || 9999}
                onChange={onchange}
            />
            <p className="text-sm font-inter capitalize font-normal text-gray-600 text-center w-full">{label}</p>
        </div>
    );

}

export { TimerInput };