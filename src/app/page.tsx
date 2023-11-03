import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: 'A simple study project use Next.js and Chakra UI.',
  openGraph: {
    images: ['/public/pageImage.PNG'],
    authors: ['Gabriel Freitas']
  },
  twitter: {
    images: ['/public/pageImage.PNG'],
  }
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
