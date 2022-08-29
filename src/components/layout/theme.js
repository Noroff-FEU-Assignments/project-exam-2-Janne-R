const sizes = {
  mobileS: '320px',
  mobileL: '480px',
  tabletS: '768px',
  tabletL: '820px',
  laptopS: '1024px',
  laptopL: '1200px',
  desktop: '2560px'
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tabletS: `(min-width: ${sizes.tabletS})`,
  tabletL: `(min-width: ${sizes.tabletL})`,
  laptopS: `(min-width: ${sizes.laptopS})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const colors = {
  primaryColor: "#375D71",
  buttonColor: "#BA5A4C",
  highlightColor: "#FBCC86",
  backgroundColorDark: "#F8F4F0",
  backgroundColorLight: "#FCFBF9",
  errorColor: "#B30D00",
  successColor: "#3B8519",
};

const theme = {
  sizes, devices, colors
};

export default theme;