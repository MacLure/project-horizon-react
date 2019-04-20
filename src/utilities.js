const options = { year: "numeric", month: "short", day: "numeric" };

export const formattedDate = date =>
  new Date(Date.parse(date)).toLocaleString("en", options);

export const getHour = time => new Date(Date.parse(time)).getHours();
export const getMinute = time => new Date(Date.parse(time)).getMinutes();
