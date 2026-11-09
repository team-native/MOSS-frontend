import { useState } from "react";

// 샘플 찜 데이터
const favoritePlaces = [
  {
    id: 1,
    type: "스터디카페 · 용봉동 · 도보 3분",
    name: "에이밍 스터디카페",
    desc: "넓은 콘센트 좌석과 차분한 조도.",
    tags: "아주 조용 · ₩2,500/h",
    mood: "매우 조용",
  },
  {
    id: 2,
    type: "집중 공간 · 문흥동 · 도보 8분",
    name: "공부인 스터디카페",
    desc: "개인 좌석과 공유 테이블이 분리된 곳.",
    tags: "24시간 · 콘센트 많음",
    mood: "매우 조용",
  },
  {
    id: 3,
    type: "공공 공간 · 일곡동 · 버스 12분",
    name: "일곡도서관",
    desc: "무료 와이파이와 넉넉한 자료실 좌석.",
    tags: "무료 · 매우 조용",
    mood: "매우 조용",
  },
  {
    id: 4,
    type: "몰입 카페 · 용봉동 · 도보 9분",
    name: "시작스터디카페",
    desc: "창가 좋은 향기와 넉넉한 대형 테이블.",
    tags: "노트북 가능 · ₩2,300/h",
    mood: "매우 조용",
  },
  {
    id: 5,
    type: "작업 카페 · 운암동 · 버스 7분",
    name: "운암도서관",
    desc: "조용해서 집중이 잘 되는 공간.",
    tags: "통창 가능 · 와이파이",
    mood: "매우 조용",
  },
  {
    id: 6,
    name: "셀독24운암점",
    type: "프리미엄독서실 · 운암동 · 도보 14분",
    desc: "한 자리에서 오래 머물기 좋은 의자.",
    tags: "조용 · 주차 가능",
    mood: "매우 조용",
  },
];

// 필터 옵션
const filters = [
  { label: "전체", count: 8 },
  { label: "스터디카페", count: 4 },
  { label: "카페", count: 3 },
  { label: "공공 공간", count: 1 },
];

export default function FavoritePage() {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [saved, setSaved] = useState(favoritePlaces.map((p) => p.id));

  const toggleFavorite = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="bg-[#FAF9F5] font-sans text-[#1A2920]">
      {/* 메인 컨텐츠 영역 */}
      <main className="px-6 py-10 sm:px-10 lg:px-16">
        {/* 타이틀 헤더 */}
        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-widest text-[#4F705E]">
            SAVED PLACES
          </span>
          <h1 className="mb-2 mt-1 text-[32px] font-black tracking-tight sm:text-[38px]">
            다시 가고 싶은 공간
          </h1>
          <p className="text-[14px] text-[#5D6B63]">
            저장한 장소를 목적과 거리별로 정리해 보세요. 현재 {saved.length}곳을
            찜했어요.
          </p>
        </div>

        {/* 필터 및 정렬 옵션 */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8E4] pb-5">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`rounded-full px-4 py-2 text-[12px] font-bold transition ${
                  activeFilter === f.label
                    ? "bg-[#29483B] text-white"
                    : "border border-[#E2E8E4] bg-white text-[#5D6B63] hover:bg-[#EDF2EE]"
                }`}
              >
                {f.label} <span className="opacity-80">{f.count}</span>
              </button>
            ))}
            <button className="rounded-full border border-[#E2E8E4] bg-white px-4 py-2 text-[12px] font-medium text-[#5D6B63]">
              지역 ▾
            </button>
            <button className="rounded-full border border-[#E2E8E4] bg-white px-4 py-2 text-[12px] font-medium text-[#5D6B63]">
              소음 정도 ▾
            </button>
          </div>

          <div className="text-[12px] font-medium text-[#8E9B93]">
            <button className="hover:text-[#29483B]">최근 저장순 ▾</button>
          </div>
        </div>

        {/* 찜한 장소 그리드 */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoritePlaces.map((place) => (
            <article
              key={place.id}
              className="overflow-hidden rounded-[22px] border border-[#E2E8E4] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* 이미지 썸네일 영역 */}
              <div className="relative m-2.5">
                <div className="aspect-[1.7/1] w-full rounded-[16px] bg-[#E3ECE7]" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-[#4F705E]">
                  {place.mood}
                </span>
                <button
                  aria-label="찜 해제"
                  onClick={() => toggleFavorite(place.id)}
                  className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-[20px] shadow-sm transition ${
                    saved.includes(place.id)
                      ? "text-[#4F705E]"
                      : "text-[#8E9B93]"
                  }`}
                >
                  {saved.includes(place.id) ? "♥" : "♡"}
                </button>
              </div>

              {/* 정보 영역 */}
              <div className="p-5 pt-1">
                <span className="text-[11px] font-semibold text-[#8E9B93]">
                  {place.type}
                </span>
                <h3 className="mt-1 text-[17px] font-extrabold text-[#1A2920]">
                  {place.name}
                </h3>
                <p className="mt-1 text-[12px] text-[#5D6B63]">{place.desc}</p>
                <div className="mt-3 border-t border-[#F0F4F1] pt-3 text-[11px] font-medium text-[#8E9B93]">
                  {place.tags}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 추천 광고 섹션 ("이런 공간은 어때요?") */}
        <section className="mt-16">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[20px] font-extrabold text-[#1A2920]">
                이런 공간은 어때요?
              </h2>
              <span className="rounded bg-[#E2E8E4] px-1.5 py-0.5 text-[10px] font-bold text-[#5D6B63]">
                광고
              </span>
            </div>
            <span className="text-[11px] text-[#8E9B93]">
              업체에서 제공한 정보입니다
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                id: "ad1",
                name: "에이밍 스터디카페",
                type: "스터디카페 · 용봉동",
                desc: "넓은 콘센트 좌석과 차분한 조도.",
                tags: "아주 조용한 · ₩2,500/h",
              },
              {
                id: "ad2",
                name: "공부인 스터디카페",
                type: "집중 공간 · 문흥동",
                desc: "개인 좌석과 공유 테이블이 분리된 곳.",
                tags: "24시간 · 콘센트 많음",
              },
              {
                id: "ad3",
                name: "시작스터디카페",
                type: "로컬 카페 · 용봉동",
                desc: "햇살 좋은 창가와 넉넉한 대형 테이블.",
                tags: "노트북 가능 · ₩2,300/h",
              },
            ].map((ad) => (
              <article
                key={ad.id}
                className="overflow-hidden rounded-[22px] border border-[#E2E8E4] bg-white p-2.5"
              >
                <div className="relative">
                  <div className="aspect-[1.8/1] w-full rounded-[16px] bg-[#E3ECE7]" />
                  <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-800">
                    광고
                  </span>
                </div>
                <div className="p-3">
                  <span className="text-[11px] text-[#8E9B93]">{ad.type}</span>
                  <h3 className="mt-0.5 text-[15px] font-bold">{ad.name}</h3>
                  <p className="mt-1 text-[12px] text-[#5D6B63]">{ad.desc}</p>
                  <div className="mt-2 text-[10px] text-[#8E9B93]">
                    {ad.tags}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 빈 상태 안내 카드 ("찜한 장소가 없어졌다면") */}
        <section className="mt-16">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[16px] font-bold text-[#5D6B63]">
              찜한 장소가 없어졌다면
            </h2>
            <span className="text-[11px] text-[#8E9B93]">
              업체에서 제공한 정보입니다
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-[28px] border border-[#E2E8E4] bg-white py-12 text-center shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FAF9F5] text-[22px] text-[#29483B]">
              ♡
            </div>
            <h3 className="mt-4 text-[18px] font-extrabold text-[#1A2920]">
              마음에 드는 자리를 저장해 보세요
            </h3>
            <p className="mt-1.5 text-[13px] text-[#5D6B63]">
              카페 찾기에서 하트를 누르면 이곳에 차곡차곡 모여요.
            </p>
            <a
              href="/search"
              className="mt-5 rounded-full bg-[#29483B] px-6 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#1A2920]"
            >
              나만의 공간찾기
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
