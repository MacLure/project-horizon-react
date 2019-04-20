const options = { year: "numeric", month: "short", day: "numeric" };

export const formattedDate = date =>
  new Date(Date.parse(date)).toLocaleString("en", options);

export const getHour = time => new Date(Date.parse(time)).getHours();
export const getMinute = time => new Date(Date.parse(time)).getMinutes();

// // student event
// <div className="date">
//   {new Date(Date.parse(this.props.data.date)).toLocaleString(
//     "en",
//     this.options
//   )}
// </div>;

// // student event details
// const hour = new Date(Date.parse(this.props.event.time)).getHours();
// const minute = new Date(Date.parse(this.props.event.time)).getMinutes();

// // new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)} @ {hour}:{minute}

// // student submisison comments
// {
//   new Date(Date.parse(comment.created_at)).toLocaleString();
// }

// // submission details
// // <div className="date">Submitted on {new Date(Date.parse(this.props.submission.created_at)).toLocaleString('en', this.options)}</div>
