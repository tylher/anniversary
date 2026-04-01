import { Cormorant_Garamond, Dancing_Script, Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/ui/BackgroundMusic";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ['300','400','500','600','700'],
  style: ['italic','normal']
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight:['400','700']
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ['latin'],
  weight: ['300','400','500']
})

export const metadata = {
  title: 'One Year of Us',
  description: 'Happy 1st Anniversary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dancing.variable} ${raleway.variable} font-sans antialiased`}
      >
        <Navbar/>
        <BackgroundMusic/>
        
        {children}

      <Footer/>
      </body>
    </html>
  );
}
