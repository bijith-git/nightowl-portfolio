import { Outfit } from "next/font/google";
import "../../public/css/style.css";
import "../../public/css/plugins/bootstrap-grid.css";
import "../../public/css/plugins/fancybox.min.css";
import "../../public/css/plugins/swiper.min.css";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata = {
  title: "Night Owl",
  default: "Night Owl",
  description: "Generated by create next app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body className={outfit.className}>{children}</body>{" "}
      <Script type="text/javascript" src="js/plugins/jquery.min.js" />
      <Script type="text/javascript" src="js/plugins/swup.min.js" />
      <Script type="text/javascript" src="js/plugins/swiper.min.js" />
      <Script type="text/javascript" src="js/plugins/fancybox.min.js" />
      <Script type="text/javascript" src="js/plugins/gsap.min.js" />
      <Script type="text/javascript" src="js/plugins/smooth-scroll.js" />
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        
      /> */}
      {/* <Script
        src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"
        
      /> */}
      <Script type="text/javascript" src="js/plugins/ScrollTrigger.min.js" />
      <Script type="text/javascript" src="js/plugins/ScrollTo.min.js" />
      <Script type="text/javascript" src="js/main.js" />
    </html>
  );
}
export default RootLayout;
