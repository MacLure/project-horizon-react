import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createNewSubmission } from "./../../../service";

const Container = styled.div`
  margin-top: 10px;
  width: 40vw;
  height: 300px;
  border-radius: 2px;
`;

const Title = styled.h2`
  padding: 20px 0px 15px 0px;
  background-color: inherit;
  text-align: center;
`;

const Form = styled.form`
  text-align: left;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3;
  padding-left: 100px;
`;

const Name = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  background-color: inherit;
`;

const Course = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  background-color: inherit;
`;
const StartDate = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  background-color: inherit;
`;

const EndDate = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: inherit;
`;

const Label = styled.label`
  display: block;
  padding: 15px 0;
  background-color: inherit;
  color: white;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px 5px;
  transition: border 0.5s;
  background-color: #e6e6e6;

  :focus {
    border: 1px solid #f6744e;
    transition: border 0.5s;
  }
`;

const Select = styled.select`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px 5px;
  transition: border 0.5s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: src={Arrow};

  :focus {
    border: 1px solid #F6744E;
    transition: border 0.5s;
  }
`;

const TextArea = styled.textarea`
  background-color: #e6e6e6;

  :placeholder {
    color: black;
  }
`;
const Button = styled.button`
  margin: 20px 0;
  cursor: pointer;
  padding: 5px 10px;
  background-color: #17b57e;
  border: none;
  transition: 0.3s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;
  grid-column-start: 1;
  grid-row-start: 3;

  :hover {
    box-shadow: 0 0 5px grey;
    transition: box-shadow 0.3s;
  }
`;

class NewSubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      body: "",
      assignment_id: this.props.assignment.id,
      student_id: this.props.student.id,
      is_approved: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    createNewSubmission(data, this.props.token)
      .then(e => e.json())
      .then(e => this.props.submissionSuccess());
  }

  render() {
    return (
      <div className="studentSubmissionContainer">
        <h2 className="sectionTitle">Your Submission</h2>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor="url">URL</Label>
            <input
              className="studentSubmissionURLInput"
              type="text"
              placeholder="www.mysubmission.com..."
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Label htmlFor="body">Body</Label>
            <TextArea
              type="text_area"
              rows="10"
              cols="40"
              name="body"
              placeholder={"Your body text here (if applicable)"}
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
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
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onTokenReceive: token =>
      dispatch({ type: "SET_USER_TOKEN", payload: token })
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(NewSubmissionForm);