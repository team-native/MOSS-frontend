import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 아이콘 SVG 컴포넌트들
function ReviewIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

function SpotIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path d="M17.5 8.5c0 4.5-5.5 8.5-5.5 8.5s-5.5-4-5.5-8.5a5.5 5.5 0 1111 0z" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

function HeartIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function UserEditIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="7" r="3" />
      <path d="M4 17a6 6 0 016-6h1" />
      <path d="M13 17l4.5-4.5a1.5 1.5 0 012.12 2.12L15.12 19.12A1.5 1.5 0 0114 19.5H12.5V18a1.5 1.5 0 01.5-1.12z" />
    </svg>
  );
}

function LogoutIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5H7a2 2 0 00-2 2v10a2 2 0 002 2h3" />
      <path d="M13 12h8m-3-3l3 3-3 3" />
    </svg>
  );
}

function TrashIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      <path d="M5 7h14" />
      <path d="M6 7v11a3 3 0 003 3h6a3 3 0 003-3V7" />
      <path d="M10 11v6m4-6v6" />
    </svg>
  );
}

function SproutIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21a9 9 0 009-9H12a9 9 0 00-9 9" />
      <path d="M12 21V11a5 5 0 015-5" />
      <path d="M12 11a5 5 0 00-5-5" />
    </svg>
  );
}

const stats = [
  {
    type: "review",
    number: 14,
    title: "작성한 리뷰",
    desc: "지난달보다 3개 늘었어요",
  },
  {
    type: "spot",
    number: 5,
    title: "내 스팟 제보",
    desc: "4곳이 정보에 반영됐어요",
  },
  {
    type: "heart",
    number: 8,
    title: "찜한 장소",
    desc: "이번 주 새로 2곳을 저장했어요",
  },
];

const places = [
  {
    id: 1,
    name: "에이밍 스터디카페",
    location: "운암동 · 도보 3분",
    mood: "매우 조용",
  },
  {
    id: 2,
    name: "공부인 스터디카페",
    location: "운암동 · 도보 8분",
    mood: "매우 조용",
  },
  { id: 3, name: "일곡도서관", location: "동림동 · 버스 12분", mood: "조용" },
];

const reviews = [
  {
    name: "에이밍 스터디카페",
    rating: "4.8",
    date: "2026.09.28",
    text: "창가 쪽은 오후에도 차분하고 콘센트가 가까워서 공부하기 좋아요.",
  },
  {
    name: "일곡도서관",
    rating: "4.5",
    date: "2026.09.12",
    text: "근처에 숲이 있어서 공부하기 딱 좋아요.",
  },
];

const reports = [
  { name: "메가커피 동림점", status: "정보 반영", date: "09.24" },
  { name: "스타벅스 운암점", status: "정보 확인 중", date: "09.18" },
  { name: "일곡도서관", status: "정보 반영", date: "08.30" },
];

const menu = [
  { type: "review", title: "내가 쓴 리뷰", count: 14 },
  { type: "spot", title: "내 스팟 제보", count: 5 },
  { type: "heart", title: "찜 목록", count: 8 },
];

const accountMenu = [
  { title: "회원정보 수정", icon: UserEditIcon },
  { title: "로그아웃", icon: LogoutIcon },
  { title: "회원탈퇴", icon: TrashIcon },
];

const buttonStyle =
  "rounded-full border border-[#E2E8E4] bg-white px-4 py-2.5 text-[13px] font-bold text-[#29483B] transition hover:bg-[#EDF2EE]";

function renderIcon(type, className = "w-5 h-5") {
  if (type === "review") return <ReviewIcon className={className} />;
  if (type === "spot") return <SpotIcon className={className} />;
  if (type === "heart") return <HeartIcon className={className} />;
  return null;
}

export default function MyPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [saved, setSaved] = useState(places.map((place) => place.id));

  const notify = (text) => {
    setMessage(text);
    window.clearTimeout(window.mossToastTimer);
    window.mossToastTimer = window.setTimeout(() => setMessage(""), 2500);
  };

  const toggleFavorite = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="bg-[#FAF9F5] font-sans text-[#1A2920]">
      <section className="flex flex-col justify-between gap-5 px-6 pb-8 pt-10 sm:px-10 lg:flex-row lg:items-end lg:px-16">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#4F705E]">
            MY MOSS
          </span>
          <h1 className="mb-3 mt-2 text-[32px] font-black tracking-tight sm:text-[38px]">
            나의 공간 기록
          </h1>
          <p className="text-[14px] leading-relaxed text-[#5D6B63]">
            찜한 장소와 내가 남긴 이야기를 한눈에 모아보세요.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <button className={buttonStyle} onClick={() => navigate("/reports")}>
            <span className="inline-flex items-center gap-1.5">
              <SpotIcon className="w-4 h-4 text-[#29483B]" />새 스팟 제보
            </span>
          </button>
          <button
            className="rounded-full bg-[#29483B] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1A2920]"
            onClick={() =>
              notify("회원 정보 수정은 API 연결 후 사용할 수 있어요.")
            }
          >
            ✎ 회원 정보 수정
          </button>
        </div>
      </section>

      {message && (
        <div
          role="status"
          className="fixed left-1/2 top-5 z-50 flex max-w-[90%] -translate-x-1/2 items-center gap-4 rounded-xl bg-[#29483B] px-5 py-3 text-[13px] text-white shadow-lg"
        >
          {message}
          <button onClick={() => setMessage("")} aria-label="안내 닫기">
            ×
          </button>
        </div>
      )}

      <main className="grid grid-cols-1 items-start gap-6 px-6 pb-16 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-16">
        <aside>
          <section className="rounded-[24px] bg-[#4F705E] p-5 text-white sm:p-6">
            <div className="flex items-center gap-4">
              <div className="h-[58px] w-[58px] shrink-0 rounded-full border border-white/40" />
              <div className="min-w-0">
                <h2 className="text-[14px] font-extrabold">
                  제초 5급 노리는 햄스터
                </h2>
                <p className="mt-1.5 break-all text-[11px] text-[#E3ECE7]">
                  s26043@gsm.hs.kr
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-2 border-t border-white/20 pt-4 text-[11px]">
              <span className="rounded-full bg-white/15 px-3 py-1.5">
                대학생 탐험가
              </span>
              <span className="text-[#E3ECE7]">MoSS와 18일째</span>
            </div>
          </section>

          <section className="mt-4 rounded-[22px] border border-[#E2E8E4] bg-white p-4">
            <p className="mb-3 px-2 text-[11px] font-bold text-[#8E9B93]">
              ACTIVITY
            </p>

            {menu.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  if (item.type === "spot") navigate("/reports");
                  else if (item.type === "heart") navigate("/favorite");
                  else notify(`${item.title} 페이지는 준비 중이에요.`);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-2.5 py-3 text-left text-[13px] text-[#5D6B63] transition hover:bg-[#EDF2EE]"
              >
                <span className="text-[#5D6B63]">
                  {renderIcon(item.type, "w-5 h-5")}
                </span>
                <span className="flex-1 font-medium">{item.title}</span>
                <span className="text-[11px] text-[#8E9B93]">{item.count}</span>
                <span>›</span>
              </button>
            ))}

            <div className="my-3 border-t border-[#E2E8E4]" />
            <p className="mb-3 px-2 text-[11px] font-bold text-[#8E9B93]">
              ACCOUNT
            </p>

            {accountMenu.map(({ title, icon: Icon }) => (
              <button
                key={title}
                onClick={() =>
                  notify(`${title} 기능은 백엔드 연결 후 사용할 수 있어요.`)
                }
                className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-3 text-left text-[13px] transition hover:bg-[#EDF2EE] ${
                  title === "회원탈퇴" ? "text-[#C95B4A]" : "text-[#5D6B63]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${title === "회원탈퇴" ? "text-[#C95B4A]" : "text-[#5D6B63]"}`}
                />
                <span className="flex-1 font-medium">{title}</span>
                <span>›</span>
              </button>
            ))}
          </section>
        </aside>

        <div className="min-w-0">
          <section>
            <h2 className="text-[24px] font-black tracking-tight">활동 요약</h2>
            <p className="mt-2 text-[14px] text-[#5D6B63]">
              동네의 좋은 자리를 함께 발견한 기록이에요.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <article
                  key={item.title}
                  onClick={() => {
                    if (item.type === "spot") navigate("/reports");
                    else if (item.type === "heart") navigate("/favorite");
                  }}
                  className={`flex min-w-0 items-center gap-4 rounded-[22px] border border-[#E2E8E4] bg-white p-5 transition ${
                    item.type !== "review"
                      ? "cursor-pointer hover:border-[#29483B]"
                      : ""
                  }`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#EDF2EE] text-[#5D6B63]">
                    {renderIcon(item.type, "w-6 h-6")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <strong className="text-[26px] font-black">
                        {item.number}
                      </strong>
                      <span className="text-[13px] font-bold">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-[#8E9B93]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-[24px] font-black tracking-tight">
                  최근 찜한 장소
                </h2>
                <p className="mt-2 text-[14px] text-[#5D6B63]">
                  다시 가고 싶은 공간을 모아두었어요.
                </p>
              </div>
              <button
                onClick={() => navigate("/favorite")}
                className="text-[13px] font-bold text-[#29483B] hover:underline"
              >
                찜 목록 전체 보기 →
              </button>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {places.map((place) => (
                <article
                  key={place.id}
                  className="overflow-hidden rounded-[22px] border border-[#E2E8E4] bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative m-2">
                    <div className="aspect-[1.7/1] w-full rounded-[15px] bg-[#E3ECE7]" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#4F705E]">
                      {place.mood}
                    </span>
                    <button
                      aria-label={
                        saved.includes(place.id)
                          ? `${place.name} 찜 해제`
                          : `${place.name} 찜하기`
                      }
                      onClick={() => toggleFavorite(place.id)}
                      className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[23px] shadow-sm transition ${
                        saved.includes(place.id)
                          ? "text-[#4F705E]"
                          : "text-[#8E9B93]"
                      }`}
                    >
                      {saved.includes(place.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="p-4 pt-2">
                    <h3 className="text-[16px] font-extrabold">{place.name}</h3>
                    <p className="mt-1.5 text-[12px] text-[#8E9B93]">
                      {place.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="rounded-[22px] border border-[#E2E8E4] bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-[#E2E8E4] pb-4">
                <h2 className="text-[19px] font-extrabold">최근 작성한 리뷰</h2>
                <button
                  onClick={() => notify("리뷰 전체 보기는 준비 중이에요.")}
                  className="text-[12px] font-bold text-[#4F705E]"
                >
                  전체 보기
                </button>
              </div>

              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="border-b border-[#E2E8E4] py-5 last:border-0 last:pb-1"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[14px] font-bold">{review.name}</h3>
                    <span className="shrink-0 text-[12px] font-bold text-[#EAA850]">
                      ★ {review.rating}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-[#5D6B63]">
                    {review.text}
                  </p>
                  <time className="mt-2 block text-[11px] text-[#8E9B93]">
                    {review.date}
                  </time>
                </article>
              ))}
            </div>

            <div className="rounded-[22px] border border-[#E4D9C5] bg-[#F1E7D4] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-[#E4D9C5] pb-4">
                <h2 className="text-[19px] font-extrabold text-[#1A2920]">
                  내 스팟 제보
                </h2>
                <button
                  onClick={() => navigate("/reports")}
                  className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#29483B] hover:bg-[#EDF2EE]"
                >
                  4곳 반영 ›
                </button>
              </div>

              <div className="py-2">
                {reports.map((report) => (
                  <div
                    key={report.name}
                    onClick={() => navigate("/reports")}
                    className="flex min-h-[52px] cursor-pointer items-center gap-2.5 rounded-lg transition hover:bg-white/40 px-1"
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        report.status === "정보 반영"
                          ? "bg-[#29483B]"
                          : "bg-[#EAA850]"
                      }`}
                    />
                    <strong className="min-w-0 flex-1 text-[12px] font-bold">
                      {report.name}
                    </strong>
                    <span className="text-[10px] text-[#5D6B63]">
                      {report.status}
                    </span>
                    <time className="text-[10px] text-[#8E9B93]">
                      {report.date}
                    </time>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-[16px] bg-white/80 p-4 shadow-sm">
                <SproutIcon className="w-5 h-5 text-[#29483B] shrink-0" />
                <p className="text-[12px] leading-5 text-[#5D6B63]">
                  당신의 제보가 동네의 더 좋은 자리를 발견하게 해요.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
