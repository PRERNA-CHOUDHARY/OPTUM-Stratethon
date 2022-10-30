import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Modal, Button } from "react-bootstrap";
function Header(props) {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClose = () => setShow(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (email && password) {
            alert("Sign In Successfully!");
        } else if (email) {
            alert("Enter Password");
        } else if (password) {
            alert("Enter Email");
        } else {
            alert("Enter Password and Email");
        }
    };
    return (
        <>
            <Navbar expand="lg">
                <Container className="header-navbar">
                    <Navbar.Brand href="/home">
                        <span className="navbar-header">M E D I C W I S E</span>
                        <hr className="hr" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">
                                <span className="color-header">Home</span>
                            </Nav.Link>

                            <Nav.Link href="/chat">
                                <span className="color-header">Message</span>
                            </Nav.Link>

                            <Nav.Link href="/video">
                                <span className="color-header">Video Call</span>
                            </Nav.Link>

                            <Nav.Link href="/gesture">
                                <span className="color-header">Gesture</span>
                            </Nav.Link>

                            <Nav.Link href="/mentalscreening">
                                <span className="color-header">
                                    Mental Screening
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body onSubmit={handleSubmit}>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Remember password"
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>{" "}
                        <Button variant="primary" type="submit" value="Submit">
                            Log in
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <p>Or</p>
                    <p>Don't have an account ?</p>
                    <Button
                        variant="primary"
                        onClick={handleClose}
                        href="/signup"
                    >
                        Sign up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;
