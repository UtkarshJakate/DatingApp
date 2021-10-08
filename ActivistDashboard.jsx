import React, { Component } from "react";
import "../css/dash.css";
import { Link } from "react-router-dom";
import Fire from "../config/Fire";

export class ActivistDashboard extends Component {
  state = {
    details: this.props.data,
    user: this.props.user,
  };

  Signout = () => {
    Fire.SignoutUser();
  };

  render() {
    return (
      <div>
        <div className="whole">
          <nav class="navbar navbar-dark bg-dark" style={{ height: "60px" }}>
            <button
             className="textbutton hover_btn"
             style={{ color: "#ffffff" }}
              onClick={this.Signout}
            >
              LogOut
            </button>
          </nav>
          <div class="dashboard-header">
            <nav
              class="navbar navbar-expand-lg "
              style={{ backgroundColor: "#008080" }}
            >
                <img
              src="/image/trans_logo.png"
              width="200px"
              height="80rem"
              alt="logo"
            />
              <ul class="navbar-nav ml-auto navbar-right-top">
                <div class="nav-item" id="custom-search" class="top-search-bar">
                  <input
                    class="form-control mr-5"
                    type="text"
                    placeholder="Search.."
                  />{" "}
                </div>
              </ul>
            </nav>
          </div>
          <div className="container">
            <h3 classNamess="h3">Activity providers Dashboard</h3>
            <div class="row">
              <div class="col-md-6 col-xm-12 col-lg-6 mx-auto">
                <div class="card text-center" style={{ width: "16rem" }}>
                  <div class="card-block">
                    <img
                      class="card-img-top rounded mx-auto d-block"
                      src="/image/Profile.jpg"
                      alt="Card cap"
                      style={{ border: "solid" }}
                    />
                    Pune
                  </div>
                </div>
                <br />
              </div>
              <div class="col-md-6 col-xm-12 col-lg-6  mx-auto">
                <div class="card" style={{ width: "14rem" }}>
                  <div class="card-block">
                    <img
                      class="card-img-top rounded mx-auto d-block"
                      src="/image/Activity.jpg"
                      alt="Card cap"
                      style={{ border: "solid" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#ddf5f5" }}>
            <div class="row" style={{ padding: "2%", marginLeft: "15%" }}>
              <div>
                <img
                  className="navigationImage"
                  src="/image/Calculator.jpg"
                  alt="calculator"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                />
              </div>
              <div>
                <img
                  className="navigationImage"
                  src="/image/Book.jpg"
                  alt="books"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                />
              </div>
              <div>
                <img
                  className="navigationImage"
                  src="/image/painting.jpg"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                  alt="painting"
                />
              </div>
              <div>
                <img
                  className="navigationImage"
                  src="/image/setting.jpg"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                  alt="navigation"
                />
              </div>
              <div>
                <img
                  className="navigationImage"
                  src="/image/star.jpg"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                  alt="navigation"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-md-6 col-xm-12 col-lg-6 mx-auto">
                <div
                  class="card text-center"
                  style={{ width: "18rem", border: "solid" }}
                >
                  <div class="card-body" style={{ backgroundColor: "#fff9eb" }}>
                    <h5 class="card-title h5">View All the Activities</h5>

                    <Link
                      class="btn"
                      style={{ background: "#e67e22" }}
                      to={{
                        pathname: "/list-all-activities",
                        userID: this.state.user.uid,
                      }}
                    >
                      See here
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xm-12 col-lg-6 mx-auto">
                <div
                  class="card text-center"
                  style={{ width: "18rem", border: "solid" }}
                >
                  <div class="card-body" style={{ backgroundColor: "#fff9eb" }}>
                    <h5 class="card-title h5">All Tests Created</h5>
                    <Link
                      className="btn btn-sm"
                      style={{ background: "#e67e22" }}
                      to={{
                        pathname: "/AllmyTests",
                        userID: this.state.user.uid,
                      }}
                    >
                      See here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="image/Karate2.jpeg"
                    class="card-img-top"
                    alt="karate"
                  />
                  <div class="card-body ">
                    <h5
                      className="card-title-center h5"
                      style={{ marginTop: "10%" }}
                    >
                      Karate
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="/image/constructing.jpg"
                    class="card-img-top"
                    alt=""
                  />
                  <div class="card-body ">
                    <h5 className="card-title-center h5">Construction</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card text-center" style={{ width: "18rem" }}>
                  <img src="/image/Compaign.jpg" class="card-img-top" alt="" />
                  <div class="card-body ">
                    <h5 className="card-title-center h5">Camping</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              className="col-8 mx-auto dop"
              style={{ marginTop: "5%", border: "solid grey" }}
            >
              <div
                className=" text-center p-2"
                style={{ marginTop: "2%", marginBottom: "2%" }}
              >
                <h5 className="h5 text-white">
                  Add New Activity
                  <Link
                    class="btn btn-sm text-white ml-5"
                    style={{ background: "#e67e22", width: "150px" }}
                    to={{
                      pathname: "/AddActivity",
                      userID: this.state.user.uid,
                    }}
                  >
                    Click here
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div class="container" style={{ marginTop: "5%" }}>
            <div class="card-group ">
              <div class="row">
                <div class="card col-md-4">
                  <img
                    class="card-img-top img pop"
                    src="/image/books.jpg"
                    alt="books"
                    style={{ height: "200px" }}
                  />
                </div>
                <div class="card col-md-4">
                  <img
                    class="card-img-top"
                    src="/image/rocket.jpg"
                    alt="rocket"
                  />
                </div>

                <div class="card col-md-4">
                  <img
                    class="card-img-top"
                    src="/image/people.jpg"
                    alt="people"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center m-4">
            <h2>Analytics</h2>
          </div>
          <div class="row dop text-center ">
            <div class="col-6" style={{ marginTop: "2%", marginBottom: "2%" }}>
              <h1 className="h6 text-white" style={{ fontSize: "20px" }}>
                Contact History
              </h1>
              <button
                type="button"
                class="btn btn-sm text-white"
                style={{ background: "#e67e22" }}
              >
                Click here
              </button>
            </div>
            <div class="col-6" style={{ marginTop: "2%", marginBottom: "2%" }}>
              <h1 className="h6 text-white" style={{ fontSize: "20px" }}>
                Review
              </h1>
              <button
                type="button"
                class="btn btn-sm text-white"
                style={{ background: "#e67e22" }}
              >
                Click here
              </button>
            </div>
          </div>
          <div className="box small" style={{ width: "100%", height: "18rem" }}>
            <img
              src="/image/kids.jpg"
              alt="Cloudy Sky"
              width="100%"
              height="100%"
            />
          </div>
          <section id="footer">
            <div class="container">
              <div class="col" style={{ textAlign: "left" }}>
                <h5 className="h5">About</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="/help">
                      <i class="fa fa-angle-double-right"></i>Help
                    </a>
                  </li>
                  <li>
                    <a href="/tour">
                      <i class="fa fa-angle-double-right"></i>Quick Tour
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us">
                      <i class="fa fa-angle-double-right"></i>Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <hr />
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p className="p text-white">
                  kidsfuture © All rights Reserved.
                </p>
                <p className="p text-white">
                  <a href="/terms">
                    Terms of use | Privacy | Threadmarks and Copyright |
                    Accessibility | Sidemap{" "}
                  </a>
                </p>
              </div>
              <hr />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ActivistDashboard;
