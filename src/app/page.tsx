import React from "react";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar>
          <MainContent />
        </SideBar>
      </div>
      <Footer />
    </main>
  );
}
