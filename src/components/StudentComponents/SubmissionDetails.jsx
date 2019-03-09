import React, { Component } from 'react';
import SubmissionComment from './../CommonComponents/SubmissionComment'
import StudentStyles from './../../Student.css'
import { connect } from 'react-redux';
import  {deleteSubmission} from '.././../service';
import  {editSubmission} from '.././../service';
import edit from '../../assets/Icons/edit.svg';
import trash from '../../assets/Icons/trash.svg';


class SubmissionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      submission: this.props.submission,
      assignment: this.props.assignment,
      comments: this.props.submissionComments,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.EditButtonClass = this.EditButtonClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.submission
    let submissionId = this.state.submission.id
    editSubmission(submissionId, data, this.props.token)
    .then(e=>e.json())
    .then(e=>this.props.submissionSuccess())
    .then(this.toggleEdit())
  }

  toggleEdit = () => {
    this.setState( this.state.editing ? {editing:false} : {editing:true} )
  }

  EditButtonClass = () => this.state.editing ? "cencel" : "editSubmissionButton";

  handleDelete = (e) => {
    e.preventDefault();
    let submissionId = this.state.submission.id
    deleteSubmission(submissionId, this.props.token)
    .then(e=>this.props.deleteSuccess())
  }

  options = {year: 'numeric', month: 'short', day: 'numeric' };

  detailsOrForm = () => {
    return !this.state.editing ?
      <div>
        <div className="date">Submitted on {new Date(Date.parse(this.props.submission.created_at)).toLocaleString('en', this.options)}</div>
        <div><a href={this.state.submission.url}>{this.props.submission.url}</a></div>
        <div class="submissionBody">{this.props.submission.body}</div>
      </div>
      :
      <form onSubmit={this.handleSubmit}>
        <div className="one">
          <label htmlFor="url">URL</label>
          <input type="text" name="url" value={this.props.submission.url} onChange={this.handleChange} ></input>
        </div>
        <div className="two">
          <label htmlFor="body">Body</label>
          <textArea name="date" value={this.props.submission.body} onChange={this.handleChange} ></textArea>
        </div>
        <button className="submitEditButton" type="submit">Submit</button>
        <button className="cancelButton" type="submit">Cancel</button>

      </form>
  }

  render() {
    const submissionComments = [].concat.apply([], this.props.submissionComments);
    return (
      <React.Fragment>
      <div class="submission">
        <h2 className="sectionTitle">{!this.state.editing ? "Your Submission" : "Edit Submission"}</h2>
        <div className="editSubmissionButton" onClick={e=>{this.toggleEdit()}} ><img className="editIcon" src={edit}/></div>
        <div className="deleteSubmissionButton" ><img className="deleteIcon" src={trash}/></div>
      </div>
        {this.detailsOrForm()}

        {submissionComments.map(comment => (
          <SubmissionComment
            key = {comment.id}
            admin = {comment.admin_id}
            date = {comment.created_ad}
            body = {comment.body}
          />
        ))}
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
)(SubmissionDetails);
