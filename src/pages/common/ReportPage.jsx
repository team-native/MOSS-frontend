import React from "react";

function FlagIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

export default function ReportPage() {
  const reports = [
    {
      id: 1,
      place: "메가커피 동림점",
      status: "반영",
      statusColor: "bg-[#E8F5E9] text-[#2E7D32]",
      type: "운영 시간 오류",
      detail: "평일 마감 시간이 22:00에서 23:00으로 변경되었어요.",
      date: "2026.09.24",
    },
    {
      id: 2,
      place: "스타벅스 운암점",
      status: "검토 중",
      statusColor: "bg-[#E3F2FD] text-[#1565C0]",
      type: "콘센트 정보",
      detail: "2층 창가 좌석의 콘센트 수가 실제와 달라요.",
      date: "2026.09.18",
    },
    {
      id: 3,
      place: "할리스 운암점",
      status: "접수",
      statusColor: "bg-[#FFF3E0] text-[#E65100]",
      type: "가격 정보 오류",
      detail: "4시간권 가격이 7,000원에서 8,000원으로 변경되었어요.",
      date: "2026.09.11",
    },
    {
      id: 4,
      place: "일곡도서관",
      status: "반영",
      statusColor: "bg-[#E8F5E9] text-[#2E7D32]",
      type: "시설 정보 추가",
      detail: "노트북 이용 가능한 좌석 구역을 추가로 알려드렸어요.",
      date: "2026.08.30",
    },
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#1A2920] px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* 상단 타이틀 영역 */}
        <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#4F705E]">
              MY REPORTS
            </span>
            <h1 className="mt-2 text-[32px] font-black tracking-tight sm:text-[38px]">
              내 정보 오류 제보
            </h1>
            <p className="mt-1 text-[14px] text-[#5D6B63]">
              동네 공간을 더 정확하게 만든 제보의 처리 과정을 확인해 보세요.
            </p>
          </div>
          <button className="rounded-full bg-[#29483B] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#1A2920]">
            새 정보 제보 ›
          </button>
        </section>

        {/* 상단 요약 카드 (3개) */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-[22px] border border-[#E2E8E4] bg-white p-5 shadow-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-black">5</span>
              <span className="text-[14px] font-bold">전체 제보</span>
            </div>
            <p className="mt-2 text-[12px] text-[#8E9B93]">최근 6개월 기준</p>
          </div>
          <div className="rounded-[22px] border border-[#E2E8E4] bg-white p-5 shadow-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-black">1</span>
              <span className="text-[14px] font-bold">검토 중</span>
            </div>
            <p className="mt-2 text-[12px] text-[#8E9B93]">평균 2-3일 소요</p>
          </div>
          <div className="rounded-[22px] border border-[#E2E8E4] bg-white p-5 shadow-sm">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-black">4</span>
              <span className="text-[14px] font-bold">정보 반영</span>
            </div>
            <p className="mt-2 text-[12px] text-[#8E9B93]">반영률 80%</p>
          </div>
        </section>

        {/* 제보 내역 & 처리 과정 본문 */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[20px] font-black">제보 내역</h2>
              <div className="flex gap-2">
                <select className="rounded-full border border-[#E2E8E4] bg-white px-3 py-1.5 text-[12px] text-[#5D6B63] outline-none">
                  <option>전체 상태</option>
                  <option>접수</option>
                  <option>검토 중</option>
                  <option>반영</option>
                </select>
                <select className="rounded-full border border-[#E2E8E4] bg-white px-3 py-1.5 text-[12px] text-[#5D6B63] outline-none">
                  <option>최신순</option>
                  <option>오래된순</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {reports.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 rounded-[22px] border border-[#E2E8E4] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF2EE] text-[#29483B]">
                      <FlagIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-[14px] font-bold">
                          {item.place}
                        </strong>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-1 text-[12px] text-[#8E9B93]">
                        {item.type}
                      </p>
                      <p className="mt-1 text-[13px] text-[#5D6B63]">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <span className="text-[12px] text-[#8E9B93]">
                      {item.date}
                    </span>
                    <button className="rounded-lg border border-[#E2E8E4] bg-white px-3 py-1.5 text-[12px] font-bold text-[#29483B] hover:bg-[#EDF2EE]">
                      상세 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[22px] bg-[#EFECE1] p-5">
              <h3 className="text-[16px] font-extrabold">제보 처리 과정</h3>
              <ol className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#29483B]">
                    1
                  </span>
                  <div>
                    <strong className="text-[13px] font-bold">접수</strong>
                    <p className="mt-0.5 text-[12px] text-[#5D6B63]">
                      제보 내용을 안전하게 보관해요.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#29483B]">
                    2
                  </span>
                  <div>
                    <strong className="text-[13px] font-bold">검토</strong>
                    <p className="mt-0.5 text-[12px] text-[#5D6B63]">
                      공식 채널과 현장 정보를 확인해요.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#29483B]">
                    3
                  </span>
                  <div>
                    <strong className="text-[13px] font-bold">반영</strong>
                    <p className="mt-0.5 text-[12px] text-[#5D6B63]">
                      확인된 정보를 서비스에 업데이트해요.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-2xl bg-[#EEF2EC] p-4 text-xs leading-relaxed text-gray-600">
              반영된 제보는 해당 장소 상세의 ‘최근 확인된 정보’에 표시됩니다.
              고마운 제보에는 활동 배치도 드려요.
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
