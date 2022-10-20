// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $("#map-image").on("click")
    {

    }

    $('#go-to-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })


    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("user_yjLL5xG0A3kkOCH5BGIDh");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + "님의 메시지가 정상적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약하기!");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", false);
        }, function (err) {
            alert("메시지 전송이 실패했습니다. 다시 시도해주세요.");
        });
    })
})

// Smooth scroll for links with hashes
$("a.smooth-scroll").click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: target.offset().top
                },
                1000,
                function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                }
            );
        }
    }
});

$('.container__music-box').click((e) => {
    const musicList = {
        1: {
            vocal: ['lee.jpg', 'chae.jpg', 'kim_vocal.jpg'],
            singer: '어반자카파',
            title: 'Just the Two of Us'
        },
        2: {
            vocal: ['chae.jpg'],
            singer: '윤하',
            title: '사건의 지평선'
        },
        3: {
            vocal: ['lim.jpg'],
            singer: '빈지노',
            title: 'Always Awake'
        },
        4: {
            vocal: ['kim_vocal.jpg', 'chae.jpg'],
            singer: '박기영, 조유진',
            title: '나에게로의 초대'
        },
        5: {
            vocal: ['lee.jpg'],
            singer: '너드커넥션',
            title: 'Back in Time'
        },
        6: {
            vocal: ['kim_vocal.jpg'],
            singer: 'Keala Settle',
            title: 'This Is Me'
        },
        7: {
            vocal: ['lee.jpg'],
            singer: '하동균',
            title: 'LUCID DREAM'
        },
        8: {
            vocal: ['chae.jpg'],
            singer: '허소영',
            title: 'Destination Moon'
        },
        9: {
            vocal: ['chae.jpg'],
            singer: 'CHEEZE(치즈)',
            title: '퇴근시간'
        },
        10: {
            vocal: ['lee.jpg'],
            singer: '너드커넥션',
            title: 'SUPERNOVA!'
        },
        11: {
            vocal: ['kim_vocal.jpg'],
            singer: '최예근',
            title: '어른'
        },
        12: {
            vocal: ['lee.jpg'],
            singer: '루시',
            title: '항상 엔진을 켜둘게'
        },
        13: {
            vocal: ['lim.jpg', 'lee.jpg'],
            singer: '조광일, 브라운티거',
            title: 'Two Harsh Carls'
        },
        14: {
            vocal: ['kim_vocal.jpg'],
            singer: '(G)I-DLE',
            title: 'TOMBOY'
        },
        15: {
            vocal: ['lim.jpg', 'lee.jpg'],
            singer: '다이나믹듀오',
            title: '고백(Go Back)'
        }
    }
    console.log(e.currentTarget);
    const music = musicList[e.currentTarget.dataset.order];
    e.currentTarget.parentElement.querySelectorAll('.container__music-box').forEach(l => l.classList.remove('box_shadow'));
    e.currentTarget.classList.add('box_shadow');
    const music_profile = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
    const music_player = e.currentTarget.parentElement.nextElementSibling.firstElementChild;
    music_profile.innerHTML = '';
    music.vocal.forEach(v => {
        music_profile.innerHTML += `<img class="singer__photo" src="images/member/${v}" />`;
    });
    music_player.querySelectorAll('span').forEach((s, i) => {
        if (i === 0) {
            s.innerHTML = music.singer;
        } else {
            s.innerHTML = music.title;
        }
    });
    /*
        1. box_shadow 삭제
        2. box_shadow 클릭한 애들만 추가
        3. 상단의 이미지 변경
        4. 아래 글자 변경
    */
});
