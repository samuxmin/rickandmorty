export const handleDate = (date) => {
  const dateConverted = new Date(date);
  let dateParsed = `${
    dateConverted.getMonth() + 1
  }-${dateConverted.getDate()}-${dateConverted.getFullYear()}`;
  return dateParsed;
};
