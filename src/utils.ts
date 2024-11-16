export function convertToDateTimeLocalFormat(dateString: string) {
    const regex = /(\w+) (\d+) at (\d+):(\d+)(am|pm)/i;
    const match = dateString.match(regex);

    if (!match) {
        throw new Error("日期格式不正确");
    }

    const [, monthStr, day, hour, minute, period] = match;

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const month = monthNames.indexOf(monthStr) + 1;

    const year = new Date().getFullYear();

    let hours24 = parseInt(hour, 10);
    if (period.toLowerCase() === "pm" && hours24 !== 12) {
        hours24 += 12;
    } else if (period.toLowerCase() === "am" && hours24 === 12) {
        hours24 = 0;
    }

    const monthPadded = String(month).padStart(2, '0');
    const dayPadded = String(day).padStart(2, '0');
    const hoursPadded = String(hours24).padStart(2, '0');
    const minutesPadded = String(minute).padStart(2, '0');

    return `${year}-${monthPadded}-${dayPadded}T${hoursPadded}:${minutesPadded}`;
}

export function convertToReadableDateTime(dateTimeString: string) {
    const date = new Date(dateTimeString);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const period = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;

    return `${month} ${day} at ${hours}:${minutes}${period}`;
}

