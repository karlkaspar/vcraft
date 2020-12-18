import * as React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import User from "_domain/user";
var user: User;

type AppState = {
  showRegister: boolean,
  loggedIn: boolean,
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

export default class Home extends React.Component<{}, AppState> {
  // TMP
  public state: AppState = {
    showRegister: false,
    loggedIn: false,
    email: "string",
    firstName: "string",
    lastName: "string",
    password: "string"
  }

  constructor(props: any) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: Event) {
    console.log(event.target)
    event.preventDefault();
  }

  // WOULD HAPPILY DO DATA BINDING AUTOMATICALLY, JUST DONT KNOW HOW TO DO IT WITH REACT, I USE FormControl with Angular, which does this part for me
  handleEmailChange(event: { currentTarget: HTMLInputElement} ) {
    this.setState({ email: event.currentTarget.value });
  }

  handleFirstNameChange(event: { currentTarget: HTMLInputElement} ) {
    this.setState({ firstName: event.currentTarget.value });
  }

  handleLastNameChange(event: { currentTarget: HTMLInputElement} ) {
    this.setState({ lastName: event.currentTarget.value });
  }
  handlePasswordChange(event: { currentTarget: HTMLInputElement} ) {
    this.setState({ password: event.currentTarget.value });
  }


  handleToggleVisib = () => {
    this.setState({ showRegister: !this.state.showRegister }, () => {
      console.log('SHOW REGISTER AREA: ', this.state.showRegister);
    });
  }
  public render() {
    console.log('INITIAL STATE', this.state);

    return <div className="row mt-5">
      <div className="col-lg-12 text-center">
        {(!this.state.loggedIn && !this.state.showRegister) && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
          <React.Fragment>
            <h2>Choose your preferred action</h2>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-success">Login</button>
              <button className="btn btn-info ml-4" onClick={this.handleToggleVisib}>Register</button>
            </div>
          </React.Fragment>
        }
        {this.state.loggedIn && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
          <h2>Hello, {user.firstName + " " + user.lastName}</h2>
        }

        {this.state.showRegister && // IF USER NOT LOGGED IN, SHOW LOGIN & REGISTER OPTIONS
          <React.Fragment>
            <h2>Lets register</h2>
            <Form className="m-auto w-75" onSubmit={this.handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" onChange={this.handleFirstNameChange} />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" onChange={this.handleLastNameChange} />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Desired password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                <Form.Text className="text-muted">
                  We'll never ask for your password.
                  </Form.Text>
              </Form.Group>

              <Button variant="danger" type="button" onClick={this.handleToggleVisib}>
                Back
                </Button>
              <Button variant="primary" type="submit" className="ml-4">
                Submit
                </Button>
            </Form>
          </React.Fragment>
        }
      </div>
    </div>;
  };
}
