import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { loginRequest } from '../redux/actions';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Row,
  Col,
  CardGroup,
  Card,
  CardBody,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

//eslint-disable-next-line
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onChange = (field) => (evt) => {
    this.setState({ [field]: evt.target.value });
  }

  onClick = () => {
    const { email, password } = this.state;
    this.props.loginRequest(email, password);
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon>
                        <i className="icon-user" />
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.onChange('email')} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon>
                        <i className="icon-lock" />
                      </InputGroupAddon>
                      <Input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.onChange('password')}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" onClick={this.onClick}>
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: `${44}%` }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        This feature has not been enabled till now. It will come
                        later in the futuer. If you need access please contact
                        admin.
                      </p>
                      <Button color="primary" className="mt-3" active>
                        Contact Now!
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = {
  loginRequest,
};
const mapStateToProps = createStructuredSelector({
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Login);
//export default Login;
