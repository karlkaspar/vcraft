import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { User} from '_domain/user';
import * as React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";

import { loginMutation } from '../../api/mutations';

export default class Login extends React.PureComponent<RouteComponentProps<{}>> {
  state = {
    user: {
      email: '',
      password: ''
    },
    loggedIn: false,
  };

  // SET OUR STATE VALUES
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value} });
  };

  public render() {
    return (
      <Mutation<User> mutation={loginMutation}>
        {mutate => (
          <React.Fragment>
            <h2 className="mb-5">Lets login</h2>
            <Form className="mx-auto my-w-75">
              <div className="ml-3">
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Desired password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                  <Form.Text className="text-muted">
                    We'll never ask for your password.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="success" type="button" className="ml-4" onClick={async ()=> {
                  try {
                    const response = await mutate({
                      variables: this.state.user
                    });
                    this.props.history.push("/login");
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                  Submit
                </Button>
              </div>
            </Form>
          </React.Fragment>
        )}
      </Mutation>
    );
  };
}
