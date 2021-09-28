const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
});
//addEventListener 이러한 이벤트가 작동이 되면~ 이런 함수를 실행할거다 라는 의미
searchInputEl.addEventListener('blur', function(){ // <이러한 함수를 핸들러 부른다
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//브라우저 창 그자체 보고 있는 화면 자체
//lodash cdn을 통하여 경로를 주고, 그 경로에 있는 함수인 _.throttle을 통하여 스크롤 될때 실행되는 함수 갯수를 일정시간에 한번 사용되게끔 제한을 걸었다.
//스크롤 할 때 많이 사용함. 
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 배지 숨기기 
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6 , {
      opacity:0,
      display: 'none'
    })
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6 , {
      opacity:1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));

//_.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7,{
    scrollTo:0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in'); 
fadeEls.forEach(function(fadeEl, index){ // 요소, 반복되는 횟수 > 페이드인을 갯수만큼 반복한다.(반복문)
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


//자바스크립트의 생성자 (클래스) new 자바스크립트의 문법으로 swiper 함수를 실행한다.
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직설정할지 , 수평으로 설정할지
  autoplay: true,
  loop:true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay: {
    delay: 5000 //기본 값은 3000 = 3초 자동재생
  },
  pagination: {
    el: '.promotion .swiper-pagination' , //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부 - 누르면 이동되나
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


const promotionEl = document.querySelector('.promotion'); //프로모션이라는 클래스를 찾아서 변수할당
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 펄스 즉, 보이고있다
promotionToggleBtn.addEventListener('click', function () { //클릭을하면 
  isHidePromotion = !isHidePromotion // 반대의 값을 반환
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }else{
    //보임 처리!
    promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작시간
    {
      y: size,
      repeat: -1, //무한 반복
      yoyo: true, // 재생했던 애니메이션을 다시 뒤감기하듯이 구현함
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정함
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() // 2021 