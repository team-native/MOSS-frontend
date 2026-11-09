import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

const userBenefits = [
  "맞춤 공간 탐색과 찜 목록",
  "리뷰 작성과 소소한 기록",
  "방문 기록과 큐레이션 저장",
];

const ownerBenefits = [
  "공간 등록 및 운영 정보 관리",
  "편의시설과 이용 정책 안내",
  "사용자 피드백과 제보 확인",
];

function BenefitList({ items }) {
  return (
    <ul className="space-y-1.5 text-[12px] text-[#53665A]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <img
            src="/src/assets/check-circle.png"
            alt=""
            className="h-[14px] w-[14px] shrink-0 object-contain"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      <main className="w-full flex-1 px-5 py-8">
        <div className="mx-auto w-full max-w-[1000px]">
          {/* 회원가입 단계 */}
          <div className="mx-auto mb-4 flex max-w-[500px] items-center gap-3 text-[10px] text-[#829087]">
            <div className="flex items-center gap-2 whitespace-nowrap text-[#29483B]">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                1
              </span>
              <span className="font-bold">유형 선택</span>
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EAF0E9]">
                2
              </span>
              정보 입력
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EAF0E9]">
                3
              </span>
              가입 완료
            </div>
          </div>

          {/* 페이지 제목 */}
          <section className="mb-5">
            <p className="mb-2 text-[10px] font-bold tracking-wider text-[#4F705E]">
              JOIN MOSS
            </p>

            <h1 className="mb-2 text-[30px] font-extrabold leading-tight tracking-tight">
              나에게 맞는 역할을 선택해주세요
            </h1>

            <p className="text-xs leading-5 text-[#718077]">
              이용 목적에 맞는 회원 유형을 선택해 주세요. 가입 후에도 계정
              설정에서 전환을 요청할 수 있어요.
            </p>
          </section>

          {/* 회원 유형 선택 카드 */}
          <div className="grid w-full grid-cols-1 justify-center gap-5 sm:grid-cols-2">
            {/* 사용자 회원 */}
            <section
              onClick={() => navigate("/signup/user")}
              className="group box-border flex min-h-[360px] w-full cursor-pointer flex-col gap-[22px] rounded-[20px] border-2 border-[#E0E6DF] bg-white p-7 transition-colors duration-200 hover:border-[#29483B] hover:bg-[#F0F4EE] sm:w-[473px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDF2EB] text-[#29483B] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
                  </svg>
                </div>

                <span className="rounded-full bg-[#EDF2EB] px-3 py-1 text-[10px] font-bold text-[#536F5E] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white">
                  추천
                </span>
              </div>

              <div>
                <h2 className="mb-2 text-[23px] font-extrabold leading-none tracking-normal">
                  사용자 회원
                </h2>

                <p className="text-[13px] leading-[1.7] text-[#718077]">
                  공부와 작업에 꼭 맞는 공간을 찾고,
                  <br />
                  나만의 장소 기록을 만들어 보세요.
                </p>
              </div>

              <BenefitList items={userBenefits} />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  navigate("/signup/user");
                }}
                className="mt-auto flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-[#29483B] bg-white text-sm font-bold text-[#29483B] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white"
              >
                사용자로 계속하기 <span>→</span>
              </button>
            </section>

            {/* 업주 회원 */}
            <section
              onClick={() => navigate("/signup/owner")}
              className="group box-border flex min-h-[360px] w-full cursor-pointer flex-col gap-[22px] rounded-[20px] border-2 border-[#E0E6DF] bg-white p-7 transition-colors duration-200 hover:border-[#29483B] hover:bg-[#F0F4EE] sm:w-[473px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDF2EB] text-[#29483B] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M4 10V20H20V10" />
                    <path d="M3 10L5.5 4H18.5L21 10" />
                    <path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                    <path d="M9 20V14H15V20" />
                  </svg>
                </div>

                <span className="rounded-full bg-[#EDF2EB] px-3 py-1 text-[10px] font-bold text-[#536F5E] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white">
                  BUSINESS
                </span>
              </div>

              <div>
                <h2 className="mb-2 text-[23px] font-extrabold leading-none tracking-normal">
                  업주 회원
                </h2>

                <p className="text-[13px] leading-[1.7] text-[#718077]">
                  내 공간의 정보를 직접 관리하고,
                  <br />
                  찾는 사람들에게 정확한 소식을 전해 보세요.
                </p>
              </div>

              <BenefitList items={ownerBenefits} />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  navigate("/signup/owner");
                }}
                className="mt-auto flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-[#29483B] bg-white text-sm font-bold text-[#29483B] transition-colors duration-200 group-hover:bg-[#29483B] group-hover:text-white"
              >
                업주로 선택하기 <span>→</span>
              </button>
            </section>
          </div>

          {/* 업주 회원 안내 */}
          <div className="mx-auto mt-5 flex w-fit max-w-full items-center gap-2 rounded-full bg-[#EAF0E9] px-3 py-2 text-[9px] text-[#718077]">
            <span className="font-bold text-[#4F705E]">ⓘ</span>
            업주 회원은 사업자 또는 공간 운영 확인 절차가 추가로 진행됩니다.
          </div>

          {/* 로그인 링크 */}
          <p className="mt-5 text-center text-[11px] text-[#718077]">
            이미 회원이신가요?{" "}
            <Link
              to="/login"
              className="font-bold text-[#29483B] hover:underline"
            >
              로그인
            </Link>
          </p>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
