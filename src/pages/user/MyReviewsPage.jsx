import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewIcon({ className = "w-4 h-4" }) {
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

function SpotIcon({ className = "w-4 h-4" }) {
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

function HeartIcon({ className = "w-4 h-4" }) {
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

function UserEditIcon({ className = "w-4 h-4" }) {
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

const initialReviews = [
  {
    id: 1,
    name: "에이밍 스터디카페",
    rating: 4.8,
    date: "2026.09.28",
    content: "가끔 이상한 토끼가 오는 거 빼곤 진짜 최고의 스카입니다.",
    tags: ["매우 조용", "콘센트 많음", "재방문"],
    likes: 26,
  },
  {
    id: 2,
    name: "일곡도서관",
    rating: 4.5,
    date: "2026.09.12",
    content:
      "일단 도서관이라 무료라서 좋아요 !!!! 동족들도 이상한 모몽가 같은 애들 없고 다 좋은 면작귀들만 와서 공부하기 딱입니다.",
    tags: ["무료", "노트북 가능"],
    likes: 26,
  },
  {
    id: 3,
    name: "공부인 스터디카페",
    rating: 5.0,
    date: "2026.08.30",
    content:
      "개인석 조명이 편안하고 의자 높이를 조절할 수 있어 오래 머물기 좋았어요. 야간권 가격도 합리적입니다.",
    tags: ["24시간", "좌석 편안함"],
    likes: 26,
  },
  {
    id: 4,
    name: "이룸24동림푸른마을점",
    rating: 4.3,
    date: "2026.08.16",
    content: "맛있는게 많아서 조아옴 ㅎㅎ 인쇄기도 성능 짱짱합니다.",
    tags: ["통화 가능", "팀 작업"],
    likes: 26,
  },
];

export default function MyReviewsPage() {
  const navigate = useNavigate();
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    window.clearTimeout(window.mossToastTimer);
    window.mossToastTimer = window.setTimeout(() => setToastMessage(""), 2500);
  };

  const handleDelete = (id) => {
    if (window.confirm("이 리뷰를 삭제하시겠습니까?")) {
      setReviewsList((prev) => prev.filter((item) => item.id !== id));
      showToast("리뷰가 삭제되었습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] font-sans text-[#1A2920]">
      {toastMessage && (
        <div
          role="status"
          className="fixed left-1/2 top-5 z-50 flex max-w-[90%] -translate-x-1/2 items-center gap-4 rounded-xl bg-[#29483B] px-5 py-3 text-[13px] text-white shadow-lg"
        >
          {toastMessage}
          <button onClick={() => setToastMessage("")} aria-label="안내 닫기">
            ×
          </button>
        </div>
      )}

      <header className="px-6 pb-6 pt-10 sm:px-10 lg:px-16">
        <span className="text-[11px] font-bold tracking-widest text-[#4F705E]">
          MY REVIEWS
        </span>
        <h1 className="mb-2 mt-1 text-[32px] font-black tracking-tight sm:text-[36px]">
          내가 다녀간 공간 이야기
        </h1>
        <p className="text-[14px] text-[#5D6B63]">
          작성한 리뷰 {reviewsList.length}개를 확인하고 필요한 내용은 바로
          수정할 수 있어요.
        </p>
      </header>

      <main className="grid grid-cols-1 items-start gap-8 px-6 pb-20 sm:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-16">
        <aside className="space-y-4">
          <section className="rounded-[24px] bg-[#4F705E] p-6 text-white">
            <h2 className="text-[13px] font-bold opacity-90">리뷰 활동</h2>
            <p className="mt-1 text-[11px] text-[#E3ECE7]">
              동네의 더 좋은 자리를 만드는 기록
            </p>
            <div className="mt-6 flex items-baseline justify-between border-t border-white/20 pt-4">
              <div>
                <span className="text-[28px] font-black leading-none">
                  {reviewsList.length}
                </span>
                <p className="mt-1 text-[11px] text-[#E3ECE7]">작성 리뷰</p>
              </div>
              <div className="text-right">
                <span className="text-[28px] font-black leading-none">4.7</span>
                <p className="mt-1 text-[11px] text-[#E3ECE7]">평균 별점</p>
              </div>
            </div>
          </section>

          <section className="rounded-[22px] border border-[#E2E8E4] bg-white p-4">
            <p className="mb-3 px-2 text-[11px] font-bold text-[#8E9B93]">
              마이 메뉴
            </p>
            <div className="space-y-1">
              <button
                onClick={() => navigate("/my-reviews")}
                className="flex w-full items-center gap-3 rounded-xl bg-[#EDF2EE] px-3 py-3 text-left text-[13px] font-bold text-[#29483B]"
              >
                <ReviewIcon className="w-4 h-4 text-[#29483B]" />
                <span className="flex-1">내가 쓴 리뷰</span>
                <span className="text-[11px] text-[#4F705E]">
                  {reviewsList.length}
                </span>
              </button>
              <button
                onClick={() => navigate("/reports")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] text-[#5D6B63] transition hover:bg-[#EDF2EE]"
              >
                <SpotIcon className="w-4 h-4" />
                <span className="flex-1 font-medium">내 스팟 제보</span>
                <span className="text-[11px] text-[#8E9B93]">5</span>
              </button>
              <button
                onClick={() => navigate("/favorite")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] text-[#5D6B63] transition hover:bg-[#EDF2EE]"
              >
                <HeartIcon className="w-4 h-4" />
                <span className="flex-1 font-medium">찜 목록</span>
                <span className="text-[11px] text-[#8E9B93]">8</span>
              </button>
              <button
                onClick={() => showToast("회원정보 수정 기능은 준비 중입니다.")}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] text-[#5D6B63] transition hover:bg-[#EDF2EE]"
              >
                <UserEditIcon className="w-4 h-4" />
                <span className="flex-1 font-medium">회원정보 수정</span>
              </button>
            </div>
          </section>
        </aside>

        <section className="min-w-0">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[20px] font-black tracking-tight">작성 리뷰</h2>
            <div className="flex gap-2 text-[12px] text-[#5D6B63]">
              <select className="rounded-lg border border-[#E2E8E4] bg-white px-2.5 py-1.5 focus:outline-none">
                <option>전체 기간</option>
                <option>최근 1개월</option>
                <option>최근 6개월</option>
              </select>
              <select className="rounded-lg border border-[#E2E8E4] bg-white px-2.5 py-1.5 focus:outline-none">
                <option>최신 작성순</option>
                <option>별점 높은순</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {reviewsList.map((item) => (
              <article
                key={item.id}
                className="rounded-[22px] border border-[#E2E8E4] bg-white p-6 transition hover:border-[#CDE0D4]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[18px] font-black tracking-tight">
                      {item.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-[#EAA850]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-[#EAA850]"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-[13px] font-bold text-[#1A2920]">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <time className="text-[12px] text-[#8E9B93]">
                    {item.date}
                  </time>
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-[#3A4A40]">
                  {item.content}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E2E8E4] bg-[#FAF9F5] px-3 py-1 text-[11px] font-medium text-[#5D6B63]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-[#F2F4F2] pt-4">
                  <span className="text-[12px] text-[#8E9B93]">
                    이 리뷰가 도움이 됐어요 {item.likes}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => showToast("수정 기능은 준비 중입니다.")}
                      className="rounded-full border border-[#E2E8E4] px-4 py-1.5 text-[12px] font-bold text-[#29483B] transition hover:bg-[#EDF2EE]"
                    >
                      수정 ›
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="rounded-full border border-[#E2E8E4] px-4 py-1.5 text-[12px] font-bold text-[#C95B4A] transition hover:bg-[#FDF2F0]"
                    >
                      삭제 ›
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
