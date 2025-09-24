export type EventData = {
  id: string;
  title: string;
  description: string;
  guidelines?: string;
  guidelineUrl?: string;
  registerUrl?: string;
  contact?: string;
};

export type DepartmentData = {
  key: string;
  name: string;
  short?: string;
  clubAsset?: string;
  events: EventData[];
};

const departments: Record<string, DepartmentData> = {
  agri: {
    key: 'agri',
    name: 'Agro Wings',
    short:
      'Agricultural Engineering Department events including Paper Presentation, Quiz, Project Expo and hands-on contests.',
    clubAsset: '../assets/agri2.png',
    events: [
      {
        id: 'agri-paper',
        title: 'Paper Presentation',
        description:
          'Team size: up to 4 members. Topics should be selected from the mentioned themes.',
        guidelines:
          'Participants need to upload their presentation to agrowingz.ppgit@gmail.com and also bring a copy on a pen-drive. Slides: min 10, max 15. Presentation time: 5-7 minutes (including Q&A).',
        guidelineUrl: 'https://scnv.io/qE6o?qr=1',
        registerUrl: 'https://forms.gle/zyZfvia83C5Y8qAfA',
      },
      {
        id: 'agri-quiz',
        title: 'Quiz',
        description:
          'Team size: up to 2 members. Questions cover general and agricultural engineering topics. Format: qualifying written MCQ round followed by an oral round.',
        guidelineUrl: 'https://scnv.io/qE6o?qr=1',
        registerUrl: 'https://forms.gle/zyZfvia83C5Y8qAfA',
      },
      {
        id: 'agri-expo',
        title: 'Project Expo',
        description:
          'Team size: 2-4 members. Present original, working prototypes or models. Presentation time: 5-8 minutes + 2-3 minutes Q&A. Judging based on innovation, technical viability and real-world application.',
        guidelineUrl: 'https://scnv.io/qE6o?qr=1',
        registerUrl: 'https://forms.gle/zyZfvia83C5Y8qAfA',
      },
      {
        id: 'agri-segment',
        title: 'Segment Identifier',
        description:
          'Team size: up to 2. Identify tractor segments (engine type, transmission, application, etc.) based on clues. Time-limited rounds with scoring for accuracy and speed.',
        guidelineUrl: 'https://scnv.io/qE6o?qr=1',
        registerUrl: 'https://forms.gle/zyZfvia83C5Y8qAfA',
      },
      {
        id: 'agri-draw',
        title: 'Sharp Your Pencil',
        description:
          'Drawing/painting contest. Team size: 1-2. A chart is provided; participants must use only provided materials. Judging: creativity, relevance to agricultural technology, clarity of presentation.',
        guidelineUrl: 'https://scnv.io/qE6o?qr=1',
        registerUrl: 'https://forms.gle/zyZfvia83C5Y8qAfA',
      },
    ],
  },

  aids: {
    key: 'aids',
    name: 'AI Spartanz',
    short: 'AI, Data Science and ML events including WEBGENIX, TechTalk, Code Detox and media events.',
    clubAsset: '../assets/aids.png',
    events: [
      {
        id: 'aids-webgenix',
        title: 'WEBGENIX',
        description:
          'Web development challenge: build a webpage within 30 minutes based on a given topic. Evaluated on UI/UX, responsiveness and innovation.',
        guidelineUrl:
          'https://drive.google.com/file/d/18G6MjoAuWlMXUD6mtKnxZlAJkqspd29e/view?usp=drivesdk',
        registerUrl: 'https://forms.gle/mmc2ZdPjf474f8s17',
      },
      {
        id: 'aids-techtalk',
        title: 'TECHTALK',
        description:
          'Group discussion + impromptu speech on technology topics. Tests critical thinking, articulation and presentation skills.',
        guidelineUrl:
          'https://drive.google.com/file/d/188SWmZCkeDeuGdeQEiUBxWAFsfFrO8G4/view?usp=drivesdk',
        registerUrl: 'https://forms.gle/mmc2ZdPjf474f8s17',
      },
      {
        id: 'aids-codedetox',
        title: 'Code Detox',
        description:
          'Debugging competition fixing syntax and logical errors across languages (C, C++, Java, Python) over multiple rounds.',
        guidelineUrl:
          'https://drive.google.com/file/d/18AFNZUT7ddLymkPjR3Fty025PKvzsQD1/view?usp=drivesdk',
        registerUrl: 'https://forms.gle/mmc2ZdPjf474f8s17',
      },
      {
        id: 'aids-harmonic',
        title: 'Harmonic Flow',
        description:
          'Musical/team challenge: identify songs from cues across two rounds; judged on accuracy, presentation and teamwork.',
        guidelineUrl:
          'https://drive.google.com/file/d/184QzYJZ4-BclRzKnZ3T3EJk4tADtPYVK/view?usp=drivesdk',
        registerUrl: 'https://forms.gle/mmc2ZdPjf474f8s17',
      },
      {
        id: 'aids-instaflicks',
        title: 'INSTAFLICKS',
        description:
          'Create an Instagram Reel within 4 hours on a given theme. Judged on creativity, engagement and presentation. Offensive/late entries disqualified.',
        guidelineUrl:
          'https://drive.google.com/file/d/184prp45R-gBLpboSnb0--qQOhX4phdx6/view?usp=drivesdk',
        registerUrl: 'https://forms.gle/mmc2ZdPjf474f8s17',
      },
    ],
  },

  bme: {
    key: 'bme',
    name: 'BIOBUDS',
    short: 'Biomedical Engineering events: Paper Presentation, Quiz, Ideathon, Junkyard Art, Doodle War.',
    clubAsset: '../assets/bme.png',
    events: [
      {
        id: 'bme-paper',
        title: 'Paper Presentation',
        description:
          'Presentation time: 8 minutes + 2 minutes Q&A. Team maximum: 2. PPTs should be professional. Abstracts & presentations to be submitted to hodbiomedppgit@gmail.com.',
        guidelineUrl:
          'https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform',
        contact: 'hodbiomedppgit@gmail.com',
      },
      {
        id: 'bme-quiz',
        title: 'Quizz (BIONICS 2K25)',
        description:
          'Three-round quiz: MCQ qualifying round, then team oral rounds with timed responses and varying scoring. Rules define marks for correct/incorrect responses across rounds.',
        guidelineUrl:
          'https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform',
      },
      {
        id: 'bme-ideathon',
        title: 'Ideathon',
        description:
          'Teams (1-2) present an innovative idea with a problem-solving strategy. PPT optional. Focus on creativity, feasibility and impact.',
        guidelineUrl:
          'https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform',
      },
      {
        id: 'bme-junkyard',
        title: 'Junkyard Art',
        description:
          'Create artwork from repurposed materials. Team max: 2. Time: 15-20 minutes. Bring your own tools. Theme: sustainability.',
        guidelineUrl:
          'https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform',
      },
      {
        id: 'bme-doodle',
        title: 'Doodle War',
        description:
          'Teams 2-4. Three rounds: Draw & Find, Word Puzzle and Story Making. Fast-paced creative rounds judged on speed and creativity.',
        guidelineUrl:
          'https://drive.google.com/file/d/1---ITW1OBWTvMdAbNL0Ec0ZBrnmf-ASx/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSfKZ5Fbik27lbgcgwTlvys_3qtrA4nA8mbcIbVQGI19bSP-mQ/viewform',
      },
    ],
  },

  cse: {
    key: 'cse',
    name: 'CyberZen',
    short: 'Computer Science events like Paper Presentation, HackerRank, WebDesign, E-Football and Short Film.',
    clubAsset: '../assets/cse.png',
    events: [
      {
        id: 'cse-paper',
        title: 'Paper Presentation',
        description:
          'Solo/team (up to 5). Presentation: 8 min + 2 min Q&A. Slides: 10-12. No plagiarism. Open to UG/PG with prizes & certificates.',
        guidelineUrl:
          'https://www.notion.so/Viyugam-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
      {
        id: 'cse-hackerrank',
        title: 'HackerRank',
        description:
          'Solve algorithmic challenges on the HackerRank platform. Solo or team of 2. Judged on correctness and efficiency.',
        guidelineUrl:
          'https://www.notion.so/Viyugam-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
      {
        id: 'cse-webdesign',
        title: 'WebDesign',
        description:
          'Theme-based web design: solo/team (2). Time 2-3 hrs. Tech: HTML/CSS/JS, Bootstrap, Tailwind. Judged on creativity, UI/UX and responsiveness.',
        guidelineUrl:
          'https://www.notion.so/Viyugam-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
      {
        id: 'cse-efball',
        title: 'E-Football',
        description:
          'Team (3) eSports competition (eFootball). Judged on performance, teamwork and sportsmanship.',
        guidelineUrl:
          'https://www.notion.so/Viyugam-2K25-CSE-1be8f0a8faf4807d9125e254ff5afb0d',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
      {
        id: 'cse-shortfilm',
        title: 'Short Film',
        description:
          'Short films (max 10 minutes). Evaluated on storytelling and presentation.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
      {
        id: 'cse-adventure',
        title: 'Adventure Stash',
        description:
          'Film quiz game with general knowledge and cinema trivia. Teams up to 4, up to three rounds.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSdKS447PXr6ui6QfIgFK7JWGYnEv6Wc7CuGdLOVL-5E4Co5JA/viewform?usp=sharing',
      },
    ],
  },

  ece: {
    key: 'ece',
    name: 'Electro Sparks',
    short: 'Electronics & Communication events such as Paper Presentation, Circuit Debugging and quiz-based games.',
    clubAsset: '../assets/ece.png',
    events: [
      {
        id: 'ece-paper',
        title: 'Paper Presentation',
        description:
          'Team max: 4 or solo. Presentation time: max 8 minutes + 2 minutes Q&A.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform',
      },
      {
        id: 'ece-circuit',
        title: 'Circuit Debugging',
        description:
          'Team up to 3. Multiple rounds where participants identify and fix faults in circuits under time pressure.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform',
      },
      {
        id: 'ece-clash',
        title: 'Clash Masters',
        description:
          'Competitive speaking event where participants discuss topics without repeating points. Team max 4. Time limit per speaker applies.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform',
      },
      {
        id: 'ece-adventure',
        title: 'Adventure Stash',
        description:
          'Movie/film quiz format with rounds of cinematic trivia; team of up to 4.',
        guidelineUrl:
          'https://www.pdffiller.com/jsfiller-desk18/?routeId=06c6edda16e4cdd3ef95e76777ed752c',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSc-5Dbx8QiJYTsx_hJ8u-UoC5Bsik-rSpJx7PVTszb825ITew/viewform',
      },
    ],
  },

  it: {
    key: 'it',
    name: 'Tech Titans',
    short: 'IT Department events: Paper Presentation, Best Manager, WebWeavers and esports/quiz events.',
    clubAsset: '../assets/it.png',
    events: [
      {
        id: 'it-paper',
        title: 'Paper Presentation',
        description:
          'Open topic. Time limit 3-5 minutes. Slides: 8-12. Team size: 2-4.',
        guidelineUrl: 'https://drive.google.com/file/d/1ihKwZy878d3kTt1Ist88wu0Qn3tiB1uc/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform',
      },
      {
        id: 'it-best-manager',
        title: 'BEST MANAGER',
        description:
          'Leadership and business-scenario simulation conducted in two rounds. Detailed instructions provided on the event day.',
        guidelineUrl: 'https://drive.google.com/file/d/1ihKwZy878d3kTt1Ist88wu0Qn3tiB1uc/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform',
      },
      {
        id: 'it-webweavers',
        title: 'WEBWEAVERS',
        description:
          'Design & build websites (solo/team of 2). Time-limited, judged on creativity and frontend skills.',
        guidelineUrl: 'https://drive.google.com/file/d/1ihKwZy878d3kTt1Ist88wu0Qn3tiB1uc/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform',
      },
      {
        id: 'it-esports',
        title: 'E-SPORTS (Free Fire)',
        description:
          'Free Fire tournament with multiple rounds. Open to individual and team entries. Fair play rules enforced.',
        guidelineUrl: 'https://drive.google.com/file/d/1ihKwZy878d3kTt1Ist88wu0Qn3tiB1uc/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform',
      },
      {
        id: 'it-guess',
        title: 'GUESS IT RIGHT',
        description:
          'Team guessing game. Clash Squad style tournament; rules require 4 players present per team. Cheating/hacking results in disqualification.',
        guidelineUrl: 'https://drive.google.com/file/d/1ihKwZy878d3kTt1Ist88wu0Qn3tiB1uc/view?usp=drivesdk',
        registerUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSepqIXSmww2ZbvGMNkRxpw2jUXahXolOUOavpyq5L-kL51uBg/viewform',
      },
    ],
  },

  mech: {
    key: 'mech',
    name: 'Royal Mech',
    short:
      'Mechanical Engineering events: Kart Expo, Paper Presentation, Quiz, CAD Modeling, Water Rocketry, Treasure Hunt, Photography & more.',
    clubAsset: '../assets/mech.png',
    events: [
      {
        id: 'mech-kart',
        title: 'Exclusive Kart Expo',
        description:
          'Special expo with demonstrations, expert talks and previews. Limited slots available.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-paper',
        title: 'Paper Presentation',
        description:
          'Team max: 4. Slides 10-15. Time limit: 5-7 minutes including panel discussion. Upload presentations and bring a pen-drive copy.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-quiz',
        title: 'Quiz',
        description:
          'Teams up to 2. Two rounds: written MCQ qualifying followed by an oral round. Topics vary across mechanical engineering domains.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-cad',
        title: 'CAD Modeling',
        description:
          'Create a precise 3D model using CAD software (SolidWorks, Fusion 360, CATIA etc.) under time constraints. Time limits apply.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-water',
        title: 'Water Rocketry',
        description:
          'Design, build and launch water-powered rockets using plastic bottles. Only water and compressed air propulsion allowed; no metal/glass parts.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-treasure',
        title: 'Treasurehunt',
        description:
          'On-the-spot instructions and clues to locate the treasure. Team-based clue-solving challenge.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
      {
        id: 'mech-photo',
        title: 'Photography / Logo Maker',
        description:
          'On-the-spot title and time-limited task for participants. Photo-editing should not use Google/AI tools per guidelines.',
        registerUrl: 'https://forms.gle/K5Kv3hGMJ2AT5Wx58',
      },
    ],
  },
};

export default departments;
