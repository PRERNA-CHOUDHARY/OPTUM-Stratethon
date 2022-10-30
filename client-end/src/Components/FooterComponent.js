import React from "react";

function Footer(props) {
    return (
        <>
            <div
                className="d-flex quick justify-content-center pt-5"
                style={{
                    backgroundColor: "#1c2331",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "20px",
                }}
            >
                M E D I C W I S E
            </div>
            <div
                className="d-flex poppins justify-content-center"
                style={{
                    backgroundColor: "#1c2331",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "100",
                }}
            >
                The first aid to your invisible wounds. Together we feel, vent
                and heal.
            </div>
            <div
                className="footer-text poppins py-3 d-flex justify-content-center"
                style={{ backgroundColor: "#1c2331" }}
            >
                <p>Copyright © 2022 | East India Company</p>
            </div>
        </>
    );
}

export default Footer;
