import React, { useState, useEffect } from "react";
import "./App.css";

import Overview from "./page/Overview";
import Monitoring from "./page/Monitoring";
import Condition from "./page/Condition";
import Analysis from "./page/Analysis";
import Emission from "./page/Emission";

function App() {
  const [currentPage, setCurrentPage] = useState("overview");

  // body data-page 속성 설정 (기존 CSS 활성화 로직 유지)
  useEffect(() => {
    document.body.setAttribute("data-page", currentPage);
    document.title = "BEMS - 모니터링";
  }, [currentPage]);

  const handleNavClick = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "overview":
        return <Overview />;
      case "monitoring":
        return <Monitoring />;
      case "condition":
        return <Condition />;
      case "analysis":
        return <Analysis />;
      case "emission":
        return <Emission />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      {/* 상단 고정 바 */}
      <header className="main-header" role="banner" aria-label="상단 바">
        <img src="./public/main_icon.svg" alt="메인 아이콘" className="logo" />
        <h1 className="title">BEMS 제어</h1>
      </header>

      {/* 컨텐츠 컨테이너 */}
      <div className="container">{renderCurrentPage()}</div>

      {/* 하단 고정 네비 */}
      <footer
        className="main-footer"
        role="navigation"
        aria-label="하단 네비게이션"
      >
        <nav className="bottom-nav">
          <a
            href="/overview"
            className="nav-button"
            data-key="overview"
            aria-label="개요"
            onClick={(e) => handleNavClick("overview", e)}
          >
            <div className="icon-wrapper">
              <img
                src="../public/overview_icon.svg"
                alt="개요"
                className="icon-img"
              />
              <span className="nav-label">개요</span>
            </div>
          </a>

          <a
            href="/monitoring"
            className="nav-button"
            data-key="monitoring"
            aria-label="모니터링"
            onClick={(e) => handleNavClick("monitoring", e)}
          >
            <div className="icon-wrapper">
              <img
                src="../public/monitoring_icon.svg"
                alt="모니터링"
                className="icon-img"
              />
              <span className="nav-label">모니터링</span>
            </div>
          </a>

          <a
            href="/condition"
            className="nav-button"
            data-key="condition"
            aria-label="에너지 현황"
            onClick={(e) => handleNavClick("condition", e)}
          >
            <div className="icon-wrapper">
              <img
                src="../public/condition_icon.svg"
                alt="에너지 현황"
                className="icon-img"
              />
              <span className="nav-label">에너지 현황</span>
            </div>
          </a>

          <a
            href="/analysis"
            className="nav-button"
            data-key="analysis"
            aria-label="통합 분석"
            onClick={(e) => handleNavClick("analysis", e)}
          >
            <div className="icon-wrapper">
              <img
                src="../public/analysis_icon.svg"
                alt="통합 분석"
                className="icon-img"
              />
              <span className="nav-label">통합 분석</span>
            </div>
          </a>

          <a
            href="/emission"
            className="nav-button"
            data-key="emission"
            aria-label="탄소배출"
            onClick={(e) => handleNavClick("emission", e)}
          >
            <div className="icon-wrapper">
              <img
                src="../public/emission_icon.svg"
                alt="탄소배출"
                className="icon-img"
              />
              <span className="nav-label">탄소배출</span>
            </div>
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
