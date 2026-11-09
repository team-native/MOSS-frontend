import { useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

export default function AccountHelpPage() {
  const [activeTab, setActiveTab] = useState("id");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");

  const isIdTab = activeTab === "id";

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      isIdTab
        ? "아이디 찾기는 인증 API 연결 후 사용할 수 있어요."
        : "비밀번호 재설정은 인증 API 연결 후 사용할 수 있어요.",
    );
  };

  const handleSendCode = () => {
    alert("인증번호 발송은 서버 연결 후 사용할 수 있어요.");
  };

  const inputStyle =
    "h-[50px] w-full rounded-xl border border-[#DCE5DD] bg-white px-4 text-sm outline-none transition focus:border-[#29483B]";

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      {/* 헤더와 푸터를 제외한 메인 영역 */}
      <main className="w-full flex-1 px-5 py-[52px] sm:px-8 lg:min-h-[1122px] lg:px-[250px] lg:pb-[56px]">
        <div className="mx-auto flex w-full max-w-[940px] flex-col gap-[26px]">
          {/* 페이지 제목 */}
          <section>
            <p className="mb-3 text-xs font-bold tracking-wide text-[#4F705E]">
              ACCOUNT HELP
            </p>

            <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-[36px]">
              계정 정보를 찾아드릴게요
            </h1>

            <p className="text-sm leading-6 text-[#718077]">
              가입할 때 사용한 연락처 또는 이메일로 본인 확인을 진행합니다.
            </p>
          </section>

          {/* 메인 카드 */}
          <section className="w-full rounded-[24px] bg-white p-5 shadow-[0_12px_35px_rgba(35,58,45,0.07)] sm:p-8 lg:p-10">
            {/* 탭 */}
            <div className="mb-8 grid grid-cols-2 rounded-xl bg-[#EDF2EB] p-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("id")}
                className={`min-h-[48px] rounded-lg px-3 py-3 text-sm font-bold transition ${
                  isIdTab
                    ? "bg-white text-[#29483B] shadow-sm"
                    : "text-[#65736B] hover:text-[#29483B]"
                }`}
              >
                아이디 찾기
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("password")}
                className={`min-h-[48px] rounded-lg px-3 py-3 text-sm font-bold transition ${
                  !isIdTab
                    ? "bg-white text-[#29483B] shadow-sm"
                    : "text-[#65736B] hover:text-[#29483B]"
                }`}
              >
                비밀번호 재설정
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_1fr] lg:gap-9">
              {/* 왼쪽 입력 영역 */}
              <form onSubmit={handleSubmit} className="min-w-0">
                <h2 className="mb-2 text-xl font-extrabold">
                  {isIdTab ? "연락처로 아이디 찾기" : "비밀번호 재설정"}
                </h2>

                <p className="mb-7 text-sm leading-6 text-[#718077]">
                  {isIdTab
                    ? "가입 시 입력한 이름과 휴대폰 번호를 입력해 주세요."
                    : "가입한 이메일 주소를 입력해 본인 확인을 진행해 주세요."}
                </p>

                {isIdTab ? (
                  <>
                    <label className="mb-2 block text-sm font-bold">이름</label>

                    <input
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="이름을 입력해 주세요"
                      className={`${inputStyle} mb-5`}
                    />

                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-bold">휴대폰 번호</label>

                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="text-xs font-semibold text-[#4F705E] hover:underline"
                      >
                        인증번호 받기
                      </button>
                    </div>

                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="010-0000-0000"
                      className={`${inputStyle} mb-5`}
                    />

                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-bold">인증번호</label>
                      <span className="text-xs text-[#4F705E]">본인 확인</span>
                    </div>

                    <input
                      required
                      value={code}
                      onChange={(event) => setCode(event.target.value)}
                      placeholder="인증번호 6자리"
                      maxLength={6}
                      inputMode="numeric"
                      className={inputStyle}
                    />
                  </>
                ) : (
                  <>
                    <label className="mb-2 block text-sm font-bold">
                      아이디 / 이메일
                    </label>

                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="가입 시 사용한 이메일"
                      className={`${inputStyle} mb-5`}
                    />

                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-bold">인증 이메일</label>

                      <button
                        type="button"
                        onClick={handleSendCode}
                        className="text-xs font-semibold text-[#4F705E] hover:underline"
                      >
                        인증번호 받기
                      </button>
                    </div>

                    <input
                      required
                      value={emailCode}
                      onChange={(event) => setEmailCode(event.target.value)}
                      placeholder="이메일로 받은 인증번호"
                      maxLength={6}
                      inputMode="numeric"
                      className={inputStyle}
                    />

                    <p className="mt-3 text-xs leading-5 text-[#829087]">
                      이메일 인증 후 새 비밀번호를 설정할 수 있습니다.
                    </p>
                  </>
                )}

                <button
                  type="submit"
                  className="mt-7 flex h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-[#29483B] text-sm font-bold text-white transition hover:bg-[#203A30]"
                >
                  {isIdTab ? "아이디 확인하기" : "인증 정보 확인하기"}
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* 오른쪽 안내 영역 */}
              <div className="flex min-w-0 flex-col gap-5">
                <section className="rounded-[20px] bg-[#EDF2EB] p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#29483B] text-xl text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-sm font-extrabold">
                        {isIdTab ? "본인 인증 안내" : "안전한 비밀번호 재설정"}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[#718077]">
                        가입 시 등록한 정보를 사용해 주세요.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-5">
                    <p className="mb-2 text-xs text-[#829087]">
                      {isIdTab ? "아이디 찾기" : "비밀번호 재설정"}
                    </p>

                    <p className="text-base font-extrabold text-[#29483B]">
                      {isIdTab
                        ? "이름과 휴대폰 번호 확인"
                        : "이메일 인증 후 재설정"}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#829087]">
                      개인정보 보호를 위해 본인 확인이 필요합니다.
                    </p>
                  </div>
                </section>

                <section className="flex-1 rounded-[20px] bg-[#F7F3E7] p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEE5D0] text-lg text-[#53665A]">
                      ?
                    </span>

                    <h3 className="text-sm font-extrabold">
                      {isIdTab
                        ? "아이디를 찾을 수 없나요?"
                        : "비밀번호가 기억나지 않나요?"}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-7 text-[#718077]">
                    {isIdTab
                      ? "가입 시 입력한 정보와 일치하는지 확인해 주세요. 등록한 연락처를 사용할 수 없다면 고객센터에 문의해 주세요."
                      : "가입 시 등록한 이메일 주소를 입력해 주세요. 이메일 인증을 완료하면 새 비밀번호를 설정할 수 있어요."}
                  </p>

                  <ol className="space-y-4">
                    {(isIdTab
                      ? [
                          "이름과 휴대폰 번호 입력",
                          "인증번호 확인",
                          "아이디 확인",
                        ]
                      : [
                          "가입 이메일 입력",
                          "이메일 인증번호 확인",
                          "새 비밀번호 설정",
                        ]
                    ).map((item, index) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#53665A]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold">
                          {index + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </div>

            {/* 고객센터 안내 */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#E0E6DF] px-4 py-4 text-xs leading-5 text-[#718077]">
              <span className="font-bold text-[#4F705E]">ⓘ</span>
              <p>인증 수단을 사용할 수 없다면 고객센터로 문의해 주세요.</p>
            </div>

            {/* 로그인으로 돌아가기 */}
            <div className="mt-7 text-center">
              <Link
                to="/login"
                className="text-sm font-bold text-[#29483B] hover:underline"
              >
                ← 로그인으로 돌아가기
              </Link>
            </div>
          </section>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
