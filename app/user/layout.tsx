import { Navbar } from "@/components/User/navbar";
import React from "react";
import "../globals.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-col">
      <div className="border-b">
        <div>
          <Navbar />
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-50 w-full py-8">{children}</div>
    </div>
  );
}
