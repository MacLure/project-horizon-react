import React from "react";
import CohortProgressCircle from "./CohortProgressCircle";
import AdminStyles from "./../../Admin.css";
import { formattedDate } from "./../../utilities";

const CohortCard = props => {
  const { start_date, end_date, name, course_type, id } = props.data;
  const options = { year: "numeric", month: "short", day: "numeric" };

  const courseDays = Math.trunc(
    (Date.parse(end_date) - Date.parse(start_date)) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.trunc(
    (Date.parse(end_date) - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const daysLeftDisplay = () => {
    if (daysLeft > courseDays) {
      return `Starts ${formattedDate(props.data.start_date)}`;
    } else if (daysLeft <= 0) {
      return `Ended ${formattedDate(props.data.end_date)}`;
    } else if (daysLeft > 0) {
      return `${daysLeft} days left`;
    }
  };

  const courseProgress = () => {
    if (daysLeft <= 0) return 100;
    else if (daysLeft > courseDays) return 0;
    else if (daysLeft > 0) {
      return Math.round(100 - (daysLeft / courseDays) * 100);
    }
  };

  const getDescriptiveCourseType = cohortName => {
    if (cohortName === "wdi") {
      return "Web Development";
    } else if (cohortName === "uxdi") {
      return "UX Design";
    } else if (cohortName === "dsi") {
      return "Data Science";
    }
  };

  return (
    <div
      className="card"
      style={{
        transform: props.isActive ? "translateY(-10px)" : "",
        backgroundColor: props.isActive ? "#e6e6e6" : ""
      }}
      onClick={e => {
        props.onCohortClick(props.data);
      }}
    >
      <div className="cardGrid">
        <div className="cardGridLeft">
          <h3 className="courseType">
            {getDescriptiveCourseType(course_type)}
          </h3>
          <h3 className="cohortName">{name}</h3>
          <p className="daysLeft">{daysLeftDisplay()}</p>
        </div>
        <div className="progress">
          <CohortProgressCircle progress={courseProgress} />
        </div>
      </div>
    </div>
  );
};

export default CohortCard;
