export type TypographyStyles = {
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
  fontWeight: string;
};

export type TypographyStylesAsString = {
  [key in keyof TypographyStyles]: string;
};

type HeadingStylesAsNumber = {
  [key in keyof TypographyStyles]: number;
};

export interface TypographyStylesKeyValue {
  [key: string]: HeadingStylesAsNumber;
}

export type CommonHeadingStyles = Omit<HeadingStylesAsNumber, 'letterSpacing'>;
