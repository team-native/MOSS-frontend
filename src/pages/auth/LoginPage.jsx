import { useState } from "react";
import "./LoginPage.css";

import Header from "./LoginHeader";
import Footer from "./LoginFooter";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section className="loginImage">
          {/* 왼쪽 위 로고 */}
          <div className="imageHeader">
            <div className="logo">
              <div className="logoIcon">
                <img src="/src/assets/logo.png" alt="로고" />
              </div>
              <span>MoSS</span>
            </div>

            <div className="welcomeBadge">
              <span>WELCOME BACK</span>
            </div>
          </div>

          {/* 배경 이미지 영역 */}
          <div className="image"></div>

          {/* 아래쪽 소개 문구 */}
          <div className="imageContent">
            <p className="imageSubtitle">A PLACE FOR YOUR PACE</p>

            <h2>
              오늘의 집중도, 좋은 자리
              <br />
              에서 시작해요
            </h2>

            <p className="imageDescription">
              소음과 콘센트, 머무는 시간까지 살펴본 동네의 공간을 로그인 하고
              이어서 발견해 보세요.
            </p>

            <div className="imageNotice">
              <span className="noticeIcon">
                <img src="/src/assets/sprout.png" alt="새싹 아이콘" />
              </span>
              <span>
                내가 머물기 좋은 곳은, 누군가에게도 좋은 발견이 됩니다.
              </span>
            </div>
          </div>
        </section>

        {/* 오른쪽 로그인 폼 */}
        <section className="loginForm">
          <div className="loginIntro">
            <h1>WELCOME TO MOSS</h1>
            <p className="welcomeText">다시 만나 반가워요</p>
            <p className="description">
              저장해 둔 공간과 나의 기록이 기다리고 있어요.
            </p>
          </div>

          <div className="inputGroup">
            <label>아이디 또는 이메일</label>
            <div className="inputBox">
              <img src="/src/assets/mail.png" className="inputIcon" alt="" />
              <input
                type="text"
                placeholder="아이디 또는 이메일을 입력해 주세요"
              />
            </div>
          </div>

          <div className="inputGroup">
            <div className="passwordLabel">
              <label>비밀번호</label>

              {/* 버튼을 누르면 비밀번호 표시 여부를 변경 */}
              <button
                type="button"
                className="passwordToggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "숨기기" : "표시"}
              </button>
            </div>

            <div className="inputBox">
              <img
                src="/src/assets/lock-keyhole.png"
                className="inputIcon"
                alt=""
              />

              {/* 버튼을 눌렀을 때 비밀번호가 보이거나 숨겨지도록 설정 */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
          </div>

          <div className="loginOptions">
            <label>
              <input type="checkbox" />
              로그인 유지
            </label>

            <div className="findAccount">
              <button
                type="button"
                onClick={() => (window.location.href = "/find-account")}
              >
                아이디 찾기
              </button>

              <span className="findDivider"></span>

              <button
                type="button"
                onClick={() => (window.location.href = "/find-account")}
              >
                비밀번호 찾기
              </button>
            </div>
          </div>

          {/* 로그인 버튼을 누르면 메인 페이지로 이동 */}
          <button
            className="loginButton"
            type="button"
            onClick={() => (window.location.href = "/")}
          >
            로그인 →
          </button>

          <div className="signup">
            <span>아직 MoSS 회원이 아니신가요?</span>
            <button
              type="button"
              onClick={() => (window.location.href = "/signup")}
            >
              회원가입
            </button>
          </div>

          <div className="noticeBox">
            <span>●</span>
            <span>공용 기기에서는 로그인 유지를 해제해 주세요.</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
