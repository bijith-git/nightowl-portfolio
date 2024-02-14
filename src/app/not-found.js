import MainLayout from "@/layout/mainLayout";
import Link from "next/link";

export const metadata = {
  title: "404 Error",
};

const E404 = () => {
  return (
    <MainLayout>
      <section className="">
        <h1> Not Found</h1>
      </section>
    </MainLayout>
  );
};
export default E404;
