import React from "react";
import "./scss/home.scss";
import { RxDoubleArrowDown } from "react-icons/rx";
function Home() {
    return (
        <>
            <div id="home" className="homeWrap">
                <div class="homeContainer">
                    <div class="neon">프론트엔드 개발자</div>
                    <div class="flux">서우석입니다</div>
                    <span>
                        <RxDoubleArrowDown size="30" spin />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;
