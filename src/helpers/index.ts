import { Options } from './../types/index';

const COLOR_MAP: { [propName: string]: string } = {
  blue: '#2196f3',
  pink: '#e91e63',
  purple: '#9c27b0',
  red: '#f44336',
  teal: '#009688',
  green: '#4caf50',
  black: '#000000',
  white: '#ffffff',
};

const SHADOW_MAP: { [propName: string]: string } = {
  l0: '',
  l1: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
  l2: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
  l3: '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
  l4: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
  l5: '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)',
};

export const getColor = (type: string): string => {
  return COLOR_MAP[type] || type;
};

export const getShadow = (type: string): string => {
  return SHADOW_MAP[type] || type;
};

export const getDefaultOptions = (options: Options) => {
  const defaultOptions: Options = {
    color: 'blue',
    zIndex: 100,
    shadow: 'l2',
    style: {},
    height: '2px',
    el: 'document',

    ...options,
  };

  defaultOptions.color = getColor(defaultOptions.color || 'blue');
  defaultOptions.shadow = getShadow(defaultOptions.shadow || 'l2');

  return defaultOptions;
};

export const setStyle = (el: HTMLElement, style: { [propName: string]: string }) => {
  console.log(style);
  for (const k in style) {
    if (style.hasOwnProperty(k)) {
      el.style[k] = style[k];
      console.log(el.style);
      console.log(style[k]);
    }
  }
};
