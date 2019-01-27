import React from 'react';
import styled from 'styled-components';

const CohortCard = styled.div`
  background-color: #2A2C33;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  border-radius: 2px;
  padding: 10px 0px;
  grid-column-start: 1;
  grid-row-start: 5;
`
const InnerDiv = styled.div`
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
  padding-bottom: 15px;
  background-color: inherit;
  text-align: left;
`

const Staff = styled.div`
  grid-column-start: 1;
  background-color: inherit;
`

const Students = styled.div`
  grid-column-start: 2;
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
  margin: 20px auto;
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

const CohortDetails = (props) => {

 const {start_date, end_date, name, course_type} = props.cohort
 const admins = props.admins
 const students = props.students

 return (
   <React.Fragment>
    <CohortCard>
      <InnerDiv>
        <Title>Cohort Details</Title>
        <Text>NOT COHORT CARD</Text>
        <Staff>
          <Text>Staff:</Text>
          <List>
            {admins.map(admin => (
            <ListItem key={admin.id}>{admin.first_name} {admin.last_name}</ListItem>
            ))}
          </List>
          <Button>add staff</Button> <br />
        </Staff>
        <Students>
          <Text>Students:</Text>
            <List>
              {students.map(student => (
              <ListItem key={student.id}>{student.first_name} {student.last_name}</ListItem>
            ))}
          </List>
          <Button>add student</Button>
        </Students>
      </InnerDiv>
    </CohortCard>
 </React.Fragment>
 );
}

export default CohortDetails;
