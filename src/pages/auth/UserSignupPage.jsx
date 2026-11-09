import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

export default function UserSignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [agreements, setAgreements] = useState({
    all: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const [phoneVerified, setPhoneVerified] = useState(false);

  const inputClass =
    "h-10 w-full rounded-xl border border-[#E0E6DF] px-3 text-sm text-[#263A30] outline-none transition focus:border-[#52745F] focus:ring-1 focus:ring-[#52745F]/20";

  const labelClass = "mb-1.5 block text-xs font-bold text-[#263A30]";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAgreementChange(name) {
    if (name === "all") {
      const nextValue = !agreements.all;

      setAgreements({
        all: nextValue,
        service: nextValue,
        privacy: nextValue,
        marketing: nextValue,
      });

      return;
    }

    const nextAgreements = {
      ...agreements,
      [name]: !agreements[name],
    };

    nextAgreements.all =
      nextAgreements.service &&
      nextAgreements.privacy &&
      nextAgreements.marketing;

    setAgreements(nextAgreements);
  }

  function handlePhoneVerification() {
    if (!form.phone.trim()) {
      alert("연락처를 입력해 주세요.");
      return;
    }

    alert("휴대폰 인증 기능은 준비 중입니다.");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("이름을 입력해 주세요.");
      return;
    }

    if (!form.phone.trim()) {
      alert("연락처를 입력해 주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("올바른 이메일을 입력해 주세요.");
      return;
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
        form.password,
      )
    ) {
      alert("비밀번호는 영문, 숫자, 특수문자를 포함해 8자 이상 입력해 주세요.");
      return;
    }

    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!agreements.service || !agreements.privacy) {
      alert("필수 약관에 동의해 주세요.");
      return;
    }

    navigate("/main");
  }

  const terms = [
    {
      name: "service",
      label: "[필수] 서비스 이용약관 동의",
      required: true,
    },
    {
      name: "privacy",
      label: "[필수] 개인정보 수집 및 이용 동의",
      required: true,
    },
    {
      name: "marketing",
      label: "[선택] 맞춤 공간 추천 및 소식 수신",
      required: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      <main className="flex flex-1 flex-col items-center px-5 py-8 sm:px-8 sm:py-12">
        <div className="w-full max-w-[1000px] rounded-[28px] bg-white px-5 py-8 shadow-[0_8px_28px_rgba(35,65,50,0.07)] sm:px-10 sm:py-10">
          {/* 진행 단계 */}
          <div className="mb-7 flex items-center gap-2 text-[10px] text-[#829087] sm:gap-3">
            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap font-bold text-[#29483B]">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                1
              </span>
              유형 선택
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap font-bold text-[#29483B]">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                2
              </span>
              정보 입력
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                3
              </span>
              가입 완료
            </div>
          </div>

          {/* 제목 */}
          <div className="mb-6">
            <p className="mb-1 text-[10px] font-bold tracking-wide text-[#52745F]">
              CREATE YOUR ACCOUNT
            </p>

            <h1 className="text-[26px] font-extrabold">사용자 회원가입</h1>

            <p className="mt-2 text-xs text-[#718077]">
              기본 정보를 입력하고 약관에 동의하면 바로 MoSS를 시작할 수 있어요.
            </p>
          </div>

          {/* 회원 유형 */}
          <div className="mb-6 flex items-center justify-between rounded-xl bg-[#EDF2EB] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#29483B] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-bold">사용자 회원</p>
                <p className="text-[10px] text-[#718077]">
                  공간 탐색 · 리뷰 · 스팟 제보
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-[10px] font-bold text-[#52745F] hover:underline"
            >
              유형 변경
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 기본 정보 */}
            <section className="mb-6">
              <h2 className="mb-4 text-sm font-extrabold">기본 정보</h2>

              <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    이름
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="이름을 입력해 주세요"
                    autoComplete="name"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="phone" className="text-xs font-bold">
                      연락처
                    </label>

                    <button
                      type="button"
                      onClick={handlePhoneVerification}
                      className="text-[10px] font-bold text-[#52745F] hover:underline"
                    >
                      {phoneVerified ? "인증 완료" : "인증하기"}
                    </button>
                  </div>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    autoComplete="tel"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelClass}>
                    아이디 / 이메일
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해 주세요"
                    autoComplete="email"
                    className={inputClass}
                    required
                  />

                  <p className="mt-1 text-[10px] text-[#829087]">
                    로그인과 주요 알림에 사용됩니다.
                  </p>
                </div>

                <div>
                  <label htmlFor="password" className={labelClass}>
                    비밀번호
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력해 주세요"
                    autoComplete="new-password"
                    className={inputClass}
                    required
                  />

                  <p className="mt-1 text-[10px] text-[#829087]">
                    영문·숫자·특수문자 포함 8자 이상
                  </p>
                </div>

                <div>
                  <label htmlFor="passwordConfirm" className={labelClass}>
                    비밀번호 확인
                  </label>

                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    value={form.passwordConfirm}
                    onChange={handleChange}
                    placeholder="비밀번호를 다시 입력해 주세요"
                    autoComplete="new-password"
                    className={inputClass}
                    required
                  />

                  <p className="mt-1 text-[10px] text-[#829087]">
                    비밀번호가 일치해야 합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 약관 동의 */}
            <section className="mb-6">
              <h2 className="mb-3 text-sm font-extrabold">약관 동의</h2>

              <div className="rounded-xl border border-[#E5EAE4] bg-[#FAFBF9] px-4">
                <label className="flex min-h-10 cursor-pointer items-center gap-2 border-b border-[#E5EAE4] text-xs font-bold">
                  <input
                    type="checkbox"
                    checked={agreements.all}
                    onChange={() => handleAgreementChange("all")}
                    className="h-3.5 w-3.5 accent-[#29483B]"
                  />
                  전체 약관에 동의합니다.
                </label>

                {terms.map((term) => (
                  <div
                    key={term.name}
                    className="flex min-h-9 items-center justify-between gap-2"
                  >
                    <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[#52645A]">
                      <input
                        type="checkbox"
                        checked={agreements[term.name]}
                        onChange={() => handleAgreementChange(term.name)}
                        className="h-3.5 w-3.5 accent-[#29483B]"
                      />
                      {term.label}
                    </label>

                    <button
                      type="button"
                      onClick={() => alert("약관 내용은 준비 중입니다.")}
                      className="text-[10px] text-[#829087] hover:underline"
                    >
                      보기
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 가입 완료 */}
            <button
              type="submit"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#29483B] text-sm font-bold text-white transition hover:bg-[#203A30]"
            >
              가입 완료하기
              <span>→</span>
            </button>
          </form>

          <p className="mt-5 text-center text-[11px] text-[#829087]">
            이미 계정이 있다면{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-bold text-[#29483B] hover:underline"
            >
              로그인
            </button>
          </p>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
