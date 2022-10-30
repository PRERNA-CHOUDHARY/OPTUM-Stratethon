import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function Contact(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [email, setEmail] = useState("");
    const [telno, setTelno] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (password === repassword) {
            const newUser = {
                username: username,
                password: password,
                email: email,
                telno: telno,
                dob: dob,
                gender: gender,
                address: address,
            };

            alert("Posted Successfully!");
            console.log(newUser);
        } else {
            alert("Check Password");
        }
    };

    return (
        <>
            <div className="form container">
                <h3 className="form-header">Sign Up</h3>
                <hr />

                <Form class="col-12" onSubmit={handleSubmit}>
                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            User Name
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Password
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Re-Type Password
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="password"
                                name="repassword"
                                placeholder="Re-Type Password"
                                onChange={(e) => setRepassword(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Email
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="mail"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Tel No
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="number"
                                name="telno"
                                placeholder="Tel no."
                                onChange={(e) => setTelno(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            DOB
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                type="date"
                                name="dob"
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Gender
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Select
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="Male">Male</option>
                                <option value="Feamle">Female</option>
                                <option value="others">Others</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Addres
                        </Form.Label>
                        <Col column lg={4}>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="address"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Form.Group className="mb-3">
                        <Form.Check
                            className="form_label"
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button type="submit" value="Submit">
                        Submit
                    </Button>
                    <br />
                    <br />
                </Form>
            </div>
        </>
    );
}
export default Contact;
