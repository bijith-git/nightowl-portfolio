"use client";
import MainLayout from "@/layout/mainLayout";
import Hero from "@/components/hero";
import About from "@/components/about";
import Service from "@/components/service";
import Review from "@/components/reviews";
import Clients from "@/components/clients";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Service />
      <Review />
      <Clients />
    </MainLayout>
  );
}
export default Home;
