import React from "react";
import "../css/condition.css";

function Condition() {
  return (
<<<<<<< HEAD
  <>
    <div className="title">에너지 현황</div>
        <div className="main">
=======
  <div>
  
   <div className="title">에너지 현황</div>
        <div classNameName="main">
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
            <div className="elect">
                <div className="elect_1usage">
                    <div className="elect_1usage_header">
                        <div className="elect_1usage_header_L">
<<<<<<< HEAD
                            <div id="elect_title"><img src="../public/elect_icon.svg" alt="전력"></img>전력</div>
                        </div>
                        <div className="elect_1usage_header_R">
                            <img src="../public/energe_detail_whorf.svg" alt="분석하기"></img>
=======
                            <div id="elect_title"><img src="/icon/elect_icon.svg" alt="전력" />전력</div>
                        </div>
                        <div className="elect_1usage_header_R">
                            <img src="/icon/energe_detail_whorf.svg" alt="분석하기" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                    </div>
                    <div className="elect_1usage_main">
                        <div className="elect_1usage_main_L">
                            <div className="today_title">금일 사용량</div>
                            <div className="today_value">0,000.0 kWh</div>
                            <div className="today_ratio">
                                <div className="updown_icon">
<<<<<<< HEAD
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
=======
                                    <img src="/icon/up_icon.svg" alt="오름세" />
                                    <img src="/icon/down_icon.svg" alt="내림세" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                                </div>
                                <div>전일 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="elect_1usage_main_R">표</div>
                    </div>
                    <div className="elect_1usage_footer">
                        <div className="elect_1usage_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전일 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전일 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 최고 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="elect_1usage_footer_R">
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
<hr className="liner"></hr>
=======
<hr className="liner" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                <div className="elect_30usage">
                    <div className="elect_30usage_main">
                        <div className="elect_30usage_main_L">
                            <div className="month_title">금월 사용량</div>
                            <div className="month_value">0,000.0 kWh</div>
                            <div className="month_ratio">
                                <div className="updown_icon">
<<<<<<< HEAD
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
=======
                                    <img src="/icon/up_icon.svg" alt="오름세" />
                                    <img src="/icon/down_icon.svg" alt="내림세" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                                </div>
                                <div>전월 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="elect_30usage_main_R">표</div>
                    </div>
                    <div className="elect_30usage_footer">
                        <div className="elect_30usage_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전월 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 최고 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="elect_30usage_footer_R">
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
<hr className="liner"></hr>
=======
<hr className="liner" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                <div className="elect_charge">
                    <div className="elect_charge_main">
                        <div className="charge_title">전월 대비 실시간 요금</div>
                        <div className="charge_chart">
                            <div>표</div>
                        </div>
                    </div>
                    <div className="elect_charge_footer">
                        <div className="elect_charge_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전월 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="elect_charge_footer_R">
                            <div>0,000 원</div>
                            <div>0,000 원</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gas">
                <div className="gas_1usage">
                    <div className="gas_1usage_header">
                        <div className="gas_1usage_header_L">
<<<<<<< HEAD
                            <div id="gas_title"><img src="../public/gas_icon.svg" alt="가스"></img>가스</div>
                        </div>
                        <div className="gas_1usage_header_R">
                            <img src="../public/energe_detail_whorf.svg" alt="분석하기"></img>
=======
                            <div id="gas_title"><img src="/icon/gas_icon.svg" alt="가스" />가스</div>
                        </div>
                        <div className="gas_1usage_header_R">
                            <img src="/icon/energe_detail_whorf.svg" alt="분석하기" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                    </div>
                    <div className="gas_1usage_main">
                        <div className="gas_1usage_main_L">
                            <div className="today_title_gas">금일 사용량</div>
                            <div className="today_value_gas">0,000.0 ㎥</div>
                            <div className="today_ratio_gas">
                                <div className="updown_icon">
<<<<<<< HEAD
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
=======
                                    <img src="/icon/up_icon.svg" alt="오름세" />
                                    <img src="/icon/down_icon.svg" alt="내림세" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                                </div>
                                <div>전일 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="gas_1usage_main_R">표</div>
                    </div>
                    <div className="gas_1usage_footer">
                        <div className="gas_1usage_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전일 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전일 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 최고 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="gas_1usage_footer_R">
                            <div>0,000.0 ㎥</div>
                            <div>0,000.0 ㎥</div>
                            <div>0,000.0 ㎥</div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
<hr className="liner"></hr>
=======
<hr className="liner" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                <div className="gas_30usage">
                    <div className="gas_30usage_main">
                        <div className="gas_30usage_main_L">
                            <div className="month_title_gas">금월 사용량</div>
                            <div className="month_value_gas">0,000.0 ㎥</div>
                            <div className="month_ratio_gas">
                                <div className="updown_icon">
<<<<<<< HEAD
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
=======
                                    <img src="/icon/up_icon.svg" alt="오름세" />
                                    <img src="/icon/down_icon.svg" alt="내림세" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                                </div>
                                <div>전월 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="gas_30usage_main_R">표</div>
                    </div>
                    <div className="gas_30usage_footer">
                        <div className="gas_30usage_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전월 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 최고 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="gas_30usage_footer_R">
                            <div>0,000.0 ㎥</div>
                            <div>0,000.0 ㎥</div>
                            <div>0,000.0 ㎥</div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
<hr className="liner"></hr>
=======
<hr className="liner" />
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                <div className="gas_charge">
                    <div className="gas_charge_main">
                        <div className="charge_title_gas">전월 대비 실시간 요금</div>
                        <div className="charge_chart_gas">
                            <div>표</div>
                        </div>
                    </div>
                    <div className="gas_charge_footer">
                        <div className="gas_charge_footer_L">
<<<<<<< HEAD
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
=======
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 전월 사용량</div>
                            <div><img src="/icon/condition_circle.svg" alt="⚪" /> 1㎥ 당 사용량</div>
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
                        </div>
                        <div className="gas_charge_footer_R">
                            <div>0,000 원</div>
                            <div>0,000 원</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="water">
                <div className="water_1usage">
                    <div className="water_1usage_header">
                        <div className="water_1usage_header_L"></div>
                        <div className="water_1usage_header_R"></div>
                    </div>
                    <div className="water_1usage_main">
                        <div className="water_1usage_main_L"></div>
                        <div className="water_1usage_main_R"></div>
                    </div>
                    <div className="water_1usage_footer">
                        <div className="water_1usage_footer_L"></div>
                        <div className="water_1usage_footer_R"></div>
                    </div>
                </div>
                <div className="water_30usage"></div>
                <div className="water_30usage_main">
                    <div className="water_30usage_main_L"></div>
                    <div className="water_30usage_main_R"></div>
                </div>
                <div className="water_30usage_footer">
                    <div className="water_30usage_footer_L"></div>
                    <div className="water_30usage_footer_R"></div>
                </div>
                <div className="water_charge">
                    <div className="water_charge_header"></div>
                    <div className="water_charge_main"></div>
                    <div className="water_charge_footer">
                        <div className="water_charge_footer_L"></div>
                        <div className="water_charge_footer_R"></div>
                    </div>
                </div>
            </div>
            <div className="average">
                <div className="average_charge">
                    <div className="average_charge_header"></div>
                    <div className="average_charge_main">
                        <div className="average_charge_main_L"></div>
                        <div className="average_charge_main_R"></div>
                    </div>
                    <div className="average_charge_footer">
                        <div className="average_charge_footer_L"></div>
                        <div className="average_charge_footer_R"></div>
                    </div>
                </div>
                <div className="average_country"></div>
                <div className="average_location"></div>
            </div>
        </div>
<<<<<<< HEAD
  </>);
}
=======
  </div>
)}
>>>>>>> 1c90bd19c7d0a6fc5de67883f7e13187083c1d4a
export default Condition;
