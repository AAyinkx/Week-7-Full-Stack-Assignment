export function dateISOtoLocal(date) {
  let newDate = "";
  newDate = `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.substring(0, 4)}`;

  return newDate;
}
