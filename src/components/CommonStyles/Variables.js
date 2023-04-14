const font = {
  sizeMobile: '12px',
  sizeTab: '14px',
  sizeDesk: '18px',
  titleMobile: '16px',
  titleTab: '24px',
  titleDesk: '36px',
  weightMedium: '600',
};

const colors = {
  accent: 'orangered',
  text: 'white',
  background: '#3D1766',
};

const body = document.querySelector('body');
body.style.backgroundColor = colors.background;
body.style.color = colors.text;
export { font, colors };
