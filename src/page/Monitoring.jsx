import React, { useEffect, useState } from "react";
import "../css/monitoring.css";

/* 재사용 칩 컴포넌트 */
function CardChip({ src, alt, label }) {
  return (
    <div className="card-chip">
      <img src={src} alt={alt} className="chip-icon" />
      <span className="chip-label">{label}</span>
    </div>
  );
}

export default function Monitoring() {
  // 하단 A/B/C 패널 접힘/펼침 (true=보임, false=숨김)
  // 초기 페인트 깜빡임 방지: 뷰포트 폭으로 초깃값 결정
  const [cardsOpen, setCardsOpen] = useState(() => {
    if (typeof window === "undefined") return true; // SSR 안전장치
    return !window.matchMedia("(max-width: 900px)").matches; // 데스크톱=true, 모바일=false
  });

  useEffect(() => {
    // 화면 크기 바뀌면 데스크톱/모바일 규칙에 맞춰 상태 동기화
    const mql = window.matchMedia("(max-width: 900px)");
    const handle = (e) => setCardsOpen(!e.matches);
    mql.addEventListener("change", handle);
    return () => mql.removeEventListener("change", handle);
  }, []);

  return (
    // data-open을 CSS가 읽어 --reserve-h 계산에 사용
    <div className="monitoring-page" data-open={cardsOpen ? "true" : "false"}>
      <main className="page" role="main" aria-labelledby="monitoring-title">
        <h2 id="monitoring-title" className="page-title">실시간 모니터링</h2>

        {/* 상단 큰 박스(히어로). 아래 간격은 layout-reserve가 만든다 */}
        <section className="hero-card" aria-label="상단 요약 패널">
          상단 큰 박스(콘텐츠 자리)
        </section>

        {/* 히어로 ↔ A/B/C 간격(또는 카드높이+간격)을 실물로 확보 */}
        <div className="layout-reserve" aria-hidden="true" />
      </main>

      {/* 하단 A/B/C — 데스크톱은 항상 보임, 모바일은 화살표로 접힘/펼침 */}
      <section
        id="bottom-cards"
        className="bottom-cards"
        aria-label="하단 요약 패널"
        data-open={cardsOpen ? "true" : "false"}
        aria-hidden={!cardsOpen}
        inert={!cardsOpen ? "" : undefined} /* 숨김일 때 키보드/포커스 차단 */
      >
        {/* A: 전기 */}
        <div className="bottom-card">
          <CardChip src="/elect_icon.svg" alt="전기 아이콘" label="전력" />
          박스 A
        </div>

        {/* B: 가스 */}
        <div className="bottom-card">
          <CardChip src="/gas_icon.svg" alt="가스 아이콘" label="가스" />
          박스 B
        </div>

        {/* C: 수도 */}
        <div className="bottom-card">
          <CardChip src="/water_icon.svg" alt="수도 아이콘" label="수도" />
          박스 C
        </div>
      </section>

      {/* 모바일 전용 화살표(데스크톱에서는 CSS로 숨김) */}
      <button
        type="button"
        className="cards-toggle"
        aria-controls="bottom-cards"
        aria-expanded={cardsOpen}
        onClick={() => setCardsOpen((o) => !o)}
        title={cardsOpen ? "하단 패널 접기" : "하단 패널 펼치기"}
      >
        <span className="visually-hidden">
          {cardsOpen ? "하단 패널 접기" : "하단 패널 펼치기"}
        </span>
        {cardsOpen ? "▼" : "▲"}
      </button>
    </div>
  );
}

