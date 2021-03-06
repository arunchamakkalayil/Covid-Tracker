import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";
import Axios from "axios";

class India extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    Axios.get("https://corona.lmao.ninja/v2/countries/india").then(
      (response) => {
        this.setState({ data: response.data });
      }
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 ">
          <br />
          <div className="d-flex justify-content-center">
            <img src="   https://flagcdn.com/w80/in.png" />
          </div>
          <div className="d-flex justify-content-center">
            <h3>INDIA</h3>
          </div>
        </div>
        <div style={{ justifyContent: "around" }} className="col-md-12">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
              <Card className="badge badge-primary" style={{ width: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
              <Card className="badge badge-success" style={{ width: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
              <Card className="badge badge-warning" style={{ width: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center">
              <Card className="badge badge-danger" style={{ width: "15rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>DEATHS</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Statedata />
        </div>
      </div>
    );
  }
}

export default India;
