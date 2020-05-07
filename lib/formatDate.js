import moment from "moment";

export default function formattedDate(date) {
  // if the record was released on Jan 1, it probably wasn't and only
  // the year was available.  So we return true and format just the year.
  if (moment(date).month() === 0 && moment(date).dayOfYear() === 1) {
    return moment(date).format("YYYY");
  }
  return moment(date).format("MMMM Do, YYYY");
}
