import { useEffect, useState } from "react";
import './student.css'
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { addstudentAsync } from "../service/action/student.action";
import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Addstudent = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.studentReducer)
    const navigate = useNavigate();
    const [inputForm, setInputForm] = useState({
        name: '',
        rollno: '',
        classno: '',
        div: '',
        dob: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = generateUniqueId({
            length: 5,
            useLetters: false,
        });
        dispatch(addstudentAsync({ ...inputForm, id: id.toString() }));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated])

    return (

        <div className="container student-form">
            <h2 className="text-center mt-3">Student Form</h2>
            <Form onSubmit={handleSubmit} className="Form  ">
                <Row className="mb-3">

                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Row className="align-items-center ">
                            <Col md="12">
                                <Form.Label className="mt-3">Student Name</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        value={inputForm.name}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03">

                        <Row className="align-items-center">
                            <Col md="6">
                                <Form.Label className="mt-3" >Class</Form.Label>
                                <Form.Select
                                    name="classno"
                                    value={inputForm.classno}
                                    onChange={handleChange}  >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Select>
                            </Col>


                            <Col md="6">
                                <Form.Label className="mt-3" >div</Form.Label>
                                <Form.Select
                                    name="div"
                                    value={inputForm.classno}
                                    onChange={handleChange}  >
                                    <option value="1">A+</option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                    <option value="3">c</option>
                                </Form.Select>
                            </Col>


                            <Col md="6">
                                <Form.Label className="mt-3">Roll No.</Form.Label>
                                <Form.Control

                                    type="text"
                                    onChange={handleChange}
                                    name="rollno"
                                    value={inputForm.rollno}
                                />
                            </Col>

                        </Row>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03">

                        <Row className="align-items-center">
                            <Col md="6">
                                <Form.Label className="mt-3" >Gender</Form.Label>
                                <Form.Select
                                    name="gender"
                                    value={inputForm.gender}
                                    onChange={handleChange}  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Col>

                            <Col md="6">
                                <Form.Label className="mt-3">DOB</Form.Label>
                                <Form.Control
                                    type="dob"
                                    onChange={handleChange}
                                    name="dob"
                                    value={inputForm.date}
                                />
                            </Col>

                        </Row>
                    </Form.Group>

                </Row>

                <div className="center-container">
                    <button type="submit" className="button-50">Submit</button>
                </div>
            </Form>
        </div>
    );
};

export default Addstudent;
