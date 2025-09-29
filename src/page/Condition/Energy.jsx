function Energy({type = "elect", title = "전력", icon = "elect_icon.svg"}) {
    const explainFilter = type === "elect" ? "최고 사용량" : "시간당 최고 사용량";
    const unitFilter = type === "elect" ? "kWh" : "㎥";

    const icons = {
        "detail" : "../public/energe_detail_whorf.svg",
        "up" : "../public/up_icon.svg",
        "down" : "../public/down_icon.svg",
        "circle" : "../public/condition_circle.svg"
    }

    return (
        <>
         <div className="energy">
                <div className="energy_1usage">
                    <div className="energy_1usage_header">
                        <div className="energy_1usage_header_L">
                            <div id="energy_title"><img src={`../public/${icon}`} alt={title}></img>{title}</div>
                        </div>
                        <div className="energy_1usage_header_R">
                            <img src= { icons["detail"] } alt="분석하기"></img>
                        </div>
                    </div>
                    <div className="energy_1usage_main">
                        <div className="energy_1usage_main_L">
                            <div className="today_title">금일 사용량</div>
                            <div className= { `today_value ${type}` }>0,000.0 {unitFilter}</div>
                            <div className="today_ratio">
                                <div className="updown_icon">
                                    <img src= { icons["up"] } alt="오름세"></img>
                                    <img src= { icons["down"] } alt="내림세"></img>
                                </div>
                                <div>전일 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="energy_1usage_main_R">표</div>
                    </div>
                    <div className="energy_1usage_footer">
                        <div className="energy_1usage_footer_L">
                            <div><img src= { icons["circle"] } alt="⚪"></img> 전일 사용량</div>
                            <div><img src= { icons["circle"] } alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src= { icons["circle"] } alt="⚪"></img> {explainFilter}</div>
                        </div>
                        <div className="energy_1usage_footer_R">
                            <div>0,000.0 {unitFilter}</div>
                            <div>0,000.0 {unitFilter}</div>
                            <div>0,000.0 {unitFilter}</div>
                        </div>
                    </div>
                </div>
<hr className="liner"></hr>
                <div className="energy_30usage">
                    <div className="energy_30usage_main">
                        <div className="energy_30usage_main_L">
                            <div className="month_title">금월 사용량</div>
                            <div className= { `month_value ${type}` }>0,000.0 {unitFilter}</div>
                            <div className="month_ratio">
                                <div className="updown_icon">
                                    <img src= { icons["up"] } alt="오름세"></img>
                                    <img src= { icons["down"] } alt="내림세"></img>
                                </div>
                                <div>전월 동시간 대비</div>
                                <div>00%</div>
                                <div className="updown_font">
                                    <div>증가</div>
                                    <div>감소</div>
                                </div>
                            </div>
                        </div>
                        <div className="energy_30usage_main_R">표</div>
                    </div>
                    <div className="energy_30usage_footer">
                        <div className="energy_30usage_footer_L">
                            <div><img src= { icons["circle"] } alt="⚪"></img> 전월 사용량</div>
                            <div><img src= { icons["circle"] } alt="⚪"></img> 1㎥ 당 사용량</div>
                            <div><img src= { icons["circle"] } alt="⚪"></img> {explainFilter}</div>
                        </div>
                        <div className="energy_30usage_footer_R">
                            <div>0,000.0 {unitFilter}</div>
                            <div>0,000.0 {unitFilter}</div>
                            <div>0,000.0 {unitFilter}</div>
                        </div>
                    </div>
                </div>
<hr className="liner"></hr>
                <div className="energy_charge">
                    <div className="energy_charge_main">
                        <div className="charge_title">전월 대비 실시간 요금</div>
                        <div className="charge_chart">
                            <div>표</div>
                        </div>
                    </div>
                    <div className="energy_charge_footer">
                        <div className="energy_charge_footer_L">
                            <div><img src= { icons["circle"] } alt="⚪"></img> 전월 사용량</div>
                            <div><img src= { icons["circle"] } alt="⚪"></img> 1㎥ 당 사용량</div>
                        </div>
                        <div className="energy_charge_footer_R">
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