export default function MainPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] text-[#1E2521] overflow-x-hidden selection:bg-[#2D4A3E] selection:text-white">
      
      {/* 1. 상단 메인 히어로 섹션 (큼직한 폰트와 웅장한 지도 비율) */}
      <section className="w-full px-10 sm:px-16 lg:px-24 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* 왼쪽 텍스트 및 검색 영역 */}
        <div className="w-full lg:w-[46%] flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF3F0] text-[#2D4A3E] text-xs font-bold mb-6 tracking-wide shadow-sm">
            <span>📍</span> 광주 북구 · 용봉동
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight mb-6 text-[#111816]">
            오늘 오래 머물고 싶은<br />
            동네의 한 자리
          </h1>
          <p className="text-[#65736B] text-base sm:text-lg leading-relaxed mb-10">
            소음, 콘센트, 머무는 시간까지, MoSS가 가까운 곳에서<br />
            나에게 꼭 맞는 카페와 스터디 스팟을 찾아드려요.
          </p>

          {/* 검색 바 */}
          <div className="relative flex items-center bg-white border border-[#E2E8E4] rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.04)] px-6 py-4 mb-6 w-full transition-all focus-within:border-[#2D4A3E]">
            <span className="text-gray-400 mr-4 text-lg">🔍</span>
            <input 
              type="text" 
              placeholder="지역이나 카페 이름을 검색해 보세요" 
              className="w-full bg-transparent text-base focus:outline-none placeholder-gray-400 text-[#1E2521]"
            />
            <button className="bg-[#2D4A3E] text-white w-11 h-11 rounded-full flex items-center justify-center shrink-0 hover:bg-[#233A31] transition-all shadow-md">
              →
            </button>
          </div>

          {/* 빠른 태그 버튼들 */}
          <div className="flex flex-wrap gap-3">
            {['아주 조용한', '콘센트 많은', '노트북 가능한'].map((tag, idx) => (
              <button 
                key={idx} 
                className="bg-white border border-[#E5EAE7] hover:border-[#2D4A3E] text-[#4A5550] hover:text-[#2D4A3E] text-sm px-5 py-2.5 rounded-full transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 오른쪽 지도 프리뷰 영역 (큼직하고 여유로운 비율) */}
        <div className="w-full lg:w-[46%]">
          <div className="bg-[#EAEFF0] w-full h-[500px] sm:h-[620px] rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/85 flex items-center justify-center text-[#7A8B82] text-base font-medium">
            [ 지도 위젯 영역 ]
          </div>
        </div>

      </section>

      {/* 2. 지금 내 주변, 머물기 좋은 곳 섹션 */}
      <section className="w-full px-10 sm:px-16 lg:px-24 py-20 border-t border-[#EAEFEA]">
        
        {/* 섹션 헤더 */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-[#2D4A3E] tracking-widest uppercase block mb-2">
              NEARBY SPOTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111816]">
              지금 내 주변, 머물기 좋은 곳
            </h2>
            <p className="text-[#65736B] text-sm sm:text-base mt-2">
              직접 다녀온 이들의 정보로 오늘의 자리를 골라보세요.
            </p>
          </div>
          <button className="text-sm sm:text-base font-semibold text-[#2D4A3E] hover:underline flex items-center gap-1.5 group">
            27곳 모두 보기 <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </button>
        </div>

        {/* 카드 그리드 (카드를 큼직하고 여유롭게 배치) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-[32px] border border-[#EAEFEA] shadow-[0_6px_24px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              {/* 카드 이미지 영역 */}
              <div className="relative bg-[#F2F5F3] h-72 w-full flex items-center justify-center text-[#8C9C93] text-sm font-medium">
                [ 카드 이미지 영역 ]
                <button className="absolute top-5 right-5 w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-[#65736B] hover:text-red-500 shadow-md transition-all">
                  ♡
                </button>
              </div>
              {/* 카드 텍스트 정보 */}
              <div className="p-8">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs bg-[#EBF3F0] text-[#2D4A3E] px-3.5 py-1 rounded-md font-semibold">아주 조용한</span>
                  <span className="text-xs text-[#8C9C93] font-medium">• 도보 3분</span>
                </div>
                <h3 className="font-bold text-xl text-[#111816] mb-2 group-hover:text-[#2D4A3E] transition-colors">메이링 스터디카페</h3>
                <p className="text-[#65736B] text-sm leading-relaxed line-clamp-1 mb-6">넓은 콘센트 좌석과 여유로운 간격의 인테리어 공간</p>
                <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-[#F0F4F1] text-xs text-[#65736B]">
                  <span className="bg-[#F7F9F8] px-3 py-1.5 rounded-lg text-[#4A5550]">#콘센트</span>
                  <span className="bg-[#F7F9F8] px-3 py-1.5 rounded-lg text-[#4A5550]">#와이파이 빠름</span>
                  <span className="bg-[#F7F9F8] px-3 py-1.5 rounded-lg text-[#4A5550]">#₩8,000/h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section>

      {/* 3. 에디터즈 픽 (초록색 배너 섹션 - 웅장하게 확장) */}
      <section className="bg-[#2D4A3E] text-white py-20 px-10 sm:px-16 lg:px-24 my-10 w-full h-[800px]">
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          
          {/* 왼쪽 일러스트/이미지 영역 */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#385B4E] w-full h-[400px] sm:h-[480px] rounded-[36px] flex items-center justify-center text-[#B2C5BC] text-base font-medium shadow-inner border border-white/10">
              [ 에디터즈 픽 대표 이미지 ]
            </div>
          </div>

          {/* 오른쪽 상세 텍스트 */}
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-[#A4C2B4] tracking-widest uppercase block mb-3">
              THIS WEEK'S PICK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.25] mb-6 text-white">
              조용한 오후를 위한,<br />
              햇살이 좋은 창가 자리 네 곳
            </h2>
            <p className="text-[#C8D7D0] text-base sm:text-lg leading-relaxed mb-10">
              소음이 낮고 자연광이 오래 드는 곳곳의 스터디카페만 뽑았어요.<br />
              따뜻한 차 한 잔과 함께 집중해 보세요.
            </p>
            <button className="inline-flex items-center gap-2.5 bg-white text-[#2D4A3E] font-bold text-base px-8 py-4 rounded-full hover:bg-[#F2F7F5] transition-all shadow-lg">
              큐레이션 읽어보기 →
            </button>
          </div>

        </div>
      </section>

      {/* 4. 오늘의 목적에 맞춰 찾아보세요 섹션 */}
      <section className="w-full px-10 sm:px-16 lg:px-24 py-20 pb-32 h-[700px]">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#2D4A3E] tracking-widest uppercase block mb-2">
            FIND YOUR MOOD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111816]">
            오늘의 목적에 맞춰 찾아보세요
          </h2>
          <p className="text-[#65736B] text-base mt-3">
            공부, 작업, 대화 — 머무는 이유가 달라지면 알맞은 공간도 달라집니다.
          </p>
        </div>

        {/* 4개 카테고리 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "오롯이 집중", desc: "방해가 적고 차분한 분위기의 공간", count: "12 SPOTS" },
            { title: "느긋한 작업", desc: "콘센트와 우리만의 아늑한 공간", count: "18 SPOTS" },
            { title: "조용한 대화", desc: "음악과 대화 소리가 부드러운 공간", count: "8 SPOTS" },
            { title: "햇살 좋은 자리", desc: "창가로 부드럽게 비치는 광가", count: "7 SPOTS" },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-[#EAEFEA] shadow-[0_6px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-[#2D4A3E]/30 transition-all duration-300 flex flex-col justify-between h-60 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3F0] text-[#2D4A3E] flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                  📂
                </div>
                <h3 className="font-bold text-lg text-[#111816] mb-1.5">{cat.title}</h3>
                <p className="text-[#65736B] text-sm leading-relaxed">{cat.desc}</p>
              </div>
              <span className="text-xs font-bold text-[#8C9C93] tracking-wider">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}