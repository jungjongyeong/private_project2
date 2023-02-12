import React, { useEffect, useState } from "react";
import "./Nav.css";
import "./NavJquery.js";
function Nav() {
  return (
    <header id="header">
      <div className="open">
        <a href="#" className="cd-nav-trigger">Menu
          <span className="cd-nav-icon"></span>
        </a>
      </div>
      <div className="headerFixed">
        <h1><a href="index.html" className="homeLogo logo1"><img src="./img/logo.png"></img></a></h1>
        <div className="row">
          <nav id="nav">
            <ul className="navUl">
              <li className="menu">
                <div className="depth1"><a href="#">해외여행</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">동남아/대만/서남아 </a></li>
                    <li><a href="#none">괌/사이판/호주/뉴질랜드/피지</a></li>
                    <li><a href="#none">유럽/아프리카</a></li>
                    <li><a href="#none">미주/중남미/하와이</a></li>
                    <li><a href="#none">일본</a></li>
                    <li><a href="#none">중국/홍콩/몽골/중앙아시아</a></li>
                    <li><a href="#none">지방출발</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu">
                <div className="depth1"><a href="#">제주/국내여행</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">제주/국내여행</a></li>
                    <li><a href="#none">제주도렌터카</a></li>
                    <li><a href="#none">울릉도</a></li>
                    <li><a href="#none">내나라여행</a></li>
                    <li><a href="#none">국내골프</a></li>
                    <li><a href="#none">단독여행문의</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu">
                <div className="depth1"><a href="#">호텔</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">해외호텔</a></li>
                    <li><a href="#none">국내숙박</a></li>
                    <li><a href="#none">공지사항</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu">
                <div className="depth1"><a href="#none">허니문</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">FAQ</a></li>
                    <li><a href="#none">이벤트</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu">
                <div className="depth1"><a href="#none">골프</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">FAQ</a></li>
                    <li><a href="#none">이벤트</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu">
                <div className="depth1"><a href="#">항공</a></div>
                <div className="depth2">
                  <ul>
                    <li><a href="#none">항공권 검색</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      <div className="cd">
        <h1><a href="index.html" className="homeLogo"><img src="./img/logo.png"></img></a></h1>
        <div className="cd_full">
          <h2>SITEMAP</h2>
          <div className="cd_nav">
            <div className="cdSection">
              <ul className="sectionBig">
                <li>
                  <a href="" className="first intro">회사소개</a>
                  <ul className="sectionSmall">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#none">CEO 인사말</a></li>
                    <li><a href="#none">회사연혁</a></li>
                    <li><a href="#none">오시는 길</a></li>
                  </ul>
                </li>
                <li>
                  <a href="" className="first">사업소개</a>
                  <ul className="sectionSmall">
                    <li><a href="#">사업분야</a></li>
                    <li><a href="#none">사업분야2</a></li>
                    <li><a href="#none">인증서</a></li>
                    <li><a href="#none">파트너</a></li>
                  </ul>
                </li>
                <li>
                  <a href="" className="first">제품소개</a>
                  <ul className="sectionSmall">
                    <li><a href="#">제품 01</a></li>
                    <li><a href="#none">제품 02</a></li>
                    <li><a href="#none">제품 03</a></li>
                    <li><a href="#none">제품 04</a></li>
                    <li><a href="#none">제품 05</a></li>
                  </ul>
                </li>
                <li>
                  <a href="" className="first">고객센터</a>
                  <ul className="sectionSmall">
                    <li><a href="#">고객상담</a></li>
                    <li><a href="#none">문의게시판</a></li>
                    <li><a href="#none">공지사항</a></li>
                    <li><a href="#none">제품 04</a></li>
                    <li><a href="#none">제품 05</a></li>
                  </ul>
                </li>
                <li>
                  <a href="" className="first">커뮤니티</a>
                  <ul className="sectionSmall">
                    <li><a href="#none">FAQ</a></li>
                    <li><a href="#none">이벤트</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="cd_nav2">
            <div className="nav2_full">
              <div className="nav2_full_right">
                <ul>
                  <li>
                    <h3>010.3217.3646</h3>
                    <p>phlink@nate.com</p>
                  </li>
                  <li>
                    <div>성공적인 비즈니스를 실현해 드립니다.</div>
                    <div>(주) 미광디자인</div>
                  </li>
                  <li>
                    <div className="cd_sns">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
