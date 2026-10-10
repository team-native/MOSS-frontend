import { useLocation, Link } from 'react-router-dom';

export default function Header() {
const location = useLocation();
const isHome = location.pathname === '/';

  return (
    <header className="w-full bg-[#FAF9F5] px-10 sm:px-16 lg:px-24 py-5 flex items-center justify-between border-b border-[#EAEFEA] sticky top-0 z-50">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <div className="w-9 h-9 rounded-xl bg-[#2D4A3E] flex items-center justify-center text-white shadow-sm">
          <img src="브랜드 마크.png" alt="" />
        </div>
        <img src="브랜드 이름.png" alt="" />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#65736B]">
        <Link 
          to="/" 
          className={`flex flex-col items-center gap-1 relative ${isHome ? 'text-[#2D4A3E]' : 'hover:text-[#2D4A3E]'}`}
        >
          홈
          {/* 홈 경로일 때만 점(span)이 렌더링되도록 조건부 추가 */}
          {isHome && (
            <span className="w-1.5 h-1.5 bg-[#2D4A3E] rounded-full absolute -bottom-2"></span>
          )}
        </Link>
        <Link to="/cafes" className="hover:text-[#2D4A3E] transition-colors">카페 찾기</Link>
        <Link to="/bookmarks" className="hover:text-[#2D4A3E] transition-colors">찜 목록</Link>
        <Link to="/mypage" className="hover:text-[#2D4A3E] transition-colors">마이페이지</Link>
      </nav>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-3 bg-[#EBF3F0] hover:bg-[#2D4A3E] hover:text-white text-[#2D4A3E] text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm">
          <img src="map-pin.png" alt="" className='h-[20px]' /> 내 스팟 제보
        </button>
        <div className="w-13 h-13 rounded-full bg-[#E2E8E4] overflow-hidden flex items-center justify-center border border-[#D5DED9]">
          <span className="text-sm">프로필사진</span>
        </div>
      </div>
    </header>
  );
}