"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Buddy and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">J</div>
          <div className="logo-text">Portfolio</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:jhumphriesent@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick=
            {toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Buddy Humphries
              </h1>
              <p>
                As a detail-driven software engineer with a passion for front-end development, I've always
                enjoyed
                building aesthetically pleasing applications, showcasing my ability to learn and adapt
                quickly. <span> Proficient in a
                  range of industry-relevant languages, Im eager to bring my passion for innovative solutions
                  to
                  a software engineering role, where I can collaborate with others to build dynamic and
                  responsive
                  applications that
                  delight our users. </span>
              </p>
              <div className="call-to-action">
                <a href="./Resume 2024.pdf" className="button">
                  View Resume
                </a>
                <a href="mailto:jhumphriesent@gmail.com" className="button">
                  Contact Me
                </a>
              </div>
              <div className="'social-links">
                <a href="https://github.com/jchalla3">
                  <img src="./imgs/github.png" alt="GitHub" width="'48" />
                </a>
                <a href="https://www.linkedin.com/in/buddyjoehumphries/">
                  <img src="./imgs/linkedin.png" alt="linkedin" width="'48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/jchalla.png" alt="Buddy Humphries" width="49%" />
          </div>


        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/general-assembly_logo.png" width="128" alt="General Assembly" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/general-assembly_logo.png" width="128" alt="General Assembly" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.JS</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>

            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Welcome to my portfolio! I’m Buddy, a passionate software engineer based in Austin, TX, with a love for crafting visually stunning experiences. My heart lies in frontend development, where I can combine my creative spirit and technical expertise to build beautiful, user-friendly applications. I am absolutely fascinated by the intersection of art and code, and I strive to create digital products that delight and inspire.

                Take a look around my portfolio to see a few of my favorite projects. Let’s connect if you’re looking for a collaborative and creative partner to bring your vision to life!</p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>My Journey</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/Lone+Oak.png" alt="Lone Oak Services" width="100%" />
                  <figcaption>
                    Lone Oak Services
                  </figcaption>
                </div>
              </figure>
              <h3>Lone Oak Services</h3>
              <div>2020-</div>
              <p>Lone Oak Services is a Texas-based landscaping company offering comprehensive lawn care, garden design, and hardscaping solutions for both residential and commercial clients.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/everi-logo.png" alt="Everi Holdings Inc" width="100%" />
                  <figcaption>
                    Everi Holdings Inc.
                  </figcaption>
                </div>
              </figure>
              <h3>Everi Holdings Inc</h3>
              <div>2023-2024</div>
              <p>offers a state-of-the art server-based gaming solution created to deliver unique, top-performing
                slot content to online operators worldwide.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/facebook-circle-logo-png.png" alt="Facebook" width="100%" />
                  <figcaption>
                    Facebook
                  </figcaption>
                </div>
              </figure>
              <h3>Facebook</h3>
              <div>2021-2023</div>
              <p>Facebook is a dynamic social media platform that brings people together from all corners of the globe, fostering connections and enabling vibrant interactions among users worldwide
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Previous
            </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://github.com/jchalla3/Connect-Four-Dragon-Ball-Z-" className="bento-item">
              <img src="./imgs/Project-1-Dbz.png" alt="Connect four" width="100%" />
            </a>
            <a href="https://github.com/aventine-hub/Sneakerheadz" className="bento-item">
              <img src="./imgs/Sneakerheadz.png" alt="Sneakerheadz" width="100%" />
            </a>
            <a href="https://github.com/jchalla3/Super-Food-List" className="bento-item">
              <img src="./imgs/Super-foods-list.png" alt="food list" width="100%" />
            </a>
            <a href="https://github.com/jchalla3/Strongest-Champions" className="bento-item">
              <img src="./imgs/Champions.png" alt="Champions" width="100%" />
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>
              Future
            </small>
            Implementation
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I'm putting together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You'll be able to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>For now, you can download my resume if you'd like to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
              <a href="./Resume 2024.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}