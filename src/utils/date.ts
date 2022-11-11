// export const getFormattedDate = (date: Date) => {
//   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
// }

export const getDateMinueDays = (date: Date, days: number) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
