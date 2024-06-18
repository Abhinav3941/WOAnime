import { Inter, Smooch } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext"
import AuthProvider from "@/components/Auth/Auth";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ABHI",
  description: "desc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
       
      <body className={inter.className}>
      <ThemeProvider>
       <AuthProvider>
        <div className='container'>
        <Navbar/>
      
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
        
    </html>
  );
}
