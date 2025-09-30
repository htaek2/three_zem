function AlertBanner({ topic = "" }) {
  
  const TitleMap = {
    1: "냉방 사용량 알림",
    2: "냉방기기 관련 피드백",
    3: "이상 패턴 알림",
  }

  const iconMap = {
    1: "used-alert.svg",
    2: "solution-alert.svg",
    3: "pattern_error-alert.svg",
  };

  return (
    <div className={`alert_banner${topic}`}>
      <div>
        <h3>{TitleMap[topic]}</h3>
        <span>맞춤 텍스트</span>
      </div>

      <div>{iconMap[topic] && <img src={iconMap[topic]} />}</div>
    </div>
  );
}

export default AlertBanner;
