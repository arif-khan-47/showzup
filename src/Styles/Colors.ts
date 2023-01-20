interface IColors {
  secnederyColor: string;
  nonActiveColor: string;
  cardBackgroundColor: string;
  activeTabColor: string;
  nonActiveTabColor: string;
  white: string;
  // new colors v 1.0.0
  primary: string;
  secondary: string;
  primaryRed: string;
  primaryBlack: string;
  grey: string;
}

const Colors: IColors = {
  secnederyColor: '#4166E0',
  nonActiveColor: '#D9D9D9',
  cardBackgroundColor: '#F2F8FC',
  activeTabColor: '#1DAEFF',
  nonActiveTabColor: '#67686D',
  white: '#FFFFFF',
  // new colors v 1.0.0
  primary: '#FF6600',
  secondary: '#4166E0',
  primaryRed: '#FF6600',
  primaryBlack: '#141414',
  grey: '#d0d0d0',
};

export default Colors;

// export default: IColors = {
//     secnederyColor: '#4166E0',
//     nonActiveColor: '#D9D9D9',
//     cardBackgroundColor: '#F2F8FC',
//     activeTabColor: '#1DAEFF',
//     nonActiveTabColor: '#67686D',
//     white: '#FFFFFF',
//     // new colors v 1.0.0
//     primary: "#000000",
//     secondary: "#4166E0",
//     primaryRed: {
//         50: "#FFEBEB",
//         100: "#FFC7C8",
//         200: "#FFA4A5",
//         300: "#FF8082",
//         400: "#FF5D5F",
//         500: "#FF393C",
//         600: "#E21F21",
//         700: "#B9090B",
//         800: "#B9090B",
//         900: "#670001",
//     },
//     primaryBlack: "#141414",
//     grey: "#d0d0d0",
// }
