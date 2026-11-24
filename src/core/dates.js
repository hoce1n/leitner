function pad2(input) {
    return String(input).padStart(2, "0")
}

export function toDateString(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${pad2(month)}-${pad2(day)}`
}


export function addDays(dateString, n) {
    const split = dateString.split("-");
    const mapped = split.map(item => Number(item));
    return toDateString(new Date(mapped[0], mapped[1] - 1, mapped[2] + n))
}

