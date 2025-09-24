export type EventData = {
	title: string;
	description: string;
	guidelines: Record<string, string>;
	image: string;
	logo: string;
	routerName: string;
	id?: string;
	guidelineUrl?: string;
	registerUrl?: string;
	contact?: string;
};

export type DepartmentData = {
	title: string;
	logo: string;
	routerName: string;
	description: string;
	events: EventData[];
	name?: string;
	short?: string;
	clubAsset?: string;
};

const departmentData = [
	{
		title: "CSE - Events",
		logo: "/cse/cse.png",
		routerName: "cse-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/cse/event1.jpg",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/cse/event2.jpg",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/cse/event3.jpg",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "/cse/event4.jpg",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "/cse/event5.jpg",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "ECE - Events",
		logo: "/ece/ece.png",
		routerName: "ece-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/ece/event1.jpg",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/ece/event2.jpg",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "/ece/event3.jpg",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "/ece/event4.jpg",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "/ece/event5.jpg",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "Agri - Events",
		logo: "/app/agri-events/dummy.jpg",
		routerName: "agri-events",
		description:
			"The Agricultural Engineering Department warmly welcomes you to Innoverse 2K25, a platform for innovation and creativity!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev1.src",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev2.src",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev3.src",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "ev4.src",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "ev5.src",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "AI & DS | AI & ML - Events",
		logo: "/app/aids-events/dummy.jpg",
		routerName: "aids-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev1.src",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev2.src",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev3.src",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "ev4.src",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "ev5.src",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "BME - Events",
		logo: "/app/bme-events/dummy.jpg",
		routerName: "bme-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev1.src",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev2.src",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev3.src",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "ev4.src",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "ev5.src",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "Mech - Events",
		logo: "/app/mech-events/dummy.jpg",
		routerName: "mech-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev1.src",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev2.src",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev3.src",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "ev4.src",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "ev5.src",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
	{
		title: "IT Department - Events",
		logo: "/app/it-events/dummy.jpg",
		routerName: "it-events",
		description:
			"Discover new possibilities and explore endless opportunities. Scroll down to learn more!",
		events: [
			{
				title: "Paper Presentation",
				description:
					"Present groundbreaking ideas, research, and case studies. Engage in dynamic discussions and showcase innovation!",
				guidelines: {
					team: "Solo/Team (5)",
					presentation: "8 min + 2 min Q&A",
					slides: "10-12 max",
					plagiarism: "No plagiarism",
					judging: "innovation, research, presentation, relevance, Q&A",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev1.src",
				logo: "club",
				routerName: "paper-presentation",
			},
			{
				title: "HackerRank",
				description:
					"Solve algorithmic challenges, compete globally, track progress, and enhance problem-solving skills in real-time!",
				guidelines: {
					team: "Solo/Team (2)",
					platform: "HackerRank",
					languages: "Python, Java, C++",
					judging: "efficiency, correctness, creativity",
					plagiarism: "No plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev2.src",
				logo: "club",
				routerName: "hacker-rank",
			},
			{
				title: "WebDesging",
				description:
					"Craft stunning, responsive websites. Showcase creativity, coding expertise, and innovative UI/UX designs!",
				guidelines: {
					team: "Solo/Team (2)",
					theme: "Theme-based web design",
					time: "2-3 hrs",
					tech: "HTML, CSS, JS, Bootstrap, Tailwind",
					judging: "creativity, UI/UX, responsiveness, functionality",
					plagiarism: "No templates/plagiarism",
					eligibility: "Open to UG/PG",
					rewards: "Prizes & certificates",
				},
				image: "ev3.src",
				logo: "club",
				routerName: "web-designing",
			},
			{
				title: "E-Football",
				description:
					"Compete in intense virtual football battles, showcase skills, and claim victory on the digital pitch!",
				guidelines: {
					team: "Team (3)",
					game: "eFootball",
					rules: "Fair play, no external help",
					judging: "performance, teamwork, sportsmanship",
					rewards: "Prizes & certificates",
				},
				image: "ev4.src",
				logo: "club",
				routerName: "e-football",
			},
			{
				title: "Fire Crackers",
				description:
					"A thrilling, fun-packed game with exciting balloon challenges, laughter, and high-energy action!",
				guidelines: {
					team: "Solo/Team (2-4)",
					game: "Balloon Stomp, Relay, Pop Quiz",
					rules: "No external objects",
					judging: "Highest score wins. Judges’ decision final",
				},
				image: "ev5.src",
				logo: "club",
				routerName: "fire-crackers",
			},
		],
	},
];

export default departmentData;