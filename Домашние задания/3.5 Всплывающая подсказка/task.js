const links = document.querySelectorAll('.has-tooltip');

let openHint = null;

links.forEach((link) => {
  const div = document.createElement('div');
  div.classList.add('tooltip');
  div.textContent = link.title;
  link.insertAdjacentElement('afterend', div);

  const linkPosition = link.getBoundingClientRect();
  div.style.left = linkPosition.left + 'px';
  div.style.top = linkPosition.top + 18 + 'px';

  link.onclick = () => {
    if (openHint !== null) {
      openHint.classList.remove('tooltip_active');
    }

    if (openHint === div) {
      openHint = null;
    } else {
      div.classList.add('tooltip_active');
      openHint = div;
    }

    return false;
  };
});