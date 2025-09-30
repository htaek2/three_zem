import React from "react";
import "../../css/analysis.css";
import SummaryCard from "./SummaryCard";
import AlertBanner from "./AlertBanner";

function Analysis() {
  return (
    <div>
      <div className="title">통합 분석</div>
      <main>
        <div className="analysis_Left">
          <div className="Monthly-usage-summary">
            <SummaryCard title="월" />
            <SummaryCard title="일" />
          </div>
          <section className="ranking_distribution">
            <h2>동 업종 대비 저비용 지출 분석</h2>
            <div className="ranking_distribution_graph">
              <div className="industry-comparison-container">
                <div className="industry-comparison-bar"></div>
                <div className="industry-benchmark-list">
                  <div className="industry-benchmark-item">상위 5% 평균 <span id="industry_benchmark_value">100,000원</span></div>
                  <div className="industry-benchmark-item">전체 평균 <span id="industry_benchmark_value">200,000원</span></div>
                  <div className="industry-benchmark-item">우리 빌딩<span id="industry_benchmark_value">300,000원</span></div>
                </div>
              </div>
            </div>
            <h3>동 업종 <span id="industry_count">3325</span>개 중 상위 <span id="industry_rate">58%</span><span id="industry_message">평균 오차 범위에 속해요.</span></h3>
          </section>
        </div>

        <div className="analysis_Right">
          <h2>에너지 절감 방안 제시</h2>
          <AlertBanner topic="1" />
          <AlertBanner topic="2" />
          <AlertBanner topic="3" />
        </div>
      </main>
    </div>
  );
}

export default Analysis;
