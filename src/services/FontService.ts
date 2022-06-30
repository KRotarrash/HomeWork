const sfFont = 'Inter';

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

export const getFontFamily = (
  weight?: 'regular' | 'bold' | 'semibold' | 'light' | 'heavy' | 'medium',
) => {
  if (weight) {
    return `${sfFont}-${capitalize(weight)}`;
  }

  return `${sfFont}`;
};
