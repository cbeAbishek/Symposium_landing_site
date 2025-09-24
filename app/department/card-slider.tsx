"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CryptoCard } from "./crypto-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardSliderProps {
	socials: Array<{
		href: string;
		label: string;
		desc: string;
		event1: string;
		event2: string;
		event3: string;
		event4: string;
		event5: string;
		image: any;
	}>;
}

// Custom arrow components with crypto styling
const CustomPrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className="crypto-arrow crypto-arrow-prev"
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<div className="arrow-content">‹</div>
		</div>
	);
};

const CustomNextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className="crypto-arrow crypto-arrow-next"
			style={{ ...style, display: "block" }}
			onClick={onClick}
		>
			<div className="arrow-content">›</div>
		</div>
	);
};

export const CardSlider: React.FC<CardSliderProps> = ({ socials }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		swipeToSlide: true,
		touchThreshold: 10,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		],
		customPaging: (i: number) => (
			<div className="crypto-dot">
				<div className="dot-inner" />
			</div>
		),
		dotsClass: "slick-dots crypto-dots"
	};

	return (
		<div className="crypto-slider-container relative">
			<Slider {...settings}>
				{socials.map((social, index) => (
					<div key={social.label} className="px-4">
						<CryptoCard>
							<div className="crypto-card-content relative flex flex-col items-center gap-4 py-8">
								{/* Gradient line decoration */}
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
								
								{/* Logo with glow effect */}
								<div className="relative group">
									<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
									<Image 
										src={social.image} 
										alt={social.label} 
										width={160} 
										height={160}
										className="relative z-10 rounded-full border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500"
									/>
								</div>
								
								{/* Department info */}
								<div className="text-center space-y-2">
									<h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
										{social.label}
									</h3>
									<p className="text-lg text-gray-300 font-medium">
										{social.desc}
									</p>
								</div>
								
								{/* Events list with crypto styling */}
								<div className="space-y-2 text-center">
									{[social.event1, social.event2, social.event3, social.event4, social.event5].map((event, idx) => (
										<div key={idx} className="flex items-center justify-center gap-2">
											<div className="w-1 h-1 bg-cyan-400 rounded-full opacity-60" />
											<span className="text-sm text-gray-300 hover:text-cyan-300 transition-colors duration-300">
												{event}
											</span>
										</div>
									))}
								</div>
								
								{/* CTA Button with crypto styling */}
								<div className="pt-4">
									<Link href={social.href} className="crypto-button-wrapper">
										<button className="crypto-cta-button group relative overflow-hidden">
											<div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											<div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent px-6 py-3 rounded-lg border border-cyan-400/30 group-hover:border-transparent transition-all duration-300">
												<span className="flex items-center gap-2 text-cyan-300 group-hover:text-white font-medium">
													Explore Events
													<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
												</span>
											</div>
										</button>
									</Link>
								</div>
								
								{/* Bottom gradient line */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />
							</div>
						</CryptoCard>
					</div>
				))}
			</Slider>
		</div>
	);
};