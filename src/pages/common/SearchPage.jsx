import { useState } from "react";
import { Link } from "react-router-dom";

function SearchIcon({ className = "w-4 h-4" }) {
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
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

function TreeIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1.323l.395-.372a1 1 0 011.392 1.436L11.72 6.42a1 1 0 01.07.135l1.605.802a1 1 0 01-.894 1.788L11 8.394v2.929l2.395-.372a1 1 0 011.392 1.436l-3.067 3.067A1 1 0 0111 15.394V17a1 1 0 11-2 0v-1.606a1 1 0 01-.72-.058l-3.067-3.067a1 1 0 011.392-1.436L9 11.323V8.394L7.526 9.144a1 1 0 01-.894-1.788l1.604-.802a.994.994 0 01.071-.135L7.24 5.387a1 1 0 011.392-1.436L9 4.323V3a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] =
    useState("광주 북구 용봉동 조용한 카페");
  const [activeFilters, setActiveFilters] = useState([
    "용봉동",
    "매우 조용",
    "노트북 가능",
    "도보 15분",
  ]);

  const spots = [
    {
      id: 1,
      badge: "광고",
      quietness: "매우 조용",
      category: "스터디카페",
      distance: "도보 3분",
      rating: "4.8",
      title: "에이밍 스터디카페",
      desc: "넓은 콘센트 좌석과 오래 머물기 좋은 안정적인 조도.",
      tags: ["₩2,500/h", "통화존", "노트북 가능"],
    },
    {
      id: 2,
      badge: "광고",
      quietness: "매우 조용",
      category: "집중 공간",
      distance: "도보 6분",
      rating: "4.7",
      title: "공부인 스터디카페",
      desc: "개인 독서실과 공용 테이블이 분리된 집중형 공간.",
      tags: ["₩2,000/h", "콘센트 많음", "24시간"],
    },
    {
      id: 3,
      badge: null,
      quietness: "매우 조용",
      category: "스터디카페",
      distance: "도보 3분",
      rating: "4.8",
      title: "에이밍 스터디카페",
      desc: "넓은 콘센트 좌석과 오래 머물기 좋은 안정적인 조도.",
      tags: ["₩2,500/h", "통화존", "노트북 가능"],
    },
    {
      id: 4,
      badge: null,
      quietness: "매우 조용",
      category: "집중 공간",
      distance: "도보 6분",
      rating: "4.7",
      title: "공부인 스터디카페",
      desc: "개인 독서실과 공용 테이블이 분리된 집중형 공간.",
      tags: ["₩2,000/h", "콘센트 많음", "24시간"],
    },
    {
      id: 5,
      badge: null,
      quietness: "매우 조용",
      category: "로컬 카페",
      distance: "도보 9분",
      rating: "4.5",
      title: "시작스터디카페",
      desc: "햇살이 오래 머무는 창가와 넉넉한 대형 테이블.",
      tags: ["₩2,000/h", "대화 가능", "와이파이"],
    },
    {
      id: 6,
      badge: null,
      quietness: "매우 조용",
      category: "공공 공간",
      distance: "버스 12분",
      rating: "4.6",
      title: "일곡도서관",
      desc: "자료실 옆 조용한 좌석과 무료 와이파이가 있어요.",
      tags: ["무료", "매우 조용", "노트북 가능"],
    },
  ];

  const removeFilter = (filterToRemove) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  return (
    <div className="w-full bg-[#FAF9F5] text-[#1E2521] py-10 pb-16">
      <main className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-left mb-8">
          <span className="text-[11px] font-bold text-[#4F705E] tracking-widest uppercase block mb-1">
            FIND YOUR SPOT
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18271F] tracking-tight mb-2">
            용봉동에서 오래 머물기 좋은 곳
          </h1>
          <p className="text-xs sm:text-sm text-[#65736B]">
            가격과 거리, 공간의 분위기까지 비교해 오늘의 자리를 골라보세요.
          </p>
        </div>

        <div className="relative flex items-center bg-white border border-[#E2E8E4] rounded-full shadow-sm px-5 py-3 mb-8 max-w-3xl">
          <SearchIcon className="w-5 h-5 text-[#29483B] mr-3 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-none text-[#1E2521] font-medium"
          />
          <button className="bg-[#1C2D24] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#29483B] transition shrink-0">
            검색 ›
          </button>
        </div>

        <div className="bg-white border border-[#EAEFEA] rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-10 text-left">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-[#18271F]">
              조건을 선택해 보세요
            </span>
            <button
              onClick={() => setActiveFilters([])}
              className="text-xs text-[#8C9C93] hover:underline"
            >
              전체 초기화
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "가격 ∨",
              "거리 ∨",
              "지역 ∨",
              "소음 정도 ∨",
              "별점 ∨",
              "통화 가능",
              "노트북 가능",
            ].map((item, idx) => (
              <button
                key={idx}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition ${
                  item.includes("소음 정도") || item.includes("노트북 가능")
                    ? "bg-[#29483B] text-white border-[#29483B]"
                    : "bg-[#FAF9F5] text-[#5D6B63] border-[#E2E8E4] hover:border-[#29483B]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#F0F4F1]">
              <span className="text-xs font-semibold text-[#8C9C93] mr-1">
                적용된 필터
              </span>
              {activeFilters.map((filter, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 bg-[#29483B] text-white text-xs px-3 py-1 rounded-full font-medium"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:text-gray-300 text-xs"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="text-left">
            <span className="text-xl font-bold text-[#18271F]">27</span>
            <span className="text-sm font-semibold text-[#18271F] ml-1">
              개의 장소를 찾았어요
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-xs font-medium text-[#5D6B63] bg-white border border-[#E2E8E4] px-3 py-1.5 rounded-lg">
              추천순 ∨
            </button>
            <div className="inline-flex bg-white border border-[#E2E8E4] rounded-lg p-0.5 text-xs font-medium text-[#5D6B63]">
              <button className="px-3 py-1 bg-[#29483B] text-white rounded-md font-bold">
                • 목록
              </button>
              <button className="px-3 py-1 hover:text-[#29483B]">✣ 지도</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-5">
            {spots.map((spot) => (
              <Link
                key={spot.id}
                to={`/cafe/${spot.id}`}
                className="w-full block bg-white rounded-[24px] border border-[#EAEFEA] shadow-sm hover:shadow-md transition text-left overflow-hidden group"
              >
                <div className="relative bg-[#EAEFEA] h-44 w-full">
                  {spot.badge && (
                    <span className="absolute top-3 left-3 bg-[#E5A853] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                      {spot.badge}
                    </span>
                  )}
                  <span
                    className={`absolute top-3 ${
                      spot.badge ? "left-12" : "left-3"
                    } bg-white/90 backdrop-blur-sm text-[#29483B] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm z-10`}
                  >
                    {spot.quietness}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-[#8C9C93] mb-1">
                    <span>{spot.category}</span>
                    <span>•</span>
                    <span>{spot.distance}</span>
                    <span>•</span>
                    <span className="text-[#18271F] font-bold">
                      ★ {spot.rating}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#18271F] mb-1.5 group-hover:text-[#29483B] transition">
                    {spot.title}
                  </h3>
                  <p className="text-xs text-[#65736B] leading-snug line-clamp-2 mb-4">
                    {spot.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F0F4F1] text-[11px] text-[#5D6B63]">
                    {spot.tags.map((t, i) => (
                      <span
                        key={i}
                        className="bg-[#FAF9F5] border border-[#E2E8E4] px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="w-full lg:w-[42%] sticky top-6">
            <div className="bg-[#EAEFF0] rounded-[28px] border border-white h-[680px] p-4 relative flex flex-col justify-between overflow-hidden shadow-sm">
              <Link
                to="/cafe/1"
                className="bg-white/95 backdrop-blur-sm rounded-[20px] p-3.5 shadow-md flex items-center justify-between text-left border border-[#EAA853]/40 z-10 block hover:border-[#29483B] transition"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-[#E5A853] text-white text-[10px] font-bold px-2 py-1 rounded">
                    광고
                  </span>
                  <div>
                    <h4 className="font-bold text-xs text-[#18271F]">
                      에이밍 스터디카페
                    </h4>
                    <p className="text-[10px] text-[#65736B]">
                      스터디카페 · 도보 3분 · ₩2,500/h
                    </p>
                  </div>
                </div>
              </Link>

              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-full py-2.5 px-4 text-xs font-semibold text-[#29483B] shadow-md z-10 flex items-center justify-between cursor-pointer hover:bg-white transition-all border border-[#E2E8E4]">
                <div className="flex items-center gap-2">
                  <SearchIcon className="w-3.5 h-3.5 text-[#29483B]" />
                  <span>현재 지도에서 다시 검색</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#29483B]" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="absolute top-[28%] right-[25%] flex items-center gap-1.5 bg-[#4F705E] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  <TreeIcon className="w-3.5 h-3.5 text-white" />
                  <span>중외공원</span>
                </div>

                <div className="absolute top-[42%] left-[28%] bg-[#243B31] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                  공부인 스터디카페 · ₩2,000/h
                </div>
              </div>

              <div className="text-center z-10">
                <span className="text-[10px] text-[#8C9C93] bg-white/80 px-3 py-1 rounded-full border border-[#E2E8E4]">
                  [ 지도 API 위젯 영역 ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
