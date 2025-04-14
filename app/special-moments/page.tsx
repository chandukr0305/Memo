"use client";
import Link from "next/link";
import Image from "next/image";
import { Heart, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SpecialMomentsPage() {
  const specialMoments = [
    {
      id: 1,
      title: "Patna Trip with You My Jaan",
      date: "May 11, 2024",
      location: "Patna, Bihar",
      description: "From the banks of the Ganges to the streets of Patna, every moment with you is a beautiful journey 🌊❤️",
      image: "/Patna/20.jpg",
    },
    {
      id: 2,
      title: "Surprise Birthday Party",
      date: "January 5, 2025",
      location: "Our Apartment",
      description: "I planned the most amazing surprise party with our friends. You had no idea and were completely shocked! 🎉🥰",
      image: "/birthday/2.jpg",
    },
    {
      id: 3,
      title: "Kolkata Trip with You My Jaan",
      date: "November 29, 2024",
      location: "Kolkata, West Bengal",
      description: "The magic of Park Street lights, the melody of your laughter—Kolkata feels more romantic with you ✨💘",
      image: "/Kolkata/23.jpg",
    },
    {
      id: 4,
      title: "First 'I Love You'",
      date: "October 3, 2016",
      location: "Home-Town",
      description: "The first time I confessed my love, and you made my world complete. 💞",
      image: "/Diwali/6.jpg",
    },
    {
      id: 5,
      title: "Meeting With My Parents",
      date: "October 17, 2024",
      location: "Online Video Call",
      description: "I was so nervous to meet your parents, but they welcomed me with open arms and made me feel like family. 👨‍👩‍👧‍👦",
      image: "/Together/2.jpg",
    },
    {
      id: 6,
      title: "Moving In Together",
      date: "November 8, 2024",
      location: "Our Hometown",
      description: "The day we got the keys to our first place together. So many boxes, but so much excitement! 🏡💖",
      image: "/kolkata/29.jpg",
    }
  ];

  // Play the background audio when the component is mounted
  useEffect(() => {
    const audio = document.getElementById("backgroundAudio");
    audio.play();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Music */}
      <audio id="backgroundAudio" loop autoPlay>
        <source src="/audio/dil_ibadat.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Background Enhancements */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 blur-[180px] opacity-40"></div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], x: [0, Math.random() * 300 - 150], y: [0, Math.random() * 300 - 150] }}
            transition={{ duration: Math.random() * 4 + 2, repeat: Infinity }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center w-full px-6 py-12">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Special Moments</h1>
        <p className="max-w-lg text-center text-white/90 mt-3">A collection of our most cherished memories together.</p>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {specialMoments.map((moment, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                key={moment.id}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[280px] h-[350px] bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105 hover:shadow-rose-500/50"
              >
                <Image src={moment.image} alt={moment.title} layout="fill" objectFit="cover" className="absolute inset-0" />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end bg-black/70 opacity-0 translate-y-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 p-4 text-white"
                >
                  <h2 className="text-lg font-semibold">{moment.title}</h2>
                  <p className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-rose-300" />
                    {moment.date}
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-rose-300" />
                    {moment.location}
                  </p>
                  <p className="text-xs opacity-70 mt-1">{moment.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 bg-black/60 text-white text-center mt-12">
        <div className="container mx-auto">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} OurMemories. Made with ❤️ for My Jaan.</p>
          <div className="mt-3 flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-pink-300">Home</Link>
            <Link href="/gallery" className="hover:text-pink-300">Gallery</Link>
            <Link href="/timeline" className="hover:text-pink-300">Timeline</Link>
            <Link href="/special-moments" className="hover:text-pink-300">Special Moments</Link>
            <Link href="/future-plans" className="hover:text-pink-300">Future Plans</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
