import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewUserAsync, googleLoginAsync, loginUserAsync } from "../../service/action/auth.action";
import { Link, useNavigate } from "react-router";
import './login.css'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector(state => state.authReducer);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: ""
  });

  const handelChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    })
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(inputForm));
  }

  const handleGoogleLogin = () => {
    dispatch(googleLoginAsync())
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user]);

  return (
    < div className="login ">
      <Container>
        {error ? <p>{error}</p> : ""}
        <h3 className="mb-5 text-center">Login User</h3>
        <Form onSubmit={handelSubmit} className="login-form" >
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Label className="text-start w-100">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={inputForm.email}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Label className="text-start w-100">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={inputForm.password}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Button type="submit" className="button-50">Login User</Button>
            </Col>
            <Col sm="12">
              <Button onClick={handleGoogleLogin} className="google-btn d-flex align-items-center justify-content-center">
                <h4 className="me-2 mb-0"><FcGoogle /></h4>
                Google Login
              </Button>
            </Col>

            <p className="text-center mt-3"> Create an Account ? <Link to={"/register"}>SignUp</Link></p>
          </Form.Group>
        </Form>

      </Container>

    </div>
  )
};

export default Login;