import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

export default function OwnerSignupPage1() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    managerName: "",
    position: "대표",
    phone: "",
    email: "",
    businessName: "",
    representativeName: "",
    businessType: "개인사업자",
    industry: "",
    address: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  // 수정! 입력값이 변경되면 해당 항목의 상태를 갱신
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.managerName.trim()) {
      alert("담당자 이름을 입력해 주세요.");
      return;
    }

    if (!form.phone.trim()) {
      alert("휴대폰 번호를 입력해 주세요.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert("올바른 업무 이메일을 입력해 주세요.");
      return;
    }

    if (!form.businessName.trim()) {
      alert("상호명을 입력해 주세요.");
      return;
    }

    if (!form.representativeName.trim()) {
      alert("대표자명을 입력해 주세요.");
      return;
    }

    if (!form.industry) {
      alert("업종을 선택해 주세요.");
      return;
    }

    if (!form.address.trim()) {
      alert("사업장 소재지를 입력해 주세요.");
      return;
    }

    if (!confirmed) {
      alert("사업자 정보 확인에 동의해 주세요.");
      return;
    }

    // 수정! 다음 페이지에서 입력한 정보를 사용할 수 있도록 전달
    navigate("/owner-signup/2", {
      state: {
        ownerInfo: form,
        confirmed,
      },
    });
  }

  const inputClass =
    "h-9 w-full rounded-xl border border-[#E0E6DF] bg-white px-3 text-xs text-[#263A30] outline-none transition focus:border-[#29483B] focus:ring-1 focus:ring-[#29483B]/20";

  const labelClass = "mb-1.5 block text-[11px] font-bold text-[#263A30]";

  const sectionClass = "rounded-[20px] border border-[#E5EAE4] p-4 sm:p-5";

  const industries = [
    "카페",
    "음식점",
    "베이커리",
    "공방",
    "독립서점",
    "문화·예술 공간",
    "스터디카페",
    "기타",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      {/* 페이지 본문 */}
      <main className="flex flex-1 flex-col items-center px-5 py-8 sm:py-12">
        {/* 수정! 디자인 기준 너비 1000px, 화면이 작으면 반응형으로 축소 */}
        <div className="w-full max-w-[1000px] rounded-[24px] bg-white px-5 py-7 shadow-[0_8px_28px_rgba(35,65,50,0.07)] sm:px-8 sm:py-9 lg:px-10">
          {/* 진행 단계 */}
          <div className="mb-6 flex items-center gap-2 text-[9px] text-[#829087] sm:gap-3 sm:text-[10px]">
            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-bold text-[#29483B] sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                1
              </span>
              업주 정보
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                2
              </span>
              매장 등록
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                3
              </span>
              사업자 인증
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                4
              </span>
              가입 완료
            </div>
          </div>

          {/* 페이지 제목 */}
          <div className="mb-5">
            <p className="mb-1 text-[10px] font-bold tracking-wide text-[#52745F]">
              OWNER INFORMATION
            </p>

            <h1 className="text-[24px] font-extrabold leading-tight sm:text-[28px]">
              업주 기본 정보를 알려주세요
            </h1>

            <p className="mt-2 text-[11px] leading-5 text-[#718077]">
              매장을 안전하게 관리할 담당자와 사업자 기본 정보를 입력해 주세요.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 담당자 정보 */}
            <section className="mb-4 rounded-[20px] bg-[#EDF2EB] p-4 sm:p-5">
              <h2 className="mb-2 text-[14px] font-extrabold">담당자 정보</h2>

              <p className="mb-3 text-[10px] leading-5 text-[#718077]">
                심사와 매장 운영 관련 안내를 받을 분의 정보예요.
              </p>

              <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
                {/* 담당자 이름 */}
                <div>
                  <label htmlFor="managerName" className={labelClass}>
                    담당자 이름
                  </label>

                  <input
                    id="managerName"
                    name="managerName"
                    value={form.managerName}
                    onChange={handleChange}
                    placeholder="이름을 입력해 주세요"
                    autoComplete="name"
                    className={inputClass}
                    required
                  />
                </div>

                {/* 직책 */}
                <div>
                  <label htmlFor="position" className={labelClass}>
                    직책
                  </label>

                  <select
                    id="position"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="대표">대표</option>
                    <option value="점장">점장</option>
                    <option value="매니저">매니저</option>
                    <option value="직원">직원</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                {/* 휴대폰 번호 */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <label htmlFor="phone" className="text-[11px] font-bold">
                      휴대폰 번호
                    </label>

                    <span className="text-[9px] font-medium text-[#52745F]">
                      인증 예정
                    </span>
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

                {/* 업무 이메일 */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    업무 이메일
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="owner@example.com"
                    autoComplete="email"
                    className={inputClass}
                    required
                  />

                  <p className="mt-1 text-[9px] text-[#829087]">
                    심사 결과와 주요 운영 알림을 보내드려요.
                  </p>
                </div>
              </div>
            </section>

            {/* 사업자 기본 정보 */}
            <section className={`${sectionClass} mb-4`}>
              <h2 className="mb-2 text-[14px] font-extrabold">
                사업자 기본 정보
              </h2>

              <p className="mb-3 text-[10px] leading-5 text-[#718077]">
                사업자등록증과 동일하게 입력해 주세요.
              </p>

              <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
                {/* 상호명 */}
                <div>
                  <label htmlFor="businessName" className={labelClass}>
                    상호명
                  </label>

                  <input
                    id="businessName"
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="상호명을 입력해 주세요"
                    className={inputClass}
                    required
                  />
                </div>

                {/* 대표자명 */}
                <div>
                  <label htmlFor="representativeName" className={labelClass}>
                    대표자명
                  </label>

                  <input
                    id="representativeName"
                    name="representativeName"
                    value={form.representativeName}
                    onChange={handleChange}
                    placeholder="대표자명을 입력해 주세요"
                    className={inputClass}
                    required
                  />
                </div>

                {/* 사업자 유형 */}
                <div>
                  <label htmlFor="businessType" className={labelClass}>
                    사업자 유형
                  </label>

                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="개인사업자">개인사업자</option>
                    <option value="법인사업자">법인사업자</option>
                  </select>
                </div>

                {/* 업종 */}
                <div>
                  <label htmlFor="industry" className={labelClass}>
                    업종
                  </label>

                  <select
                    id="industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">업종을 선택해 주세요</option>

                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 사업장 소재지 */}
                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClass}>
                    사업장 소재지
                    <span className="mx-2 text-[#829087]">·</span>
                    주소 검색
                  </label>

                  <input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="사업장 주소를 입력해 주세요"
                    autoComplete="street-address"
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </section>

            {/* 정보 확인 */}
            <label className="mb-4 flex min-h-[38px] cursor-pointer items-center gap-2 rounded-xl bg-[#F2E8D5] px-3 py-2 text-[10px] leading-5 text-[#718077]">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(event) => setConfirmed(event.target.checked)}
                className="h-[15px] w-[15px] shrink-0 accent-[#29483B]"
                required
              />

              <span>
                입력한 정보가 사실과 다르지 않으며, 매장 운영 권한을 보유하고
                있음을 확인합니다.
              </span>
            </label>

            {/* 이전 / 다음 버튼 */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="flex h-9 items-center justify-center rounded-xl border border-[#E0E6DF] px-3 text-[10px] font-bold text-[#29483B] transition hover:bg-[#EDF2EB]"
              >
                이전: 유형 선택
              </button>

              <button
                type="submit"
                className="flex h-9 items-center justify-center gap-1 rounded-xl bg-[#29483B] px-4 text-[10px] font-bold text-white transition-colors hover:bg-[#203A30]"
              >
                다음: 매장 등록
                <span>›</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
