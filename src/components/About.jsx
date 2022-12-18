import React from "react";
import "./scss/about.scss";

function About() {
    return (
        <div id="about">
            <div className="boxWrap">
                <div className="aboutFirst">
                    <p>개발자로써의 다짐 등</p>
                </div>
                <div className="aboutEnd">
                    <p>
                        서우석 <br />
                        1997.03.24 <br />
                        경기도 부천시 거주 <br />
                        sws970324@gmail.com <br />
                        010-2384-8903
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
