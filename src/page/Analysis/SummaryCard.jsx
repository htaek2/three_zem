import StatIndicator from "../Common/StatIndicator";

function SummaryCard({title = "월"}) {
    return (
            <section className="monthly-usage-summary-item">
                <h2>{title} 예상 비용</h2>
                <h3>0,000,000 원</h3>
                {title === "월" ?  <StatIndicator type="up" value="00" status="증가" /> : <StatIndicator type="down" value="00" status="감소" />}
                <div className="monthly-usage-graph"></div>
            </section>
    )
}
export default SummaryCard;