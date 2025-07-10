function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
  
    const target = document.getElementById(id);
    target.style.display = 'block';
    setTimeout(() => {
      target.classList.add('active');
    }, 10);
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  
// 슬라이더 인덱스 관리용 객체
const sliderIndices = {};

// 슬라이드 이동 함수
function moveSlide(sliderId, n) {
  // id가 없으면 기본 슬라이더로 동작 (id: 'slides')
  if (!sliderId) {
    const slides = document.getElementById("slides");
    if (!slides) return;
    const totalSlides = slides.children.length;

    if (!sliderIndices['default']) sliderIndices['default'] = 0;
    sliderIndices['default'] += n;
    if (sliderIndices['default'] < 0) sliderIndices['default'] = totalSlides - 1;
    if (sliderIndices['default'] >= totalSlides) sliderIndices['default'] = 0;

    slides.style.transform = `translateX(-${sliderIndices['default'] * 100}%)`;
    return;
  }

  // sliderId가 있는 경우: 여러 슬라이더 구분
  const slider = document.querySelector(`.slider[data-slider-id="${sliderId}"]`);
  if (!slider) return;

  const slides = slider.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (!(sliderId in sliderIndices)) {
    sliderIndices[sliderId] = 0; // 초기값 세팅
  }

  sliderIndices[sliderId] += n;

  if (sliderIndices[sliderId] < 0) sliderIndices[sliderId] = totalSlides - 1;
  if (sliderIndices[sliderId] >= totalSlides) sliderIndices[sliderId] = 0;

  slides.style.transform = `translateX(-${sliderIndices[sliderId] * 100}%)`;
}
