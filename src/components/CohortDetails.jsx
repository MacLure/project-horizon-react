import React, { Component } from 'react';
import styled from 'styled-components';
import NewStudentForm from './NewStudentForm'
import NewAdminForm from './NewAdminForm'
import NewEventForm from './NewEventForm'
import NewAssignmentForm from './NewAssignmentForm'
import AdminEventsList from './AdminEventsList'
import { connect } from 'react-redux';
import  {deleteCohort} from './../service';

const CohortCard = styled.div`
  background-color: #2A2C33;
  margin: 20px 40px;
  width: 85vw;
  border-radius: 2px;
  padding: 10px 0px;
`
const Grid = styled.div`
  text-align: left;
  margin: 0 auto;
  padding-left: 80px;
  background-color: inherit;
  grid-column-start: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Title = styled.h2 `
  padding-top: 20px;
  padding-bottom: 5px;
  background-color: inherit;
  text-align: center;
`
const Hr = styled.div`
  border-bottom: 2px solid #FC6404;
  border-radius: 5px;
`
const Dates = styled.p`
  padding-top: 10px;
  text-align: center;
  color: gray;
  font-size: 14px;
`
const Students = styled.div`
  grid-column-start: 1;
  background-color: inherit;
`

const Admin = styled.div`
  text-align: left;
  background-color: inherit;
  grid-column-start: 2;
`
const Assignments = styled.div`
  grid-column-start: 3;
  background-color: inherit;
`
const Events = styled.div`
  grid-column-start: 4;
  background-color: inherit;
`

const Text = styled.p`
  background-color: inherit;
  text-align: left;
  margin: 20px auto;
  font-weight: bold;
`

const List = styled.ul`
  background-color: inherit;
  text-align: left;
`

const ListItem = styled.li`
  background-color: inherit;
  margin: 20px auto;
  text-align: left;
`

const Button = styled.button`
  margin: 20px auto;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #2C65F9;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;

  :hover {
    opacity: 0.5;
    transition: opacity 0.5;
`

const DeleteButton = styled.button`
  margin: 40px auto 20px 80px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #D1142C;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;

  :hover {
    opacity: 0.5;
    transition: opacity 0.5;
`



class CohortDetails extends Component {
  constructor(props) {
    super(props)

  this.state ={
    showNewStudentForm: false,
    showNewAdminForm: false,
    showNewEventForm: false,
    showNewAssignmentForm: false,
  }

  this.handleShowNewStudentForm = this.handleShowNewStudentForm.bind(this);
  this.handleshowNewAdminForm = this.handleshowNewAdminForm.bind(this);
  this.handleshowNewEventForm = this.handleshowNewEventForm.bind(this);
  this.handleshowNewAssignmentForm = this.handleshowNewAssignmentForm.bind(this);
  this.handleDelete = this.handleDelete.bind(this);

}

//  if(props.onFocusData != null){
//   const {start_date, end_date, name, course_type} = props.onFocusData;
//  }

  students = this.props.students
  cStudents = 'Loading...';
  cEvents = 'Loading...';

  handleShowNewStudentForm = () =>{
    this.setState({showNewStudentForm: !this.state.showNewStudentForm})
  }

  handleshowNewAdminForm = () =>{
    this.setState({showNewAdminForm: !this.state.showNewAdminForm})
  }

  handleshowNewEventForm = () =>{
    this.setState({showNewEventForm: !this.state.showNewEventForm})
  }

  handleshowNewAssignmentForm = () =>{
    this.setState({showNewAssignmentForm: !this.state.showNewAssignmentForm})
  }

  handleDelete = (e) => {
    e.preventDefault();
    let cohortId = this.props.onFocusData.id
    deleteCohort(cohortId, this.props.token)
    .then(e=>this.props.deleteSuccess())

  }


  render() {

    const showNewStudentForm = () => {
      if (this.state.showNewStudentForm ) {
        return (
          <NewStudentForm />
        )
      }
    }

    const handleshowNewAdminForm = () => {
      if (this.state.showNewAdminForm ) {
        return (
          <NewAdminForm />
        )
      }
    }

    const handleshowNewEventForm = () => {
      if (this.state.showNewEventForm ) {
        return (
          <NewEventForm />
        )
      }
    }

    const handleshowNewAssignmentForm = () => {
      if (this.state.showNewAssignmentForm ) {
        return (
          <NewAssignmentForm />
        )
      }
    }

  if(this.props.cohortStudents){
    this.cStudents = this.props.cohortStudents.map(student => (
      <ListItem key={student.id}>{student.first_name} {student.last_name}</ListItem>
    ))
  }

  if(this.props.cohortEvents){
    this.cEvents = this.props.cohortEvents.map(event => (
      <ListItem key={event.id}>{event.name}</ListItem>
    ))
  }

  if(this.props.cohortAssignments){
    this.cAssignments = this.props.cohortAssignments.map(assignment => (
      <ListItem key={assignment.id}>{assignment.name}</ListItem>
    ))
  }

// rename CohortCard here (but not the actual component)
  return (
    <React.Fragment>
      <CohortCard>
        <Title>{this.props.onFocusData!=null?this.props.onFocusData.name:null}</Title>
        <Dates>{this.props.onFocusData!=null?this.props.onFocusData.start_date:null} - {this.props.onFocusData!=null?this.props.onFocusData.end_date:null}</Dates><br/>
        <Hr></Hr>
        <Grid>
          <Students>
            <Text>Students:</Text>
            <List>
              {this.cStudents}
            </List>
            <Button onClick={e=>{this.handleShowNewStudentForm(e)}} >new student</Button>
            {showNewStudentForm()}
          </Students>
          <Admin>
            <Text>Staff:</Text>
            <List>
              <ListItem>Natalie</ListItem>
              <ListItem>Daniel</ListItem>
              <ListItem>Fred</ListItem>
              <ListItem>Saree</ListItem>
              <ListItem>Elvis</ListItem>
            </List>
            <Button onClick={e=>{this.handleshowNewAdminForm(e)}} >new admin</Button>
            {handleshowNewEventForm()}
          </Admin>
          <Assignments>
            <Text>Assignments:</Text>
            <List>
              {this.cAssignments}
            </List>
            <Button onClick={e=>{this.handleshowNewAssignmentForm(e)}} >new assignment</Button>
            {handleshowNewAssignmentForm()}
          </Assignments>
          <Events>
            <Text>Events:</Text>
            <List>
              {this.cEvents}
              <AdminEventsList />
            </List>
            <Button onClick={e=>{this.handleshowNewEventForm(e)}} >new event</Button>
            {handleshowNewEventForm()}
          </Events>
        </Grid>
        <DeleteButton onClick={e=>{this.handleDelete(e)}} >Delete Cohort</DeleteButton>
      </CohortCard>
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
)(CohortDetails);
