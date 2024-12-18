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
  logo_name: "AshutoshHathidara",
  nickname: "Communication Specialist & Life Coach",
  subTitle:
    "Enabling professionals to increase their impact through clear communication and interpersonal skills.",
  resumeLink: "https://linkedin.com/in/aadiithyyya",
  portfolio_repository: "https://linkedin.com/in/aadiithyyya",
  githubProfile: "https://linkedin.com/in/aadiithyyya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/aadiithyyya",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://linkedin.com/in/aadiithyyya",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ramaadithya55@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://linkedin.com/in/aadiithyyya",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://linkedin.com/in/aadiithyyya",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://linkedin.com/in/aadiithyyya",
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
        "Introduced me to the world of literature and enhanced my knowledgebase on literary forms.",
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
      name: "At Officers Training Academy - Meenambakkam.",
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
      name: "March 2024 - A Spiritual Awakening at Isha",
      createdAt: "2024-03-01T00:00:00Z",
      description:
        "Celebrated my 45th birthday with an early morning dive in Chandra Kund at Isha. The day unfolded with 45 minutes in Chandra Kund, followed by chanting at Linga Bhairavi and meditative silence at Dhyana Linga. I was overcome with feelings of greater pleasure, knowledge, grace, and relief, a deeper awareness of who I am and how I relate to the cosmos. Since then, I have not looked back.",
      images: ["event14.jpeg", "event13.jpeg"],
    },
    {
      id: "travel2",
      name: "April 2024 - Tiruvannamalai Girivalam Walk",
      createdAt: "2024-04-14T00:00:00Z",
      description:
        "Traveled for the first time to Tiruvannamalai and embarked on the sacred Girivalam walk. On Tamil New Year's Day, I offered the first garland of the year to Arunachaleshwara at 4:30 AM. A divine acknowledgement from the higher power marked this unforgettable journey.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel3",
      name: "May 2024 - Dhyana Linga Retreat at Isha",
      createdAt: "2024-05-10T00:00:00Z",
      description:
        "Visited Isha again and immersed myself in over an hour of silent meditation at Dhyana Linga. The evening arthi filled the space with rejuvenating energy, leaving me mesmerized and spiritually charged.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel4",
      name: "June 2024 - Week-long Rejuvenation at Isha, Coimbatore",
      createdAt: "2024-06-20T00:00:00Z",
      description:
        "Spent a week in Coimbatore, reconnecting with my spiritual core at Isha. Time spent in the serene atmosphere of Dhyana Linga recharged my mind and soul, leaving me with peace and stillness.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel5",
      name: "July 2024 - Madurai Temples and ISHA Overnight Stay",
      createdAt: "2024-07-15T00:00:00Z",
      description:
        "An unplanned trip led me to Madurai, where I had darshan at iconic temples like Meenakshi Amman, Rakkayi Amman, Pazhani, Azhagar Kovil, and Pazhamudir Cholai. Meenakshi's sparkling nose pin and divine aura left me speechless. The trip concluded with an overnight stay at Isha, soaking in the tranquil beauty of the campus.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel6",
      name: "August 2024 - Kamakshi Darshan and Unexpected Journey to Kasi",
      createdAt: "2024-08-25T00:00:00Z",
      description:
        "A dream turned reality with Kamakshi darshan at Kanchipuram, followed by visits to Mangadu Tapas Kamakshi and Tiruverkadu Karumari Amman. Towards month-end, an unscheduled trip took me to Kasi Viswanath for the 4 AM Jyothirlinga darshan and a blissful moment at Visalakshi's feet. Darshan of all three Devis - Meenakshi, Kamakshi, and Visalakshi - within days left my soul overwhelmed with divine grace.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel7",
      name: "September 2024 - Siruvapuri Murugan and Growing Divine Connection",
      createdAt: "2024-09-05T00:00:00Z",
      description:
        "A friend gifted me a divine vel, leading me to my first darshan at Siruvapuri Murugan on an unplanned Krithigai day. The experience of Raja Alankaram and Shiv Jaap deepened my desire to visit 12 Jyothirlingas and 51 Sakthi Peeth.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel8",
      name: "October 2024 - Tiruthani and Pallur Varahi Temples",
      createdAt: "2024-10-10T00:00:00Z",
      description:
        "On another unexpected Krithigai, I stood close to the divine Tiruthani Murugan during Raja Alankaram. Later, I visited Pallur Varahi, a Chola temple, offering a lotus garland while seated at the deity's feet. Within days, I returned to Tiruvannamalai for another Girivalam walk, fully immersed in Shiv Jaap.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel9",
      name: "November 2024 - Murugan Krithigai and Chennai Temples",
      createdAt: "2024-11-15T00:00:00Z",
      description:
        "Celebrated three consecutive Krithigai days at Kundrathur, Vadapalani, and Tiruporur Murugan temples, experiencing the first arthi in Thanga Kavacham. Also visited Chennai's Divya Desams, including Bakthavatsala Perumal, Neervanna Perumal, and Vaidhya Veeraraghava Perumal, along with Navagraha temples, where multiple Lingas embraced my soul as a Shivapriya.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
    {
      id: "travel10",
      name: "December 2024 - Mahakaleshwar and Omkareshwar Spiritual Retreat",
      createdAt: "2024-12-15T00:00:00Z",
      description:
        "Concluded the year with a divine retreat to Madhya Pradesh's Mahakaleshwar and Omkareshwar Jyothirlingas. The Shipra Aarthi, abhisekham, and flowing Narmada river filled my soul with spirituality. Darshan of Maa Bagalamukhi and Gatkalika, along with visits to historical temples and palaces, made this a once-in-a-lifetime experience.",
      images: ["event12.jpeg", "event13.jpeg"],
    },
  ],
};

export { travelHeader, travelDiaries };

// Contact Page (keep unchanged if needed)
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "imgdeepika.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
