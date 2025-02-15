import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewUserAsync } from "../../service/action/auth.action";
import { Link, useNavigate } from "react-router";
import './login.css'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isCreated, error} = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
        cpassword: ""
    });

    const handelChanged = (e) => {
        const {name, value} = e.target;
        setInputForm({
            ...inputForm,
            [name] : value
        })
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if(inputForm.password === inputForm.cpassword){
            dispatch(addNewUserAsync(inputForm));
        }else{
            alert('Password & Confirm Password does not matched!')
        }
    }

    useEffect(() => {
        if(isCreated){
            navigate("/login")
        }
    }, [isCreated])
    return (
        <div className="login">
        <Container>
            {error ? <p>{error}</p> : ""}
        <h3 className="text-center">Regsiter User</h3>
        <Form onSubmit={handelSubmit} className="login-form">

        <Form.Label column sm="2">
              Email
            </Form.Label>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={inputForm.email}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Label column sm="2">
              Password
            </Form.Label>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={inputForm.password}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>

          <Form.Label column sm="10">
              Confirm Password
            </Form.Label>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Form.Control
                type="password"
                placeholder="Enter Confirm password"
                name="cpassword"
                value={inputForm.cpassword}
                onChange={handelChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm="12">
              <Button type="submit" className="register-btn">Register User</Button>
            </Col>
          </Form.Group>
        </Form>
        <p className="text-center">Already Account ? <Link to={"/login"} cl>Login</Link></p>
      </Container>
        
        </div>
    )
};

export default Register;