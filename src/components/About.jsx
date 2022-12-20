import React from "react";
import "./scss/about.scss";

function About() {
  return (
    <div id="about">
      <div className="boxWrap">
        <div className="aboutFirst">
          <p>탄탄한 기본기를 다지고</p>
          <p>새로운 기술을 배우며</p>
          <p>빠르게 변화하는</p>
          <p>웹 트렌드에 적응하고</p>
          <p>열심히 배우는 개발자가</p>
          <p>되고 싶습니다.</p>
          <br />
        </div>
        <div className="aboutEnd">
          <p>이름 : 서우석</p>
          <p>생년월일 : 1997.03.24</p>
          <p>거주지 : 경기도 부천시</p>
          <p>이메일 : sws970324@gmail.com</p>
          <p>연락처 : 010-2384-8903</p>
        </div>
      </div>
    </div>
  );
}

export default About;
