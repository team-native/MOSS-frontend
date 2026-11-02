import { useLocation, Link } from "react-router-dom";
import brandMark from "../../assets/Brand mark.png";
import brandName from "../../assets/Brand name.png";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-[#EAEFEA] bg-[#FAF9F5] px-10 py-5 sm:px-16 lg:px-24">
      {/* 왼쪽 로고 */}
      <Link to="/" className="flex cursor-pointer items-center gap-2.5">
        <img
          src={brandMark}
          alt="MoSS 로고"
          className="h-9 w-9 object-contain"
        />
        <img
          src={brandName}
          alt="MoSS"
          className="h-auto w-auto max-w-[100px] object-contain"
        />
      </Link>

      {/* 가운데 내비게이션 */}
      <nav className="hidden items-center gap-8 text-sm font-semibold text-[#65736B] md:flex">
        <Link
          to="/"
          className={`relative flex flex-col items-center gap-1 transition-colors ${
            isHome ? "text-[#2D4A3E]" : "hover:text-[#2D4A3E]"
          }`}
        >
          홈
          {isHome && (
            <span className="absolute -bottom-2 h-1.5 w-1.5 rounded-full bg-[#2D4A3E]" />
          )}
        </Link>

        <Link to="/cafes" className="transition-colors hover:text-[#2D4A3E]">
          카페 찾기
        </Link>

        <Link
          to="/bookmarks"
          className="transition-colors hover:text-[#2D4A3E]"
        >
          찜 목록
        </Link>

        <Link to="/mypage" className="transition-colors hover:text-[#2D4A3E]">
          마이페이지
        </Link>
      </nav>

      {/* 오른쪽 도움말, 회원가입 */}
      <div className="flex items-center gap-7">
        <button
          type="button"
          className="text-sm font-semibold text-[#65736B] transition-colors hover:text-[#2D4A3E]"
        >
          도움말
        </button>

        <Link
          to="/signup"
          className="rounded-full bg-[#EBF3F0] px-6 py-3 text-sm font-bold text-[#2D4A3E] transition-colors hover:bg-[#DDE9E2]"
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}
