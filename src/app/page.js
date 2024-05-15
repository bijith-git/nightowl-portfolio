"use client";
import MainLayout from "@/layout/mainLayout";
import Hero from "@/components/hero";
import About from "@/components/about";
import Service from "@/components/service";
import Review from "@/components/reviews";
import Clients from "@/components/clients";
import SwupComponent from "@/components/swup";
import Cursor from "@/components/cursor";

function Home() {
  return (
    <MainLayout>
      <SwupComponent />
      <Cursor />
      <Hero />
      <About />
      <Service />
      <Review />
      <Clients />
    </MainLayout>
  );
}
export default Home;
