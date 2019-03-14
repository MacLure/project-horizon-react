import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {createNewSubmissionComment} from '../service';
import AdminStyles from './../../Admin.css';
import X from '../../assets/Icons/x.svg';

class NewSubmissionCommentForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    body: '',
    admin_id: '',
    submission_id: '',
   }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
  event.preventDefault();
    let data = this.state
    createNewSubmissionComment(data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.cohortSuccess())
  }


  render() {
    return (
      <div className="modal">
      <div className="modalContainer">
      <div className="modalEscape"><img className="escapeIcon" src={X} alt="exit" /></div>
        <h2 className="formTitle">New Submission Cmment</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="one">
            <label htmlFor="title">Title</label>
            <input type="text" name="title"></input>
          </div>
          <div className="textarea">
            <label htmlFor="body">Comment</label>
            <textarea rows="7" cols="30" name="body" placeholder="body" value={this.state.body} onChange={this.handleChange}></textarea>
            <br/>
            <button className="submitButton" type="submit">Submit</button>
          </div>
      </form>
    </div>
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
)(NewSubmissionCommentForm);
