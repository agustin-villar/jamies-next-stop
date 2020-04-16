const breakpoints = {
    tabletWidth: '768px',
    desktopWidth: '1024px',
    maxDesktopWidth: '1200px',
};

const fontSizes = {
    heading: '3.5rem',
    headline: '2.4rem',
    title: '1.8rem',
    bodySize: '1.6rem',
    caption: '1.4rem',
    small: '1.3rem',
};

const colors = {
    black: '#000',
    deepBlack: '#222',
    lightGray: '#D4D7D8',
    white: '#FFF',
    blue: '#026AD3',
    lightBlue: '#71B4F7',
};

const getSpacing = (ratio) => `${ratio * 0.8}rem`;

export { getSpacing, fontSizes, breakpoints, colors };
