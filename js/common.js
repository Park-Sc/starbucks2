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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() // 2021 