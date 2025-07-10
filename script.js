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
  
  // 슬라이더 기능
  let index = 0;
  
  function moveSlide(n) {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    index += n;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  