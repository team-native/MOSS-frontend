import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    title: "시험기간 야간권 20% 할인",
    startDate: "2026-10-01",
    endDate: "2026-10-31",
    benefit: "시험기간 야간권 20% 할인",
    views: 286,
    saves: 42,
    status: "진행 중",
  },
  {
    id: 2,
    title: "신규 회원 4시간권 증정",
    startDate: "2026-10-15",
    endDate: "2026-11-15",
    benefit: "신규 회원에게 4시간 이용권 1회 증정",
    views: 0,
    saves: 0,
    status: "예약",
  },
  {
    id: 3,
    title: "9월 모닝 집중권 할인",
    startDate: "2026-09-01",
    endDate: "2026-09-30",
    benefit: "모닝 집중권 할인",
    views: 512,
    saves: 67,
    status: "종료",
  },
  {
    id: 4,
    title: "여름방학 정액권 프로모션",
    startDate: "2026-07-15",
    endDate: "2026-08-31",
    benefit: "여름방학 정액권 특별 할인",
    views: 824,
    saves: 118,
    status: "종료",
  },
];

const emptyForm = {
  title: "",
  startDate: "",
  endDate: "",
  benefit: "",
};

function getEventStatus(startDate, endDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);

  if (today < start) return "예약";
  if (today > end) return "종료";

  return "진행 중";
}

function formatDate(date) {
  if (!date) return "";

  const [year, month, day] = date.split(".");
  return `${year}.${month}.${day}`;
}

function StatusBadge({ status }) {
  const statusStyle = {
    "진행 중": "bg-[#F8EEDB] text-[#B47B32]",
    예약: "bg-[#E8F0EB] text-[#29483B]",
    종료: "bg-[#EEEEEA] text-[#777D76]",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[10px] font-semibold ${statusStyle[status]}`}
    >
      {status}
    </span>
  );
}

function EventItem({ event, onEdit, onDelete }) {
  return (
    <div className="flex min-h-[60px] items-center justify-between gap-3 rounded-xl bg-[#EEF2EC] px-3 py-3 sm:px-4">
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="break-keep text-[13px] font-bold text-[#263B32]">
            {event.title}
          </h3>

          <StatusBadge status={event.status} />
        </div>

        <p className="text-[10px] text-[#829087]">
          {formatDate(event.startDate)} ~ {formatDate(event.endDate)}
          {" · "}
          조회 {event.views}
          {" · "}
          저장 {event.saves}
        </p>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={() => onEdit(event)}
          className="rounded-xl border border-[#DFE6DF] bg-white px-3 py-2 text-xs font-semibold text-[#40584B] transition hover:bg-[#E5ECE5]"
        >
          수정
        </button>

        <button
          type="button"
          onClick={() => onDelete(event.id)}
          className="rounded-xl border border-[#D6A39B] bg-white px-3 py-2 text-xs font-semibold text-[#B36D62] transition hover:bg-[#FAEFED]"
        >
          삭제
        </button>
      </div>
    </div>
  );
}

function EventForm({ form, setForm, onSubmit, editingEvent, onCancel }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  return (
    <section className="rounded-[20px] bg-[#EEF2EC] p-5 sm:p-6">
      <h2 className="mb-3 text-[17px] font-bold text-[#263B32]">
        {editingEvent ? "이벤트 수정" : "새 이벤트 등록"}
      </h2>

      <p className="mb-5 text-[11px] text-[#829087]">
        기간과 혜택을 입력해 주세요.
      </p>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="eventTitle"
            className="mb-2 block text-[11px] font-bold text-[#405047]"
          >
            이벤트 제목
          </label>

          <input
            id="eventTitle"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="이벤트 제목을 입력해 주세요."
            className="h-[42px] w-full rounded-xl border border-[#E0E6DF] bg-white px-3 text-xs text-[#35463D] outline-none transition focus:border-[#29483B]"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="startDate"
              className="mb-2 block text-[11px] font-bold text-[#405047]"
            >
              시작일
            </label>

            <input
              id="startDate"
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              className="h-[42px] w-full min-w-0 rounded-xl border border-[#E0E6DF] bg-white px-2 text-xs text-[#35463D] outline-none focus:border-[#29483B]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="mb-2 block text-[11px] font-bold text-[#405047]"
            >
              종료일
            </label>

            <input
              id="endDate"
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              min={form.startDate || undefined}
              className="h-[42px] w-full min-w-0 rounded-xl border border-[#E0E6DF] bg-white px-2 text-xs text-[#35463D] outline-none focus:border-[#29483B]"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="benefit"
            className="mb-2 block text-[11px] font-bold text-[#405047]"
          >
            혜택 내용
          </label>

          <textarea
            id="benefit"
            name="benefit"
            value={form.benefit}
            onChange={handleChange}
            placeholder="이벤트 혜택을 입력해 주세요."
            rows={3}
            className="w-full resize-none rounded-xl border border-[#E0E6DF] bg-white p-3 text-xs text-[#35463D] outline-none transition focus:border-[#29483B]"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-[#405047]">
            예약 공개
          </span>

          <span className="rounded-full bg-[#E4EDF0] px-3 py-1 text-[10px] font-semibold text-[#668397]">
            {form.startDate
              ? `${Number(form.startDate.split("-")[1])}월 ${Number(
                  form.startDate.split("-")[2],
                )}일 00:00`
              : "시작일 선택"}
          </span>
        </div>

        <div className="flex gap-2">
          {editingEvent && (
            <button
              type="button"
              onClick={onCancel}
              className="h-[42px] flex-1 rounded-xl border border-[#D7E0D7] bg-white text-xs font-bold text-[#40584B] transition hover:bg-[#E5ECE5]"
            >
              취소
            </button>
          )}

          <button
            type="submit"
            className="h-[42px] flex-1 rounded-xl bg-[#29483B] text-xs font-bold text-white transition hover:bg-[#203C31]"
          >
            {editingEvent ? "수정 완료" : "이벤트 등록"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default function EventPage() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [form, setForm] = useState(emptyForm);
  const [editingEvent, setEditingEvent] = useState(null);

  const filters = ["전체", "진행 중", "종료"];

  const filteredEvents =
    selectedFilter === "전체"
      ? events
      : events.filter((event) => event.status === selectedFilter);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.benefit.trim()) {
      alert("이벤트 제목과 혜택 내용을 입력해 주세요.");
      return;
    }

    if (form.startDate > form.endDate) {
      alert("종료일은 시작일보다 빠를 수 없습니다.");
      return;
    }

    if (editingEvent) {
      setEvents((previousEvents) =>
        previousEvents.map((event) =>
          event.id === editingEvent.id
            ? {
                ...event,
                ...form,
                status: getEventStatus(form.startDate, form.endDate),
              }
            : event,
        ),
      );

      alert("이벤트가 수정되었습니다.");
    } else {
      const newEvent = {
        id: Date.now(),
        ...form,
        views: 0,
        saves: 0,
        status: getEventStatus(form.startDate, form.endDate),
      };

      setEvents((previousEvents) => [newEvent, ...previousEvents]);

      alert("이벤트가 등록되었습니다.");
    }

    setForm(emptyForm);
    setEditingEvent(null);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);

    setForm({
      title: event.title,
      startDate: event.startDate,
      endDate: event.endDate,
      benefit: event.benefit,
    });
  };

  const handleDelete = (eventId) => {
    const isConfirmed = window.confirm("이 이벤트를 삭제하시겠습니까?");

    if (!isConfirmed) return;

    setEvents((previousEvents) =>
      previousEvents.filter((event) => event.id !== eventId),
    );

    if (editingEvent?.id === eventId) {
      setEditingEvent(null);
      setForm(emptyForm);
    }
  };

  const handleNewEvent = () => {
    setEditingEvent(null);
    setForm(emptyForm);
  };

  const handleCancel = () => {
    setEditingEvent(null);
    setForm(emptyForm);
  };

  return (
    <main className="mx-auto min-h-[894px] w-full max-w-[1440px] px-5 pb-[72px] pt-[52px] sm:px-8 lg:px-[72px]">
      {/* 페이지 제목 */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[10px] font-semibold text-[#527565]">
            EVENT MANAGEMENT
          </p>

          <h1 className="text-[32px] font-extrabold leading-tight text-[#1F3028]">
            이벤트 관리
          </h1>

          <p className="mt-2 text-xs text-[#829087]">
            매장의 새로운 소식과 혜택을 등록해 방문자에게 알려보세요.
          </p>
        </div>

        <button
          type="button"
          onClick={handleNewEvent}
          className="rounded-xl bg-[#29483B] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#203C31]"
        >
          새 이벤트 등록 ›
        </button>
      </div>

      {/* 이벤트 목록과 등록 폼 */}
      <div className="grid grid-cols-1 items-start gap-[26px] lg:grid-cols-[2fr_1fr]">
        {/* 등록 이벤트 목록 */}
        <section className="rounded-[20px] border border-[#E1E7E0] bg-white p-4 sm:p-[18px]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[17px] font-bold text-[#263B32]">
              등록 이벤트
            </h2>

            <div className="flex gap-1.5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full border px-3 py-1.5 text-[10px] transition ${
                    selectedFilter === filter
                      ? "border-[#29483B] bg-[#29483B] text-white"
                      : "border-[#E1E7E0] bg-white text-[#68766D] hover:bg-[#EEF2EC]"
                  }`}
                >
                  {filter}
                  {filter === "전체" && ` ${events.length}`}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-4 text-[10px] text-[#829087]">
            진행 {events.filter((event) => event.status === "진행 중").length}
            {" · "}
            예약 {events.filter((event) => event.status === "예약").length}
            {" · "}
            종료 {events.filter((event) => event.status === "종료").length}
          </p>

          <div className="flex flex-col gap-2">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventItem
                  key={event.id}
                  event={event}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <div className="rounded-xl bg-[#EEF2EC] py-10 text-center text-xs text-[#829087]">
                등록된 이벤트가 없습니다.
              </div>
            )}
          </div>
        </section>

        {/* 이벤트 등록 폼 */}
        <div className="flex flex-col gap-3">
          <EventForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            editingEvent={editingEvent}
            onCancel={handleCancel}
          />

          <div className="rounded-[20px] bg-[#F2E8D4] px-5 py-5 text-[10px] leading-relaxed text-[#8B806C]">
            삭제한 이벤트는 30일 동안 복구할 수 있으며 종료 이벤트의 성과는
            통계에 남습니다.
          </div>
        </div>
      </div>
    </main>
  );
}
