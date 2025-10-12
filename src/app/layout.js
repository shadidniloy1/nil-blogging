// import Navbar from "@/components/navbar/Navbar";
// import "./globals.css";
// import { Inter } from "next/font/google";
// import Footer from "@/components/footer/Footer";
// import { ThemeContextProvider } from "@/context/ThemeContext";
// import ThemeProvider from "@/providers/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Blog App",
//   description: "The best blog app!",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeContextProvider>
//           <ThemeProvider>
//             <div>
//               <div className="container">
//                 <div className="wrapper">
//                   <Navbar />
//                   {children}
//                   <Footer />
//                 </div>
//               </div>
//             </div>
//           </ThemeProvider>
//         </ThemeContextProvider>
//       </body>
//     </html>
//   );
// }

import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            {/* ✅ Move background handling here */}
            <div className="min-h-screen w-screen bg-[var(--bg)] text-[var(--textColor)] overflow-x-hidden">
              <Navbar />
              <main className="mx-auto w-full max-w-[1536px] px-8 sm:px-10 md:px-16 lg:px-24">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
