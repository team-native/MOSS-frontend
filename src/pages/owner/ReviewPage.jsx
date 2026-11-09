import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    name: "모스러버17",
    date: "2026.09.28",
    rating: 5.0,
    content:
      "창가 자리가 차분하고 콘센트가 가까워 공부하기 좋아요. 통화 부스가 분리되어 있어 온라인 미팅도 부담 없이 할 수 있었습니다. 다음 시험 기간에도 다시 방문할게요.",
    tags: ["매우 조용", "콘센트 많음", "재방문"],
    helpful: 18,
    reply: "",
    reported: false,
  },
  {
    id: 2,
    name: "집중하는토끼",
    date: "2026.09.21",
    rating: 4.5,
    content: "좌석 간격이 넓고 의자가 편안합니다. 저녁에는 조금 붐볐어요.",
    tags: ["좌석 편안", "시설 만족"],
    helpful: 12,
    reply: "소중한 의견 감사합니다. 더욱 편안한 공간을 만들겠습니다.",
    reported: false,
  },
  {
    id: 3,
    name: "웅동동산책자",
    date: "2026.09.12",
    rating: 4.8,
    content: "시간권 가격이 합리적이고 직원분도 친절했습니다.",
    tags: ["가격 만족", "친절"],
    helpful: 9,
    reply: "",
    reported: false,
  },
  {
    id: 4,
    name: "밤샘공부러",
    date: "2026.09.05",
    rating: 5.0,
    content: "24시간이라 시험 기간에 특히 유용했어요.",
    tags: ["24시간 운영", "재방문"],
    helpful: 7,
    reply: "방문해 주셔서 감사합니다. 앞으로도 노력하겠습니다.",
    reported: true,
  },
];

export default function ReviewPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedId, setSelectedId] = useState(1);
  const [filter, setFilter] = useState("전체");
  const [sort, setSort] = useState("최신순");
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([
    {
      id: 1,
      reviewId: 2,
      content: "소중한 의견 감사합니다. 더욱 편안한 공간을 만들겠습니다.",
    },
    {
      id: 2,
      reviewId: 4,
      content: "방문해 주셔서 감사합니다. 앞으로도 노력하겠습니다.",
    },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [drafts, setDrafts] = useState({});

  const selectedReview = reviews.find((review) => review.id === selectedId);

  const filteredReviews = reviews
    .filter((review) => {
      if (filter === "답글 필요") return !review.reply;
      if (filter === "답글 완료") return !!review.reply;
      if (filter === "신고") return review.reported;
      return true;
    })
    .sort((a, b) => (sort === "최신순" ? b.id - a.id : a.id - b.id));

  const pendingCount = reviews.filter((review) => !review.reply).length;

  const handleSelect = (review) => {
    setSelectedId(review.id);
    setReply(drafts[review.id] || review.reply);
    setEditingId(null);
  };

  const handleReply = () => {
    if (!reply.trim()) {
      alert("답글 내용을 입력해 주세요.");
      return;
    }

    const newReply = {
      id: editingId || Date.now(),
      reviewId: selectedId,
      content: reply.trim(),
    };

    if (editingId) {
      setReplies((prev) =>
        prev.map((item) => (item.id === editingId ? newReply : item)),
      );
    } else {
      setReplies((prev) => [newReply, ...prev]);
    }

    setReviews((prev) =>
      prev.map((review) =>
        review.id === selectedId ? { ...review, reply: reply.trim() } : review,
      ),
    );

    setDrafts((prev) => ({ ...prev, [selectedId]: "" }));
    setReply("");
    setEditingId(null);
    alert("답글이 등록되었습니다.");
  };

  const handleSaveDraft = () => {
    setDrafts((prev) => ({ ...prev, [selectedId]: reply }));
    alert("임시 저장되었습니다.");
  };

  const handleEdit = (item) => {
    setSelectedId(item.reviewId);
    setReply(item.content);
    setEditingId(item.id);
  };

  const handleDelete = (id) => {
    if (!window.confirm("답글을 삭제하시겠습니까?")) return;

    const target = replies.find((item) => item.id === id);

    setReplies((prev) => prev.filter((item) => item.id !== id));

    setReviews((prev) =>
      prev.map((review) =>
        review.id === target?.reviewId ? { ...review, reply: "" } : review,
      ),
    );

    if (editingId === id) {
      setReply("");
      setEditingId(null);
    }
  };

  const handleReport = () => {
    if (!window.confirm("이 리뷰를 신고하시겠습니까?")) return;

    setReviews((prev) =>
      prev.map((review) =>
        review.id === selectedId ? { ...review, reported: true } : review,
      ),
    );

    alert("신고 상태로 변경되었습니다.");
  };

  return (
    <main className="mx-auto min-h-[1231px] w-full max-w-[1440px] px-5 pb-[72px] pt-[52px] sm:px-8 lg:px-[72px]">
      {/* 페이지 제목 */}
      <div className="mb-6">
        <p className="text-[10px] font-semibold text-[#527565]">
          REVIEW MANAGEMENT
        </p>
        <h1 className="text-[32px] font-extrabold text-[#1F3028]">리뷰 관리</h1>
        <p className="mt-2 text-xs text-[#829087]">
          방문자의 목소리를 확인하고 진심이 담긴 답글로 소통해 보세요.
        </p>
      </div>

      {/* 리뷰 통계 */}
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ["✎", "126", "전체 리뷰 · 누적"],
          ["♡", "4.8", "평균 별점 · +0.2"],
          ["✎", "14", "이번 달 리뷰 · +27%"],
          ["◷", pendingCount, "답글 필요 · 오늘"],
        ].map(([icon, value, label], index) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-[18px] border border-[#E5E9E3] bg-white p-4"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${
                index === 3
                  ? "bg-[#F5EAD8] text-[#B77C35]"
                  : "bg-[#EEF2EC] text-[#64796C]"
              }`}
            >
              {icon}
            </span>
            <div>
              <p className="text-xl font-bold text-[#263B32]">{value}</p>
              <p className="text-[10px] text-[#829087]">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 리뷰 목록과 상세 */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[0.95fr_1.8fr]">
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold text-[#263B32]">
              리뷰 {reviews.length}개
            </h2>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-[#E1E7E0] bg-white px-3 py-1.5 text-[10px]"
            >
              <option>최신순</option>
              <option>오래된순</option>
            </select>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {["전체", "답글 필요", "답글 완료", "신고"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-3 py-1.5 text-[10px] ${
                  filter === item
                    ? "border-[#29483B] bg-[#29483B] text-white"
                    : "border-[#E1E7E0] bg-white text-[#68766D]"
                }`}
              >
                {item}
                {item !== "전체" &&
                  ` ${
                    reviews.filter((review) =>
                      item === "답글 필요"
                        ? !review.reply
                        : item === "답글 완료"
                          ? !!review.reply
                          : review.reported,
                    ).length
                  }`}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {filteredReviews.map((review) => (
              <button
                key={review.id}
                onClick={() => handleSelect(review)}
                className={`rounded-xl border p-3 text-left transition ${
                  selectedId === review.id
                    ? "border-[#29483B] bg-[#EEF2EC]"
                    : "border-[#E1E7E0] bg-white hover:bg-[#F5F7F3]"
                }`}
              >
                <div className="mb-2 flex justify-between gap-2">
                  <span className="text-xs font-bold text-[#263B32]">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-semibold text-[#E99A3C]">
                    ★ {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className="mb-3 line-clamp-2 text-[10px] text-[#718078]">
                  {review.content}
                </p>
                <div className="flex justify-between text-[9px] text-[#829087]">
                  <span>{review.date}</span>
                  <span>
                    {review.reported
                      ? "신고"
                      : review.reply
                        ? "답글 완료"
                        : "답글 필요"}
                  </span>
                </div>
              </button>
            ))}

            {filteredReviews.length === 0 && (
              <p className="rounded-xl bg-white p-6 text-center text-xs text-[#829087]">
                해당하는 리뷰가 없습니다.
              </p>
            )}
          </div>
        </section>

        <div className="flex min-w-0 flex-col gap-3">
          {/* 리뷰 상세 */}
          {selectedReview && (
            <section className="rounded-[22px] border border-[#E1E7E0] bg-white p-5 sm:p-7">
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-[#263B32]">리뷰 상세</h2>
                <button
                  onClick={handleReport}
                  className="rounded-xl border border-[#B66F64] px-4 py-2 text-xs font-bold text-[#B66F64] hover:bg-[#FAEFED]"
                >
                  리뷰 신고 ›
                </button>
              </div>

              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-[#263B32]">
                    {selectedReview.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#829087]">
                    {selectedReview.date} · 영수증 인증 방문
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#E99A3C]">
                    {"★".repeat(Math.round(selectedReview.rating))}{" "}
                    {selectedReview.rating.toFixed(1)}
                  </p>
                  <p className="text-[10px] text-[#829087]">
                    도움이 됐어요 {selectedReview.helpful}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#DDE5DD] pt-6">
                <p className="break-keep text-sm leading-8 text-[#65766C]">
                  {selectedReview.content}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedReview.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#DCE5DC] px-3 py-2 text-xs text-[#687A6E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 답글 작성 */}
          <section className="rounded-[22px] bg-[#EEF2EC] p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-[#263B32]">답글 작성</h2>
            <p className="mb-5 text-[11px] text-[#829087]">
              정중하고 구체적인 답글은 매장의 신뢰를 높여요.
            </p>
            <label
              htmlFor="ownerReply"
              className="mb-2 block text-xs font-bold text-[#405047]"
            >
              업주 답글
            </label>
            <textarea
              id="ownerReply"
              value={reply}
              onChange={(e) => setReply(e.target.value.slice(0, 500))}
              placeholder="리뷰에 대한 답글을 작성해 주세요."
              rows={4}
              className="w-full resize-none rounded-xl border border-[#E0E6DF] bg-white p-3 text-xs leading-relaxed outline-none focus:border-[#29483B]"
            />
            <p className="mt-2 text-[10px] text-[#91A096]">
              {reply.length} / 500자 · 개인정보나 광고성 표현은 피해 주세요.
            </p>
            <p className="mt-4 text-[10px] text-[#91A096]">
              등록하면 모든 이용자에게 업주 답글로 표시됩니다.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={handleSaveDraft}
                className="rounded-xl border border-[#DFE6DF] bg-white px-4 py-2.5 text-xs font-bold text-[#40584B]"
              >
                임시 저장
              </button>
              <button
                onClick={handleReply}
                className="rounded-xl bg-[#29483B] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#203C31]"
              >
                {editingId ? "수정 완료" : "답글 등록 ›"}
              </button>
            </div>
          </section>

          {/* 기존 답글 관리 */}
          <section className="rounded-[22px] border border-[#E1E7E0] bg-white p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-[#263B32]">
              기존 답글 관리
            </h2>
            <p className="mb-5 text-[11px] text-[#829087]">
              다른 리뷰에 등록한 답글을 수정하거나 삭제할 수 있어요.
            </p>

            <div className="flex flex-col gap-2">
              {replies.map((item) => {
                const review = reviews.find(
                  (review) => review.id === item.reviewId,
                );

                return (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#EEF2EC] p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[11px] font-bold text-[#405047]">
                        {review?.name}님의 리뷰
                      </p>
                      <p className="line-clamp-2 text-[10px] text-[#829087]">
                        {item.content}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="rounded-xl border border-[#DFE6DF] bg-white px-3 py-2 text-xs font-bold text-[#40584B]"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-xl border border-[#D6A39B] bg-white px-3 py-2 text-xs font-bold text-[#B36D62]"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              })}
              {replies.length === 0 && (
                <p className="py-5 text-center text-xs text-[#829087]">
                  등록된 답글이 없습니다.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
