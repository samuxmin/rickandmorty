export const handleDate = (date) => {
    const dateConverted = new Date(date);
    let dateParsed = `${dateConverted.getMonth()}-${dateConverted.getDate()}-${dateConverted.getFullYear()}`
    return dateParsed
}