import "../../css/common.css";

function StatIndicator({ type = "up", value = "00", status = "증가" }) {
    return (
         <div className="today_ratio">
                                <div className="updown_icon">
                                    <img src={`../public/${type}_icon.svg`} alt={status === "증가" ? "오름세" : "내림세"}></img>
                                </div>
                                <div>전일 동시간 대비</div>
                                <div>{value}%</div>
                                <div className="updown_font">
                                    <div>{status}</div>
                                </div>
         </div>
    );
}

export default StatIndicator;