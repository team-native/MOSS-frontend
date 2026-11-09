import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

export default function OwnerSignupPage3() {
  const navigate = useNavigate();
  const location = useLocation();

  const previousState = location.state || {};

  const [form, setForm] = useState({
    businessNumber: "",
    representativeName: "",
    openingDate: "",
  });

  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);

  // 입력값 변경
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // 사업자등록번호 입력 형식
  function formatBusinessNumber(value) {
    const numbers = value.replace(/\D/g, "").slice(0, 10);

    if (numbers.length <= 3) {
      return numbers;
    }

    if (numbers.length <= 5) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5)}`;
  }

  // 사업자등록번호 변경
  function handleBusinessNumberChange(event) {
    setForm((prev) => ({
      ...prev,
      businessNumber: formatBusinessNumber(event.target.value),
    }));
  }

  // 증빙 서류 선택
  function handleFileChange(event) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("PDF, JPG, PNG 파일만 첨부할 수 있어요.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("파일 크기는 10MB 이하여야 해요.");
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
  }

  // 임시 저장
  function handleSave() {
    alert(
      "현재 입력 내용은 이 화면에서만 유지돼요. 실제 임시 저장은 서버 연결이 필요해요.",
    );
  }

  // 인증 심사 제출
  function handleSubmit(event) {
    event.preventDefault();

    const businessNumber = form.businessNumber.replace(/\D/g, "");

    if (businessNumber.length !== 10) {
      alert("사업자등록번호 10자리를 입력해 주세요.");
      return;
    }

    if (!form.representativeName.trim()) {
      alert("대표자명을 입력해 주세요.");
      return;
    }

    if (!form.openingDate) {
      alert("개업일자를 입력해 주세요.");
      return;
    }

    if (!file) {
      alert("사업자등록증 파일을 첨부해 주세요.");
      return;
    }

    if (!agreed) {
      alert("개인정보 조회 동의가 필요해요.");
      return;
    }

    alert(
      "입력 정보 확인이 완료됐어요. 실제 인증 심사 제출은 서버 연결 후 이용할 수 있어요.",
    );
  }

  const inputClass =
    "h-10 w-full rounded-xl border border-[#E0E6DF] bg-white px-3 text-xs text-[#263A30] outline-none transition focus:border-[#29483B] focus:ring-1 focus:ring-[#29483B]/20";

  const labelClass = "mb-2 block text-[11px] font-bold text-[#263A30]";

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      <main className="flex flex-1 flex-col items-center px-5 pb-14 pt-12">
        <div className="w-full max-w-[1000px] rounded-[24px] bg-white p-6 shadow-[0_8px_28px_rgba(35,65,50,0.07)] sm:p-8 lg:p-10">
          {/* 진행 단계 */}
          <div className="mb-6 flex items-center gap-2 text-[9px] text-[#829087] sm:gap-3 sm:text-[10px]">
            {["업주 정보", "매장 등록", "사업자 인증", "가입 완료"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex min-w-0 flex-1 items-center gap-1.5"
                >
                  <span
                    className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                      index < 3
                        ? "bg-[#29483B] text-white"
                        : "bg-[#EDF2EB] text-[#829087]"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span
                    className={`whitespace-nowrap ${
                      index === 2 ? "font-bold text-[#29483B]" : ""
                    }`}
                  >
                    {step}
                  </span>

                  {index < 3 && (
                    <div
                      className={`h-px min-w-2 flex-1 ${
                        index < 2 ? "bg-[#A8BBAE]" : "bg-[#E5EAE4]"
                      }`}
                    />
                  )}
                </div>
              ),
            )}
          </div>

          {/* 제목 */}
          <div className="mb-6">
            <p className="mb-1 text-[10px] font-bold tracking-wide text-[#52745F]">
              BUSINESS VERIFICATION
            </p>

            <h1 className="text-2xl font-extrabold leading-tight sm:text-[28px]">
              마지막으로 사업자를 인증해 주세요
            </h1>

            <p className="mt-2 text-[11px] leading-5 text-[#718077]">
              정확한 매장 정보와 안전한 운영을 위해 사업자등록증을 확인합니다.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_0.85fr]">
              {/* 사업자 정보 */}
              <section className="rounded-[20px] border border-[#E5EAE4] p-4 sm:p-5">
                <h2 className="mb-3 text-[15px] font-extrabold">
                  사업자등록번호
                </h2>

                <p className="mb-4 text-[10px] leading-5 text-[#829087]">
                  숫자 10자리를 입력하면 국세청 사업자 정보를 확인할 수 있어요.
                </p>

                <label htmlFor="businessNumber" className={labelClass}>
                  사업자등록번호
                  <span className="ml-1 text-[#52745F]">· 번호 확인 완료</span>
                </label>

                <input
                  id="businessNumber"
                  name="businessNumber"
                  value={form.businessNumber}
                  onChange={handleBusinessNumberChange}
                  placeholder="123-45-67890"
                  inputMode="numeric"
                  className={inputClass}
                  required
                />

                <p className="mt-2 text-[10px] text-[#829087]">
                  사업자등록증에 표시된 번호를 입력해 주세요.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="representativeName" className={labelClass}>
                      대표자명
                    </label>

                    <input
                      id="representativeName"
                      name="representativeName"
                      value={form.representativeName}
                      onChange={handleChange}
                      placeholder="대표자 이름"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="openingDate" className={labelClass}>
                      개업일자
                    </label>

                    <input
                      id="openingDate"
                      name="openingDate"
                      type="date"
                      value={form.openingDate}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </section>

              {/* 심사 안내 */}
              <section className="rounded-[20px] bg-[#F2E8D5] p-4 sm:p-5">
                <h2 className="mb-4 text-[14px] font-extrabold">심사 안내</h2>

                <div className="space-y-4">
                  {[
                    {
                      number: 1,
                      title: "제출",
                      description: "입력 정보와 서류를 안전하게 접수",
                    },
                    {
                      number: 2,
                      title: "검토",
                      description: "영업일 기준 1~3일 내 확인",
                    },
                    {
                      number: 3,
                      title: "완료",
                      description: "이메일과 알림으로 결과 안내",
                    },
                  ].map((item) => (
                    <div key={item.number} className="flex items-start gap-3">
                      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#29483B]">
                        {item.number}
                      </span>

                      <div>
                        <p className="text-[11px] font-bold">{item.title}</p>

                        <p className="mt-1 text-[9px] leading-4 text-[#829087]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 증빙 서류 */}
              <section className="rounded-[20px] bg-[#EDF2EB] p-4 sm:p-5">
                <h2 className="mb-3 text-[14px] font-extrabold">증빙 서류</h2>

                <p className="mb-4 text-[10px] leading-5 text-[#718077]">
                  사업자등록증 또는 사업자등록증명을 올려주세요.
                </p>

                <label className="flex min-h-[105px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#D8E0D7] bg-white px-4 py-5 text-center transition hover:border-[#29483B]">
                  <span className="mb-2 text-xl text-[#52745F]">
                    <icon name="camera" size="xl" />
                  </span>

                  <span className="text-[11px] font-bold">
                    파일을 끌어놓거나 선택하세요
                  </span>

                  <span className="mt-1 text-[9px] text-[#829087]">
                    PDF, JPG, PNG · 최대 10MB
                  </span>

                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {file && (
                  <div className="mt-3 flex items-center gap-2 rounded-xl bg-white px-3 py-3">
                    <icon name="file-check" size="lg" color="#29483B" />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[10px] font-bold">
                        {file.name}
                      </p>

                      <p className="mt-1 text-[9px] text-[#829087]">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-[10px] text-[#B66C62] hover:underline"
                    >
                      삭제
                    </button>
                  </div>
                )}
              </section>

              {/* 제출 상태 */}
              <section className="rounded-[20px] bg-[#EDF2EB] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h2 className="text-[14px] font-extrabold">제출 상태</h2>

                  <span className="text-[9px] font-bold text-[#52745F]">
                    {file &&
                    form.businessNumber.replace(/\D/g, "").length === 10
                      ? "서류 확인 필요"
                      : "제출 준비 중"}
                  </span>
                </div>

                <div className="space-y-3 text-[10px] text-[#718077]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#29483B]">
                      {form.businessNumber.replace(/\D/g, "").length === 10
                        ? "✓"
                        : "○"}
                    </span>
                    사업자 정보 입력
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#29483B]">
                      {file ? "✓" : "○"}
                    </span>
                    증빙 서류 첨부
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#29483B]">
                      {previousState.ownerInfo || previousState.storeInfo
                        ? "✓"
                        : "○"}
                    </span>
                    매장 정보 입력 완료
                  </div>
                </div>

                <p className="mt-4 border-t border-[#DDE5DB] pt-3 text-[9px] leading-4 text-[#829087]">
                  제출 후 관리자 검토가 완료되면 결과를 안내해 드립니다.
                </p>
              </section>
            </div>

            {/* 개인정보 동의 */}
            <label className="mt-4 flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-[#EDF2EB] px-3 py-3 text-[10px] leading-5 text-[#718077]">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="h-4 w-4 shrink-0 accent-[#29483B]"
                />
                사업자 정보 확인 및 운영 권한 심사를 위한 개인정보 조회에
                동의합니다.
              </span>

              <button
                type="button"
                onClick={() =>
                  alert("개인정보 조회 동의 안내를 표시할 영역입니다.")
                }
                className="shrink-0 font-bold text-[#29483B]"
              >
                보기
              </button>
            </label>

            {/* 하단 버튼 */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() =>
                  navigate("/owner-signup/2", {
                    state: previousState,
                  })
                }
                className="flex h-10 items-center justify-center rounded-xl border border-[#E0E6DF] px-4 text-[10px] font-bold text-[#29483B] transition hover:bg-[#EDF2EB]"
              >
                이전: 매장 등록
              </button>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex h-10 items-center justify-center rounded-xl bg-[#EDF2EB] px-5 text-[10px] font-bold text-[#29483B] transition hover:bg-[#E0E9DF]"
                >
                  임시 저장
                </button>

                <button
                  type="submit"
                  className="flex h-10 items-center justify-center gap-1 rounded-xl bg-[#29483B] px-5 text-[10px] font-bold text-white transition hover:bg-[#203A30]"
                >
                  인증 심사 제출
                  <span>›</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
