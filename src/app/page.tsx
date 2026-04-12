import Header from "@/components/header";
import Hero from "@/components/hero";
import VideoMobile from "@/components/video-mobile";
import About from "@/components/about";
import MenuSection from "@/components/menu-section";
import Gallery from "@/components/gallery";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoMobile />
        <About />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
