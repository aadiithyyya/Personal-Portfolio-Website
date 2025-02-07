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
    "Empowering professionals & students to enhance their influence through effective communication and strong interpersonal skills.",
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
    link: "https://www.instagram.com/deepika.saravanan.7?igsh=MXhyMjh0MXc5MnRvYw==",
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
        "⚡ Conducting regular Train-the-Trainer programs to upskill teachers.",
        "⚡ Communication coaching sessions & classess for school students and home-makers.",

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
    {
      title: "Coaching Mastery Professional Certification",
      logo_path: "cert1.png",
      certificate_link:
      "https://drive.google.com/drive/folders/1dErpr7uQuYSJeB5aYjkp1BdYXa3MNv9c?usp=share_link",
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
      id: "event21",
      name: "Catching up with veteran Actor Nalini at Vilakku Kadai - Porur",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event31.jpeg", // Replace with the actual image file
    },
    {
      id: "event32",
      name: "Corporate Trainer Certification",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "Certification day at IATD, Chennai - With Dr. Rajan Muthukrishnan, Founder ZEAL & IATD, COO of Synergy School of Business Skills - CADD Center, Master Trainer and Author.",
      image: "event32.jpeg", // Replace with the actual image file
    },
    {
      id: "event24",
      name: "With the trainer's team IATD, Chennai",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event24.jpg", // Replace with the actual image file
    },
    
    {
      id: "event23",
      name: "With Panruti S Ramachandran, Former Minister of Public Works, government of TN. ",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event22.jpg", // Replace with the actual image file
    },
  
    {
      id: "event25",
      name: "Star Hub clients and the SDL’s of Accenture – hosted the Town Hall during client visit – 2019",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event25.jpg", // Replace with the actual image file
    },
    {
      id: "event26",
      name: "Hosting the townhall event @ Accenture, Chennai.",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event26.jpg", // Replace with the actual image file
    },
    {
      id: "event27",
      name: "With Dr Rasheeda, Professor, Department of English, Bharathi’s Women’s College, Chennai",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event27.jpg", // Replace with the actual image file
    },
    {
      id: "event28",
      name: "Dr Padmavathy, Vice Chancellor -PSGR Krishnammal College for Women.",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event28.jpg", // Replace with the actual image file
    },
    {
      id: "event29",
      name: "With Dr Tamilselvi, HOD Department of English – PSGR Krishnammal College for Women",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event29.jpg", // Replace with the actual image file
    },
    {
      id: "event30",
      name: "Receiving a momento from Thillai Ganga Nagar Association, Nanganallur - Presented by Chef Mallika Badrinath.",
      createdAt: "2023-12-05T00:00:00Z",
      description:
        "",
      image: "event30.jpg", // Replace with the actual image file
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
      name: "Interviewing Padmashri, Sangeetha Kalanidhi Dr. TK Murthy",
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
      name: "Conversation with V Kalyanam (Mahatma Gandhi's Personal Secretary)",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "The conversation was enlightening, revealing new facts about Gandhiji, including his life at Sabarmati Ashram, his use of mud packs for good health, fasting techniques, and other practices he followed. Saw hundreds of postcards sent to Gandhi from all over the world, mementoes, charka and much more. The house felt like a museum, with Gandhian principles evident everywhere. His humility and respect towards us were remarkable. Additionally, his terrace garden, active lifestyle well into his 80s, and sense of humour left a lasting impression.",
      image: "event20.jpeg",
    },
    {
      id: "event6",
      createdAt: "2023-11-10T00:00:00Z",
      name: "Compaired a Navrathri contest event representing Talk Media (Hosted a 2-day event)",
      image: "event6.jpeg",
    },
    {
      id: "event7",
      name: "Seva Ratna Award - 2010",
      createdAt: "2023-11-10T00:00:00Z",
      description:
        "Was one among the 75 achievers selected for their service to society. Asthiga samajam conferred a title Seva Ratna for my consistent contribtion in addressing civic and social issues of the neighbourhood.",
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
      name: "Meeting Dancer and Choreographer Dakshayani Ramachandran, Dance Master Raghuram's Sister",
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
      description: "Impress is a monthly magazine, I served as an editor for an year over there.",
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
  title: "Travel & Soulful Reflections",
  description: "Embark on a mesmerising journey through ancient temples, immersed in beautiful stories and spiritual wonders, whether you're a guest touring in person or looking for holy legends. My spiritual outlook is profoundly anchored in an intuitive and immersive connection with sacred locations, as I seek the deity's energy, sensing its presence beyond rituals, and harmonising with the divine force that resides within the sanctum. The aura of the location is important to the experience because it allows me to tune in to the vibrations of dedication, history, and faith that have created the temple over generations. For me, spirituality is more than simply exterior worship; it's about an immediate connection—a moment when time stops and you feel in tune with the holy essence of the space. Temple legends and histories are more than simply stories; they are living testaments to religion, culture, and dedication. The quest for deeper insight includes discovering why a temple was established, the cosmic purpose for its existence, and the spiritual importance it holds. My notion of spirituality is a journey of seeking, feeling, and understanding—where history, energy, and connection come together to create a profound and personal divine experience.",
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
      name: "A Divine Sojourn to Kashi Vishwanath: A Life-Changing Experience",
      createdAt: "2024-08-25T00:00:00Z",
      description: "The journey to Kashi Vishwanath was more than a pilgrimage; it was a soul-stirring transformation. The sacred city, drenched in centuries of devotion, welcomed me with an energy that felt both ancient and eternal. The pinnacle of this spiritual odyssey was the 4 am darshan of the Jyotirlinga at Kashi Vishwanath Temple. As the temple bells resonated in the stillness of dawn, the divine presence of Mahadev engulfed me in an indescribable serenity. Time seemed to dissolve as I stood in His presence, my heart surrendering to the boundless grace of the Lord. From there, my journey led me to the feet of Visalakshi, the Divine Mother. A profound sense of bliss washed over me as I knelt before her, the embodiment of compassion and cosmic energy. The gentle yet powerful aura of the goddess left me feeling nurtured and protected. The visit to Kaal Bhairav Mandir was an encounter with raw, untamed divinity. The air crackled with an intensity that was both overwhelming and empowering. Standing before Kaal Bhairav, the fierce guardian of Kashi, I felt the weight of time and karma dissolve, replaced by an unshakable strength. Every temple and ghat I visited added a new layer to this divine experience. Lal Mata Mandir radiated the essence of feminine power, while Tridev Mandir symbolized the unity of creation, preservation, and destruction. At Tulsidas Ashram, the echoes of Ramcharitmanas resonated in the air, reminding me of the timeless devotion of the saint-poet. The ghats of Kashi, where life and death intertwine seamlessly, held a mystical allure. Manikarnika and Harishchandra Ghats—where the eternal fire burns—spoke of the transient nature of existence, yet whispered the promise of liberation. Aasi Ghat, with its tranquil waters and sacred chants, felt like a place where the river carried away all burdens, leaving behind only peace. Kashi is not just a place; it is an experience that transcends words. It is where divinity meets humanity, where the soul finds its true calling. This journey was not merely a visit—it was a rebirth, a realization that in the cosmic dance of life and death, we are but seekers on the path of the eternal.",
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
      name: "A Spiritual Retreat to Madhya Pradesh: Embracing the Eternal Divine",
      createdAt: "2024-12-15T00:00:00Z",
      description: "My journey to Madhya Pradesh was more than a pilgrimage; it was a retreat into the depths of spirituality, where every moment felt like a conversation with the divine. The land of Mahakaleshwar and Omkareshwar, graced by the sacred flow of the Narmada and Shipra rivers, held an energy that resonated with the soul. Standing before Mahakaleshwar, the Jyotirlinga that transcends time, was an experience beyond words. As the rhythmic chants of the Rudrabhishekam filled the sanctum, a wave of devotion and surrender washed over me. Omkareshwar, nestled amidst the serene embrace of the Narmada, radiated a peace that settled deep within, reminding me of the eternal presence of Shiva. The flowing Narmada carried whispers of divinity, its sacred waters holding the essence of countless prayers. Witnessing the Shipra Aarti was a sight to behold—flames rising to meet the heavens, chants echoing through the air, and the river shimmering in divine acknowledgment. Performing the abhisekham for Goddess Shipra was an overwhelming blessing, as she flowed with elegance, embodying grace and divinity. The darshan of Maa Bagalamukhi and Gatkalika added another dimension to this journey. Their presence was both fierce and protective, a reminder of the strength that lies in surrender. The visit to the Shakti Peeth, where the aarti was performed with immense bhakti by devotees, was a moment of sheer transcendence. The devotion, the vibrations, and the spiritual energy of the place left an indelible mark on my heart. The journey took me beyond temples—to history and nostalgia. Visiting the Vikramaditya Bethal tree was like stepping into my childhood, where my grandmother’s stories of the wise king and the enigmatic ghost had once filled my imagination. The tree, standing strong for thousands of years, seemed to hold the echoes of those timeless tales. And then, there was Mahakaal—the Lord beyond time and death. His presence was all-encompassing, his aura an eternal embrace. To stand before him was to feel the weight of the universe dissolve, leaving only love, devotion, and an overwhelming sense of belonging. In that moment, I knew—I had fallen in love with Mahakaal, the deity who rules over time, yet liberates from it. This retreat was not just a journey through sacred lands; it was a journey within. A once-in-a-lifetime experience that reaffirmed the eternal bond between the seeker and the divine.",
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
      name: " A Transformative Retreat to Kshemavanam: A Journey of Healing and Self-Discovery",
      createdAt: "2024-10-20T00:00:00Z",
      description: "My week-long retreat to Kshemavanam with my sister was nothing short of a once-in-a-lifetime experience—an oasis of tranquility where healing unfolded in the most profound way. Nestled in the lap of nature, away from the relentless hum of the outside world, this sanctuary offered a perfect blend of rejuvenation and self-discovery. The naturopathy treatments were more than just therapies; they were a journey into balance, aligning the body and mind in perfect harmony. Each session, carefully designed to cleanse and restore, left me feeling lighter—physically, mentally, and emotionally. Beyond the treatments, the coaching and counseling sessions on food, health, diet, and mental well-being sparked a deeper awareness, making me more mindful of my choices and their impact on my overall wellness. What made Kshemavanam truly magical was not just its holistic approach but the soul-soothing atmosphere that enveloped it. The gentle rustling of leaves, the rhythmic chirping of birds, and the graceful presence of peacocks wandering freely created an environment that felt like nature’s own healing touch. The beautifully curated artifacts and lush gardens were a silent reminder of the power of stillness and beauty in the journey of inner peace. For seven days, I was far removed from the madding crowd, immersed in a space where time slowed down, and self-reflection took center stage. As I left, I carried with me not just the benefits of physical detoxification but an awakened commitment to personal wellness and spiritual growth—one that would continue to shape my path long after the retreat ended.",
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
      name: "A Transformative Girivalam at Tiruvannamalai",
      createdAt: "2024-04-14T00:00:00Z",
      description: "Returning to the Magnetic Hill of Tiruvannamalai after many years, I embarked on my first-ever Girivalam, a sacred circumambulation of Arunachala. Though walking has never been my forte, I took on the journey with a newfound determination—covering 10 kilometers on foot while the remaining 4 kilometers were traversed by auto. It felt like a personal triumph, a step beyond my own limits, driven by an unseen force. The most profound moment came at 4:30 AM when I had the honor of offering the first garland of the Tamil New Year to Arunachaleshwara. As the divine adornment was placed on Him, I stood with my eyes brimming with warmth and devotion, feeling an unspoken acknowledgment from the Lord Himself. It was a moment beyond words—pure, overwhelming, and deeply personal.Within months, I was drawn back to the sacred hill once again. This time, I completed the full 14-kilometer Girivalam in six hours—an experience unlike any other. It was just the Lord and me, immersed in a rhythm of silent communion. Words fail to capture the depth of that connection, the sheer bliss of walking in His presence, feeling the magnetic energy of Arunachala pull me into stillness and surrender. The hill is more than just a geological wonder—it is a force, a presence, an eternal power that can be felt in every step taken around it. With this newfound devotion, I know this journey will not be my last. Regular Girivalam is now a calling, a path I will walk again and again, drawn by the divine embrace of Arunachala.",
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
      description: "Madurai gifted me my first-ever darshan of several revered deities, leaving me spiritually enriched. Visiting Rakkayi Amman Temple, Immayil Nanmai Tharuvar Temple, Azhagar Kovil, Pazhani, Tiruparamkundram, and Pazhamudir Cholai was a divine experience. Meenakshi Amman’s mesmerizing beauty, with her radiant aura and sparkling nose pin, was truly captivating. The sanctum’s intense energy, her right foot placed ahead, and the brilliance of her nose pin remain etched in my soul. Tiruparamkundram Temple stood as a testament to history, its architecture and legends weaving a magical charm. The journey concluded with deep gratitude and divine blessings, making it truly unforgettable.",
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
      description: "Covering 15 Divya Desams of Kanchipuram in 24 hours and 6 at Chennai is no small feat—both physically and spiritually. Each temple has its own deep-rooted history, unique architectural beauty, and divine presence, making the experience overwhelming and fulfilling. Was indeed an incredible spiritual journey! Though it was physically exhausting, the experience was deeply fulfilling. It also reinforced my belief that I can accomplish my goal of reaching the maximum in the next couple of months. Thiruparameshwara Vinnagaram – Sri Vaikunda Perumal Temple, Thiru Pavala Vannan – Sri Pavala Vannar Temple, hiru Paadagam – Sri Pandava Thoothar temple, Thiru Ooragam – Sri Ulagalantha Perumal temple, Thiru Kaaragam – Sri Karunakara Perumal temple, Thirukarvanam – Sri Thirukkar Vannar temple, Thiru Neeragam – Sri Jagadeeshwarar temple, Thiru Nilathingal Thundam – Sri Nilathingal Thundathan Perumal temple, Thiru Kalvanoor – Sri Adi Varaha Perumal temple, Thiruputkuzhi – Sri Vijayaraghava Perumal temple, Thiru Kacchi – Sri Varadaraja Perumal temple, Thiru Vekka – Sri Yathothakaari temple, Ashtabujam – Sri Aadikesava Perumal temple, Thiru Velukkai – Sri Azhagiya Singar Perumal temple, Thiruthanka (Thoopul) – Sri Deepa Prakasar Perumal temple, Thiruvallikkeni Sri Parthasarathy Temple , Thiruneermalai - Sri Neervanna Perumal Temple, Thiruvedanthai - Sri Nithya Kalyana Perumal Temple , Thiru Kadalmalai (Mahabalipuram) - Sri Sthala Sayana Perumal Temple, Thiru Nindravoor - Sri Bhatavatsala Perumal Temple, Tiruvallur - Sri Veeraraghava Perumal Temple  ",
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
      description: "Kamakshi is not just a deity; she is an emotion—her divine calmness gently enveloping my soul. The serene aura of Kanchi Kamakshi radiated peace and tranquility, filling the surroundings with an almost ethereal stillness. The temple tanks reflected timeless beauty, while parrots fluttering around added a touch of enchantment to the experience. Standing before the powerful yet graceful goddess, I was overcome with gratitude and a deep spiritual connection. The moment of pradakshanam, chanting the Lalitha Sahasranamam after witnessing the Ujjikala Abhishekam, was soul-stirring. Sitting right before her, watching the sacred abhishekam, my heart melted in devotion. Offering her a saree was a humble gesture of love, but the divine surprise of a lifetime awaited me—she adorned the saree as if accepting my offering. In that moment, I felt elated beyond words—what more could I ask for in life? The journey was made even more special with a darshan at the Adi Kamakshi temple, completing an experience of profound spiritual fulfillment.",
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
      description: "Lord Muruga appeared out of nowhere, enveloping me in his boundless love and leaving me mesmerized by his divine presence. Drawn by devotion, I embarked on a sacred journey across Tamil Nadu to seek the blessings of Lord Murugan. November 2024 became a month of divine grace, with darshans at Murugan temples on three successive Krithigai days—at Kundrathur, Tiruttani, and Siruvapuri. The first arthi in Thanga Kavacham was a moment of sheer awe; standing close to the deity, tears flowed as I was overwhelmed by his radiance. The pilgrimage continued with darshan at Marudamalai, Vadapalani, Tiruporur, and the Arupadai Veedu temple at Besant Nagar, each temple carrying its own sacred energy. Every visit deepened my devotion, immersing my soul in blessings and gratitude, strengthening my eternal connection with Muruga. Learnt Vel Maaral in this process.",
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
      id: "travel7",
      name: "Abode of Lord Shiva",
      createdAt: "2024-11-15T00:00:00Z",
      description: "I’ve had the blessing of experiencing darshan of 315 Shiv Lingas in just 11 months, and I’m now eager to complete the darshan of 1008 Shiv Lingas in the days ahead.As I stood before the ancient temples of Ekambareshwarar and Kalilasanathar, I was deeply moved by the sacredness and eternal essence of these revered spaces. The mighty Lingas, standing tall and proud, embodied the devotion of two millennia. In those moments, time seemed to stand still, as though the prayers and energy of countless generations resonated through the very stones. The atmosphere was thick with reverence, and every step I took felt like a connection to something far greater than myself.At the Padal Petra Sthalams, the divine echoes from ancient times seemed to reverberate like a cosmic rhythm, guiding my spirit through the ages. The rich history, unwavering devotion, and exquisite craftsmanship of these temples filled me with awe. I could feel the blessings of those who had walked this path before me, the lineage of seekers whose footprints still lingered. The power of these temples, created by hands and minds long gone, felt alive and tangible. The experience was profoundly humbling and deeply moving—a true darshan that transcended sight, where my heart and soul found peace in the divine presence. Kachi Ekambam, Kachi Anaekathangavadam, Kachi Metrali, Onan kanthan thali, Kachi Karaikadu, Tiruvooral Thakolam, Padi (Thiruvalithayam) Thiruvalleeswarar, Thiruninravur Hridayaleeswarar , Mylapore Kapaleeswarar, Thiruvadisoolam Jnanapureeswarar , Thirumullaivoyal Masilamaneeswarar , Thiruvanmiyur Marundeeswarar, Thiruverkadu Vedapureeswarar , Thiruvottiyur Adipurishwarar & Thayagarajar. Tiruvannamalai Arunachaleshwarar,Tirunelveli Nellaiappar, Ramanathaswamy Rameshwaram, Amruthakadeshwar Kumbakonam,Chidambaram Natarajar.",
      images: [
        "shivan1.jpeg",
        "shivan2.jpeg",
        "shivan3.jpeg",
        "shivan4.jpeg",
        "shivan5.jpeg",
        "shivan6.jpeg",
        "shivan7.jpeg",
        "shivan8.jpeg",
        "shivan9.jpeg",
        "shivan10.jpeg",
        "shivan11.jpeg",
        "shivan12.jpeg",

      ],
    },
    {
      id: "travel8",
      name: "Saptha Sthana Sthalams at Mylapore, Chennai",
      description: "The revered Saptha Sthana Sthalams are seven ancient and sacred Shiva temples nestled in the spiritual heart of Mylapore holds a deeper history than one can imagine. These divine sanctuaries are devoted to the illustrious Saptha Rishis, the venerable and enlightened Munipunkavars. Karaneeswarar Temple, Theerthapaleeswarar Temple, Velleeswarar Temple, Virupaksheeswarar Temple, Valeeswarar Temple, Malleeswarar Temple, and Kapaleeswarar Temple.",
      createdAt: "2024-11-15T00:00:00Z",
      images: [
        "sapthsthal12.jpeg",
        "sapthsthal2.jpeg",
        "sapthsthal3.jpeg",
        "sapthsthal4.jpeg",
        "sapthsthal5.jpeg",
        "sapthsthal6.jpeg",
        "sapthsthal7.jpeg",
        "sapthsthal8.jpeg",
        "sapthsthal9.jpeg",
        "sapthsthal10.jpeg",
        "sapthsthal11.jpeg",
        "sapthsthal1.jpeg",

      ],
    },
    {
      id: "travel9",
      name: "Abode of Sakthi",
      createdAt: "2024-11-15T00:00:00Z",
      description: "The three Shakthi temples in Chennai are revered for their identical divine forms. It is considered highly auspicious to have darshan of all three on the same day, especially on a full moon day. The significance is amplified when the full moon falls on a Friday, enhancing spiritual blessings. Ichchaa Sakthi - Thiruvudai AmmanGnaana Sakthi - Vadivudai AmmanKriyaa Sakthi - Kodiyidai Amman. The beauty of the deity in these three Shakthi temples is mesmerizing and radiates divine grace. Adorned in resplendent silk, bedecked with intricate jewelry, and crowned with a shimmering aura, the goddess captivates every devotee with her serene yet powerful presence. Her compassionate eyes exude warmth and blessings, while her gentle smile carries the promise of protection and prosperity. The sacred kumkum on her forehead, the luminous radiance of her golden-hued form, and the intricate floral garlands adorning her add to her ethereal charm. Each detail of her divine manifestation evokes a deep sense of devotion, filling the temple space with an aura of sanctity and peace.",
      images: [
        "shakthi2.jpeg",

        "shakthi1.jpeg",
        "shakthi3.jpeg",
        "shakthi4.jpeg",
        "shakthi5.jpeg",
        "shakthi6.jpeg",
        "shakthi7.jpeg",
        "shakthi8.jpeg",
        "shakthi9.jpeg",
      ],
    },
    {
      id: "travel6",
      name: "A Profound Journey Through Chennai’s Navagraha Temples",
      createdAt: "2024-11-15T00:00:00Z",
      description: "Exploring the Navagraha temples in Chennai within 24 hours was a spiritually enriching experience. Each temple, dedicated to a celestial deity, radiated a unique energy, drawing me into its divine embrace. Agatheeswarar Temple – Suryan (Kolapakkam) Somanaadheeswarar Temple – Chandran (Somangalam) Vaidheeswaran Temple – Angaragan (Poovirundhavalli/Poondhamalli) Sundareswarar Temple – Budhan (Kovur) Ramanaadheeswarar Temple – Guru (Porur) Velleeswarar Temple – Sukran (Mangadu) Agatheeswarar Temple – Shaneeswaran (Pozhichalur) - Neelakandeswarar Temple – Kethu (Gerugambakkam) Nageshwarar Temple – Rahu (Kundrathur) The presence of massive lingas in these temples was awe-inspiring, radiating a powerful spiritual energy that was both humbling and uplifting. Witnessing the consecration ceremonies across the temples added another layer of devotion, deepening my connection with the divine. Beyond the spiritual essence, the intricate architecture of these temples stood as a testament to Tamil Nadu’s rich cultural heritage. Every sculpted pillar and sanctum blended seamlessly with the sacred aura, making each visit a transcendental experience. This journey was more than just a pilgrimage—it was a deep, soul-stirring encounter with the divine, leaving me profoundly moved and spiritually enriched.",
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
