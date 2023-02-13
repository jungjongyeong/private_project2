import "./App.css";
import Nav from "./components/Nav/Nav";
import Section from "./components/Section/Section";
import SimpleSlider from "./components/Section/SectionSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/Section/slick.css";
function App() {
  const settings = {
    infinite: true,     //무한 반복 옵션     
    slidesToShow: 4,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true,         // 옆으로 이동하는 화살표 표시 여부
    dots: true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true,            // 자동 스크롤 사용 여부
    autoplaySpeed: 10000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false,        // 세로 방향 슬라이드 옵션
    draggable: true,     //드래그 가능 여부 
  };
  return (
    <div className="App">
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <div className="divdivdiv">dddd</div>
          </div>
          <div>
            <h3>2</h3>
            <div className="divdivdiv">dddd</div>
          </div>
          <div>
            <h3>3</h3>
            <div className="divdivdiv">dddd</div>
          </div>
          <div>
            <h3>4</h3>
            <div className="divdivdiv">dddd</div>
          </div>
          <div>
            <h3>5</h3>
            <div className="divdivdiv">dddd</div>
          </div>
          <div>
            <h3>6</h3>
            <div className="divdivdiv">dddd</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;



