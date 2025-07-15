import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Database, Smartphone, Award, BookOpen, User } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const canvasRef = useRef(null);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const particles = 2000;
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x9333ea,
      size: 2,
      transparent: true,
      opacity: 0.8
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const skills = {
    languages: ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'Python', 'NodeJs'],
    frameworks: ['Flutter', 'ReactJs', 'Express', 'NextJs', 'BootStrap', 'Material UI', 'Tailwind CSS'],
    tools: ['GIT', 'Docker', 'Firebase', 'MySQL', 'MongoDB', 'Rest API', 'GraphQL', 'Figma', 'Strapi'],
    soft: ['Problem-solving', 'Organizational skills', 'Critical thinking', 'Casual Sketching']
  };

  const projects = [
    {
      title: 'Grand Tours',
      description: 'Developed a complete full stack tours and travel website like make my trip.',
      tech: ['React', 'Python', 'Frappe'],
      type: 'Full Stack Web Application'
    },
    {
      title: 'BIT Pass - College Entry Exit System',
      description: 'Build a dynamic QR code generated online entry exit system for college. Successfully implemented and being used for entry exit purpose of students and visitors.',
      tech: ['Flutter', 'NodeJs', 'Express', 'MongoDb', 'AWS'],
      type: 'Mobile Application'
    },
    {
      title: 'Campus Careline',
      description: 'A complete college complaint management solution using MERN stack with separate dashboard for student, staff and admin.',
      tech: ['React', 'TypeScript', 'NextJs', 'MongoDB', 'Express', 'TailwindCSS'],
      type: 'Web Application'
    },
    {
      title: 'Git Commander',
      description: 'Github Tool for Productivity - NPM package that allows effortless management of Github projects with cool features.',
      tech: ['JavaScript', 'NodeJs', 'NPM'],
      type: 'NPM Package'
    },
    {
      title: 'Covid Resources',
      description: 'All in one Resource App providing resources to the needful and raising awareness about pandemic challenges.',
      tech: ['Figma', 'Care Today', 'Google COVID-19 Statistics', 'Bravo Studio'],
      type: 'Mobile Application'
    },
    {
      title: 'Hackers Hub',
      description: 'Community for Learners - A place where everyone can learn hacking from scratch and master their skills.',
      tech: ['React', 'Javascript', 'Markdown'],
      type: 'Web Application'
    },
    {
      title: 'Bitopedia',
      description: 'Mobile application for college including all necessary things - notes, study material, contacts, best places, restaurants.',
      tech: ['Figma', 'Airtable', 'Bravo'],
      type: 'Mobile Application'
    }
  ];

  const achievements = [
    {
      title: 'Second Runner\'s Up in COVID-19 Gameathon',
      date: 'May, 2021',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Won 600 USD - Build a Modern Data App Hackathon',
      date: 'September, 2021',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'First Rank - Harissons Growth Hacking Challenge',
      date: 'January, 2023',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const experience = [
    {
      company: 'qZense Labs',
      role: 'Software Developer (Internship + Full Time)',
      period: 'May 2023 - Current',
      description: 'Collaborated with frontend, backend and data science team to deliver various full stack solutions. Majorly worked on two cross platform applications (Fish Data Collection & MVP App). Conducted extensive testing to identify and fix bugs.',
      tech: ['Flutter', 'Nodejs', 'React', 'AWS']
    },
    {
      company: 'Grand Tours',
      role: 'Software Developer (Internship)',
      period: 'Dec 2022 - Apr 2023',
      description: 'Development and Deployment of completed full stack tours and travel website. Collaborated with team to ensure website meets standards.',
      tech: ['React', 'Python', 'Frappe']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Sourav Kumar
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-600 bg-clip-text text-transparent">
              Sourav Kumar
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Computer Science Engineering Student at BIT Mesra with expertise in modern web and mobile development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:sourav12729@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
            <motion.a
              href="https://sourav8963.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Portfolio
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Sourav8963"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/Abhi6722"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-purple-400">Education</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/70 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Technology - Computer Science and Engineering</h4>
                  <p className="text-purple-400">Birla Institute of Technology Mesra</p>
                  <p className="text-gray-400">Sep 2023 - July 2027</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Courses: Operating Systems, Data Structures, Analysis Of Algorithms, Database Management System, Machine Learning, Computer Networks
                  </p>
                </div>
                <div className="bg-gray-900/70 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                  <h4 className="text-xl font-semibold text-white">Higher Secondary Education</h4>
                  <p className="text-purple-400">Pitts Modern School</p>
                  <p className="text-gray-400">10th: 2021 - 12th: 2023</p>
                  <p className="text-sm text-gray-300 mt-2">
                    10th: 86% | 12th: 80% | Subjects: Physics, Chemistry, Maths, English, Computer Science
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-purple-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>sourav12729@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+91 9534010578</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Ranchi, Jharkhand</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Publications</h3>
                <div className="bg-gray-900/70 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-2">Ethical Hacking on Mobile from Scratch</h4>
                  <p className="text-gray-300 text-sm mb-2">Complete guide to start ethical hacking on mobile devices</p>
                  <p className="text-purple-400 text-sm">Published: May '20</p>
                  <p className="text-gray-400 text-sm">Available on: Google Play Books, Amazon Book Store</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Experience
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gray-900/70 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Achievements
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-purple-600/20 to-white/10 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Projects
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/70 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="mb-4">
                  <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full border border-purple-500/30">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-white rounded text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Skills
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800/50 p-6 rounded-lg border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-600/20 rounded-full">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">sourav12729@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+91 9534010578</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Ranchi, Jharkhand</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com/Sourav8963"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-800/50 rounded-full border border-green-500/20 hover:border-green-500/40 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-400 hover:text-green-400" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/Abhi6722"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-800/50 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400" />
                </motion.a>
                <motion.a
                  href="https://sourav8963.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-gray-800/50 rounded-full border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                >
                  <ExternalLink className="w-6 h-6 text-gray-400 hover:text-purple-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Sourav Kumar. Built with React, Three.js, and Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;