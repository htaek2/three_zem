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
            <SummaryCard title="월"/>
            <SummaryCard title="일"/>

          </div>
          <section className="ranking_distribution">
            <h2>동 업종 대비 저비용 지출 분석</h2>
          </section>
        </div>

         <div className="analysis_Right">
            <h2>에너지 절감 방안 제시</h2>
            <AlertBanner topic="1"/>
            <AlertBanner topic="2"/>
            <AlertBanner topic="3"/>

          
        </div> 
      </main>
    </div>
  );
}

export default Analysis;
