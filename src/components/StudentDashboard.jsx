import React, { Component } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import styled from 'styled-components';
import JobFeed from './JobFeed'
import { connect } from 'react-redux';
import  {getStudentDashboardData} from './../service';



const Title = styled.h1`
  text-align: center;
  margin-left: 140px;
`

class StudentDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }

  }


  render() {

    if(this.props.token != null){
      getStudentDashboardData(this.props.token)
      .then(response=>response.json())
      .then(response=> {this.setState({
          key: response.value,
        });
      })
    }else{
      this.props.history.push('/')
    }



    return (
      <React.Fragment>
          <NavBar/>
          <Title>Student Dashboard</Title>
          <div style={{textAlign: 'center'}}>ASSIGNMENTS LIST</div>
          <div style={{textAlign: 'center'}}>EVENTS LIST</div>
          <div style={{textAlign: 'center'}}>(stretch: job feed)</div>
          <div style={{textAlign: 'center'}}>(stretch: article feed)</div>
          <JobFeed />
          <Footer/>
      </React.Fragment>
    );
  }
}


const mapStatetoProps = state => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    currentUser: state.currentUser,
    errors: state.errors
  }
}

const mapDispatchtoProps = dispatch => {
  return  {
    onTokenReceive: token => dispatch({ type: "SET_USER_TOKEN", payload: token})
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(StudentDashboard);
