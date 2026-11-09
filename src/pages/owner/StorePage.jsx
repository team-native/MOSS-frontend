import { useState } from "react";

const initialStore = {
  name: "에이밍 스터디카페 용봉점",
  type: "스터디카페",
  address: "광주광역시 북구 용봉로 77, 3층",
  description:
    "집중이 오래 이어지는 조용한 좌석과 안정적인 조도를 갖춘 용봉동 스터디 공간입니다.",
  phone: "062-123-4567",
  sns: "instagram.com/m00lg",
};

const initialHours = [
  { day: "평일", time: "00:00 ~ 24:00", detail: "24시간" },
  { day: "토요일", time: "00:00 ~ 24:00", detail: "24시간" },
  { day: "일요일", time: "00:00 ~ 24:00", detail: "24시간" },
];

const initialPrices = [
  { id: 1, name: "1시간 이용권 · 대표", price: "2,500" },
  { id: 2, name: "4시간 이용권", price: "8,000" },
  { id: 3, name: "종일 이용권", price: "12,000" },
];

const initialFacilities = [
  "와이파이",
  "전 좌석 콘센트",
  "노트북 가능",
  "등록 부스",
  "프린터",
  "사물함",
];

const facilityOptions = [
  "와이파이",
  "전 좌석 콘센트",
  "노트북 가능",
  "등록 부스",
  "프린터",
  "사물함",
  "화장실",
  "주차장",
  "냉난방",
  "음료 제공",
];

const inputStyle =
  "w-full rounded-xl border border-[#E2E8E2] bg-white px-4 py-3 text-sm text-[#34463D] outline-none transition focus:border-[#4E7160]";

const labelStyle = "mb-2 block text-sm font-semibold text-[#283A31]";

function SectionTitle({ children, action }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-lg font-bold text-[#263A30]">{children}</h2>
      {action}
    </div>
  );
}

function StorePage() {
  const [store, setStore] = useState(initialStore);
  const [hours, setHours] = useState(initialHours);
  const [prices, setPrices] = useState(initialPrices);
  const [facilities, setFacilities] = useState(initialFacilities);

  const [noise, setNoise] = useState("매우 조용");
  const [callPolicy, setCallPolicy] = useState("통화 부스에서 가능");
  const [ageLimit, setAgeLimit] = useState("중학생 이상");

  const [editingPrice, setEditingPrice] = useState(null);
  const [priceName, setPriceName] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [showPriceForm, setShowPriceForm] = useState(false);

  const [showHolidayForm, setShowHolidayForm] = useState(false);
  const [holiday, setHoliday] = useState("");

  const [message, setMessage] = useState("");

  const updateStore = (field, value) => {
    setStore((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFacility = (facility) => {
    setFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility)
        : [...prev, facility],
    );
  };

  const addHoliday = () => {
    if (!holiday) return;

    setHours((prev) => [
      ...prev,
      { day: holiday, time: "휴무", detail: "임시 휴무" },
    ]);

    setHoliday("");
    setShowHolidayForm(false);
  };

  const openPriceForm = (price = null) => {
    setEditingPrice(price?.id ?? null);
    setPriceName(price?.name ?? "");
    setPriceValue(price?.price ?? "");
    setShowPriceForm(true);
  };

  const savePrice = () => {
    if (!priceName.trim() || !priceValue.trim()) {
      alert("이용권 이름과 가격을 입력해주세요.");
      return;
    }

    if (editingPrice) {
      setPrices((prev) =>
        prev.map((item) =>
          item.id === editingPrice
            ? { ...item, name: priceName, price: priceValue }
            : item,
        ),
      );
    } else {
      setPrices((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: priceName,
          price: priceValue,
        },
      ]);
    }

    setShowPriceForm(false);
    setEditingPrice(null);
  };

  const deletePrice = (id) => {
    if (!window.confirm("이 이용권을 삭제할까요?")) return;
    setPrices((prev) => prev.filter((item) => item.id !== id));
  };

  const saveStore = () => {
    setMessage("매장 정보가 저장되었습니다.");
    setTimeout(() => setMessage(""), 2500);
  };

  const completion = Math.min(
    100,
    Math.round(
      ([
        store.name,
        store.address,
        store.description,
        store.phone,
        store.sns,
        facilities.length > 0,
        prices.length > 0,
      ].filter(Boolean).length /
        7) *
        100,
    ),
  );

  return (
    <main className="min-h-screen bg-[#F7F5ED] px-6 pb-[72px] pt-[52px] md:px-[72px]">
      <div className="mx-auto max-w-[1296px]">
        {/* 페이지 제목 */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] font-bold text-[#527563]">
              STORE MANAGEMENT
            </p>
            <h1 className="text-3xl font-bold text-[#1E3329]">
              매장 정보 관리
            </h1>
            <p className="mt-3 text-sm text-[#7B867D]">
              방문자가 믿고 찾을 수 있도록 운영 정보를 최신 상태로 유지해
              주세요.
            </p>
          </div>

          <div className="text-right">
            <p className="mb-2 text-[10px] text-[#9BA39B]">
              최종 수정 2026.09.28 14:32
            </p>
            <button
              onClick={saveStore}
              className="rounded-xl bg-[#294B3D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1E3C30]"
            >
              변경사항 저장 ›
            </button>
          </div>
        </div>

        {/* 매장 요약 */}
        <section className="mb-7 flex flex-col items-center justify-between gap-4 rounded-[22px] bg-[#4E7160] p-4 text-white sm:flex-row sm:px-5">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F0E8DC] text-4xl">
              🐰
            </div>

            <div>
              <div className="mb-1 flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="rounded-full bg-white px-2 py-1 text-[#294B3D]">
                  공개 중
                </span>
                <span className="rounded-full bg-[#DCE8D9] px-2 py-1 text-[#294B3D]">
                  사업자 인증 완료
                </span>
              </div>
              <h2 className="font-bold">{store.name}</h2>
              <p className="mt-1 text-xs text-[#D5E0D8]">{store.address}</p>
            </div>
          </div>

          <button className="shrink-0 rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#294B3D] hover:bg-[#EEF3EE]">
            공개 화면 보기
          </button>
        </section>

        {/* 기본 정보 + 오른쪽 정보 */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_0.9fr]">
          <section className="rounded-[22px] border border-[#E3E8E2] bg-white p-6">
            <SectionTitle
              action={
                <span className="rounded-full bg-[#F8EEDC] px-3 py-1 text-[10px] font-bold text-[#A77A3E]">
                  필수
                </span>
              }
            >
              기본 정보
            </SectionTitle>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>매장명</label>
                <input
                  className={inputStyle}
                  value={store.name}
                  onChange={(e) => updateStore("name", e.target.value)}
                />
              </div>

              <div>
                <label className={labelStyle}>공간 유형</label>
                <select
                  className={inputStyle}
                  value={store.type}
                  onChange={(e) => updateStore("type", e.target.value)}
                >
                  <option>스터디카페</option>
                  <option>독서실</option>
                  <option>카페</option>
                  <option>공유오피스</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelStyle}>매장 주소　·　주소 변경</label>
                <input
                  className={inputStyle}
                  value={store.address}
                  onChange={(e) => updateStore("address", e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelStyle}>매장 소개</label>
                <textarea
                  className={`${inputStyle} min-h-[95px] resize-y`}
                  value={store.description}
                  onChange={(e) => updateStore("description", e.target.value)}
                />
              </div>

              <div>
                <label className={labelStyle}>전화번호</label>
                <input
                  className={inputStyle}
                  value={store.phone}
                  onChange={(e) => updateStore("phone", e.target.value)}
                />
              </div>

              <div>
                <label className={labelStyle}>홈페이지 / SNS</label>
                <input
                  className={inputStyle}
                  value={store.sns}
                  onChange={(e) => updateStore("sns", e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* 오른쪽 정보 */}
          <div className="flex flex-col gap-4">
            <section className="rounded-[22px] bg-[#F1E7D2] p-6">
              <h2 className="mb-3 text-lg font-bold text-[#263A30]">
                정보 완성도
              </h2>

              <div className="flex items-end gap-4">
                <span className="text-3xl font-bold text-[#315846]">
                  {completion}%
                </span>
                <span className="mb-1 text-[10px] text-[#8A8A76]">
                  {completion >= 90 ? "매우 좋음" : "정보 입력 필요"}
                </span>
              </div>

              <div className="mt-4 h-[6px] overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-[#315846] transition-all"
                  style={{ width: `${completion}%` }}
                />
              </div>

              <p className="mt-4 text-[10px] text-[#8A8A76]">
                좌석 배치 사진을 2장 더 추가하면 정보가 더 풍부해져요.
              </p>
            </section>

            <section className="rounded-[22px] border border-[#E3E8E2] bg-white p-6">
              <h2 className="mb-4 text-lg font-bold text-[#263A30]">
                최근 변경 기록
              </h2>

              {[
                ["09.28", "대표 가격 수정 · 2,500원"],
                ["09.21", "운영 시간 확인 · 변경 없음"],
                ["09.14", "시설 정보 추가 · 등록 부스"],
              ].map(([date, content]) => (
                <div
                  key={date}
                  className="mb-3 flex items-center gap-4 text-[10px] last:mb-0"
                >
                  <span className="text-[#A2ACA2]">{date}</span>
                  <span className="text-[#53665A]">{content}</span>
                </div>
              ))}
            </section>

            <div className="rounded-[20px] bg-[#EDF1E9] p-5 text-[10px] leading-5 text-[#849184]">
              매장 정보가 실제와 다르면 이용자의 정보 오류 제보가 접수될 수
              있어요.
            </div>
          </div>
        </div>

        {/* 운영 시간 + 가격 정보 */}
        <div className="mt-5 grid grid-cols-1 items-start gap-5 md:grid-cols-2">
          <section className="rounded-[22px] bg-[#EDF1E9] p-6">
            <SectionTitle>운영 시간</SectionTitle>
            <p className="mb-4 text-[11px] text-[#849184]">
              임시 휴무는 별도로 등록할 수 있어요.
            </p>

            <div className="space-y-2">
              {hours.map((item, index) => (
                <div
                  key={`${item.day}-${index}`}
                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs"
                >
                  <span className="font-bold text-[#34463D]">{item.day}</span>
                  <span
                    className={
                      item.time === "휴무" ? "text-[#B56A55]" : "text-[#63796A]"
                    }
                  >
                    {item.time} · {item.detail}
                  </span>
                </div>
              ))}
            </div>

            {showHolidayForm && (
              <div className="mt-3 flex gap-2">
                <input
                  type="date"
                  className="min-w-0 flex-1 rounded-lg border border-[#DCE4DA] bg-white px-3 py-2 text-xs"
                  value={holiday}
                  onChange={(e) => setHoliday(e.target.value)}
                />
                <button
                  onClick={addHoliday}
                  className="rounded-lg bg-[#294B3D] px-3 text-xs text-white"
                >
                  추가
                </button>
                <button
                  onClick={() => setShowHolidayForm(false)}
                  className="rounded-lg border border-[#DCE4DA] px-3 text-xs"
                >
                  취소
                </button>
              </div>
            )}

            <button
              onClick={() => setShowHolidayForm(true)}
              className="mt-4 rounded-xl border border-[#DCE4DA] bg-white px-4 py-3 text-xs font-bold text-[#385846] hover:bg-[#F7F9F5]"
            >
              + 임시 휴무 추가
            </button>
          </section>

          <section className="rounded-[22px] border border-[#E3E8E2] bg-white p-6">
            <SectionTitle
              action={
                <button
                  onClick={() => openPriceForm()}
                  className="rounded-lg border border-[#E2E8E2] px-3 py-2 text-xs font-bold text-[#385846] hover:bg-[#F3F6F1]"
                >
                  이용권 추가
                </button>
              }
            >
              가격 정보
            </SectionTitle>

            <div className="space-y-2">
              {prices.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 rounded-xl bg-[#EDF1E9] px-4 py-3 text-xs"
                >
                  <span className="font-bold text-[#34463D]">{item.name}</span>

                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-bold text-[#527563]">
                      {Number(item.price.replaceAll(",", "")).toLocaleString()}
                      원
                    </span>
                    <button
                      onClick={() => openPriceForm(item)}
                      className="text-[#60796A] hover:underline"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deletePrice(item.id)}
                      className="text-[#A36B5D] hover:underline"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {showPriceForm && (
              <div className="mt-4 space-y-3 rounded-xl border border-[#E2E8E2] p-4">
                <h3 className="text-sm font-bold text-[#34463D]">
                  {editingPrice ? "이용권 수정" : "새 이용권 추가"}
                </h3>

                <input
                  className={inputStyle}
                  placeholder="이용권 이름"
                  value={priceName}
                  onChange={(e) => setPriceName(e.target.value)}
                />

                <input
                  className={inputStyle}
                  placeholder="가격 (예: 2500)"
                  value={priceValue}
                  onChange={(e) =>
                    setPriceValue(e.target.value.replace(/[^0-9,]/g, ""))
                  }
                />

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowPriceForm(false)}
                    className="rounded-lg border border-[#E2E8E2] px-4 py-2 text-xs"
                  >
                    취소
                  </button>
                  <button
                    onClick={savePrice}
                    className="rounded-lg bg-[#294B3D] px-4 py-2 text-xs font-bold text-white"
                  >
                    저장
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* 시설과 이용 정책 */}
        <section className="mt-5 rounded-[22px] border border-[#E3E8E2] bg-white p-6">
          <SectionTitle>시설과 이용 정책</SectionTitle>

          <div className="mb-6 flex flex-wrap gap-2">
            {facilityOptions.map((facility) => {
              const selected = facilities.includes(facility);

              return (
                <button
                  key={facility}
                  onClick={() => toggleFacility(facility)}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold transition ${
                    selected
                      ? "bg-[#294B3D] text-white"
                      : "border border-[#E2E8E2] bg-white text-[#758278] hover:bg-[#F2F5F0]"
                  }`}
                >
                  {selected ? "✓ " : "+ "}
                  {facility}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className={labelStyle}>소음 정도</label>
              <select
                className={inputStyle}
                value={noise}
                onChange={(e) => setNoise(e.target.value)}
              >
                <option>매우 조용</option>
                <option>조용</option>
                <option>보통</option>
                <option>자유로운 분위기</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>통화 정책</label>
              <select
                className={inputStyle}
                value={callPolicy}
                onChange={(e) => setCallPolicy(e.target.value)}
              >
                <option>통화 부스에서 가능</option>
                <option>외부에서만 가능</option>
                <option>자유롭게 가능</option>
                <option>통화 불가능</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>연령 제한</label>
              <select
                className={inputStyle}
                value={ageLimit}
                onChange={(e) => setAgeLimit(e.target.value)}
              >
                <option>중학생 이상</option>
                <option>고등학생 이상</option>
                <option>대학생 이상</option>
                <option>연령 제한 없음</option>
              </select>
            </div>
          </div>
        </section>

        {/* 저장 안내 */}
        {message && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-[#294B3D] px-6 py-3 text-sm font-bold text-white shadow-lg">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}

export default StorePage;
