"use client";

import "@/styles/globals.scss";
import { ThemeProvider, useTheme } from "@/context/theme/Theme.context";
import { TextProvider } from "@/context/text/Text.context";

export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <ThemeProvider>
      <TextProvider>
        <html lang="tr">
          <EnhancedBody>{children}</EnhancedBody>
        </html>
      </TextProvider>
    </ThemeProvider>
  );
}

const EnhancedBody = ({ children }) => {
  const { theme } = useTheme();
  return (
    <body
      style={{
        ...theme,
      }}
    >
      {children}
    </body>
  );
};
