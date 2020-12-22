import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

export default class Home extends React.PureComponent<RouteComponentProps<{}>> {
  state = {
    user: {
      firstName: '',
      lastName: ''
    },
    loggedIn: false
  };
  public render() {
    return (
      <React.Fragment>

        {this.state.loggedIn &&
          <h2 className="mb-5">Hello, {this.state.user.firstName + " " + this.state.user.lastName}</h2>
        }

        {(!this.state.loggedIn) &&
          <React.Fragment>
            <h2 className="mb-5">Home</h2>
            <h3 className="w-100 text-center">Choose your preferred action</h3>
            <div className="d-flex justify-content-center mt-4">
            <Link to="/login">
              <button className="btn btn-success">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-info ml-4">
                Register
              </button>
            </Link>
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    );
  };
}
