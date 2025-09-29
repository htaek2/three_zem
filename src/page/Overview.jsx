import React from "react";
import "../css/overview.css";

const Overview = () => {
  return (
    <>
      <div className="viewer_3d_container">
        <section className="viewer_3d">
          <div className="viewer_3d_title_section">
            <div className="viewer_3d_title">
              <img src="../public/building_icon_ver2.svg" alt="건물" />
              <h1>토리빌딩</h1>
            </div>
            <div className="viewer_3d_sub_title">Real-time Data Active</div>
          </div>
          <div className="viewer_3d_render">
            <h2>여기에 3D 렌더링되어야함.</h2>
          </div>
          <div className="viewer_3d_back">
            <img src="../public/back_icon.svg" alt="뒤로가기" />
          </div>
        </section>
        <section className="info_3d">
          <h2>4층 - 강의실</h2>
          <div className="info_3d_values">
            <div className="info_3d_value">
              <div>
                <img src="../public/elect_icon.svg" alt="전력" />
                <h3>83.4 hkWh</h3>
              </div>
              <h4>전력 사용량</h4>
            </div>
            <div className="info_3d_value">
              <div>
                <img src="../public/gas_icon.svg" alt="가스" />
                <h3>0 ㎥</h3>
              </div>
              <h4>가스 사용량</h4>
            </div>
            <div className="info_3d_value">
              <div>
                <img src="../public/water_icon.svg" alt="수도" />
                <h3>42.12 ㎥</h3>
              </div>
              <h4>수도 사용량</h4>
            </div>
            <div className="info_3d_value">
              <div>
                <img src="../public/waring_icon.svg" alt="알림" />
                <h3>0</h3>
              </div>
              <h4>알림</h4>
            </div>
          </div>
        </section>
      </div>
      <div className="usage_container">
        <section>
          <h1 className="usage_title">금월 전력 사용량</h1>
          <div className="usage_graph_container"></div>
        </section>
        <section>
          <h1 className="usage_title">금일 전력 사용량</h1>
          <div className="usage_graph_container"></div>
        </section>
      </div>
    </>
  );
};

export default Overview;
