export function renderDate(publishedDate: Date) {
  let date = new Date(publishedDate);
  return `${date.toISOString().split('T')[0]}`;
}
