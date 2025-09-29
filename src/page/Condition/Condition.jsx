
import React from "react";
import "../../css/condition.css";
import Energy from "./Energy";

function Condition() {
  return (
  <>
    <div className="title">에너지 현황</div>
        <div className="main">
          <Energy type="elect" title="전력" icon="elect_icon.svg" />
          <Energy type="gas" title="가스" icon="gas_icon.svg" />
          <Energy type="water" title="수도" icon="water_icon.svg" />

           
            

            <div className="average">
                <div className="average_charge">
                    <div className="average_charge_header">
                      <img src="../public/building_icon.svg" alt="빌딩"></img>
                      동 업종 일평균 대비 사용량
                    </div>
                    <div className="average_charge_main">
                        <div className="average_charge_main_L">
                          <div className="today_title">일평균 대비 요금</div>
                          <div className="today_value ave">00%</div>
                          <div className="today_ratio">
                                <div className="updown_icon">
                                    <img src= "../public/up_icon.svg" alt="오름세"></img>
                                    <img src= "../public/down_icon.svg" alt="내림세"></img>
                                </div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="average_charge_main_R">표</div>
                    </div>
                    <div className="average_charge_footer">
                        <div className="average_charge_footer_L">
                          <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전국 평균 요금</div>
                          <div><img src="../public/condition_circle.svg" alt="⚪"></img> 우리지역 평균 요금</div>
                          <div><img src="../public/condition_circle.svg" alt="⚪"></img> 우리 빌딩 요금</div>
                        </div>
                        <div className="average_charge_footer_R">
                          <div>325,000 원</div>
                          <div>250,000 원</div>
                          <div>296,250 원</div>
                        </div>
                    </div>
                </div>
<hr className="liner"></hr>
                <div className="average_country">
                  <div>전국 일평균 대비</div>
                  <div className="average_chart">표</div>
                </div>
<hr className="liner"></hr>
                <div className="average_location">
                  <div>우리지역(대전) 일평균 대비</div>
                  <div className="average_chart">표</div>
                </div>
            </div>
        </div>
  </>);
}
export default Condition;




