import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Abba Kadade",
  description: "Official Website of The PDP",
  icons: {
    icon: "/favicon.ico", // Favicon
    shortcut: "/favicon.ico", // Optional: Shortcut icon
    apple: "/apple-touch-icon.png", // Optional: Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-open">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
