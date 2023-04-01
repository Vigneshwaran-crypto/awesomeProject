import * as RootNavigation from '../Router/RootNavigation';

export const LOG = (text, value) => {
  if (value) {
    console.log(text, value);
  } else {
    console.log(text);
  }
};

export const Navigate = (name, param) => {
  LOG('navigate method called :', name);
  RootNavigation.navigateScreen(name, param);
};
