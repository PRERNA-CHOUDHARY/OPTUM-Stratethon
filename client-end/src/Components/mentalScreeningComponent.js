import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { faqs } from "./Shared/forms";
import { ToastContainer, toast } from "react-toastify";
import { db } from "./Firebase";
import "react-toastify/dist/ReactToastify.css";

function Mentalscreening(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telno, setTelno] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (name && email && telno && age) {
            db.collection("contacts")
                .add({
                    name: name,
                    email: email,
                    telephone: telno,
                    age: age,
                })
                .then(() => {
                    toast.success(`On the way, ${name}.`);
                    setName("");
                    setEmail("");
                    setTelno("");
                    setAge("");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Enter the remaining information!");
        }
    };

    return (
        <>
            <div className="form container">
                <h3 className="form-header quick">Mental Screening</h3>
                <hr style={{ color: "black" }} />

                <Form className="col-12 poppins" onSubmit={handleSubmit}>
                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Name
                        </Form.Label>
                        <Col column lg={3}></Col>
                        <Col column lg={4}>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Email
                        </Form.Label>
                        <Col column lg={3}></Col>
                        <Col column lg={4}>
                            <Form.Control
                                type="mail"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Telephone Number
                        </Form.Label>
                        <Col column lg={3}></Col>
                        <Col column lg={4}>
                            <Form.Control
                                type="number"
                                name="telno"
                                value={telno}
                                placeholder="Tel No."
                                onChange={(e) => setTelno(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Form.Label column lg={2} className="form_label">
                            Age
                        </Form.Label>
                        <Col column lg={3}></Col>
                        <Col column lg={4}>
                            <Form.Control
                                type="number"
                                name="age"
                                value={age}
                                placeholder="Age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />

                    {faqs.map((faq) => (
                        <>
                            <Row>
                                <Form.Label
                                    column
                                    lg={5}
                                    className="form_label"
                                >
                                    {faq.question}
                                </Form.Label>
                                <Col column lg={4}>
                                    <Form.Select lg={2}>
                                        <option value={faq.option1}>
                                            {faq.option1}
                                        </option>
                                        <option value={faq.option2}>
                                            {faq.option2}
                                        </option>
                                        <option value={faq.option3}>
                                            {faq.option3}
                                        </option>
                                        <option value={faq.option4}>
                                            {faq.option4}
                                        </option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <br />
                        </>
                    ))}

                    <Button
                        type="submit"
                        variant="outline-dark mb-5"
                        value="Submit"
                    >
                        Submit
                    </Button>

                    <br />
                    <br />
                </Form>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}
export default Mentalscreening;
