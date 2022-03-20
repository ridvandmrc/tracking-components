export default {
  title: 'Layout/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

export const Basic = ():HTMLElement => {
  const cardElement = document.createElement('track-card');
  cardElement.innerHTML = `<div slot="title">Shrimp and Chorizo Paella</div>
  <div slot="footer">
    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
  </div>
  <div><img src="https://mui.com/static/images/cards/paella.jpg" /></div
>`;
  return cardElement;
};
