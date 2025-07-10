// 섹션 보여주기 함수
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.toggle('active', section.id === id);
  });
}

// 다크 모드 토글
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 단순 슬라이더 (id 없이 하나의 슬라이더용)
function moveSlideSimple(step) {
  const slides = document.querySelector('#slides');
  if (!slides) return;

  const totalSlides = slides.children.length;
  const currentTransform = slides.style.transform;
  let currentIndex = 0;

  if (currentTransform) {
    const match = currentTransform.match(/translateX\(-(\d+)00%\)/);
    if (match) {
      currentIndex = parseInt(match[1], 10);
    }
  }

  let newIndex = currentIndex + step;
  if (newIndex >= totalSlides) newIndex = 0;
  if (newIndex < 0) newIndex = totalSlides - 1;

  slides.style.transform = `translateX(-${newIndex}00%)`;
}

// 여러 슬라이더 관리 함수 (data-slider-id 이용)
function moveSlide(sliderId, step) {
  const slider = document.querySelector(`.slider[data-slider-id="${sliderId}"]`);
  if (!slider) return;

  const slides = slider.querySelector('.slides');
  const totalSlides = slides.children.length;

  const currentTransform = slides.style.transform;
  let currentIndex = 0;

  if (currentTransform) {
    const match = currentTransform.match(/translateX\(-(\d+)00%\)/);
    if (match) {
      currentIndex = parseInt(match[1], 10);
    }
  }

  let newIndex = currentIndex + step;
  if (newIndex >= totalSlides) newIndex = 0;
  if (newIndex < 0) newIndex = totalSlides - 1;

  slides.style.transform = `translateX(-${newIndex}00%)`;
}
