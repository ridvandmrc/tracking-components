export default {
  title: 'Layout/Grid',
  argTypes: {
    // Disable object editing
    col: {
      control: 'object',
    },
    space: {
      control: 'object',
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

export const Basic = (props): HTMLElement => {
  console.log(props);
  const gridElement = document.createElement('track-grid-container');
  gridElement.innerHTML = `<track-grid-item l="4" md="4">1</track-grid-item><track-grid-item l="4" md="4">2</track-grid-item><track-grid-item md="2">3</track-grid-item
    ><track-grid-item md="2">4</track-grid-item><track-grid-item md="2">5</track-grid-item><track-grid-item md="2">6</track-grid-item><track-grid-item md="4">7</track-grid-item
    ><track-grid-item md="2">8</track-grid-item><track-grid-item md="2">9</track-grid-item><track-grid-item md="4">10</track-grid-item>`;
    
    gridElement.col = props.cols;
    gridElement.space = props.space;
    return gridElement;
};

Basic.args = {
  col: { s: 1, md: 4, l: 8 },
  space: { s: 1, md: 2, l: 3 },
};
