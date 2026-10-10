import { useState } from 'react';

export default function MainPage() {
  const [spots, setSpots] = useState([
    {
      id: 1,
      title: "에이밍 스터디카페",
      tag: "스터디카페",
      distance: "도보 3분",
      desc: "넓은 콘센트 좌석과 오래 머물기 좋은 안정적인 조도",
      tags: ["와이파이", "콘센트 많음", "#₩2,500/h"],
      isLiked: false,
    },
    {
      id: 2,
      title: "공부인 스터디카페",
      tag: "집중 공간",
      distance: "도보 6분",
      desc: "개인 독서실과 공용 테이블이 분리된 집중형 공간",
      tags: ["개인 좌석", "주차 가능", "사물함"],
      isLiked: false,
    },
    {
      id: 3,
      title: "시작스터디카페",
      tag: "로컬 카페",
      distance: "도보 9분",
      desc: "햇살이 오래 머무는 창가와 넉넉한 대형 테이블",
      tags: ["노트북 가능", "대형 테이블", "#₩2,000/h"],
      isLiked: false,
    },
  ]);

  // 2. 태그 선택 상태를 관리하는 state (여기에 따로 분리했습니다!)
  const [selectedTags, setSelectedTags] = useState([]);

  // 하트 버튼 클릭 시 해당 카드의 isLiked 상태를 반전시키는 함수
  const toggleLike = (id) => {
    setSpots(prevSpots =>
      prevSpots.map(spot =>
        spot.id === id ? { ...spot, isLiked: !spot.isLiked } : spot
      )
    );
  };

  // 태그 클릭 시 선택/해제 토글 함수
  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF9F5] text-[#1E2521] overflow-x-hidden selection:bg-[#2D4A3E] selection:text-white">
      
      {/* 1. 상단 메인 히어로 섹션 */}
      <section className="w-full px-10 sm:px-16 lg:px-24 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* 왼쪽 텍스트 */}
        <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
          <div className="flex items-center gap-4 py-2  text-[#4F705E] text-xs font-semibold mb-7 tracking-wide">
            <img src="map-pin.png" alt="" />   광주 북구 · 용봉동
          </div>
          <h1 className="text-6xl sm:text-3xl lg:text-[68px] font-bold leading-[1.15] tracking-tight mb-6 text-[#18271F]">
            오늘 오래 머물고 싶은<br />
            동네의 한 자리
          </h1>
          <p className="text-[#5D6B63] text-base sm:text-lg leading-relaxed mb-10">
            소음, 콘센트, 머무는 시간까지, MoSS가 가까운 곳에서<br />
            나에게 꼭 맞는 카페와 스터디 스팟을 찾아드려요.
          </p>

          {/* 검색 바 */}
          <div className="relative flex items-center gap-4 bg-white border border-[#E2E8E4] rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.04)] px-6 py-4 mb-6 w-[800px] transition-all focus-within:border-[#2D4A3E]">
            <img src="search.png"></img>
            <input 
              type="text" 
              placeholder="지역이나 카페 이름을 검색해 보세요" 
              className="w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-[#1E2521]"
            />
            <button className="bg-[#29483B] text-white w-11 h-11 rounded-full flex items-center justify-center shrink-0 hover:bg-[#233A31] transition-all shadow-md">
              <img src="arrow-right.png" alt="" />
            </button>
          </div>

          {/* 키워드 */}
          <div className="flex flex-wrap gap-3">
            {['아주 조용한', '콘센트 많은', '노트북 가능한'].map((tag, idx) => {
              // 현재 태그가 선택되어 있는지 여부 확인
              const isSelected = selectedTags.includes(tag);

              return (
                <button 
                  key={idx} 
                  onClick={() => handleTagClick(tag)}
                  className={`text-sm px-5 py-2.5 rounded-full transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] font-medium border ${
                    isSelected 
                      ? 'bg-[#2D4A3E] text-white border-[#2D4A3E] shadow-md scale-105' // 선택되었을 때의 색상 및 스타일
                      : 'bg-white text-[#4A5550] border-[#E5EAE7] hover:border-[#2D4A3E] hover:text-[#2D4A3E]' // 평소 스타일
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* 오른쪽 지도 영역 */}
        <div className="w-full lg:w-[64%]">
          <div className="bg-[#EAEFF0] w-full h-[500px] sm:h-[620px] rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/85 flex items-center justify-center text-[#7A8B82] text-base font-medium">
            [ 지도 위젯 영역 ]
          </div>
        </div>

      </section>

      {/* nearby spots */}
      <section className="w-full px-10 sm:px-16 lg:px-24 py-20 border-t border-[#EAEFEA]">
        
        {/* 섹션 헤더 (왼쪽 정렬) */}
        <div className="w-full flex items-end justify-between mb-12">
          <div className="text-left">
            <span className="text-xs font-bold text-[#4F705E] tracking-widest uppercase block mb-2">
              NEARBY SPOTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18271f]">
              지금 내 주변, 머물기 좋은 곳
            </h2>
            <p className="text-[#5D6B63] text-sm sm:text-base mt-2">
              직접 다녀온 이들의 정보로 오늘의 자리를 골라보세요.
            </p>
          </div>
          <button className="text-sm sm:text-base font-semibold text-[#29483B] hover:underline flex items-center gap-1.5 group shrink-0">
            27곳 모두 보기 <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </button>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spots.map((spot) => (
            <div 
              key={spot.id} 
              className="w-[720px] bg-white rounded-[32px] border border-[#EAEFEA] shadow-[0_6px_24px_rgba(0,0,0,0.03)] overflow-hidden hover:scale-[1.05] origin-top transition-all duration-300 group text-left"
            >
              
              {/* 카드 이미지 영역 */}
              <div className="relative bg-[#F2F5F3] h-72 w-full flex items-center justify-center text-[#8C9C93] text-sm font-medium">
                [ 카드 이미지 영역 ]
                
                {/* 하트 버튼 (클릭 시 토글 및 아래로 커질 때 상단 고정 유지) */}
                <button 
                  onClick={() => toggleLike(spot.id)}
                  className={`absolute top-5 right-5 w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-md transition-all ${
                    spot.isLiked 
                      ? 'bg-[#2D4A3E] text-white shadow-lg scale-110' 
                      : 'text-[#65736B] hover:text-red-500 hover:scale-105'
                  }`}
                >
                  <img 
                    src={spot.isLiked ? "heart.svg" : "hearton.svg"} 
                    alt="하트" 
                    className="w-5 h-5" 
                  />
                </button>
              </div>

              {/* 카드 텍스트 정보 */}
              <div className="p-8 text-left">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs text-[#4F705E] py-1 rounded-md font-semibold">{spot.tag}</span>
                  <span className="text-xs text-[#5D6B63] font-medium">• {spot.distance}</span>
                </div>
                <h3 className="font-bold text-xl text-[#111816] mb-2 group-hover:text-[#2D4A3E] transition-colors">{spot.title}</h3>
                <p className="text-[#5D6B63] text-sm leading-relaxed line-clamp-1 mb-6">{spot.desc}</p>
                
                {/* 태그 목록 */}
                <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-[#F0F4F1] text-xs text-[#65736B]">
                  {spot.tags.map((t, i) => (
                    <span key={i} className="bg-[#EEF2EC] px-3 py-1.5 rounded-lg text-[#29483B]">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. 에디터즈 픽 (초록색 배너 섹션) */}
      <section className="bg-[#4F705E] text-white py-16 sm:py-20 px-10 sm:px-16 lg:px-24 my-10 w-full h-[700px]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* 왼쪽 대표 이미지 영역 */}
          <div className="w-full lg:w-[50%]">
            <div className="bg-[#385B4E] w-[1000px] h-[400px] sm:h-[530px] rounded-[28px] flex items-center justify-center text-[#B2C5BC] text-base font-medium shadow-inner border border-white/10">
              [ 에디터즈 픽 대표 이미지 ]
            </div>
          </div>

          {/* 오른쪽 상세 텍스트 */}
          <div className="w-full lg:w-[44%] text-left flex flex-col items-start">
            <span className="text-[16px] font-bold text-[#AFC5B8] tracking-widest uppercase block mb-5">
              THIS WEEK'S PICK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold leading-[1.25] mb-5 text-white">
              조용한 오후를 위한,<br />
              햇살이 좋은 창가 자리 네 곳
            </h2>
            <p className="text-[#D7E2DB] text-base sm:text-lg leading-relaxed mb-8">
              소음이 낮고 자연광이 오래 드는 곳곳의 스터디카페만 뽑았어요.<br />
              따뜻한 차 한 잔과 함께 집중해 보세요.
            </p>
            <button className="text-sm sm:text-base font-semibold text-[#ffffff] hover:underline flex items-center gap-1.5 group shrink-0">
            큐레이션 읽어보기 <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </button>
          </div>

        </div>
      </section>

      {/* 4. 오늘의 목적에 맞춰 찾아보세요 섹션 */}
      <section className="w-full px-10 sm:px-16 lg:px-24 py-20 pb-32 flex flex-col items-start h-[700px]">
        
        {/* 상단 타이틀 영역 */}
        <div className="w-full text-left mr-auto mb-12">
          <span className="text-xs font-bold text-[#4F705E] tracking-widest uppercase block mb-2">
            FIND YOUR MOOD
          </span>
          <h2 className="text-5xl sm:text-3xl font-bold text-[#18271F] mb-2">
            오늘의 목적에 맞춰 찾아보세요
          </h2>
          <p className="text-[#5D6B63] text-10xl">
            공부, 작업, 대화 — 머무는 이유가 달라지면 알맞은 공간도 달라집니다.
          </p>
        </div>

        {/* 4개 카테고리 카드 그리드 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "오롯이 집중", 
              desc: "대화가 적고 개인 좌석이 편안한 공간", 
              count: "12 SPOTS",
              svg: (
                <svg className="w-6 h-6 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            { 
              title: "느긋한 작업", 
              desc: "콘센트와 와이파이가 안정적인 공간", 
              count: "18 SPOTS",
              svg: (
                <svg className="w-6 h-6 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            },
            { 
              title: "조용한 대화", 
              desc: "음악과 대화 소리가 부드러운 공간", 
              count: "9 SPOTS",
              svg: (
                <svg className="w-6 h-6 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3m4-3v3m4-3v3" />
                </svg>
              )
            },
            { 
              title: "햇살 좋은 자리", 
              desc: "오후의 자연광이 오래 머무는 공간", 
              count: "7 SPOTS",
              svg: (
                <svg className="w-6 h-6 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-[#EAEFEA] shadow-[0_6px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-[#2D4A3E]/30 transition-all duration-300 flex flex-col justify-between h-60 text-left group">
              <div className="text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3F0] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {cat.svg}
                </div>
                <h3 className="font-bold text-lg text-[#111816] mb-1.5">{cat.title}</h3>
                <p className="text-[#65736B] text-sm leading-relaxed">{cat.desc}</p>
              </div>
              <span className="text-xs font-bold text-[#8C9C93] tracking-wider text-left">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}