const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dotsContainer = document.querySelector('.dots-container'); // Новый элемент контейнера точек
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Функция для создания точек и их обработчиков событий
const createDots = () => {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === slideIndex) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      slideIndex = index;
      slide();
    });
    dotsContainer.appendChild(dot);
  });
};

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;

  // Обновляем активные точки
  const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

window.addEventListener('load', () => {
  slide();
  createDots(); // Вызываем функцию создания точек при загрузке страницы
});


const interval = setInterval(() => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
}, 3000);

// Функция для остановки автоматического переключения слайдов при наведении мыши
slider.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

// Функция для возобновления автоматического переключения слайдов при уходе мыши
slider.addEventListener('mouseleave', () => {
  interval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
  }, 3000);
});

