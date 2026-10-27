function Footer() {
  return (
    <footer className="w-full bg-[#2D4A3E] text-white px-10 sm:px-16 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[#233A31]">
      <div className="flex flex-col items-start text-left">
        <h3 className="text-lg font-bold tracking-tight text-white mb-1">MoSS</h3>
        <p className="text-[#A4C2B4] text-xs sm:text-sm">
          머물기 좋은 동네의 자리를 발견하는 방법
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#C8D7D0]">
        <a href="#" className="hover:text-white transition-colors">서비스 소개</a>
        <a href="#" className="hover:text-white transition-colors">이용약관</a>
        <a href="#" className="hover:text-white transition-colors">개인정보처리 방침</a>
        <a href="#" className="hover:text-white transition-colors">문의하기</a>
      </div>

      <div className="text-xs text-[#8FAFA1]">
        © 2026 MoSS
      </div>
    </footer>
  );
}

export default Footer;