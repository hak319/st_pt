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

// 슬라이드 이동 함수 (id와 이동값 받음)
function moveSlide(sliderId, n) {
  const slider = document.querySelector(`.slider[data-slider-id="${sliderId}"]`);
  if (!slider) return;

  const slides = slider.querySelector('.slides');
  const totalSlides = slides.children.length;

  if (!(sliderId in sliderIndices)) {
    sliderIndices[sliderId] = 0; // 초기 인덱스 세팅
  }

  sliderIndices[sliderId] += n;

  if (sliderIndices[sliderId] < 0) sliderIndices[sliderId] = totalSlides - 1;
  if (sliderIndices[sliderId] >= totalSlides) sliderIndices[sliderId] = 0;

  slides.style.transform = `translateX(-${sliderIndices[sliderId] * 100}%)`;
}


//하나짜리

let index = 0;
function moveSlideSimple(n) {
  const slides = document.getElementById("slides");
  if (!slides) return;
  const totalSlides = slides.children.length;

  index += n;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

//상장 항목
function showAwardImage(row) {
  const imgUrl = row.getAttribute('data-img');
  const modal = document.getElementById('awardImageModal');
  const img = document.getElementById('awardImage');

  if(imgUrl) {
    img.src = imgUrl;
    modal.style.display = 'flex';
  }
}

function closeAwardImage() {
  const modal = document.getElementById('awardImageModal');
  modal.style.display = 'none';
}

// 작업물 이미지 클릭 확대
function showWorkImage(imgElement) {
  const imgUrl = imgElement.getAttribute('src');
  const modal = document.getElementById('workImageModal');
  const img = document.getElementById('workImage');

  if(imgUrl) {
    img.src = imgUrl;
    modal.style.display = 'flex';
  }
}

function closeWorkImage() {
  document.getElementById('workImageModal').style.display = 'none';
}

function showWorkImage(imgElement) {
  // data-full 속성 있으면 원본 URL 사용, 없으면 src 사용
  const fullImgUrl = imgElement.getAttribute('data-full') || imgElement.src;
  const modal = document.getElementById('workImageModal');
  const img = document.getElementById('workImage');

  if(fullImgUrl) {
    img.src = fullImgUrl;
    modal.style.display = 'flex';
  }
}
