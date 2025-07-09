import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Muhammad Idris Gobir",
  description: "Official Website of The Deputy Governor of Sokoto State",
  icons: {
    icon: "/coa.webp", // Favicon
    shortcut: "/coa.webp", // Optional: Shortcut icon
    apple: "/coa.webp", // Optional: Apple touch icon
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
