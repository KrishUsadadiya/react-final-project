import './student.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logOutAsync } from "../service/action/auth.action";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.authReducer)
    const handleLogOut = () => {
        dispatch(logOutAsync());
    }

    return (
        <Navbar expand="lg" className="student-header ">
            <Container>
                <Navbar.Brand href="/" className="logo">
                <img src="/public/logo.png" width={30} height={30} className='me-2' alt="logo" />
                    student Manager
                </Navbar.Brand>

               
                    <Nav className="d-flex justify-content-start">
                        <Nav.Link href="/" className="text-white fw-bold">Home</Nav.Link>
                        {user ? <Nav.Link href="/addstudent" className="text-white fw-bold me-2">Add student</Nav.Link> : ""}
                        {!user ? <Nav.Link href="/login" className='logout-btn'>Login</Nav.Link> : <Button onClick={handleLogOut} className='button-50'>LogOut</Button>}
                    </Nav>

               
            </Container>
        </Navbar>
    );
}

export default Header;
