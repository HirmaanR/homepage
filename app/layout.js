import "./globals.css";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

const winky = localFont({
  src: "../public/fonts/WinkySans-Regular.woff2",
  display: "swap",
  variable: "--font-winky-sans",
});

export const metadata = {
  title: {
    template: "Hirmaan Rashidi | %s ",
    default: "Home Page",
  },
  description: "Hirmaan Rashidi Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${winky.variable} font-sans`}
      style={winky.style}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
