import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";

const initialHours = [
  { day: "평일", open: "00:00", close: "24:00", allDay: true },
  { day: "토요일", open: "00:00", close: "24:00", allDay: true },
  { day: "일요일", open: "00:00", close: "24:00", allDay: true },
];

const initialPrices = [
  { name: "1시간 이용권", price: "2,500" },
  { name: "4시간 이용권", price: "8,000" },
  { name: "종일 이용권", price: "12,000" },
];

const initialFacilities = [
  "무제한이용",
  "콘센트",
  "노트북 가능",
  "주차 필수",
  "주차",
  "사물함",
  "프린터",
  "반려동물",
];

const facilityDefaults = [
  "무제한이용",
  "콘센트",
  "노트북 가능",
  "주차 필수",
  "프린터",
];

export default function OwnerSignupPage2() {
  const navigate = useNavigate();
  const location = useLocation();

  // 수정! 이전 페이지에서 전달한 사업자 정보를 유지
  const previousState = location.state || {};

  const [form, setForm] = useState({
    storeName: "",
    spaceType: "스터디카페",
    address: "",
    directions: "",
    phone: "",
    sns: "",
    quietness: "매우 조용",
    registration: "등록 부스에서 가능",
    ageLimit: "중학생 이상",
  });

  const [hours, setHours] = useState(initialHours);
  const [prices, setPrices] = useState(initialPrices);
  const [facilities, setFacilities] = useState(facilityDefaults);
  const [holidays, setHolidays] = useState([]);
  const [photo, setPhoto] = useState(null);

  const inputClass =
    "h-9 w-full rounded-xl border border-[#E0E6DF] bg-white px-3 text-xs text-[#263A30] outline-none transition placeholder:text-[#A0AAA2] focus:border-[#29483B] focus:ring-1 focus:ring-[#29483B]/20";

  const labelClass = "mb-1.5 block text-[11px] font-bold text-[#263A30]";

  const sectionClass = "rounded-[20px] border border-[#E5EAE4] p-4 sm:p-5";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // 운영 시간 수정
  function handleHourChange(index, key, value) {
    setHours((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    );
  }

  function toggleAllDay(index) {
    setHours((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, allDay: !item.allDay } : item,
      ),
    );
  }

  function addHoliday() {
    const day = window.prompt(
      "휴무일을 입력해 주세요. (예: 매주 월요일, 공휴일)",
    );

    if (day && day.trim()) {
      setHolidays((prev) => [...prev, day.trim()]);
    }
  }

  function removeHoliday(index) {
    setHolidays((prev) => prev.filter((_, i) => i !== index));
  }

  // 이용권 추가 및 수정
  function handlePriceChange(index, key, value) {
    setPrices((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)),
    );
  }

  function addPrice() {
    setPrices((prev) => [...prev, { name: "", price: "" }]);
  }

  function removePrice(index) {
    setPrices((prev) => prev.filter((_, i) => i !== index));
  }

  // 시설 선택
  function toggleFacility(facility) {
    setFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((item) => item !== facility)
        : [...prev, facility],
    );
  }

  function handlePhotoChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 등록할 수 있습니다.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("사진은 10MB 이하로 등록해 주세요.");
      event.target.value = "";
      return;
    }

    setPhoto(file);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.storeName.trim()) {
      alert("매장명을 입력해 주세요.");
      return;
    }

    if (!form.address.trim()) {
      alert("매장 주소를 입력해 주세요.");
      return;
    }

    if (!form.phone.trim()) {
      alert("매장 전화번호를 입력해 주세요.");
      return;
    }

    if (prices.some((item) => !item.name.trim() || !item.price.trim())) {
      alert("이용권 이름과 가격을 모두 입력해 주세요.");
      return;
    }

    // 수정! 다음 페이지에서 매장 등록 정보를 사용할 수 있도록 전달
    navigate("/owner-signup/3", {
      state: {
        ...previousState,
        storeInfo: {
          ...form,
          hours,
          prices,
          facilities,
          holidays,
          photo,
        },
      },
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EE] text-[#18271F]">
      <LoginHeader />

      {/* 본문: 헤더와 푸터를 제외한 영역 */}
      <main className="flex flex-1 flex-col items-center px-5 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-14">
        <div className="w-full max-w-[1080px] rounded-[24px] bg-white px-5 py-7 shadow-[0_8px_28px_rgba(35,65,50,0.07)] sm:px-8 sm:py-9 lg:px-10">
          {/* 진행 단계 */}
          <div className="mb-6 flex items-center gap-2 text-[9px] text-[#829087] sm:gap-3 sm:text-[10px]">
            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                1
              </span>
              업주 정보
            </div>

            <div className="h-px flex-1 bg-[#29483B]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-bold text-[#29483B] sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#29483B] text-white">
                2
              </span>
              매장 등록
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                3
              </span>
              사업자 인증
            </div>

            <div className="h-px flex-1 bg-[#DDE4DE]" />

            <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap sm:gap-2">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#EDF2EB]">
                4
              </span>
              가입 완료
            </div>
          </div>

          {/* 제목 */}
          <div className="mb-5">
            <p className="mb-1 text-[10px] font-bold tracking-wide text-[#52745F]">
              REGISTER YOUR PLACE
            </p>

            <h1 className="text-[24px] font-extrabold leading-tight sm:text-[28px]">
              운영 중인 매장을 등록해 주세요
            </h1>

            <p className="mt-2 text-[11px] leading-5 text-[#718077]">
              방문자가 알아야 할 운영 정보와 시설을 실제 정보에 맞게 입력해
              주세요.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. 매장 기본 정보 */}
            <section className={sectionClass}>
              <h2 className="mb-3 text-[14px] font-extrabold">
                매장 기본 정보
              </h2>

              <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="storeName" className={labelClass}>
                    매장명
                  </label>

                  <input
                    id="storeName"
                    name="storeName"
                    value={form.storeName}
                    onChange={handleChange}
                    placeholder="매장명을 입력해 주세요"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="spaceType" className={labelClass}>
                    공간 유형
                  </label>

                  <select
                    id="spaceType"
                    name="spaceType"
                    value={form.spaceType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="스터디카페">스터디카페</option>
                    <option value="카페">카페</option>
                    <option value="음식점">음식점</option>
                    <option value="공방">공방</option>
                    <option value="독립서점">독립서점</option>
                    <option value="문화공간">문화공간</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClass}>
                    매장 주소
                    <span className="mx-2 text-[#829087]">·</span>
                    주소 검색
                  </label>

                  <input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="도로명 주소를 입력해 주세요"
                    autoComplete="street-address"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="directions" className={labelClass}>
                    찾아오는 길
                  </label>

                  <textarea
                    id="directions"
                    name="directions"
                    value={form.directions}
                    onChange={handleChange}
                    placeholder="방문자가 매장을 쉽게 찾을 수 있도록 안내해 주세요."
                    rows={3}
                    className="w-full resize-y rounded-xl border border-[#E0E6DF] bg-white px-3 py-3 text-xs text-[#263A30] outline-none transition placeholder:text-[#A0AAA2] focus:border-[#29483B] focus:ring-1 focus:ring-[#29483B]/20"
                  />
                </div>
              </div>
            </section>

            {/* 2. 운영 시간 */}
            <section className="rounded-[20px] bg-[#EDF2EB] p-4 sm:p-5">
              <h2 className="mb-2 text-[14px] font-extrabold">운영 시간</h2>

              <p className="mb-4 text-[10px] leading-5 text-[#718077]">
                휴무일과 24시간 운영 여부를 함께 알려주세요.
              </p>

              <div className="space-y-2">
                {hours.map((item, index) => (
                  <div
                    key={item.day}
                    className="grid grid-cols-[46px_minmax(0,1fr)] items-center gap-2 sm:grid-cols-[72px_minmax(0,1fr)_minmax(0,1fr)_48px]"
                  >
                    <span className="text-[10px] font-bold">{item.day}</span>

                    <input
                      type="time"
                      aria-label={`${item.day} 시작 시간`}
                      value={item.open}
                      disabled={item.allDay}
                      onChange={(event) =>
                        handleHourChange(index, "open", event.target.value)
                      }
                      className={`${inputClass} min-w-0 px-2 disabled:bg-white/70`}
                    />

                    <div className="col-start-2 flex items-center gap-2 sm:col-start-auto">
                      <span className="text-xs text-[#829087]">~</span>

                      <input
                        type="time"
                        aria-label={`${item.day} 종료 시간`}
                        value={item.close}
                        disabled={item.allDay}
                        onChange={(event) =>
                          handleHourChange(index, "close", event.target.value)
                        }
                        className={`${inputClass} min-w-0 px-2 disabled:bg-white/70`}
                      />

                      <button
                        type="button"
                        onClick={() => toggleAllDay(index)}
                        aria-pressed={item.allDay}
                        className={`shrink-0 rounded-full px-2 py-2 text-[9px] font-bold transition ${
                          item.allDay
                            ? "bg-[#29483B] text-white"
                            : "border border-[#DDE4DE] bg-white text-[#53665A]"
                        }`}
                      >
                        24시간
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] leading-5 text-[#829087]">
                  정기 휴무일은 아래에서 추가할 수 있어요.
                </p>

                <button
                  type="button"
                  onClick={addHoliday}
                  className="rounded-xl border border-[#E0E6DF] bg-white px-3 py-2 text-[10px] font-bold text-[#29483B] transition hover:bg-[#F7F5EE]"
                >
                  + 휴무일 추가
                </button>
              </div>

              {holidays.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {holidays.map((holiday, index) => (
                    <span
                      key={`${holiday}-${index}`}
                      className="flex items-center gap-2 rounded-full border border-[#DDE4DE] bg-white px-3 py-1.5 text-[10px] text-[#53665A]"
                    >
                      {holiday}

                      <button
                        type="button"
                        onClick={() => removeHoliday(index)}
                        aria-label={`${holiday} 삭제`}
                        className="font-bold text-[#829087] hover:text-[#29483B]"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* 3. 가격 정보 */}
            <section className={sectionClass}>
              <h2 className="mb-2 text-[14px] font-extrabold">가격 정보</h2>

              <p className="mb-3 text-[10px] leading-5 text-[#718077]">
                대표 시간권을 먼저 입력하고 필요한 이용권을 추가해 주세요.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {prices.map((item, index) => (
                  <div key={index} className="min-w-0">
                    <label
                      htmlFor={`price-name-${index}`}
                      className={labelClass}
                    >
                      이용권 이름
                    </label>

                    <input
                      id={`price-name-${index}`}
                      value={item.name}
                      onChange={(event) =>
                        handlePriceChange(index, "name", event.target.value)
                      }
                      placeholder="예: 1시간 이용권"
                      className={inputClass}
                      required
                    />

                    <label
                      htmlFor={`price-value-${index}`}
                      className={`${labelClass} mt-2`}
                    >
                      가격 (원)
                    </label>

                    <input
                      id={`price-value-${index}`}
                      type="number"
                      min="0"
                      value={item.price}
                      onChange={(event) =>
                        handlePriceChange(index, "price", event.target.value)
                      }
                      placeholder="가격 입력"
                      className={inputClass}
                      required
                    />

                    {index >= initialPrices.length && (
                      <button
                        type="button"
                        onClick={() => removePrice(index)}
                        className="mt-2 text-[10px] font-bold text-[#829087] hover:text-[#29483B]"
                      >
                        이용권 삭제
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10px] leading-5 text-[#829087]">
                  가격은 매장 상황에 맞게 수정할 수 있어요.
                </p>

                <button
                  type="button"
                  onClick={addPrice}
                  className="rounded-xl border border-[#E0E6DF] px-3 py-2 text-[10px] font-bold text-[#29483B] transition hover:bg-[#EDF2EB]"
                >
                  + 이용권 추가
                </button>
              </div>
            </section>

            {/* 4. 시설 및 이용 정책 */}
            <section className={sectionClass}>
              <h2 className="mb-3 text-[14px] font-extrabold">
                시설 및 이용 정책
              </h2>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {initialFacilities.map((facility) => {
                  const selected = facilities.includes(facility);

                  return (
                    <button
                      key={facility}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleFacility(facility)}
                      className={`rounded-full border px-3 py-1.5 text-[10px] font-bold transition ${
                        selected
                          ? "border-[#29483B] bg-[#29483B] text-white"
                          : "border-[#E0E6DF] bg-white text-[#718077] hover:border-[#29483B]"
                      }`}
                    >
                      {selected ? "✓ " : "+ "}
                      {facility}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <label htmlFor="quietness" className={labelClass}>
                    소음 정도
                  </label>

                  <select
                    id="quietness"
                    name="quietness"
                    value={form.quietness}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="매우 조용">매우 조용</option>
                    <option value="조용">조용</option>
                    <option value="보통">보통</option>
                    <option value="활기참">활기참</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="registration" className={labelClass}>
                    등록 가능 여부
                  </label>

                  <select
                    id="registration"
                    name="registration"
                    value={form.registration}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="등록 부스에서 가능">
                      등록 부스에서 가능
                    </option>
                    <option value="현장 등록 가능">현장 등록 가능</option>
                    <option value="온라인 예약만 가능">
                      온라인 예약만 가능
                    </option>
                    <option value="등록 불가">등록 불가</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ageLimit" className={labelClass}>
                    연령 제한
                  </label>

                  <select
                    id="ageLimit"
                    name="ageLimit"
                    value={form.ageLimit}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="전체 이용 가능">전체 이용 가능</option>
                    <option value="초등학생 이상">초등학생 이상</option>
                    <option value="중학생 이상">중학생 이상</option>
                    <option value="고등학생 이상">고등학생 이상</option>
                    <option value="성인만 이용 가능">성인만 이용 가능</option>
                  </select>
                </div>
              </div>
            </section>

            {/* 5. 연락처와 사진 */}
            <section className="rounded-[20px] bg-[#EDF2EB] p-4 sm:p-5">
              <h2 className="mb-3 text-[14px] font-extrabold">연락처와 사진</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      매장 전화번호
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="062-000-0000"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="sns" className={labelClass}>
                      홈페이지 / SNS
                    </label>

                    <input
                      id="sns"
                      name="sns"
                      type="text"
                      value={form.sns}
                      onChange={handleChange}
                      placeholder="홈페이지 또는 SNS 주소"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* 대표 사진 업로드 */}
                <div>
                  <label
                    htmlFor="storePhoto"
                    className="flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D7E0D7] bg-white px-4 py-5 text-center transition hover:border-[#29483B] hover:bg-[#FCFCFA]"
                  >
                    {photo ? (
                      <>
                        <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF2EB] text-[#29483B]">
                          ✓
                        </span>

                        <span className="max-w-full break-all text-[11px] font-bold text-[#29483B]">
                          {photo.name}
                        </span>

                        <span className="mt-2 text-[10px] text-[#829087]">
                          클릭하여 사진 변경
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="mb-2 text-2xl font-bold text-[#29483B]">
                          +
                        </span>

                        <span className="text-[11px] font-bold">
                          대표 사진을 올려주세요
                        </span>

                        <span className="mt-2 text-[9px] text-[#829087]">
                          최대 10MB · JPG, PNG, WEBP
                        </span>
                      </>
                    )}
                  </label>

                  <input
                    id="storePhoto"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handlePhotoChange}
                    className="sr-only"
                  />
                </div>
              </div>
            </section>

            {/* 하단 버튼 */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() =>
                  navigate("/signup/owner", {
                    state: previousState,
                  })
                }
                className="flex h-9 items-center justify-center rounded-xl border border-[#E0E6DF] px-3 text-[10px] font-bold text-[#29483B] transition hover:bg-[#EDF2EB]"
              >
                이전: 업주 정보
              </button>

              <div className="ml-auto flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // 임시 저장 API 연결 전에는 현재 입력값을 안내만 함
                    alert(
                      "임시 저장 기능은 저장 API 연결 후 사용할 수 있어요.",
                    );
                  }}
                  className="flex h-9 items-center justify-center rounded-xl bg-[#EDF2EB] px-4 text-[10px] font-bold text-[#29483B] transition hover:bg-[#E0E8DE]"
                >
                  임시 저장
                </button>

                <button
                  type="submit"
                  className="flex h-9 items-center justify-center gap-1 rounded-xl bg-[#29483B] px-4 text-[10px] font-bold text-white transition-colors hover:bg-[#203A30]"
                >
                  다음: 사업자 인증
                  <span>›</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
