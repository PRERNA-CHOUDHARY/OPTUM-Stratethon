import React from "react";
import "./styles/doctor.scss";
import img1 from "./Images/1.png";
import img2 from "./Images/2.png";
import img3 from "./Images/3.png";
import img4 from "./Images/4.png";
import img5 from "./Images/5.png";
import img6 from "./Images/6.png";

export default function DoctorComponent() {
    return (
        <div className="doctor">
            <div className="doctor spltter-home"></div>
            <div
                className="doctor container main-body-home"
                style={{ color: "black" }}
            >
                <div className="doctor d-flex justify-content-between py-5 pb-4 mx-5 px-5">
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img1}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">
                                Prerna Choudhary
                            </span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    9499{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>
                                    Healthcare Administrator | MBBS
                                </span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img2}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">
                                Kartik Mehta
                            </span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    5483{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>Healthcare Specialist | MD</span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img3}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">
                                Manasvi Singh
                            </span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    1021{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>Psychologist | PHD</span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                </div>
                <div className="d-flex justify-content-between py-5 pt-0  mx-5 px-5">
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img4}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">
                                Khushi Singh
                            </span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    4521{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>Health Services Manager | MD</span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img5}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">
                                Ankita Kumari
                            </span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    8241{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>Medical Administrative | MBBS</span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                    <div className="card p-4">
                        {" "}
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            {" "}
                            <button className="btn btn-light">
                                {" "}
                                <img
                                    src={img6}
                                    style={{ height: "110px", width: "110px" }}
                                    alt="profile"
                                />
                            </button>{" "}
                            <span className="name quick mt-3">Kunal Mehta</span>{" "}
                            <span className="idd quick px-2 py-1">
                                V E R I F I E D
                            </span>{" "}
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                {" "}
                                <span className="number quick">
                                    0069{" "}
                                    <span className="follow poppins">
                                        Medic Code
                                    </span>
                                </span>{" "}
                            </div>{" "}
                            <div
                                className="text mt-3 poppins"
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                <span>
                                    Nursing Home Administrator | MD
                                </span>{" "}
                            </div>{" "}
                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                {" "}
                                <span>
                                    <i className="fa fa-twitter"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-facebook-f"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-instagram"></i>
                                </span>{" "}
                                <span>
                                    <i className="fa fa-linkedin"></i>
                                </span>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                </div>
            </div>
            <span className="py-5">&nbsp;</span>
        </div>
    );
}
