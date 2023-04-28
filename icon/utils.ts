export const toCapitalCase = (iconName: string) =>
  iconName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
