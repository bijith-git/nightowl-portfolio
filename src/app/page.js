"use client";
import MainLayout from "@/layout/mainLayout";
import Hero from "@/components/hero";
import About from "@/components/about";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
}
export default Home;
