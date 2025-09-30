import React from "react";
import styled from "styled-components";

function Overview() {
  return (
    <Container>
      <Viewer3DContainer>
        <Viewer3D>
          <Viewer3DTitleSection>
            <Viewer3DTitle>
              <img src="../public/building_icon_ver2.svg" alt="건물" />
              <h1>토리빌딩</h1>
            </Viewer3DTitle>
            <Viewer3DSubTitle>Real-time Data Active</Viewer3DSubTitle>
          </Viewer3DTitleSection>
          <Viewer3DRender>
            <h2>여기에 3D 렌더링되어야함.</h2>
          </Viewer3DRender>
          <Viewer3DBack>
            <img src="../public/back_icon.svg" alt="뒤로가기" />
          </Viewer3DBack>
        </Viewer3D>
        <Info3D>
          <h2>4층 - 강의실</h2>
          <Info3DValues>
            <Info3DValue>
              <div>
                <img src="../public/elect_icon.svg" alt="전력" />
                <h3>83.4 hkWh</h3>
              </div>
              <h4>전력 사용량</h4>
            </Info3DValue>
            <Info3DValue>
              <div>
                <img src="../public/gas_icon.svg" alt="가스" />
                <h3>0 ㎥</h3>
              </div>
              <h4>가스 사용량</h4>
            </Info3DValue>
            <Info3DValue>
              <div>
                <img src="../public/water_icon.svg" alt="수도" />
                <h3>42.12 ㎥</h3>
              </div>
              <h4>수도 사용량</h4>
            </Info3DValue>
            <Info3DValue>
              <div>
                <img src="../public/waring_icon.svg" alt="알림" />
                <h3>0</h3>
              </div>
              <h4>알림</h4>
            </Info3DValue>
          </Info3DValues>
        </Info3D>
      </Viewer3DContainer>
      <UsageContainer>
        <section>
          <UsageTitle>금월 전력 사용량</UsageTitle>
          <UsageGraphContainer></UsageGraphContainer>
        </section>
        <section>
          <UsageTitle>금일 전력 사용량</UsageTitle>
          <UsageGraphContainer></UsageGraphContainer>
        </section>
      </UsageContainer>
    </Container>
  );
};

export default Overview;



const Container = styled.div`
  box-sizing: border-box;
`;

const Viewer3DContainer = styled.div`
  width: 100%;
  height: 453px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;
  border: 1px solid #1d282f;
  border-radius: 11px;
  margin-bottom: 18px;

  @media (max-width: 1023px) and (min-width: 768px) {
    height: 100vh;
    gap: 0;
    margin: 0;
    padding: 20px;
  }

  @media (max-width: 767px) {
    min-height: 100vh;
    gap: 0;
    margin: 0;
    padding: 15px;
  }
`;

const Viewer3D = styled.section`
  display: flex;
  width: 100%;
  height: 59.6%;
  gap: 22%;
  background: linear-gradient(
    to bottom,
    #072f2a 0%,
    #073028 4%,
    #082a27 48%,
    #081c1f 98%
  );

  @media (max-width: 1023px) and (min-width: 768px) {
    flex-direction: column;
    height: 70vh;
    border-radius: 20px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 767px) {
    height: 75vh;
    border-radius: 25px;
    border: none;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    position: relative;
    flex-direction: column;
  }
`;

const Viewer3DTitleSection = styled.div`
  margin-top: 16px;
  margin-left: 18px;
  width: fit-content;

  @media (max-width: 1023px) and (min-width: 768px) {
    margin: 30px 0 0 30px;
    z-index: 5;
  }

  @media (max-width: 767px) {
    margin: 25px 0 0 25px;
    z-index: 5;
  }
`;

const Viewer3DTitle = styled.div`
  display: flex;
  gap: 11px;
  height: 32px;
  align-items: center;

  img {
    width: 25px;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    gap: 15px;
    height: auto;
    margin-bottom: 10px;

    img {
      width: 35px;
      height: 35px;
    }

    h1 {
      font-size: 42px;
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: 767px) {
    gap: 12px;
    height: auto;
    margin-bottom: 8px;

    img {
      width: 30px;
      height: 30px;
    }

    h1 {
      font-size: 36px;
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Viewer3DSubTitle = styled.div`
  width: fit-content;
  margin-top: 5px;
  padding: 6px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  background-color: #1d282f;
  border-radius: 7px;

  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
    margin-left: 50px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.9;
    margin-left: 42px;
  }
`;

const Viewer3DRender = styled.div`
  max-width: 691px;
  border: 1px solid white;
  flex: 1;

  @media (max-width: 1023px) and (min-width: 768px) {
    border: none;
    margin: 20px 30px 30px 30px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 767px) {
    border: none;
    margin: 15px 25px 25px 25px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 20px;
  }
`;

const Viewer3DBack = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: #1d282f;
  top: 16px;
  right: 18px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 1023px) and (min-width: 768px) {
    width: 55px;
    height: 55px;
    background-color: rgba(29, 40, 47, 0.9);
    backdrop-filter: blur(10px);
    top: 30px;
    right: 30px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(29, 40, 47, 1);
      transform: scale(1.05);
    }
  }

  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    background-color: rgba(29, 40, 47, 0.9);
    backdrop-filter: blur(10px);
    top: 25px;
    right: 25px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  @media (max-width: 360px) {
    width: 35px;
    height: 35px;

    img {
      width: 15px;
    }
  }
`;

const Info3D = styled.section`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h2 {
    font-weight: 800;
    font-size: 24px;
    color: #fafafa;
    height: auto;
    padding-top: 25px;
    padding-left: 18px;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    background: #09131a;
    border: none;
    border-radius: 20px;
    padding: 25px;
    gap: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

    h2 {
      font-weight: 900;
      font-size: 32px;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  @media (max-width: 767px) {
    background: #09131a;
    border: none;
    border-radius: 25px;
    padding: 20px;
    gap: 15px;
    margin: 20px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    h2 {
      font-weight: 900;
      font-size: 28px;
      margin: 0;
      text-align: center;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 24px;
    }
  }
`;

const Info3DValues = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1023px) and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    flex: 1;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    flex: 1;
  }

  @media (max-width: 425px) {
     display: flex;
     flex-direction: column;
  }

  

  
`;

const Info3DValue = styled.div`
  min-width: 156px;
  width: fit-content;
  height: 70px;

  > div {
    display: flex;
    gap: 20px;
    align-items: center;

    h3 {
      font-weight: 700;
      font-size: 24px;
      color: #fafafa;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    color: #787878;
    margin-top: 10px;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid #1d282f;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 80px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
      background: rgba(0, 0, 0, 0.6);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 767px) {
    background: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 65px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    width: 100%;

    > div h3 {
      font-size: 14px;
    }

    h4 {
      font-size: 10px;
    }
  }
  
`;

const UsageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;

  section {
    width: 50%;
    height: 100%;
    border: 1px solid #1d282f;
    border-radius: 11px;
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    height: auto;
    margin-top: 10px;

    section {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    height: auto;
    margin-top: 10px;
   flex-direction: column;
    section {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
      flex-direction: column;
`;

const UsageTitle = styled.h1`
  font-size: 26px;
  margin-top: 18px;
  margin-left: 18px;
  color: #fafafa;

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

const UsageGraphContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 370px;
`;
