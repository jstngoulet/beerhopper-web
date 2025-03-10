
import { JSX } from 'react'
import theme from '../Theme'
import ComponentProps from '../../models/types/ComponentProps';
import { ThemeProvider } from '@emotion/react';

export default function PageTemplate({
  className,
  children,
}: ComponentProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
