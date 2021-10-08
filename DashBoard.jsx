import React, { Component } from "react";
import ParentDashboard from "./ParentDashboard";
import PersonalityTest from "./PersonalityTest";
import SchoolDashboard from "./SchoolDashboard";
import MentorDashboard from "./MentorDashboard";
import ActivistDashboard from "./ActivistDashboard";

class DashBoard extends Component {
  state = { details: this.props.details, user: this.props.user };

  testDone = () => {
    this.setState((prevState) => ({
      details: { ...prevState.details, test: true },
    }));
  };

  render() {
    if (
      this.state.details.type === "parent" &&
      this.state.details.test !== true
    ) {
      return (
        <div>
          <PersonalityTest uid={this.state.user.uid} testDone={this.testDone} />
        </div>
      );
    } else {
      switch (this.state.details.type) {
        case "parent":
          return (
            <ParentDashboard data={this.state.details} user={this.state.user} />
          );
        case "counselor":
          return (
            <MentorDashboard data={this.state.details} user={this.state.user} />
          );
        case "Activists":
          return (
            <ActivistDashboard
              data={this.state.details}
              user={this.state.user}
            />
          );

        case "school":
          return (
            <SchoolDashboard data={this.state.details} user={this.state.user} />
          );

        case "mentors":
          return (
            <MentorDashboard data={this.state.details} user={this.state.user} />
          );

        default:
          return <h1>Unknown User</h1>;
      }
    }
  }
}

export default DashBoard;
