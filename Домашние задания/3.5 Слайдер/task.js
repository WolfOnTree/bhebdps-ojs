const rightButton = document.querySelector('.slider__arrow_next');
const leftButton = document.querySelector('.slider__arrow_prev');
const imageList = [...document.querySelectorAll('.slider__item')];
const dots = [...document.querySelectorAll('.slider__dot')];

let nowIndex = imageList.findIndex((image) => {
  return image.classList.contains('slider__item_active');
});

rightButton.onclick = () => {
  changeImageRows(1);
};

leftButton.onclick = () => {
  changeImageRows(-1);
};

function changeImageRows(number) {
  imageList[nowIndex].classList.remove('slider__item_active');

  const nextIndex = (nowIndex + number + imageList.length) % imageList.length;
  imageList[nextIndex].classList.add('slider__item_active');

  nowIndex = nextIndex;
}