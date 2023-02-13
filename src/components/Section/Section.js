import React, { useEffect, useState } from "react";
import "./Section.css";
import "./slick.css";
import $ from "jquery";

function Section() {

    return (
        <section id="section">
            <article className="article1">
                <div className="slide-group">
                    <a href="" className="slide slide1">
                        <img src="./img/main_img1.jpg" alt=""></img>
                        <div className="slide_text">
                        </div>
                    </a>
                </div>
                <div id="quickTab">
                    <p className="stit_con_title">어디로 떠나고 싶으세요?</p>
                    <ul className="search_link">
                        <li>패키지</li>
                        <li><a href="">항공</a></li>
                        <li><a href="">호텔</a></li>
                    </ul>
                    <div className="spot_search">
                        <label htmlFor="cityArea">여행지 입력</label>
                        <input type="text" className="" id="cityArea" placeholder="" autoComplete="off" value=""></input>
                        <button type="button" id="cityPopup" className="btn_city searchCity">지역검색<i
                            className="fa-solid fa-location-dot"></i></button>
                    </div>
                    <div className="spot_search">
                        <select>
                            <option>출발예정월</option>
                            <option value="2023년 02월">2023년 02월</option>
                            <option value="2023년 03월">2023년 03월</option>
                            <option value="2023년 04월">2023년 04월</option>
                            <option value="2023년 05월">2023년 05월</option>
                            <option value="2023년 06월">2023년 06월</option>
                            <option value="2023년 07월">2023년 07월</option>
                            <option value="2023년 08월">2023년 08월</option>
                            <option value="2023년 09월">2023년 09월</option>
                            <option value="2023년 10월">2023년 10월</option>
                            <option value="2023년 11월">2023년 11월</option>
                            <option value="2023년 12월">2023년 12월</option>
                        </select>
                        <label htmlFor="txt2_2">여행날짜</label>
                        <input type="date" id="txt2_2" className="spot_date" value=""></input>
                    </div>
                    <button type="button" className="btn_cof cfrm" nlogger="city" id="citySearch">검색하기</button>
                    <div className="block_keyword">
                        <div className="area_word">
                            <div className="txt_keyword">최근검색</div>
                            <ul className="list_keyword" id="travSearchHistory">
                                <li>최근검색이 없습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <article className="article5">
                <div className="slide-group5">
                    <div className="slide slide1">
                        <div className="part1">
                            <a href=""><img src="./img/article5_img1.jpg" alt="" /></a>
                        </div>
                        <div className="part2">
                            <a href="">
                                <h3 className="part2_h3">꿈을 담은 특별한 여행</h3>
                                <p className="part2_p">Original</p>
                                <ul>
                                    <li>특별한 키워드를 담은 하나 Original 상품을 만나보세요.</li>
                                    <li>#머무름 - 머무는 공간이 특별하게 기억되는 여행</li>
                                    <li>#모험 - 이색적인 경험을 즐기는 여행</li>
                                    <li>#함께하다 - 취향과 관심사를 공유하는 여행</li>
                                    <li>#환경친화적인 - 환경친화적인 일상을 실천하는 여행</li>
                                    <li>#제우스월드 특별판 - 하나투어 최고의 럭셔리 패키지 여행 ZEUS</li>
                                </ul>
                            </a>
                            <div className="part2_art1 cf">
                                <a href="" className="part2_img"><img src="./img/article5_img2.jpg" alt="" /></a>
                                <a href="" className="part2_txt">
                                    <div className="part2_info">
                                        <p className="info1">[허영호대장 동행] 네팔 에베레스트 베이스캠프&칼라파타르 13일</p>
                                        <p className="info2">에베레스트 베이스캠프(EBC) 트레킹 및 칼라파타르 일정 포함</p>
                                        <strong className="info3">5,636,000<span>원~</span></strong>
                                    </div>
                                </a>
                            </div>
                            <div className="part2_art2">
                                <a href="" className="part2_img"><img src="./img/article5_img3.jpg" alt="" /></a>
                                <a href="" className="part2_txt">
                                    <div className="part2_info">
                                        <p className="info1">치앙마이 5일 #코끼리와의 하루 #5성급호텔 #5대특식</p>
                                        <p className="info2">코끼리 방갈로 1박 투숙&코끼리가 직접 깨워주는 모닝콜 서비스</p>
                                        <strong className="info3">1,579,000<span>원~</span></strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
            <article className="article6">
                <div>
                    <h3>고객님만을 위한 추천여행</h3>
                    <ul className="bannerUl cf">
                        <li>
                            <a href="#" className="bannerImg1">
                                <strong>다 낭 </strong>
                                <img src="./img/main_banner_img1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="bannerImg2">
                                <strong>발 리</strong>
                                <img src="./img/main_banner_img2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="bannerImg3">
                                <strong>오 사 카</strong>
                                <img src="./img/main_banner_img3.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="bannerImg4">
                                <strong>튀 르 키 에(터키)</strong>
                                <img src="./img/main_banner_img4.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="bannerImg5">
                                <strong>괌</strong>
                                <img src="./img/main_banner_img5.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>

            <article className="article7">
                <div className="box">
                    <h2>떠나자, 하나만 믿고! 🛫</h2>
                    <div>
                        <ul>
                            <li className="inr left">
                                <p className="box1_p1">동영상</p>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3ji9R1-iHvM"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                                <div className="box_txt">
                                    <strong>떠나자, 모든 여행 하나만 믿고 🗽</strong>
                                    <p className="box1_p2">
                                        더 프라이빗하게, 더 여유롭게, 더 안전하게 <br />
                                        여행의 처음부터 끝까지 개런티 할게 🤝 <br />
                                        항공도 ✈ 호텔도 🛌 액티비티도 🎈 <br />
                                        모든 여행 하나만 믿고 가면 돼!
                                    </p>
                                    <b>신년 해외여행 준비도 하나만 믿고</b>
                                </div>
                            </li>
                            <li className="inr center">
                                <p className="box1_p1">Get About</p>
                                <div className="box_txt">
                                    <strong>캐나다 설국 여행의 정석 ⛄</strong>
                                    <p className="box1_p2">
                                        쉽게 허락되지 않는 오로라 관찰 <br />
                                        캐나다 옐로나이프에 머물면서 <br />
                                        오로라 여행 떠나는 3가지 방법 <br />
                                        <br />
                                    </p>
                                    <b>지친 몸과 마음이 치유되는 여행</b>
                                </div>
                            </li>
                            <li className="inr right">
                                <p className="box1_p1">여행정보</p>
                                <img src="./img/article7_img3.png" alt="" />
                                <div className="box_txt">
                                    <strong>떠나자, 하나만 믿고!</strong>
                                    <p className="box1_p2">
                                        여행지는 깊게 일정은 여유롭게,<br />
                                        약속한 여행은 100% 보장하고, <br />
                                        여행 중 긴급 상황에도 안심! <br />
                                        걱정없이 든든하게 하나투어🛫
                                    </p>
                                    <b>하나만 믿고 떠날 수 있는 이유</b>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            <footer id="footer">
                <div className="ft_sns">
                    <ul>
                        <li><a href=""><span className="blind">facebook</span></a></li>
                        <li><a href=""><span className="blind">instagram</span></a></li>
                        <li><a href=""><span className="blind">youtube</span></a></li>
                        <li><a href=""><span className="blind">blog</span></a></li>
                        <li><a href=""><span className="blind">kakaotalk</span></a></li>
                        <li><a href=""><span className="blind">navertalktalk</span></a></li>
                    </ul>
                </div>
                <div className="ft_link">
                    <ul>
                        <li><a href="">개인정보처리방침</a></li>
                        <li><a href="">이메일무단수집거부</a></li>
                    </ul>
                </div>
                <div className="ft_address">
                    <ul>
                        <li>주소 : 서울시 중구 태평로 1가 우리빌딩주식회사</li>
                        <li>대표 : 홍길동</li>
                        <li>전화 : 02-123-4567</li>
                        <li>팩스 : 02-123-4567</li>
                        <li>이메일 : phlink@nate.com</li>
                    </ul>
                </div>
                <div className="ft_info">
                    <ul>
                        <li>Copyright © 미광디자인. All rights reserved.</li>
                        <li><a href="">Desig by MG</a></li>
                    </ul>
                </div>
            </footer>
        </section>
    );
}

export default Section;
