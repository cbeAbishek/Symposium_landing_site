"use client"; // Required for Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface AnimatedImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt = "Animated Image",
  width = 900,
  height = 300,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="inline-block overflow-hidden rounded-lg p-3"
    >
      <Image
        className="h-auto w-[350px] sm:w-auto transition-all rounded-2xl shadow-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </motion.div>
  );
};

export default AnimatedImage;
