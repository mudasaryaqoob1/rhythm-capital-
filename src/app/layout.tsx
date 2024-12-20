"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { SideBar } from "./(pages)/(auth)/components/SideBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const unProtectedRoutes = ['Login', 'acount', 'ForgotPassword', 'OtpRecovery', 'planes', 'ReNewPassword', 'SignUp', 'tradingPlatforms', '' ];
  const isUnProtectedRoute = unProtectedRoutes.includes(pathname.split('/')[1]);





  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className= {!isUnProtectedRoute ? 'flex w-full max-w-[1440px] my-0 mx-auto': ''}>
          <div className="">
          {!isUnProtectedRoute ? <SideBar /> : null}
            
          </div>
          <div className=""> {children}</div>
        </div>
      </body>
    </html>
  );
}
