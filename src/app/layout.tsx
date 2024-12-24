import type { Metadata } from "next";
import { ThemeProvider} from "@mui/material";
import theme from '@/theme'
import "./globals.css";

export const metadata: Metadata = {
  title: "Patterns Playground",
  description: "A toy project for experimenting with NextJS and Claude",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
    <html lang="en">
      <body
        className={`font-mono text-gray-900 antialiased grid items-center w-full h-[100vh] bg-gray-100`}
      >
          {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
