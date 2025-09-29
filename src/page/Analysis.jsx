import React from "react";
import "../css/analysis.css";

function Analysis() {
  return (
    <div>
      <div className="title">통합 분석</div>
      <main>  
        <div>
          <div className="Monthly-usage-summary">
            <section>금월 예상 비용</section>
            <section>금년 예상 비용</section>
          </div>
          <section className="monthly-usage-graph">월별 사용량 그래프</section>
        </div>
        <div>
        </div>  
      </main>
    </div>
  );
}

export default Analysis;
