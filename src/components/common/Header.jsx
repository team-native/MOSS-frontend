import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.png.png";

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

export default function Header() {
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "홈" },
    { to: "/search", label: "카페 찾기" },
    { to: "/favorite", label: "찜 목록" },
    { to: "/mypage", label: "마이페이지" },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[#E2E8E4] bg-[#FAF9F5] px-6 py-5 sm:px-10 lg:px-16">
      <Link to="/" className="inline-flex items-center gap-3 shrink-0">
        <img
          src={logoImg}
          alt="MoSS 로고"
          className="h-12 w-12 rounded-[14px] object-cover"
        />
        <span className="whitespace-nowrap text-[28px] font-bold leading-none tracking-tight text-[#1A2920]">
          MoSS
        </span>
      </Link>

      <nav className="flex flex-wrap items-center gap-5 text-[13px] font-medium sm:gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center transition ${
                isActive
                  ? "font-bold text-[#29483B]"
                  : "text-[#5D6B63] hover:text-[#29483B]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive ? (
                  <span className="text-[12px] leading-none text-[#29483B] -mt-1">
                    •
                  </span>
                ) : (
                  <span className="text-[12px] leading-none opacity-0 -mt-1">
                    •
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => navigate("/reports")}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8E4] bg-white px-4 py-2.5 text-[13px] font-bold text-[#29483B] transition hover:bg-[#EDF2EE]"
      >
        <SpotIcon className="w-4 h-4 text-[#29483B]" />
        <span>내 스팟 제보</span>
      </button>
    </header>
  );
}
