import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CohortCard from './CohortCard';
import CohortDetails from './CohortDetails';


class AdminDashboard extends Component {
  state = { 
    admins: [],
    cohorts: [],
    students: []
  }

    componentDidMount() {
    fetch('https://project-horizon-rails.herokuapp.com/admin')
      .then(response=>response.json())
      .then(response=> { this.setState({
        admins: response.admins,
        cohorts: response.cohorts,
        students: response.students,
      });
    })
    }

  render() { 
    const admins = this.state.admins
    return (
      <div>
        <p>Admin Dashboard</p>

        {this.state.cohorts.map(cohort => (
          <CohortCard key={cohort.id} data={cohort} />
        ))}

        <CohortDetails cohort={this.state.cohorts} students={this.state.students} admins={this.state.admins} />

        <Link to="/student">Student Dashboard</Link><br/>
        <Link to="/signup">Sign up</Link><br/>
        <Link to="/login">Log in</Link><br/>
      </div>
    );
  }
}
 
export default AdminDashboard;