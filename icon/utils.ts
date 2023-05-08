import * as Icons from './components';

export const kebabCaseToPascalCase = (iconName: string) =>
  iconName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

export const pascalCaseToKebabCase = (value: string) =>
  value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const getIconNames = () => Object.keys(Icons).map(pascalCaseToKebabCase);
