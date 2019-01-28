import React, { Component } from 'react';
import styled from 'styled-components';
import NewStudentForm from './NewStudentForm'

const CohortCard = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  border-radius: 2px;
  padding: 10px 0px;
  grid-column-start: 2;
  grid-row-start: 1;
`
const Grid = styled.div`
  text-align: left;
  margin: 0 auto;
  padding-left: 80px;
  background-color: inherit;
  grid-column-start: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Title = styled.h2 `
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: inherit;
  text-align: center;
`
const Hr = styled.div`
  border-bottom: 2px solid #DD3D0F;
  border-radius: 5px;
`
const Dates = styled.p`
  padding-top: 20px;
  text-align: center;
`
const Staff = styled.div`
  text-align: left;
  background-color: inherit;
  grid-column-start: 2;
`

const Students = styled.div`
  grid-column-start: 1;
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
  background-color: #DD3D0F;
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
    
  }
  
  this.handleShowNewStudentForm = this.handleShowNewStudentForm.bind(this);

}

//  if(props.onFocusData != null){
//   const {start_date, end_date, name, course_type} = props.onFocusData;
//  }

  students = this.props.students
  cStudents = 'Loading...';
  
  handleShowNewStudentForm = () =>{
    this.setState({showNewStudentForm: !this.state.showNewStudentForm})
  }



  render() {

    const studentAdminLogin = () => {
      if (this.state.showNewStudentForm ) {
        return (
          <NewStudentForm />
        )
      }
    }

  if(this.props.cohortStudents){
    this.cStudents = this.props.cohortStudents.map(student => (
      <ListItem key={student.id}>{student.first_name} {student.last_name}</ListItem>
    ))
  }


  return (
    <React.Fragment>
      <CohortCard>
        <Title>{this.props.onFocusData!=null?this.props.onFocusData.name:null}</Title>
        <Hr></Hr>
        <Dates>{this.props.onFocusData!=null?this.props.onFocusData.start_date:null} - {this.props.onFocusData!=null?this.props.onFocusData.end_date:null}</Dates><br/>
        <Grid>
          <Students>
            <Text>Students:</Text>
            <List>
              {this.cStudents}
            </List>
            <Button onClick={e=>{this.handleShowNewStudentForm(e)}} >new student</Button>
          </Students>
          <Staff>
            <Text>Staff:</Text>
            <List>
              <ListItem>Hello</ListItem>
              <ListItem>World</ListItem>
              <ListItem>Bruh</ListItem>
            </List>
            <Button>add staff</Button>
          </Staff>
        </Grid>
        {studentAdminLogin()}
      </CohortCard>
  </React.Fragment>
  );
  }
}

export default CohortDetails;
