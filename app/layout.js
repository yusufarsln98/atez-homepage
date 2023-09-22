// use client
import "@/styles/globals.scss";
import { space_grotesk } from "@/public/fonts/fonts.config";
import { ThemeProvider } from "@/context/Theme.context";

export const metadata = {
  title: "Atez Yazılım Teknolojileri",
  description: "Atez Yazılım Teknolojileri",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="tr">
        <body className={`${space_grotesk.className}`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
