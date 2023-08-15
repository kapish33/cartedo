import { BASE, UNIT } from '../constant';
import { TypographyStyles, TypographyStylesAsString } from '../types';

export const generateStyles = ({
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight
}: TypographyStyles): TypographyStylesAsString => {
  const styles: TypographyStylesAsString = {
    fontSize: `${+(fontSize / BASE)}${UNIT}`,
    lineHeight: `${lineHeight / BASE}${UNIT}`,
    fontWeight,
  };

  // Add letterSpacing if it's defined
  if (letterSpacing !== undefined) {
    styles['letterSpacing'] = `${letterSpacing}px`;
  }

  return styles;
};
