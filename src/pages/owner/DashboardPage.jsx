import { Link } from "react-router-dom";

// 통계 카드
function StatCard({ value, label, description }) {
  return (
    <div className="rounded-2xl border border-[#E5EAE4] bg-white p-4">
      <div className="flex items-center gap-2">
        <strong className="text-2xl font-extrabold text-[#263A30]">
          {value}
        </strong>
        <span className="text-xs text-[#53665A]">{label}</span>
      </div>

      <p className="mt-1 text-xs text-[#829087]">{description}</p>
    </div>
  );
}

// 최근 리뷰
function ReviewItem({ name, content, rating, status }) {
  const isAnswered = status === "답글 완료";

  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#EAEFEA] py-3 last:border-0">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <strong className="text-xs text-[#263A30]">{name}</strong>
          <span className="text-xs text-[#E69A43]">★ {rating}</span>
        </div>

        <p className="mt-1 truncate text-xs text-[#829087]">{content}</p>
      </div>

      <span
        className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
          isAnswered
            ? "bg-[#EDF2EB] text-[#52745F]"
            : "bg-[#F8F0DF] text-[#C18A36]"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

// 빠른 작업
function QuickAction({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-between rounded-lg bg-white px-3 py-3 text-xs font-bold text-[#263A30] transition hover:bg-[#F7F5EE]"
    >
      <span className="flex items-center gap-2">
        <span className="text-[#52745F]">{icon}</span>
        {label}
      </span>

      <span className="text-[#A0AAA2]">›</span>
    </Link>
  );
}

// 운영 현황 카드
function StatusCard({ title, buttonText, children, background }) {
  return (
    <section className={`rounded-2xl p-5 ${background}`}>
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-sm font-extrabold text-[#263A30]">{title}</h2>

        <button
          type="button"
          className="rounded-lg border border-[#E0E6DF] bg-white px-3 py-2 text-xs font-bold text-[#29483B] transition hover:bg-[#F7F5EE]"
        >
          {buttonText}
        </button>
      </div>

      {children}
    </section>
  );
}

export default function DashboardPage() {
  const stats = [
    {
      value: "8,420",
      label: "이번 달 조회",
      description: "지난달보다 +12.8%",
    },
    {
      value: "684",
      label: "길찾기 클릭",
      description: "전월 대비 +8.1%",
    },
    {
      value: "92",
      label: "신규 찜",
      description: "이번 주 +18",
    },
    {
      value: "14",
      label: "새 리뷰",
      description: "평균 별점 4.8",
    },
  ];

  const reviews = [
    {
      name: "게머리뚜껑찜생체",
      content: "하늘다락처럼 쉬어갔어요.",
      rating: "5.0",
      status: "답글 필요",
    },
    {
      name: "돼지토끼",
      content: "넓고 쾌적해요!",
      rating: "4.5",
      status: "답글 완료",
    },
    {
      name: "용봉동불주먹",
      content: "시간권 가격이 합리적이고 조용해서 좋습니다.",
      rating: "4.8",
      status: "답글 필요",
    },
  ];

  return (
    <main className="mx-auto min-h-[1060px] w-full max-w-[1440px] bg-[#F7F5EE] px-5 pb-10 pt-[52px] sm:px-8 sm:pb-[72px] lg:px-[72px]">
      {/* 페이지 제목 */}
      <section className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-bold tracking-wide text-[#52745F]">
            BUSINESS DASHBOARD
          </p>

          <h1 className="text-2xl font-extrabold text-[#18271F] sm:text-[32px]">
            안녕하세요, 치이카와님
          </h1>

          <p className="mt-2 text-xs text-[#829087]">
            에이밍 스터디카페의 오늘 운영 현황을 한눈에 확인하세요.
          </p>
        </div>

        <Link
          to="/owner/store"
          className="shrink-0 rounded-xl bg-[#29483B] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#203A30]"
        >
          매장 정보 수정 ›
        </Link>
      </section>

      {/* 매장 정보 */}
      <section className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#52745F] p-5 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-[76px] items-center justify-center rounded-xl bg-[#EDF2EB] text-3xl">
            🐰
          </div>

          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#29483B]">
                운영 중
              </span>

              <span className="text-[10px] text-white/70">
                사업자 인증 완료
              </span>
            </div>

            <h2 className="text-base font-extrabold">
              에이밍 스터디카페 용봉점
            </h2>

            <p className="mt-1 text-xs text-white/70">
              광주 북구 용봉로 77, 3층 · 24시간 운영
            </p>
          </div>
        </div>

        <div className="flex gap-6 text-center">
          <div>
            <strong className="text-xl">4.8</strong>
            <p className="text-[10px] text-white/70">평균 평점</p>
          </div>

          <div>
            <strong className="text-xl">126</strong>
            <p className="text-[10px] text-white/70">누적 리뷰</p>
          </div>

          <div>
            <strong className="text-xl">1,204</strong>
            <p className="text-[10px] text-white/70">찜</p>
          </div>
        </div>
      </section>

      {/* 주요 통계 */}
      <section className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {/* 최근 리뷰와 빠른 작업 */}
      <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-[2.2fr_0.85fr]">
        <div className="rounded-2xl border border-[#E5EAE4] bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-extrabold text-[#263A30]">
              최근 리뷰
            </h2>

            <Link
              to="/owner/review"
              className="text-xs font-bold text-[#29483B] hover:underline"
            >
              리뷰 관리 →
            </Link>
          </div>

          <p className="mb-2 text-xs text-[#829087]">
            새로운 의견에 빠르게 답글을 남겨보세요.
          </p>

          {reviews.map((review) => (
            <ReviewItem key={review.name} {...review} />
          ))}
        </div>

        <div className="rounded-2xl bg-[#F1E7D3] p-5">
          <h2 className="mb-3 text-base font-extrabold text-[#263A30]">
            빠른 작업
          </h2>

          <div className="space-y-2">
            <QuickAction
              icon="◷"
              label="오늘 운영 시간 변경"
              to="/owner/store"
            />

            <QuickAction icon="▪" label="이용권 가격 수정" to="/owner/store" />

            <QuickAction icon="+" label="매장 사진 추가" to="/owner/store" />

            <QuickAction icon="▪" label="새 이벤트 등록" to="/owner/event" />

            <QuickAction icon="◯" label="미답변 리뷰 확인" to="/owner/review" />
          </div>
        </div>
      </section>

      {/* 하단 운영 현황 */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr]">
        <StatusCard
          title="이벤트 상태"
          buttonText="이벤트 관리"
          background="border border-[#E5EAE4] bg-white"
        >
          <div className="flex items-center justify-between gap-2">
            <strong className="text-xs text-[#263A30]">
              시험기간 야간권 20% 할인
            </strong>

            <span className="shrink-0 rounded-full bg-[#F8F0DF] px-2 py-1 text-[10px] font-bold text-[#C18A36]">
              진행 중
            </span>
          </div>

          <p className="mt-3 text-xs text-[#829087]">2026.10.01 ~ 2026.10.31</p>

          <p className="mt-2 text-xs text-[#829087]">
            쿠폰 보기 286회 · 저장 42회
          </p>
        </StatusCard>

        <StatusCard
          title="광고 상태"
          buttonText="광고 관리"
          background="bg-[#EDF2EB]"
        >
          <div className="flex items-center justify-between gap-2">
            <strong className="text-xs text-[#263A30]">
              지역 검색 상단 노출
            </strong>

            <span className="text-[10px] font-bold text-[#52745F]">
              승인 완료
            </span>
          </div>

          <p className="mt-3 text-xs text-[#829087]">2026.10.05 ~ 2026.11.04</p>

          <p className="mt-2 text-xs text-[#829087]">결제 완료 · 59,000원</p>
        </StatusCard>

        <section className="rounded-2xl bg-[#EDF2EB] p-5">
          <h2 className="mb-3 text-base font-extrabold text-[#263A30]">
            운영 알림
          </h2>

          <ul className="space-y-2 text-xs leading-5 text-[#718077]">
            <li>
              · 가격 정보가 30일 전에 확인되었어요.
              <br />
              최신 정보인지 검토해 주세요.
            </li>

            <li>· 10월 광고가 승인되어 10월 5일부터 노출됩니다.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
