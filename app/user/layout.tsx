import { Navbar } from "@/components/User/navbar";
import React from "react";
import "../globals.css";
import Footer from "@/components/User/footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="border-b">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="flex-grow px-10 md:px-20 lg:px-50 w-full py-8">
        {children}
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
}
