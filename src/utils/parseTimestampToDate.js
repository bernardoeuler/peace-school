export default function parseTimestampToDate(timestamp) {
  const date = new Date(timestamp)
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = date.getFullYear()
  const dateString = `${day}/${month}/${year}`
  return dateString
}