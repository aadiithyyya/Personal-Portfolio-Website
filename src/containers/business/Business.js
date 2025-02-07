import React, { useEffect } from "react";

const Business = ({ theme }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="container">
      <h1 className="title fade-in" style={{ color: theme.text }}>
        About Me!
      </h1>

      <p className="intro fade-in" style={{ color: theme.text }}>
        Welcome to my webpage! I invite you to join me on a journey through a
        life enriched with experiences. With two decades of expertise in
        teaching, training, and writing, my path has been filled with
        fascinating twists and turns, and I’m delighted to share my stories with
        you.
      </p>

      <div className="content fade-in" style={{ color: theme.text }}>
        <p>
          As a <strong>Corporate Trainer, Life Coach, and Writer</strong>, I
          explore the intricacies of language, history, and human experience,
          crafting narratives that inspire and enlighten. My passion for writing
          led me to pursue a PhD in English, focusing on the gynocentric study
          of silence in women—unveiling their unseen hardships and strength
          through literature.
        </p>

        <p>
          Within these virtual pages, you’ll discover a rich tapestry of human
          emotions. Dive into stories of fascinating architecture, profound
          history, and spiritual wonders in my <strong>Temple Tales</strong>.
        </p>
        <p>
          I have had the privilege of working in the media industry, meeting
          achievers, stalwarts, and celebrities. Each interaction has been a
          source of growth, boosting my confidence while keeping me grounded in
          humility. Every interview offered a valuable lesson—one that I hold
          close to my heart.
        </p>
        <p>
          I see myself as a <em>seeker, storyteller, and guide</em>—constantly
          exploring both within and beyond. My journey is not just about
          acquiring knowledge but about understanding, connecting, and
          transforming. Through my work, I bring light to the silence in
          women's lives, uncovering their resilience and untold stories.
        </p>

        
      </div>

      <div className="contact fade-in">
        <p>
          I invite you to explore my website, immerse yourself in my stories,
          and connect with me at <strong>9940485505</strong>.
        </p>
      </div>

      <style jsx>{`
        .container {
          padding: 50px;
          text-align: center;
          max-width: 900px;
          margin: auto;
          line-height: 2;
        }
        .title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(45deg,rgba(40, 117, 206, 0.64),rgb(58, 54, 55));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .intro {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .content {
          text-align: left;
          font-size: 1.3rem;
          font-weight: 400;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .contact {
          margin-top: 40px;
          font-size: 1.4rem;
          font-weight: bold;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Business;
