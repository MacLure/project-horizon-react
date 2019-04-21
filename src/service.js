// const localURL = "http://localhost:3000";
const serverURL = "https://project-horizon-rails.herokuapp.com";

const rootURL = serverURL;

// LOGIN

export const onAdminLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/admin_token?${JSON.stringify({
        auth: { email: email, password: password }
      })}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ auth: { email: email, password: password } })
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const onStudentLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student/student_token`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json "
      },
      body: JSON.stringify({ auth: { email: email, password: password } })
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// DASHBOARD

export const getAdminDashboardData = token => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin?token=${token}`, { mode: "cors" })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const getStudentDashboardData = token => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student?token=${token}`, { mode: "cors" })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// COHORTS

export const createNewCohort = (data, token) => {
  return new Promise((resolve, reject) => {
    console.log(":::new Cohort::", `${rootURL}/admin/cohorts?cohort=${data}`);
    fetch(`${rootURL}/admin/cohorts?cohort=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteCohort = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/cohorts/${cohort_id}?${JSON.stringify({
        cohort_id: cohort_id
      })}`,
      {
        method: "delete",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        mode: "cors"
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// ASSIGNMENTS

export const createNewAssignment = (data, token) => {
  return new Promise((resolve, reject) => {
    console.log(
      ":::new Assignment::",
      `${rootURL}/admin/assignments?assignment=${data}`
    );
    fetch(`${rootURL}/admin/assignments?assignment=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteAssignment = (assignment_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/assignments/${assignment_id}?${JSON.stringify({
        assignment_id: assignment_id
      })}`,
      {
        method: "delete",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        mode: "cors"
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// STUDENTS

export const createNewStudent = (data, token) => {
  return new Promise((resolve, reject) => {
    console.log(
      ":::new Student::",
      `${rootURL}/admin/students?student=${data}`
    );
    fetch(`${rootURL}/admin/students?student=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteStudent = (student_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/students/${student_id}?${JSON.stringify(student_id)}`,
      {
        method: "delete",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        mode: "cors"
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// EVENTS

export const createNewEvent = (data, token) => {
  return new Promise((resolve, reject) => {
    console.log(":::new Assignment::", `${rootURL}/admin/events?event=${data}`);
    fetch(`${rootURL}/admin/events?event=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteEvent = (event_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/events/${event_id}?${JSON.stringify(event_id)}`, {
      method: "delete",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// SUBMISSIONS

export const createNewSubmission = (data, token) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/student/submissions?submission=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteSubmission = (submission_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/student/submissions/${submission_id}?${JSON.stringify({
        submission_id: submission_id
      })}`,
      {
        method: "delete",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        },
        mode: "cors"
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// SUBMISSION COMMENTS

export const createNewSubmissionComment = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/submission_comments?submission_comment=${JSON.stringify(
        data
      )}`,
      {
        method: "post",
        mode: "cors",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteSumissionComment = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/submission_comments/${JSON.stringify(cohort_id)}`, {
      method: "delete",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// EDIT FUNCTIONS

export const editCohort = (cohortId, data, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/cohorts/${cohortId}?cohort=${JSON.stringify(data)}`,
      {
        method: "put",
        mode: "cors",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const editAssignment = (assignmentId, data, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/admin/assignments/${assignmentId}?assignment=${JSON.stringify(
        data
      )}`,
      {
        method: "put",
        mode: "cors",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const editEvent = (eventId, data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/events/${eventId}?event=${JSON.stringify(data)}`, {
      method: "put",
      mode: "cors",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const editSubmission = (submissionId, data, token) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${rootURL}/student/submissions/${submissionId}?submission=${JSON.stringify(
        data
      )}`,
      {
        method: "put",
        mode: "cors",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }
    )
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

// STUDENT EMAIL (UNIMPLEMENTED)

export const sendStudentEmail = email => {
  return new Promise((resolve, reject) => {
    fetch(`https://project-horizon-rails.herokuapp.com/student/find_student`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json "
      },
      body: JSON.stringify({ auth: { email: email } })
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .then(e => console.log(e))
      .catch(e => console.log("ERR: ", e));
  });
};

// STUDENT NOTES (UNIMPLEMENTED)
export const createStudentNote = (data, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/student-note?note=${JSON.stringify(data)}`, {
      method: "post",
      mode: "cors"
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};

export const deleteStudentnote = (cohort_id, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${rootURL}/admin/student-note?note=${JSON.stringify(cohort_id)}`, {
      method: "delete",
      mode: "cors"
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(e => console.log("ERR: ", e));
  });
};
