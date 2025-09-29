import React from "react";
import "../../css/analysis.css";
import SummaryCard from "./SummaryCard";

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
            <div className="alert_banner"><h3>냉방 사용량 알림</h3><span>평소 사용량보다 3% 증가하여 사용 금액이 증가 하였습니다.</span></div>
          
        </div> 
      </main>
    </div>
  );
}

export default Analysis;
