import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (videoRef.current) {
                        videoRef.current.play();
                    }
                }
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div ref={sectionRef} className="w-full flex flex-col justify-center items-center h-[350px] md:h-[550px] bg-gradient-to-tr from-zinc-950/20 via-teal-950 to-zinc-950/100 relative">
            {/* Title Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                 Innoverse Symposium
            </h2>

            {/* Video Section */}
            <motion.video
                ref={videoRef}
                className="w-4/5 md:w-3/5 rounded-lg shadow-lg cursor-pointer"
                src="/CSEsympo.mp4" // Change to your video source
                playsInline
                muted={isMuted}
                loop
                preload="auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                onClick={toggleMute}
            />

            {/* Mute Toggle Text */}
            <div className="absolute bottom-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md text-sm">
                {isMuted ? "Tap to Unmute 🔊" : "Tap to Mute 🔇"}
            </div>
        </div>
    );
};

export default VideoSection;
