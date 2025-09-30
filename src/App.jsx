import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Overview from "./page/Overview";
import Monitoring from "./page/Monitoring";
import Condition from "./page/Condition/Condition";
import Condition_Detail from "./page/Condition_Detail";
import Analysis from "./page/Analysis/Analysis";
import Emission from "./page/Emission";

function App() {
  const [currentPage, setCurrentPage] = useState("overview");

  // body data-page 속성 설정 (기존 CSS 활성화 로직 유지)
  useEffect(() => {
    document.body.setAttribute("data-page", currentPage);
    document.title = "BEMS - 모니터링";
  }, [currentPage]);



  return (
    <Router>
      {/* 상단 고정 바 */}
      <header className="main-header" role="banner" aria-label="상단 바">
        <img src="./public/main_icon.svg" alt="메인 아이콘" className="logo" />
        <h1 className="title">BEMS 제어</h1>
      </header>

      {/* 컨텐츠 컨테이너 */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/condition/detail" element={<Condition_Detail />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/emission" element={<Emission />} />
        </Routes>
      </div>

      {/* 하단 고정 네비 */}
      <footer
        className="main-footer"
        role="navigation"
        aria-label="하단 네비게이션"
      >
        <nav className="bottom-nav">
          <Link
            to="/overview"
            className="nav-button"
            
            href="/overview"
            data-key="overview"
            aria-label="개요"            
          >
            <div className="icon-wrapper">
              <img
                src="../public/overview_icon.svg"
                alt="개요"
                className="icon-img"
              />
              <span className="nav-label">개요</span>
            </div>
          </Link>

          <Link
            to="/monitoring"
            className="nav-button"
            
            href="/monitoring"
            data-key="monitoring"
            aria-label="모니터링"
          >
            <div className="icon-wrapper">
              <img
                src="../public/monitoring_icon.svg"
                alt="모니터링"
                className="icon-img"
              />
              <span className="nav-label">모니터링</span>
            </div>
          </Link>

          <Link
            to="/condition"
            className="nav-button"
            
            href="/condition"
            data-key="condition"
            aria-label="에너지 현황"
          >
            <div className="icon-wrapper">
              <img
                src="../public/condition_icon.svg"
                alt="에너지 현황"
                className="icon-img"
              />
              <span className="nav-label">에너지 현황</span>
            </div>
          </Link>

          <Link
            to="/analysis"
            className="nav-button"
            
            href="/analysis"
            data-key="analysis"
            aria-label="통합 분석"
          >
            <div className="icon-wrapper">
              <img
                src="../public/analysis_icon.svg"
                alt="통합 분석"
                className="icon-img"
              />
              <span className="nav-label">통합 분석</span>
            </div>
          </Link>

          <Link
            to="/emission"
            className="nav-button"

            href="/emission"
            data-key="emission"
            aria-label="탄소배출"
          >
            <div className="icon-wrapper">
              <img
                src="../public/emission_icon.svg"
                alt="탄소배출"
                className="icon-img"
              />
              <span className="nav-label">탄소배출</span>
            </div>
          </Link>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
