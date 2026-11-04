import { useState } from "react";

import Header from "./LoginHeader";
import Footer from "./LoginFooter";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <Header />

      <main className="flex flex-col items-center justify-center gap-8 py-11 lg:flex-row lg:gap-[84px]">
        {/* 왼쪽 이미지 영역 */}
        <section
          className="flex h-[680px] w-[min(440px,calc(100vw-32px))] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] bg-cover bg-center p-9 text-white"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(24,39,31,0.13) 0%, rgba(24,39,31,0.92) 100%), url('/src/assets/usagi.png')",
          }}
        >
          {/* 로고와 환영 문구 */}
          <div className="flex items-center justify-between">
            <div className="flex h-7 w-[63px] items-center gap-4 font-['Gothic_A1',sans-serif] text-[22px] font-black leading-none">
              <div className="h-[34px] w-[34px] shrink-0 rounded-full">
                <img
                  src="/src/assets/logo.png"
                  alt="로고"
                  className="block h-full w-full object-contain"
                />
              </div>

              <span className="whitespace-nowrap font-semibold text-white">
                MoSS
              </span>
            </div>

            <div className="flex h-7 w-[113px] items-center justify-center rounded-full bg-white/15 px-3 py-[7px]">
              <span className="whitespace-nowrap font-['Gothic_A1',sans-serif] text-[11px] font-bold leading-none">
                WELCOME BACK
              </span>
            </div>
          </div>

          {/* 기존 이미지 영역 */}
          <div className="h-[400px] w-full overflow-hidden" />

          {/* 소개 문구 */}
          <div className="flex h-[230px] w-[368px] max-w-full flex-col gap-[14px]">
            <p className="font-['Gothic_A1',sans-serif] text-[11px] font-bold uppercase leading-none tracking-[0.05em] text-[#c9d8cf]">
              A PLACE FOR YOUR PACE
            </p>

            <h2 className="h-[84px] w-full font-['Gothic_A1',sans-serif] text-[31px] font-semibold leading-[135%] text-white">
              오늘의 집중도, 좋은 자리
              <br />
              에서 시작해요
            </h2>

            <p className="h-12 w-full font-['Gothic_A1',sans-serif] text-sm font-normal leading-[170%] text-[#dfe8e2]">
              소음과 콘센트, 머무는 시간까지 살펴본 동네의 공간을 로그인 하고
              이어서 발견해 보세요.
            </p>

            <div className="flex h-[42px] w-full items-center gap-[9px] rounded-[14px] bg-white/10 px-[14px] py-3">
              <img
                src="/src/assets/sprout.png"
                alt="새싹 아이콘"
                className="h-[18px] w-[18px] shrink-0"
              />

              <span className="whitespace-nowrap font-['Gothic_A1',sans-serif] text-[11px] font-normal leading-[150%] text-white">
                내가 머물기 좋은 곳은, 누군가에게도 좋은 발견이 됩니다.
              </span>
            </div>
          </div>
        </section>

        {/* 오른쪽 로그인 영역 */}
        <section className="flex h-[628px] w-[min(500px,calc(100vw-32px))] flex-col gap-6 rounded-[28px] bg-white p-[42px]">
          {/* 로그인 소개 */}
          <div className="flex flex-col gap-2">
            <h1 className="font-['Gothic_A1',sans-serif] text-xs font-extrabold uppercase leading-none text-[#4f705e]">
              WELCOME TO MOSS
            </h1>

            <p className="font-['Gothic_A1',sans-serif] text-[32px] font-extrabold leading-[130%] text-[#18271f]">
              다시 만나 반가워요
            </p>

            <p className="font-['Gothic_A1',sans-serif] text-sm font-normal leading-[165%] text-[#5d6b63]">
              저장해 둔 공간과 나의 기록이 기다리고 있어요.
            </p>
          </div>

          {/* 아이디 입력 */}
          <div className="flex flex-col gap-2">
            <label className="font-['Gothic_A1',sans-serif] text-[13px] font-bold leading-none text-[#18271f]">
              아이디 또는 이메일
            </label>

            <div className="relative">
              <img
                src="/src/assets/mail.png"
                alt=""
                className="absolute left-[18px] top-1/2 z-10 h-6 w-6 -translate-y-1/2 object-contain"
              />

              <input
                type="text"
                placeholder="아이디 또는 이메일을 입력해 주세요"
                className="h-[52px] w-full rounded-[14px] border border-[#dddddd] bg-white py-0 pl-[60px] pr-4 font-['Gothic_A1',sans-serif] text-sm font-normal leading-none outline-none placeholder:text-[#8b978f]"
              />
            </div>
          </div>

          {/* 비밀번호 입력 */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="font-['Gothic_A1',sans-serif] text-[13px] font-bold leading-none text-[#18271f]">
                비밀번호
              </label>

              <button
                type="button"
                className="cursor-pointer border-0 bg-transparent p-0 font-['Gothic_A1',sans-serif] text-sm text-[#4f705e]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "숨기기" : "표시"}
              </button>
            </div>

            <div className="relative">
              <img
                src="/src/assets/lock-keyhole.png"
                alt=""
                className="absolute left-[18px] top-1/2 z-10 h-6 w-6 -translate-y-1/2 object-contain"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                className="h-[52px] w-full rounded-[14px] border border-[#dddddd] bg-white py-0 pl-[60px] pr-4 font-['Gothic_A1',sans-serif] text-sm font-normal leading-none outline-none placeholder:text-[#8b978f]"
              />
            </div>
          </div>

          {/* 로그인 옵션 */}
          <div className="flex w-full items-center justify-between">
            <label className="flex items-center gap-[6px] font-['Gothic_A1',sans-serif] text-[13px] text-[#18271f]">
              <input
                type="checkbox"
                className="h-5 w-5 cursor-pointer accent-[#29483b]"
              />
              로그인 유지
            </label>

            <div className="flex items-center gap-[10px]">
              <button
                type="button"
                className="cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 font-['Gothic_A1',sans-serif] text-[13px] font-medium leading-none text-[#5d6b63] hover:opacity-80"
                onClick={() => (window.location.href = "/find-account")}
              >
                아이디 찾기
              </button>

              <span className="h-3 w-px shrink-0 bg-[#dde4de]" />

              <button
                type="button"
                className="cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 font-['Gothic_A1',sans-serif] text-[13px] font-medium leading-none text-[#5d6b63] hover:opacity-80"
                onClick={() => (window.location.href = "/find-account")}
              >
                비밀번호 찾기
              </button>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <button
            type="button"
            className="h-[54px] min-h-[54px] w-full shrink-0 rounded-[14px] border-0 bg-[#29483b] px-6 text-white hover:opacity-80"
            onClick={() => (window.location.href = "/")}
          >
            로그인 →
          </button>

          {/* 회원가입 */}
          <div className="-mt-2 flex w-full items-center justify-center gap-2 whitespace-nowrap border-t border-[#dde4de] pt-[22px]">
            <span className="font-['Gothic_A1',sans-serif] text-[13px] font-normal leading-none text-[#5d6b63]">
              아직 MoSS 회원이 아니신가요?
            </span>

            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent p-0 font-['Gothic_A1',sans-serif] text-[13px] font-extrabold leading-none text-[#29483b] hover:opacity-80"
              onClick={() => (window.location.href = "/signup")}
            >
              회원가입
            </button>
          </div>

          {/* 안내 문구 */}
          <div className="flex h-[39px] w-full items-center gap-2 rounded-[14px] bg-[#eef2ec] px-[14px] py-[11px]">
            <span className="h-4 w-[13px] shrink-0 font-['Gothic_A1',sans-serif] text-[13px] leading-none text-[#29483b]">
              ●
            </span>

            <span className="font-['Gothic_A1',sans-serif] text-[11px] font-normal leading-[150%] text-[#5d6b63]">
              공용 기기에서는 로그인 유지를 해제해 주세요.
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
