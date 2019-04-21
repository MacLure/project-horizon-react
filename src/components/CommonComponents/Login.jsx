import React, { Component } from "react";
import { connect } from "react-redux";
import { onAdminLogin } from ".././../service";
import { onStudentLogin } from ".././../service";
import CommonStyles from "./../../Common.css";
import Logo from "../../assets/img/horizon_text2.svg";
import loading from "../../assets/Icons/loading.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: "",
      password: "",
      loader: false,
      error: " "
    };
  }

  componentDidMount() {
    let body = document.getElementsByTagName("body")[0];
    body.style.paddingBottom = 0;
  }

  onStudent = () => {
    this.setState({ user: "student" });
  };

  onAdmin = () => {
    this.setState({ user: "admin" });
  };

  onSubmit = () => {
    if (this.state.user === "admin") {
      if (!this.state.email || !this.state.password) {
        this.setState({ error: "email or password missing" });
      }
      if (this.state.email !== "" && this.state.password !== "") {
        this.setState({ loader: true });
        this.setState({ error: " " });
        onAdminLogin(this.state.email, this.state.password)
          .then(e => e.json())
          .then(e => {
            this.props.onTokenReceive(e.jwt);
            this.props.history.push("/admin");
          })
          .catch(e => {
            console.log("ERR: ", e);
            this.setState({ loader: false });
            this.setState({ error: "email or password incorrect" });
          });
      }
    } else if (this.state.user === "student") {
      if (!this.state.email || !this.state.password) {
        this.setState({ error: "email or password missing" });
      }
      if (this.state.email !== "" && this.state.password !== "") {
        this.setState({ loader: true });
        this.setState({ error: null });
        onStudentLogin(this.state.email, this.state.password)
          .then(e => e.json())
          .then(e => {
            console.log(e);
            this.props.onTokenReceive(e.jwt);
            this.props.history.push("/student");
          })
          .catch(e => {
            console.log("ERR: ", e);
            this.setState({ loader: false });
            this.setState({ error: "email or password incorrect" });
          });
      }
    }
  };

  onGuestSubmit = () => {
    this.setState({ loader: true });
    this.setState({ error: null });
    if (this.state.user === "student") {
      onStudentLogin("guest.student@horizon.com", "password")
        .then(e => e.json())
        .then(e => {
          this.props.onTokenReceive(e.jwt);
          this.props.history.push("/student");
        })
        .catch(e => {
          console.log("ERR: ", e);
          this.setState({ loader: false });
          this.setState({ error: "Something went wrong. Please try again." });
        });
    }
    if (this.state.user === "admin") {
      onAdminLogin("guest.admin@horizon.com", "password")
        .then(e => e.json())
        .then(e => {
          this.props.onTokenReceive(e.jwt);
          this.props.history.push("/admin");
        })
        .catch(e => {
          console.log("ERR: ", e);
          this.setState({ loader: false });
          this.setState({ error: "Something went wrong. Please try again." });
        });
    }
  };

  displayForm = () => {
    return this.state.user === null ? null : (
      <form className="loginForm" method="post">
        <button
          className="guestLoginSubmitButton"
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.onGuestSubmit();
          }}
        >
          Log in as a guest {this.state.user}
        </button>
        <hr />
        <p className="guestOrLogin">or log in as a registered user:</p>
        <label className="loginLabel" htmlFor="email">
          Email
        </label>
        <input
          className="loginInput"
          placeholder="hello@horizon.com"
          type="text"
          name="email"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <label className="loginLabel" htmlFor="password">
          Password
        </label>
        <input
          className="loginInput"
          placeholder="password"
          type="password"
          name="password"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <div className="notice">
          {this.state.loader ? (
            <img className="loader" src={loading} alt="loading" />
          ) : null}
          {this.state.error ? this.state.error : null}
        </div>
        <button
          className="loginSubmitButton"
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          Log in{" "}
        </button>
      </form>
    );
  };

  highlightStudentButton = () => {
    return this.state.user === "student"
      ? { backgroundColor: "#fff", color: "#FC6404" }
      : {};
  };

  highlightAdminButton = () => {
    return this.state.user === "admin"
      ? { backgroundColor: "#fff", color: "#FC6404" }
      : {};
  };

  render() {
    return (
      <div className="landing">
        <div className="horizonContainer">
          <img className="horizon" src={Logo} alt="Horizon" />
        </div>
        <div className="loginContainer">
          <div className="buttonFlex">
            <button
              className="selectButton"
              style={this.highlightStudentButton()}
              onClick={this.onStudent}
            >
              Student
            </button>
            <button
              className="selectButton"
              style={this.highlightAdminButton()}
              onClick={this.onAdmin}
            >
              Admin
            </button>
          </div>
          {this.displayForm()}
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
)(Login);
