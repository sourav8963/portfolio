import React from "react";
import DownloadResume from "./DownloadResume";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-2">Sourav Kumar</h1>
        <DownloadResume />
      </div>
      <p className="text-sm mb-4">
        <a href="mailto:sourav12729@gmail.com" className="text-blue-600">
          sourav12729@gmail.com
        </a>{" "}
        |
        <a href="tel:+919534010578" className="text-blue-600 ml-2">
          +91 9534010578
        </a>
      </p>

      <p className="mb-4 text-sm">
        <a href="https://sourav8963.in" className="text-blue-600">
          Portfolio
        </a>{" "}
        |
        <a href="https://github.com/Sourav8963" className="text-blue-600 ml-2">
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/Abhi6722"
          className="text-blue-600 ml-2"
        >
          LinkedIn
        </a>
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>
          <strong>Birla Institute of Technology, Mesra</strong>
          <br />
          B.Tech in Computer Science & Engineering (2023 - 2027)
        </p>
        <p className="text-sm">Courses: OS, DS, AOA, DBMS, ML, CN</p>
        <p>
          <strong>Pitts Modern School</strong>
          <br />
          10th: 86% (2021), 12th: 80% (2023)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p>
          <strong>Languages:</strong> C, C++, HTML, CSS, JS, Python, Node.js
        </p>
        <p>
          <strong>Frameworks:</strong> Flutter, React, Express, Next.js,
          Bootstrap, MUI, Tailwind
        </p>
        <p>
          <strong>Tools:</strong> Git, Docker, Firebase, MySQL, MongoDB, REST
          API, GraphQL, Figma, Strapi
        </p>
        <p>
          <strong>Soft Skills:</strong> Problem-solving, Organizational skills,
          Critical thinking, Sketching
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>
          <strong>qZense Labs</strong> – Software Developer (Internship + Full
          Time)
          <br />
          <span className="text-sm">
            Dec 2022 – Apr 2023 (Intern) | May 2023 – Current (Full Time)
          </span>
          <br />
          • Collaborated with frontend/backend/data science teams on
          cross-platform apps
          <br />
          • Conducted extensive testing for high-quality products (Fish Data
          Collection, MVP App)
          <br />• Tech Used: Flutter, Node.js, React, AWS
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            <strong>Grand Tours:</strong> Full-stack travel site like MakeMyTrip
            using React, Python, Frappe
          </li>
          <li>
            <strong>BIT Pass:</strong> Dynamic QR college entry-exit system
            using Flutter + Node + AWS
          </li>
          <li>
            <strong>Campus Careline:</strong> Complaint management (MERN +
            Next.js + Tailwind)
          </li>
          <li>
            <strong>Git Commander:</strong> NPM package for managing GitHub
            projects (Node.js)
          </li>
          <li>
            <strong>Covid Resources:</strong> Mobile app for COVID aid built
            with Bravo Studio, Figma
          </li>
          <li>
            <strong>Hackers Hub:</strong> Web app for hacking learners (React,
            Markdown)
          </li>
          <li>
            <strong>Bitopedia:</strong> College utility app (Figma, Airtable,
            Bravo)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>2nd Runner Up – COVID-19 Gameathon (May 2021)</li>
          <li>
            Winner – Build a Modern Data App Hackathon ($600 Prize) (Sep 2021)
          </li>
          <li>1st Rank – Harissons Growth Hacking Challenge (Jan 2023)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Publications</h2>
        <p>
          <strong>Ethical Hacking on Mobile from Scratch</strong>
          <br />A complete mobile hacking guide, published on Google Play Books,
          Amazon, and personal site (May 2020)
        </p>
      </section>
    </div>
  );
};

export default Resume;
