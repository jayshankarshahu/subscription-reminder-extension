/**
 * Given totalSeconds from days , hours , minutes , seconds
 */
function timeToSeconds( days = 0 , hours = 0 , minutes = 0 , seconds = 0 ) {

    return Number(days)*24*3600 + Number(hours)*3600 + Number(minutes)*60 + Number(seconds);

}

/**
 * Returns an object with days , hours , minutes and seconds representation of given seconds 
 * ( Each value is unpadded )
 */
function secondsToTime( totalSeconds = 0 ) {

    let days = Math.floor(totalSeconds/24*3600);
    let hours = Math.floor( (totalSeconds - days*24*3600)/3600 );
    let minutes = Math.floor( ( totalSeconds - days*24*3600 - hours*3600 )/60 );
    let seconds = Math.floor( ( totalSeconds - totalSeconds - days*24*3600 - hours*3600 - minutes*60 ) );

    return {
        days , hours , minutes , seconds
    }

}