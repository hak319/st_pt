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


// 수상 이미지 모달
function showAwardImage(row) {
  const imgUrl = row.getAttribute('data-img');
  const modal = document.getElementById('awardImageModal');
  const img = document.getElementById('awardImage');

  if (imgUrl) {
    img.src = imgUrl;
    modal.style.display = 'flex';
  }
}

function closeAwardImage() {
  const modal = document.getElementById('awardImageModal');
  modal.style.display = 'none';
}

// 작업물 이미지 확대 모달
function showWorkImage(imgElement) {
  const fullImgUrl = imgElement.getAttribute('data-full') || imgElement.src;
  const modal = document.getElementById('workImageModal');
  const img = document.getElementById('workImage');

  if (fullImgUrl) {
    img.src = fullImgUrl;
    modal.style.display = 'flex';
  }
}

function closeWorkImage() {
  const modal = document.getElementById('workImageModal');
  modal.style.display = 'none';
}

// 다크모드 토글
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
