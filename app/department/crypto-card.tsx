"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { PropsWithChildren } from "react";
import Particles from "../components/particles2";

export const CryptoCard: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<motion.div
			onMouseMove={onMouseMove}
			className="crypto-card-container relative overflow-hidden"
			whileHover={{ 
				y: -12,
				scale: 1.02,
				transition: { duration: 0.3, ease: "easeOut" }
			}}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div
				className="
					crypto-card relative p-1 rounded-2xl
					bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20
					backdrop-blur-sm border border-white/10
					shadow-[0_8px_32px_rgba(31,38,135,0.37),0_0_60px_rgba(0,255,255,0.1)]
					hover:shadow-[0_20px_60px_rgba(31,38,135,0.5),0_0_100px_rgba(0,255,255,0.2)]
					transition-all duration-500 ease-out
					group cursor-pointer
				"
			>
				{/* Animated gradient border */}
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
				
				{/* Main card content */}
				<div className="
					relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
					rounded-xl p-6 h-full
					border border-white/5
					backdrop-blur-md
				">
					<Particles
						className="absolute inset-0 -z-10 animate-fade-in opacity-30"
						quantity={50}
					/>
					
					{/* Hover light effect */}
					<div className="pointer-events-none absolute inset-0">
						<motion.div
							className="absolute inset-0 z-10 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
							style={style}
						/>
						<motion.div
							className="absolute inset-0 z-10 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-50 transition-opacity duration-700"
							style={style}
						/>
					</div>

					{/* Crypto-themed glow effects */}
					<div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
					<div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
					
					{children}
				</div>
			</div>
		</motion.div>
	);
};