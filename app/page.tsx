'use client'

import NavBar from "@/components/Navbar/page";
import SatisfacaoForm from "@/components/Form/page";
import { Poppins } from "next/font/google"
// import { ThemeProvider } from "@material-tailwind/react";


export default function Home() {
  return (
    // <ThemeProvider>
    <main className="text-black flex min-h-screen flex-col items-center justify-between p-0">
      <NavBar />
      <SatisfacaoForm />
    </main>
    // </ThemeProvider>
  );
}
