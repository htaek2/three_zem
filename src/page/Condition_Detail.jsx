import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/condition_detail.css";
import RemoteCon from "./Common/RemoteCon";

function Condition_Detail() {

  const condtionOpen = useNavigate();

  return (
    <>
    <div className="remote_con">
      <div className="remote_con_total">
        <div className="con_header">
          <div onClick={()=>condtionOpen(-1)}>⬅️</div>
          전력 상세정보
        </div>

        <div className="con_main">날짜/시간
          < RemoteCon />
        </div>
        <div className="con_realtime">
          <div>
            <div>5분 단위</div>
            <div>15분 단위</div>
            <div>30분 단위</div>
          </div>
          <div>실시간</div>
        </div>
        <div className="con_footer">
          <div>건물/층별</div>
          <div>1층 - 사무실</div>
          <div>2층 - 강의실</div>
          <div>3층 - 강의실</div>
          <div>4층 - 강의실</div>
        </div>
        <div className="con_charge">요금 보기</div>
      </div>
    </div>
    <div className="chart">

    </div>
    </>
  );
}
export default Condition_Detail;

