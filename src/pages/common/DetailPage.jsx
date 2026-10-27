import { useState } from "react";

function StarIcon({ className = "w-4 h-4 text-amber-400" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

function HeartIcon({ className = "w-4 h-4", filled = false }) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

export default function DetailPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1204);

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const infoList = [
    { label: "주소", val: "전남광주 북구 비엔날레로 87 (용봉동)" },
    { label: "운영 시간", val: "매일 00:00~24:00" },
    { label: "시간당 가격", val: "1시간 2,500원 · 4시간 8,000원" },
    { label: "연령 제한", val: "중학생 이상 이용 가능" },
    { label: "소음 정도", val: "매우 조용 · 대화존 분리" },
    { label: "콘센트·와이파이", val: "전 좌석 콘센트 · 5GHz Wi-Fi" },
    { label: "통화 가능", val: "별도 통화 부스에서 가능" },
    { label: "노트북 가능", val: "전 좌석 가능 · 키보드 소음 주의" },
    { label: "학교와의 거리", val: "전남대학교 정문에서 도보 7분" },
  ];

  const mentionTags = [
    { label: "콘센트 많음", count: 89 },
    { label: "매우 조용", count: 74 },
    { label: "좌석 편안함", count: 63 },
    { label: "조도 안정적", count: 41 },
  ];

  const reviews = [
    {
      id: 1,
      user: "개머리판을플란생명체",
      rating: "5.0",
      date: "2026.09.28",
      content:
        "어떤 이상한 파놈 다람쥐가 붙어서 딱 일할 공간이 필요했는데 너무 조용하고 시설도 좋아서 3일 정도 잘 머물다 갑니다 ㅎㅎ",
      reply: "업주 답글 · 후기 감사합니다!!",
    },
    {
      id: 2,
      user: "돼지토끼",
      rating: "4.5",
      date: "2026.09.21",
      content: "굿굿~",
      reply: null,
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F5] text-[#1E2521] py-8 pb-20 font-sans">
      <main className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <nav className="text-xs text-[#8C9C93] mb-6 flex items-center gap-1.5">
          <span>카페 찾기</span>
          <span>›</span>
          <span>광주 북구</span>
          <span>›</span>
          <span className="text-[#29483B] font-semibold">
            에이밍 스터디카페
          </span>
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          <div className="md:col-span-2 bg-[#EAEFEA] h-[340px] sm:h-[420px] rounded-[24px] relative overflow-hidden" />
          <div className="hidden md:flex flex-col gap-3 h-[340px] sm:h-[420px]">
            <div className="bg-[#EAEFEA] flex-1 rounded-[24px]" />
            <div className="bg-[#EAEFEA] flex-1 rounded-[24px] relative flex items-center justify-center">
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-[#18271F] shadow-sm hover:bg-white transition">
                사진 18장 모두 보기
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap items-start justify-between gap-4 mb-10 pb-8 border-b border-[#E2E8E4]">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#EBF3F0] text-[#4F705E] text-[11px] font-bold px-2.5 py-0.5 rounded">
                스터디카페
              </span>
              <span className="text-xs text-[#8C9C93]">• 영업 중 · 24시간</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#18271F] tracking-tight mb-2">
              에이밍 스터디카페
            </h1>
            <p className="text-sm text-[#65736B] mb-3">
              집중이 오래 이어지는 조용한 좌석과 안정적인 조도를 갖춘 용봉동
              스터디 공간
            </p>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1 text-[#18271F] font-bold">
                <StarIcon className="w-4 h-4 text-amber-400" /> 4.8
              </span>
              <span className="text-[#8C9C93]">리뷰 127개</span>
              <span className="inline-flex items-center gap-1 text-[#4F705E] font-medium">
                <MapPinIcon className="w-3.5 h-3.5" /> 현재 위치에서 도보 3분
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLikeToggle}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition shadow-sm border ${
                isLiked
                  ? "bg-[#29483B] text-white border-[#29483B]"
                  : "bg-white text-[#29483B] border-[#E2E8E4] hover:bg-[#EDF2EE]"
              }`}
            >
              <HeartIcon className="w-4 h-4" filled={isLiked} />
              <span>찜 {likeCount.toLocaleString()}</span>
            </button>
            <button
              onClick={() => alert("정보 오류 제보 화면은 준비 중이에요.")}
              className="px-4 py-2.5 rounded-full text-xs font-medium text-[#65736B] bg-white border border-[#E2E8E4] hover:bg-[#EDF2EE] transition"
            >
              정보 오류 제보
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-xl font-bold text-[#18271F] mb-1">이용 정보</h2>
            <p className="text-xs text-[#8C9C93] mb-5">
              방문 전의 운영 정책과 시설 정보를 확인해 주세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoList.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[#F4F6F4] p-4 rounded-[16px] border border-[#EAEFEA] ${
                    item.label === "학교와의 거리" ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="block text-[11px] font-medium text-[#8C9C93] mb-1">
                    {item.label}
                  </span>
                  <span className="block text-xs font-bold text-[#18271F]">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="bg-white border border-[#EAEFEA] p-6 rounded-[24px] shadow-sm">
              <h3 className="font-bold text-base text-[#18271F] mb-3">
                오늘 방문하기
              </h3>
              <p className="text-xs text-[#65736B] leading-relaxed mb-5">
                지상 여유 · 좌석 약 18석
                <br />
                금호중앙여고 정문에서 도보 7분
                <br />
                매일 24시간 영업
              </p>
              <button
                onClick={() => alert("지도 연결 준비 중입니다.")}
                className="w-full bg-[#29483B] text-white py-3 rounded-full text-xs font-bold hover:bg-[#1A2920] transition shadow-sm"
              >
                지도에서 길찾기
              </button>
            </div>

            <div className="bg-white border border-[#EAEFEA] p-6 rounded-[24px] shadow-sm">
              <h3 className="font-bold text-base text-[#18271F] mb-4">
                이용자들이 많이 언급했어요
              </h3>
              <div className="flex flex-wrap gap-2">
                {mentionTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FAF9F5] border border-[#E2E8E4] px-3 py-1.5 rounded-full text-xs text-[#5D6B63] font-medium"
                  >
                    {tag.label}{" "}
                    <span className="text-[#8C9C93] ml-0.5">{tag.count}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#F3EDDF] border border-[#E2D8C3] p-6 rounded-[24px] mb-12 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-[#18271F]">업주 이벤트</h3>
              <span className="bg-[#29483B] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                진행 중
              </span>
            </div>
            <p className="text-xs text-[#65736B] mb-2">
              매장에서 직접 등록한 소식이에요.
            </p>
            <p className="text-sm font-extrabold text-[#18271F]">
              시험기간 야간권 20% 할인
            </p>
            <p className="text-[11px] text-[#8C9C93]">
              학생증을 보여주시면 22시 이후 6시간권을 할인해 드려요 · 10월
              31일까지
            </p>
          </div>

          <button
            onClick={() => alert("쿠폰 받기 완료!")}
            className="bg-white text-[#29483B] border border-[#E2E8E4] px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#FAF9F5] transition shrink-0"
          >
            쿠폰 보기
          </button>
        </section>

        <section className="text-left">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#18271F]">
                방문자 리뷰 127
              </h2>
              <p className="text-xs text-[#8C9C93]">
                실제로 머문 사람들의 경험을 확인해 보세요.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="text-xs text-[#65736B] bg-white border border-[#E2E8E4] px-3 py-1.5 rounded-lg">
                최신순 ∨
              </button>

              <button
                onClick={() => alert("리뷰 작성 화면 준비 중입니다.")}
                className="bg-[#29483B] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#1A2920] transition"
              >
                리뷰 작성 ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-[#4F705E] text-white p-8 rounded-[24px] text-left flex flex-col justify-between h-[280px]">
              <div>
                <span className="text-5xl font-black block mb-2">4.8</span>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-amber-300" />
                  ))}
                </div>
                <p className="text-xs text-[#D7E2DB]">127개의 솔직한 평가</p>
              </div>

              <div className="pt-4 border-t border-white/20 text-xs text-[#E3ECE7]">
                재방문 의향 94% · 조용함 4.9
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {reviews.map((rev) => (
                <article
                  key={rev.id}
                  className="bg-white border border-[#EAEFEA] p-6 rounded-[24px] shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#18271F]">
                        {rev.user}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-500">
                        ★ {rev.rating}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8C9C93]">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs text-[#5D6B63] leading-relaxed mb-3">
                    {rev.content}
                  </p>

                  {rev.reply && (
                    <div className="bg-[#FAF9F5] border border-[#E2E8E4] p-3 rounded-[14px] text-[11px] text-[#65736B]">
                      {rev.reply}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
