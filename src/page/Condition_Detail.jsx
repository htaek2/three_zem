import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/condition_detail.css";
import RemoteCon from "./Common/RemoteCon";

function Condition_Detail() {

  const condtionOpen = useNavigate();

  return (
    <>
    <div className="condition_detail_con">
      <div className="remote_con">
        
          <div className="con_header">
            전력 상세정보 <img src="../public/dropdown.svg" alt="⬇️" />
          </div>

          <div className="con_main">날짜/시간
            < RemoteCon />
          </div>
<hr className="liner"></hr>
          <div className="con_realtime">
            <div>
              <div>5분 단위</div>
              <div>15분 단위</div>
              <div>30분 단위</div>
            </div>
            <div>실시간</div>
          </div>
<hr className="liner"></hr>
          <div className="con_footer">
            <div>건물/층별</div>
            <div>1층 - 사무실</div>
            <div>2층 - 강의실</div>
            <div>3층 - 강의실</div>
            <div>4층 - 강의실</div>
          </div>
          <div className="con_charge">요금 보기</div>

      </div>
      <div className="chart">

      </div>
    </div>
  </>
  );
}
export default Condition_Detail;

