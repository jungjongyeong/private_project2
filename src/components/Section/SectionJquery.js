import $ from "jquery";
$(function () {

    // article4 구역의 돋보기 클릭하면 이미지를 모달창에서 크게 보기
    $('.article6 ul li:nth-child(1) .zoom a:first-child').on('click', function () {

        $('body').append(`<div class="modal">
                            <div class="imgbox">
                                <iframe width="700" height="505" src="https://www.youtube.com/embed/mTqOy5-HnbE?&autoplay=1"  
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                                    web-share" allowfullscreen></iframe>
                                    <button type="button">닫기</button>
                            </div>
                        </div>`)
        return false
    })
    $('.article6 ul li:nth-child(2) .zoom a:first-child').on('click', function () {

        $('body').append(`<div class="modal">
                            <div class="imgbox">
                            <iframe width="700" height="505" src="https://www.youtube.com/embed/RF7jJtTgyfU?&autoplay=1"
                             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                               allowfullscreen></iframe>
                                    <button type="button">닫기</button>
                            </div>
                        </div>`)

        return false
    })
    $('.article6 ul li:nth-child(3) .zoom a:first-child').on('click', function () {

        $('body').append(`<div class="modal">
                            <div class="imgbox">
                            <iframe width="700" height="505" src="https://www.youtube.com/embed/hssWjNcF8Jo?&autoplay=1"
                             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                              encrypted-media; gyroscope; picture-in-picture; web-share" 
                              allowfullscreen></iframe>
                                    <button type="button">닫기</button>
                            </div>
                        </div>`)

        return false
    })
    $('.article6 ul li:nth-child(4) .zoom a:first-child').on('click', function () {

        $('body').append(`<div class="modal">
                            <div class="imgbox">
                            <iframe width="700" height="505" src="https://www.youtube.com/embed/iUP_ynB70oM?&autoplay=1"
                             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                              clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                               web-share" allowfullscreen></iframe>
                                    <button type="button">닫기</button>
                            </div>
                        </div>`)

        return false
    })
    $('.article6 ul li:nth-child(5) .zoom a:first-child').on('click', function () {

        $('body').append(`<div class="modal">
                            <div class="imgbox">
                            <iframe width="700" height="505" src="https://www.youtube.com/embed/DGI8XEn5FxU?&autoplay=1"
                             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                              clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                               web-share" allowfullscreen></iframe>
                                    <button type="button">닫기</button>
                            </div>
                        </div>`)

        return false
    })
    $('.article6 ul li .zoom a:first-child').on('click', function () {
        $('.modal').css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)'
        })
        $('.imgbox').css({
            position: 'absolute',
            width: '700px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        })
        $('.imgbox button').css({
            position: 'absolute',
            top: '0',
            right: '0',
            background: '#000',
            color: '#fff',
            padding: '5px 10px'
        })

        return false
    })


    // 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
    $('body').on('click', '.modal button, .modal', function () {
        $('.modal').hide()
        $(".imgbox").empty();
    })

    // 모달창의 링크걸린 이미지를 클릭했을때 모달창 닫히는것 막기
    $('body').on('click', '.modal a', function (e) {
        e.stopPropagation()
    })

})