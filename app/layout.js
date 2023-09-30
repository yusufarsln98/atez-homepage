// use client
import "@/styles/globals.scss";
import { ThemeProvider } from "@/context/theme/Theme.context";
import { TextProvider } from "@/context/text/Text.context";

export const metadata = {
  title: "Atez Yazılım Teknolojileri",
  description: "Atez Yazılım Teknolojileri",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <TextProvider>
        <html lang="tr">
          <body>{children}</body>
        </html>
      </TextProvider>
    </ThemeProvider>
  );
}
