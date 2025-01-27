/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepika Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Deepika M Portfolio",
    type: "website",
    url: "http://google.com/",
  },
};

//Home Page
const greeting = {
  title: "Deepika M",
  nickname: "Communication Specialist & Life Coach",
  subTitle:
    "Empowering professionals to enhance their influence through effective communication and strong interpersonal skills.",
  resumeLink: "https://www.linkedin.com/in/deepika-s-1a1427177/",
  portfolio_repository: "https://www.linkedin.com/in/deepika-s-1a1427177/",
  githubProfile: "https://www.linkedin.com/in/deepika-s-1a1427177/",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepika-s-1a1427177/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.linkedin.com/in/deepika-s-1a1427177/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto::dr.deepika.atwork@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/deepika.saravanan.7",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.linkedin.com/in/deepika-s-1a1427177/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Training & Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Conducting regular Train-the-Trainer programs to upskill faculty and team members",
        "⚡ Customized curriculum creation for behavioral and communication training - Grammar, Interpersonal Skills, RCA, Corporate Ettiquettes, ATD, Leadership Skills",
        "⚡ Delivered over 40 training batches (NHT and RFT).",
        "⚡ A Certified CEFR Assessor - conducted recruitment process assessments",
      ],
      softwareSkills: [
        {
          skillName: "Outlook",
          fontAwesomeClassname: "simple-icons:microsoftoutlook",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "MS Teams",
          fontAwesomeClassname: "simple-icons:microsoftteams",
          style: {
            color: "#6264A7",
          },
        },
        {
          skillName: "CUBE Tool",
          fontAwesomeClassname: "mdi:cube-outline", // Use a cube icon from Material Design Icons
          style: {
            color: "#8B0000", // Custom color, you can adjust as needed
          },
        },
      ],
    },
    {
      title: "Writing & Content Creation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expertise in developing compelling content for internal and external communication",
        "⚡ Writing and editing articles, reports, and newsletters with a focus on audience engagement",
        "⚡ Creating and delivering presentations, voiceovers, and visually consumable content",
      ],
      softwareSkills: [
        {
          skillName: "MS Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: {
            color: "#2B579A",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#B7472A",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
      ],
    },

    {
      title: "Quality Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Led and mentored high-performing teams across diverse projects - Microsoft, AT&T, Carrier, Chubb, AeP, Mohave, StarHub",
        "⚡ Expertise in stakeholder management and maintaining collaborative environments",
        "⚡ TNA/TNI analysis, competency mapping, and dashboard creation for performance tracking",
        "⚡ Call and Email audits with coaching and feedback processess",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Forms",
          fontAwesomeClassname: "simple-icons:googleforms",
          style: {
            color: "#2B579A",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: {
            color: "#4A154B",
          },
        },
      ],
    },
    {
      title: "Creative Expression & Design",
      fileName: "ArtImg",
      skills: [
        "⚡ Creating intricate Mandala and Warli Art, showcasing traditional and cultural artistic expressions",
        "⚡ Designing and decorating  Diyas for festive and decorative purposes, and customizing Terracotta paintings & Lippan art",
        "⚡ Curated Shell and Canvas paintings, blending creativity with unique handmade craftsmanship",
      ],
      softwareSkills: [{}],
    },
    {
      title: "Travel & Exploration",
      fileName: "TravImg",
      skills: [
        "⚡ Exploring indigenous and religious sites in India, including Jyotirlingas, Shakti Peethas, and Divya Desams, fostering cultural and spiritual insights",
        "⚡ Discovering local cuisines and culinary traditions, immersing in the flavors and food heritage of diverse regions",
        "⚡ Visiting historically significant places, gaining knowledge of ancient architecture, heritage monuments, and cultural landmarks",
        "⚡ Meeting People from varied genres and youtubers who are self-driven and contribute to the society.",
      ],
      softwareSkills: [
        {
          skillName: "English",
          fontAwesomeClassname: "simple-icons:language",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Hindi",
          fontAwesomeClassname: "simple-icons:language",
          style: {
            color: "#FF9933",
          },
        },
        {
          skillName: "Kannada",
          fontAwesomeClassname: "simple-icons:language",
          style: {
            color: "#3366CC",
          },
        },
        {
          skillName: "Tamil",
          fontAwesomeClassname: "simple-icons:language",
          style: {
            color: "#800080",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "UNIVERSITY OF MADRAS",
      subtitle: "Doctor of Philosophy - English (Submitted Thesis)",
      logo_path: "madrasuniversity.png",
      duration: "2016 - 2024",
      descriptions: [
        "Intense journey of 7 years where I could deep dive into the unearthed and untouched world of women in the patriarchal society.",
      ],
    },
    {
      title: "BHARATHIAR UNIVERSITY",
      subtitle: "Master of Arts",
      logo_path: "logo-2.png",
      duration: "2002",
      descriptions: ["Secured the University 5th Rank."],
    },
    {
      title: "MADURAI KAMARAJ UNIVERSITY",
      subtitle: "Bachelors in Library & Information Science",
      logo_path: "unnamed-2.png",
      duration: "2000",
      descriptions: [
        "This degree enhanced my  love for reading and books. Learnt the nuances of maintaining literary works of art. This motivated to complete a course in M. Lib. Sc.",
      ],
    },
    {
      title: "UNIVERSITY OF MADRAS",
      subtitle: "Bachelor of Arts - English",
      logo_path: "madrasuniversity.png",
      duration: "1999",
      descriptions: [
        "Introduced me to the world of literature and enhanced my knowledge base on literary forms.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IATD - Corporate Trainer (National Certificate)",
      logo_path: "images.png",
      certificate_link:
        "https://drive.google.com/file/d/1qAR0o3Xim8GcdpVd_UlDRYdX_2dqZqTZ/view?usp=share_link",
      color_code: "#FFF",
    },
    {
      title: "Madurai Kamaraj University - M.Lib.Sc (Course Completion)",
      logo_path: "unnamed-2.png",

      color_code: "#FFF",
    },
    {
      title: "Paper Presentations - 1 National & 2 International Conferences",
      logo_path: "confereneclogo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1dErpr7uQuYSJeB5aYjkp1BdYXa3MNv9c?usp=share_link",
      color_code: "#FFF",
    },
    {
      title: "Hindi Prachar Sabha - Visharad Poorvadh",
      logo_path: "hindips.png",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Career Track & Experience",
  subtitle: "",
  description:
    "People have been at the core of my career of two decades spanning across English Language Training & Coaching, Project Management, Marketing & Communications, Learning & Development, Recruitment Specialisation, Stakeholder Management, Employee Engagement, Cultivating Inclusive Culture, Building High-Performing Teams. Enabling businesses thrive with productive workplaces and a happier environment has been the goal throughout my tenure.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work History",
      work: true,
      experiences: [
        {
          title: "Learning Operations Senior Analyst",
          company: "Accenture Solutions Private Ltd",
          logo_path: "accenture2.png",
          duration: "2019 - 2024",
          location: "Chennai, India",
          description:
            "Focused on project management, the role involved developing and executing communication strategies, building capabilities, and providing coaching aligned with the company’s goals and objectives. Leadership responsibilities included mentoring and managing a high-performing team, fostering a collaborative and results-driven work environment. Additionally, client queries were handled in coordination with stakeholders, ensuring a result-oriented approach to achieving desired outcomes.",
          color: "#000000",
        },
        {
          title: "Assistant Professor",
          company: "St. Britto’s College of Arts & Logistics",
          logo_path: "images-3.png",
          duration: "2014 - 2017",
          location: "Chennai, India",
          description:
            "As a Student Counsellor and Cabinet Advisor, the role involved guiding and supporting students while providing advice on important institutional matters. Train-the-Trainer (TTT) sessions were conducted through regular Faculty Development Programs (FDPs) to enhance the skills of the faculty team. General English was taught to first-year graduates, and responsibilities included serving as the Head of the English Club, fostering an engaging and interactive learning environment.",
          color: "#0879bf",
        },
        {
          title: "Freelance & English Language Trainer",
          company: "Entrupreneurship",
          logo_path: "aspirelogo.png",
          duration: "2012 - 2014",
          location: "Chennai, India",
          description:
            "As a Freelance English Language Trainer, the role involved coaching students to enhance their English language proficiency through Aspire, a startup initiative. A specialized curriculum was developed and implemented to meet the unique needs of learners, with a focus on improving communication skills, grammar, and fluency. Responsibilities included designing interactive and effective teaching strategies to empower students and support them in achieving their academic and professional goals.",
          color: "#9b1578",
        },
        {
          title: "Sub Editor & Chief Reporter",
          company: "News Today/Talk Media",
          logo_path: "talk.jpeg",
          duration: "2008 - 2012",
          location: "Chennai, India",
          description:
            "I focused on developing and maintaining strong relationships with various government departments, officials, the general public, and welfare associations to support business initiatives aimed at generating revenue through advertisements. Additionally, I was responsible for reporting, editing, and publishing news, ensuring accuracy and quality in delivering information to the audience.",
          color: "#fc1f20",
        },
        {
          title: "English Language Teacher",
          company: "St. Joseph’s Public School(ICSE)",
          logo_path: "images-3.jpeg",
          duration: "2004 - 2006",
          location: "Hyderabad, India",
          description: "Handled General English for Class X- XII",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Learning Operations Senior Analyst",
          company: "Accenture Solutions Private Ltd",
          logo_path: "accenture2.png",
          duration: "2019 - 2024",
          location: "Chennai, India",
          description:
            "As a Learning Operations Senior Analyst at Accenture Solutions Private Ltd, I have contributed extensively to marketing and communication initiatives, creating compelling content for internal and external communications, conducting trainings on content creation, assisting in voiceovers for process VBT creation, and designing newsletters and visually consumable content. As a Project Manager, I fostered a collaborative and positive project environment across all levels, conducting TNA/TNI analyses, customizing curricula for ILT trainings, competency mapping, and managing refresher and new hire trainings. My responsibilities also included providing onboarding support and guidance, managing recruitment processes with CEFR assessments, creating content for specific modules, developing PPTs for client connects and SDL dashboards, and performing email and call audits with daily and monthly performance reporting for leadership review to identify improvement areas. I have served multiple clients, including AT&T, Carrier & Chubb, AEP, Mohave, and Microsoft. As a Corporate Trainer, I have successfully conducted over 40 training batches, screened 400+ profiles during the recruitment process, and achieved certifications and master certifications at regular intervals on training modules. I have developed communication materials, including written communications, presentation materials, MS Teams and other platforms, and facilitated town halls to articulate key messages. Additionally, I maintained strong relationships with key stakeholders, including executives, internal teams, external partners, and the global communications team. My efforts in customer engagement involved understanding customer pain points, improving CSAT scores, conducting regular QC audits, and implementing solution-driven methods through training, coaching, surveys, and more. I have driven business impact by achieving time and cost reductions in various activities, creating client-specific email templates, and executing customer engagement initiatives. As a Senior Analyst, I facilitated internal Train-the-Trainer programs, upskilled on diverse communication, behavioral, and NLP modules, and attended workshops to receive master certifications on CEFR and grammar. Furthermore, I contributed to multiple CSR projects, leveraging my expertise to deliver meaningful and measurable impacts across the organization.",
          color: "#000000",
        },
        {
          title: "Assistant Professor",
          company: "St. Britto’s College of Arts & Logistics",
          logo_path: "images-3.png",
          duration: "2014 - 2017",
          location: "Chennai, India",
          description:
            "As an Assistant Professor at St. Britto’s College, I facilitated faculty development through recurring Faculty Development Programs (FDPs) and individualized coaching. I coached MBA (Logistics) students on job placements, interview preparation, and CV writing, while also engaging the student body in CSR initiatives led by the institution. Additionally, I taught General English to first-year students and served as a communication coach for MBA students, ensuring they developed strong professional and interpersonal communication skills.",
          color: "#0879bf",
        },

        {
          title: "Sub Editor & Chief Reporter",
          company: "News Today/Talk Media",
          logo_path: "talk.jpeg",
          duration: "2008 - 2012",
          location: "Chennai, India",
          description:
            "As a Sub Editor and Chief Reporter at News Today/Talk Media, I collaborated with the marketing team to create advertisements for the evening daily and weekly editions, contributing to revenue growth. I monitored and guided the team, promoting a customer-centric approach to their work. I conducted interviews with over 70 achievers and stalwarts, with articles published under my byline, and played a key role in highlighting - Her Talk - a section dedicated to women's accomplishments. Additionally, I supported the online edition in collaboration with PTI and worked on solution-driven reporting, focusing on social and civic issues within the neighborhood. I maintained regular communication with the Editor-in-Chief, submitting detailed reports to ensure alignment with editorial standards and objectives.",
          color: "#fc1f20",
        },
        {
          title: "English Language Teacher",
          company: "St. Joseph’s Public School(ICSE)",
          logo_path: "images-3.jpeg",
          duration: "2004 - 2006",
          location: "Hyderabad, India",
          description:
            "As an English Language Trainer at St. Joseph's Public School, Hyderabad, I facilitated coordination and school management activities while coaching students of classes X and XII. As the Head of the School Student Cabinet, I provided leadership and guidance to the student body. Additionally, I taught English to students from classes X to XII, focusing on developing their language skills and academic performance.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Events and Connections Page - Projects Previously
const eventsHeader = {
  title: "Inspirational Journey Highlights",
  description:
    "Explore highlights from my journey, including impactful events, collaborations, and memorable moments.",
};

const events = {
  data: [
    {
      id: "event1",
      name: "Meeting Padmashri Dr. Shashi Deshpande",
      createdAt: "2024-01-15T00:00:00Z",
      description:
        "Engaging in a personal conversation with Shashi Deshpande was nothing short of transformative. As a celebrated voice in post-colonial literature and a beacon of women’s empowerment, we delved into topics like women empowerment, the setbacks of patriarchy, and the misinterpretation of feminism in contemporary society. Her reflections on women finding their voices in a resistant world mirrored the themes in her novels, which also form the foundation of my thesis. She expressed immense pride in my work, appreciating my efforts and leaving me humbled with her handwritten, signed note, wishing me success. It was a moment of affirmation and quiet encouragement that I will always cherish.",
      image: "shashideshpandemeet.jpeg", // Replace with actual image files
    },
    {
      id: "event1a",
      name: "Personal Note from Dr. Shashi Deshpande",
      createdAt: "2024-01-15T00:00:00Z",
      description:
        "A note of blessings and wishes from Padmashri Shashi Deshpande. 45 minutes of conversation on varied aspects of women empowerment was a massive take away.",
      image: "shashinote.jpeg", // Replace with actual image files
    },
    {
      id: "event15",
      name: "Inauguration function at Vilakku Kadai - Porur",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "event15.jpeg",
    },
    {
      id: "event2",
      name: "Conversation with Actor Vadivukkarasi",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "The qualities of optimism, energy, spiritual understanding, and humility are often intertwined, especially in the context of someone like her. These traits can be seen as reflections of an individual’s deeper philosophy and approach to life and having a conversation with her was a blessing in disguise. Despite her stature, the humility was astounding. She emphasized the importance of women having careers and financial independence. Her message on spirituality was clear: it involves not hurting others and following one's conscience.",
      image: "vadivumeet.jpeg", // Replace with the actual image file
    },
    {
      id: "event3",
      name: "Interviewing Veteran Nair Raman",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "An interview with Veteran Nair Raman, close associate of Director Balachander. He had staged more than 3000 stage plays.",
      image: "event3.jpeg",
    },
    {
      id: "event4",
      name: "Conversation with Thenkatchi Ko Swaminathan",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "Conversation with Thenkatchi Ko Swaminathan, the world famous story teller from AIR. The' Indru oru thagaval' celebrity. Millions of people across Tamil Nadu woke up to his voice every morning for several years. The five-minute programme, presented in simple colloquial Tamil, the common man could relate to and punctuated by anecdotes meant to make you smile and ponder, was broadcast without a break from 1988 until his retirement in 2002. Many still remember him for his popular daily programme Indru oru Thagaval. Meeting such a distinguished individual was an incredibly memorable and rewarding experience. An accomplished Tamil orator, television personality, and author, with a wealth of knowledge and experience that spanned various fields. The fact that he had served as Deputy Director of All India Radio, Chennai speaks to his stature in the world of media and communications, particularly in the Tamil cultural and linguistic community.",
      image: "event4.jpeg",
    },
    {
      id: "event5",
      name: "At Officers Training Academy - Meenambakkam",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "Participated in the parade at the Indian Army's Officers Training Academy (OTA), which prepares officers for the Short Service Commission (SSC). Could experience the presence and look of the tank that rolled across hostile terrain during the two world wars, a cannon that blitzed foes during the India-Pakistan conflict in 1965, and other weapons were on display at the vintage museum.A conversation with the Lieutenant unfolded the facts and history behind the collections at the museum.",
      image: "event5.jpeg",
    },
    {
      id: "event18",
      name: "Interviewing TK Murthy",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "He has an illustrious career of a musician, a legendary accompanist, who has performed in over 15,000 concerts spanning an incredible 100 years. This individual has had the honour of accompanying several of the most respected figures in Indian classical music, such as Harikesanallur Muthiah Bhagavatar, Ariyakudi Ramanuja Iyengar, Chembai Vaidhyanatha Bagavathar, Semmangudi Srinivasa Iyer, M. S. Subbulakshmi, Madurai Somasundaram, D. K. Jayaraman, M. Balamuralikrishna, Kunnakudi Vaidyanathan, K.J.Yesudas, Lalgudi Jayaraman, T. V. Sankaranarayanan and U. Srinivas. Having a conversation with him was a blessing of a lifetime. His energy and discipline in practicing the art were truly remarkable. The conversation provided valuable insights into his connection with Kanchi Mahaperiyavar, his early years, and his dedication to music. He mentored prominent figures in the field of music and instruments, and even in his late 80s, he continued practicing the mridangam. His habit of early rising greatly impacted his life.",
      image: "event18.png", // Replace with the actual image file
    },
    {
      id: "event19",
      name: "With Actor Abhinaya",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "Abhinaya, with a thousand expressions, an incredibly inspiring and unique experience with someone who, despite being deaf and mute, communicated with clarity and vibrancy. Her bouncing energy and a refreshing mindset and ability to express herself transcended the usual means of communication. Met here at her residence in Hyderabad.",
      image: "event19.jpeg",
    },
    {
      id: "event20",
      name: "Conversation with V Kalyanam",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "The conversation was enlightening, revealing new facts about Gandhiji, including his life at Sabarmati Ashram, his use of mud packs for good health, fasting techniques, and other practices he followed. Saw hundreds of postcards sent to Gandhi from all over the world, mementoes, charka and much more. The house felt like a museum, with Gandhian principles evident everywhere. His humility and respect towards us were remarkable. Additionally, his terrace garden, active lifestyle well into his 80s, and sense of humour left a lasting impression.",
      image: "event20.jpeg",
    },
    {
      id: "event6",
      createdAt: "2023-11-10T00:00:00Z",
      name: "Compaired a Navrathri contest event representing Talk Media.",
      image: "event6.jpeg",
    },
    {
      id: "event7",
      name: "Seva Ratna Award - 2010",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "Was one among the 75 achievers selected for their service to society. Asthiga samajam conferred a title Seva Ratna in 2010.",
      image: "event7.jpeg",
    },
    {
      id: "event8",
      description:
        "With the Founder Ditector of NewsToday/ Talk Media Mr TR Jawahar and singer Soumya.",
      createdAt: "2023-11-10T00:00:00Z",
      name: "At an event - TR Jawahar & Singer Soumya.",
      image: "event8.jpeg",
    },
    {
      id: "event10",
      name: "With Hema Veeraraghavan, a Veena vidwan.",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "event10.jpeg",
    },
    {
      id: "event11",
      name:
        "Independance day event with Help for Education Movement and Balaiyah Garden members.",
      createdAt: "2023-11-10T00:00:00Z",
      image: "event11.jpeg",
    },
    {
      id: "event13",
      name: "Judging & distributing momentoes at Karthikeyapuram Association.",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "event13.jpeg",
    },
    {
      id: "event14",
      name: "Judging an event with Dr. Latha, Hariharan Diabetic Hospital",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "event14.jpeg",
    },
    {
      id: "event16",
      name: "Meeting Dakshayani Ramachandran",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "With dancer Dakshayani Ramachandran & choreographer Master Raghuram's sister.",
      image: "event16.jpeg",
    },
    {
      id: "event17",
      name:
        "At the University of Madras post submission of the thesis - Jan 2024",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "event17.png",
    },
    {
      id: "event19",
      name: "Launch Event of the 'Impress' magazine.",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "impress.jpg",
    },
    {
      id: "event20",
      name: "At the University of Britto's, with Iman Annachi",
      createdAt: "2023-11-10T00:00:00Z",
      description: "",
      image: "iman.jpg",
    },
  ],
};

//Travel Diaries

const travelHeader = {
  title: "Travel Diaries",
  description:
    "Explore my unforgettable journeys to culturally significant places, historical landmarks, and scenic destinations. Here are some highlights from my travel experiences.",
};

const travelDiaries = {
  data: [
    {
      id: "travel1",
      name: "Isha - Spiritual Awakening and Retreats",
      createdAt: "2024-03-01T00:00:00Z",
      description:
        "A spiritual awakening unfolded during an early morning dive in Chandra Kund at Isha in March 2024, marking my 45th birthday. The day included 45 minutes in Chandra Kund, chanting at Linga Bhairavi, and meditative silence in the Dhyana Linga, bringing immense joy and transformation. In May 2024, another visit to Isha immersed me in an hour of meditation at Dhyana Linga, rejuvenated by the mesmerizing evening arthi. June 2024 brought a week-long stay in Coimbatore, where I spent peaceful moments in the serene atmosphere of Dhyana Linga. July 2024 added an overnight stay at Isha, where the tranquil campus vibe drew me deeper into divine energy.",
      images: [
        "isha3.jpeg",
        "isha1.jpeg",
        "isha2.jpeg",
        "isha4.jpeg",
        "isha5.jpeg",
      ],
    },
    {
      id: "travel4",
      name: "Kasi - Divine Grace",
      createdAt: "2024-08-25T00:00:00Z",
      description:
        "August 2024 marked a divine journey towards an unscheduled trip to Kasi Viswanath, which became a life-changing experience, with a 4 AM darshan of the Jyothirlinga and a blissful connection at Visalakshi’s feet. Witnessing the darshans of Meenakshi, Kamakshi, and Visalakshi within days overwhelmed my soul with divine grace.",
      images: [
        "kasi2.jpeg",
        "kasi1.jpeg",
        "kasi3.jpeg",
        "kasi4.jpeg",
        "kasi5.jpeg",
        "kasi6.jpeg",
        "kasi7.jpeg",
        "kasi8.jpeg",
        "kasi9.jpeg",
        "kasi10.jpeg",
      ],
    },
    {
      id: "travel7",
      name: "Madhya Pradesh - Mahakaleshwar and Omkareshwar",
      createdAt: "2024-12-15T00:00:00Z",
      description:
        "December 2024 concluded with a spiritual retreat to Madhya Pradesh, visiting Mahakaleshwar and Omkareshwar Jyothirlingas. The flowing Narmada, the Shipra arthi, and abhisekham filled my soul with spirituality. Darshan of Maa Bagalamukhi and Gatkalika, along with visits to historical temples and palaces, made this a once-in-a-lifetime experience, embracing the eternal divine presence.",
      images: [
        "mp16.jpeg",
        "mp2.jpeg",
        "mp3.jpeg",
        "mp4.jpeg",
        "mp5.jpeg",
        "mp6.jpeg",
        "mp7.jpeg",
        "mp8.jpeg",
        "mp9.jpeg",
        "mp10.jpeg",
        "mp11.jpeg",
        "mp12.jpeg",
        "mp13.jpeg",
        "mp14.jpeg",
        "mp15.jpeg",
        "mp1.jpeg",
        "mp17.jpeg",
      ],
    },
    {
      id: "travel9",
      name: "Kshemavanam, Karnataka - Wellness Retreat",
      createdAt: "2024-10-20T00:00:00Z",
      description:
        "March 2024 brought a transformative wellness retreat to Kshemavanam, Karnataka. Nestled in a serene environment, I underwent rejuvenating naturopathy treatments that harmonized the body and mind. The retreat included coaching and counseling sessions on food, health, diet, mental well-being, and self-realization. The peaceful atmosphere and holistic approach left a lasting impact, inspiring a deeper commitment to personal wellness and spiritual growth.",
      images: [
        "kshmvn3.jpeg",
        "kshmvn2.jpeg",
        "kshmvn1.jpeg",
        "kshmvn4.jpeg",
        "kshmvn5.jpeg",
        "kshmvn7.jpeg",
        "kshmvn16.jpeg",
      ],
    },
    {
      id: "travel2",
      name: "Tiruvannamalai - Sacred Girivalam Walk",
      createdAt: "2024-04-14T00:00:00Z",
      description:
        "In April 2024, I traveled for the first time to Tiruvannamalai and embarked on the sacred Girivalam walk, covering 14 kilometers while immersed in Shiv Jaap and divine energy. Offering the first garland of the year to Arunachaleshwara at 4:30 AM was a divine experience. In October 2024, I returned to Tiruvannamalai for another Girivalam walk, experiencing the divinity and immense peace of Arunachaleshwara's presence. Each step was a testament to the divine power guiding me.",
      images: [
        "thiruvml4.png",
        "thiruvml2.jpeg",
        "thiruvml3.jpeg",
        "thiruvml6.jpeg",
        "thiruvml7.jpeg",
        "thiruvml8.jpeg",
      ],
    },
    {
      id: "travel3",
      name: "Madurai Temples",
      createdAt: "2024-07-15T00:00:00Z",
      description:
        "In July 2024, an unplanned trip to Madurai led to my first-ever darshan of several iconic deities. Visiting Rakkayi Amman Temple, Immayil Nanmai Tharuvar Temple, Azhagar Kovil, Pazhani, Tiruparam Gundram, and Pazhamudir Cholai left me spiritually fulfilled. Meenakshi Amman’s beauty was captivating, with her sparkling nose pin and radiant aura. The trip ended with gratitude and divine blessings, making it an unforgettable journey.",
      images: [
        "madurai3.jpeg",
        "madurai2.jpeg",
        "madurai1.jpeg",
        "madurai4.jpeg",
        "madurai5.jpeg",
        "madurai6.jpeg",
        "madurai7.jpeg",
        "madurai8.jpeg",
        "madurai9.jpeg",
      ],
    },

    {
      id: "travel9",
      name: "Divya Desams - Sacred Pilgrimage",
      createdAt: "2024-11-30T00:00:00Z",
      description:
        "November 2024 marked the completion of my visits to the Divya Desams in Chennai, including Bakthavatsala Perumal, Neervanna Perumal, Sthala Sayana Perumal, and Vaidhya Veeraraghava Perumal. Each darshan was a divine experience, filled with spiritual connection and grace. While this journey in Chennai has concluded, my heart is set on continuing the pilgrimage to other Divya Desams across the country in the near future.",
      images: [
        "dd8.jpeg",
        "dd7.jpeg",
        "dd9.jpeg",
        "dd10.jpeg",
        "dd11.jpeg",
        "dd12.jpeg",
        "dd13.jpeg",
        "dd15.jpeg",
        "dd16.jpeg",
        "dd17.jpeg",
        "dd18.jpeg",
        "dd19.jpeg",
        "dd20.jpeg",
        "dd21.jpeg",
        "dd1.jpeg",
        "dd2.jpeg",
        "dd3.jpeg",
        "dd4.jpeg",
        "dd5.jpeg",
        "dd6.jpeg",
      ],
    },

    {
      id: "travel11",
      name: "Kanchipuram - Kamakshi Temples",
      createdAt: "2024-12-05T00:00:00Z",
      description:
        "In 2024, I visited the sacred Kamakshi temples in Kanchipuram, where the divine calmness of the deity enveloped my soul. The serene aura of Kanchi Kamakshi filled the surroundings with peace and tranquility. The beauty of the temple tanks and the sight of parrots fluttering around added to the charm of the visit. Standing before the powerful yet graceful deity, I felt a profound sense of gratitude and connection, leaving me spiritually rejuvenated.",
      images: [
        "kanch1.jpeg",
        "kanch2.jpeg",
        "kanch3.jpeg",
        "kanch4.jpeg",
        "kanch5.jpeg",
        "kanch6.jpeg",
        "kanch7.jpeg",
        "kanch8.jpeg",
        "kanch9.jpeg",
        "kanch10.jpeg",
        "kanch11.jpeg",
        "kanch12.jpeg",
        "kanch13.jpeg",
        "kanch14.jpeg",
        "kanch15.jpeg",
        "kanch16.jpeg",
        "kanch17.jpeg",
        "kanch18.jpeg",
      ],
    },
    {
      id: "travel5",
      name: "Murugan Temples - Tamil Nadu",
      createdAt: "2024-09-05T00:00:00Z",
      description:
        "Throughout 2024, I embarked on a spiritual journey to visit the revered Murugan temples across Tamil Nadu. November 2024 was a divine month of darshans at Murugan temples during three successive Krithigai days at Kundrathur, Vadapalani, and Tiruporur. The first arthi in Thanga Kavacham left me awe-struck, with tears streaming as I stood close to the deity. This included darshans at the Arupadai Veedu temples, which hold immense significance in Karthikeya's worship. Visits to sacred sites like Siruvapuri, Vadapalani, Tiruthani, Kundrathur, and Marudhamalai enriched my devotion and connection to Lord Murugan. Each temple carried its own divine aura, leaving my soul immersed in blessings and gratitude.",
      images: [
        "murugant2.jpeg",
        "murugant1.jpeg",
        "murugant3.jpeg",
        "murugant4.jpeg",
        "murugant5.jpeg",
        "murugant6.jpeg",
        "murugant7.jpeg",
        "murugant8.jpeg",
        "murugant9.jpeg",
        "murugant10.jpeg",
        "murugant11.jpeg",
        "murugant12.jpeg",
      ],
    },
    {
      id: "travel6",
      name: "Chennai - Temples and Spiritual Connection",
      createdAt: "2024-11-15T00:00:00Z",
      description:
        "Exploring the Navagraha temples in Chennai was a deeply spiritual journey. The massive lingas in these temples radiated an awe-inspiring energy. Witnessing the consecration ceremonies across the temples added a profound sense of devotion and connection. The intricate and beautiful temple architecture stood as a testament to the rich cultural heritage, blending seamlessly with the divine aura that enveloped each sacred space. This spiritual experience left me deeply moved and enriched.",
      images: [
        "chnai8.jpeg",
        "chnai2.jpeg",
        "chnai3.jpeg",
        "chnai4.jpeg",
        "chnai5.jpeg",
        "chnai6.jpeg",
        "chnai1.jpeg",
        "chnai9.jpeg",
        "chnai10.jpeg",
        "chnai11.jpeg",
        "chnai12.jpeg",
      ],
    },
  ],
};

export { travelHeader, travelDiaries };

// Contact Page (keep unchanged if needed)
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactmedp.jpg",
    description:
      "I am available on WhatsApp - Phone: +91 9940485505, LinkedIn, Facebook and Gmail. I can help you with or have a conversation about training, coaching, writing, content creation, custom arts and crafts, and travel guidance. Feel free to reach out!",
  },
  blogSection: {},
  addressSection: {},
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  eventsHeader,
  events,
  contactPageData,
};
