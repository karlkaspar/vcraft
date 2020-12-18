import * as React from "react";
import User from "_domain/user";
var user: User;

type AppState = {
  showRegister: boolean,
  loggedIn: boolean,
  user: User
}

export default class Home extends React.Component<{}, AppState> {
  // TMP
  public state: AppState = {
    showRegister: false,
    loggedIn: false,
    user: this.confirmUser()
  }
  constructor(props: any) {
    super(props);
  }

  // THIS IS SUPPOSED TO CONFIRM IF USER IS LOGGED IN
  confirmUser() {
    return {
      email: "string",
      firstName: "string",
      lastName: "string",
      password: "string"
    }
  }
  handleToggleVisib = () => {
    this.setState({showRegister: !this.state.showRegister}, () => {
      console.log('SHOW REGISTER AREA: ', this.state.showRegister);
    });
  }

  public render() {
  console.log('INITIAL STATE', this.state);

    var showRegister: boolean;
      return <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Vcraft</h1>
            { !this.state.loggedIn && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
              <React.Fragment>
                <p className="lead">Valige sobiv toiming!</p>
                <div className="d-flex justify-content-center" >
                  <button className="btn btn-success">Login</button>
                  <button className="btn btn-info ml-2" onClick={this.handleToggleVisib}>Register</button>
                </div>
            </React.Fragment>
          }
          { this.state.loggedIn && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
            <h2>Hello, {user.firstName + " " + user.lastName}</h2>
          }

          { this.state.showRegister && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
            <h2>Lets register</h2>
          }
          </div>
        </div>;

    };
  }
