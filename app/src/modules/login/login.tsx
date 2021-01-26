import *  as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { User} from '_domain/user';
import { Mutation } from 'react-apollo';
import { RouteComponentProps } from 'react-router-dom';

import { loginMutation } from '../../api/mutations';
import { render } from 'react-dom';


export default class Login extends React.PureComponent<RouteComponentProps<{}>> {
  // TODO: CHECK IF I CAN USE A INTERFACE HERE
  state = {
    user: {
      email: '',
      password: ''
    },
    loggedIn: false,
    loginError: false
  };

  // SET OUR STATE VALUES
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value} });
  };

  setUser = (userData: any)  => {
    if (userData) {
      this.setState({
        loggedIn: true,
        user: {
          ...this.state.user,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName
        }
      });
      return true;
    }
    return false;
  };

  showLoginError = () => {
    this.setState({
      ...this.state.user,
      loginError: true
    });
  };

  public render() {
    return (
      <Mutation<User> mutation={loginMutation}>
        {mutate => (
          <React.Fragment>
            <h2 className='mb-5'>Lets login {this.state.loggedIn}</h2>
            {!this.state.loggedIn &&
            <Form className='mx-auto my-w-75'>
              <div className='ml-3'>
                <Form.Group controlId='email'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' name='email' placeholder='Enter email' onChange={this.handleChange} />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId='password'>
                  <Form.Label>Desired password</Form.Label>
                  <Form.Control type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                  <Form.Text className='text-muted'>
                    We'll never ask for your password.
                  </Form.Text>
                </Form.Group>
              </div>
              {this.state.loginError &&
                <div className="text-danger">The username, or password is incorrect</div>
              }
              <div className='d-flex justify-content-center'>
                <Button variant='success' type='button' className='ml-4' onClick={
                  async ()=> {
                  try {
                    const response = await mutate({
                      variables: this.state.user
                    });
                    if (response && response.data['loginUser']) {
                      console.log(response)
                      // THIS IS WHERE I WOULD USE A SERVICE TO SET THE VALUES OF A GLOBAL USER OBJECT
                      // THEN EVERYWHERE WHERE THAT OBJECT IS SUBSCRIBED, WOULD UPDATE ACT ACCORDINGLY
                      this.setUser(response.data['loginUser'])
                    } else {
                      this.showLoginError();
                    }

                    console.log(response);
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                  Submit
                </Button>
              </div>
            </Form>
          }
          {this.state.loggedIn &&
            <div>You are logged in. Hip! Hip! Hooray!</div>
          }

          </React.Fragment>
        )}
      </Mutation>
    );
  };
};
