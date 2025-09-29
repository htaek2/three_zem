function AlertBanner({ topic = "" }) {
  const iconMap = {
    "1": "used-alert.svg",
    "2": "solution-alert.svg",
    "3": "pattern_error-alert.svg"
  }

  return (
     <div className={`alert_banner${topic}`}>
              <div>
              <h3>냉방 사용량 알림</h3><span>평소 사용량보다 3% 증가하여 사용 금액이 증가 하였습니다.</span>
              </div>
              
              <div>
               {iconMap[topic] && (
                    <img src={iconMap[topic]}/>
        )}
              </div>
    </div>
  );
}

export default AlertBanner;