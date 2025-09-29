function Energy({type = "elect", title = "전력", icon = "elect_icon.svg"}) {
    return (
        <>
         <div className={type}>
                <div className={`${type}_1usage`}>
                    <div className={`${type}_1usage_header`}>
                        <div className={`${type}_1usage_header_L`}>
                            <div id={`${type}_title`}><img src={`../public/${icon}`} alt={title}></img>{title}</div>
                        </div>
                        <div className={`${type}_1usage_header_R`}>
                            <img src="../public/energe_detail_whorf.svg" alt="분석하기"></img>
                        </div>
                    </div>
                    <div className={`${type}_1usage_main`}>
                        <div className={`${type}_1usage_main_L`}>
                            <div className="today_title">금일 사용량</div>
                            <div className="today_value">0,000.0 kWh</div>
                            <div className="today_ratio">
                                <div className="updown_icon">
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
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
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전일 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
                        </div>
                        <div className="elect_1usage_footer_R">
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                        </div>
                    </div>
                </div>
<hr className="liner"></hr>
                <div className="elect_30usage">
                    <div className="elect_30usage_main">
                        <div className="elect_30usage_main_L">
                            <div className="month_title">금월 사용량</div>
                            <div className="month_value">0,000.0 kWh</div>
                            <div className="month_ratio">
                                <div className="updown_icon">
                                    <img src="../public/up_icon.svg" alt="오름세"></img>
                                    <img src="../public/down_icon.svg" alt="내림세"></img>
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
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 최고 사용량</div>
                        </div>
                        <div className="elect_30usage_footer_R">
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                            <div>0,000.0 kWh</div>
                        </div>
                    </div>
                </div>
<hr className="liner"></hr>
                <div className="elect_charge">
                    <div className="elect_charge_main">
                        <div className="charge_title">전월 대비 실시간 요금</div>
                        <div className="charge_chart">
                            <div>표</div>
                        </div>
                    </div>
                    <div className="elect_charge_footer">
                        <div className="elect_charge_footer_L">
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 전월 사용량</div>
                            <div><img src="../public/condition_circle.svg" alt="⚪"></img> 1㎥ 당 사용량</div>
                        </div>
                        <div className="elect_charge_footer_R">
                            <div>0,000 원</div>
                            <div>0,000 원</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Energy;