const options = { year: "numeric", month: "short", day: "numeric" };

export const formattedDate = date =>
  new Date(Date.parse(date)).toLocaleString("en", options);

// cohort card
const formattedStartDate = new Date(Date.parse(start_date));
const formattedEndDate = new Date(Date.parse(end_date));

const courseDays = Math.trunc(
  (Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24)
);
const daysLeft = Math.trunc(
  (Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24)
);

// cohort details
formattedStartDate = new Date(
  Date.parse(this.props.onFocusData.start_date)
).toLocaleString("en", this.options);
formattedEndDate = new Date(
  Date.parse(this.props.onFocusData.end_date)
).toLocaleString("en", this.options);

const formattedAssignmentDate = date =>
  new Date(Date.parse(date)).toLocaleString("en", this.options);
const formattedEventDate = date =>
  new Date(Date.parse(date)).toLocaleString("en", this.options);
const EventHour = event => new Date(Date.parse(event.time)).getHours();
const EventMinute = event => new Date(Date.parse(event.time)).getMinutes();

// student assignment

{
  new Date(Date.parse(this.props.submission.created_at)).toLocaleString(
    "en",
    this.options
  );
}
<div className="date">
  Due: {new Date(Date.parse(dueDate)).toLocaleString("en", this.options)}
</div>;

//student assignme tdetails
<div className="date">
  Due: {new Date(Date.parse(assignment.due_date)).toLocaleString("en", options)}
</div>;

// student cohort details
const formattedStartDate = new Date(Date.parse(start_date)).toLocaleString(
  "en",
  options
);
const formattedEndDate = new Date(Date.parse(end_date)).toLocaleString(
  "en",
  options
);
const courseDays = Math.trunc(
  (Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24)
);
const daysLeft = Math.trunc(
  (Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24)
);

// student event
<div className="date">
  {new Date(Date.parse(this.props.data.date)).toLocaleString(
    "en",
    this.options
  )}
</div>;

// student event details
const hour = new Date(Date.parse(this.props.event.time)).getHours();
const minute = new Date(Date.parse(this.props.event.time)).getMinutes();

// new Date(Date.parse(this.props.event.date)).toLocaleString('en', this.options)} @ {hour}:{minute}

// student submisison comments
{
  new Date(Date.parse(comment.created_at)).toLocaleString();
}

// submission details
// <div className="date">Submitted on {new Date(Date.parse(this.props.submission.created_at)).toLocaleString('en', this.options)}</div>
