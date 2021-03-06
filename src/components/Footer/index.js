import React from "react";
import "../../styles/QuranDerse.css";


export default function Footer() {
    return (
        <section className="section-class" id="footer">
            <div className="footer-content">
                <a href="https://www.facebook.com/emiccenter" target="_blank">
                    <span><i className="fab fa-facebook"></i></span>
                </a>
                <br></br>
                <span className="hr"></span>
                <br></br>
                <p className="copyright">© 2020 Elkton Maryland İslamic Cultural Center</p>
            </div>
        </section>
    );
}