import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 text-sm font-sans text-gray-900 leading-relaxed">
      {/* Header with Name and Download Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Sourav Kumar</h1>
        <a
          href="https://drive.google.com/file/d/1BVzDgwLwle--4Q59L6_frzMFX_c9JmVT/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm"
        >
          Download Resume
        </a>
      </div>

      {/* Contact */}
      <div className="space-x-4 text-blue-600 mb-2">
        <a href="mailto:sourav12729@gmail.com">sourav12729@gmail.com</a>
        <a href="tel:+919534010578">+91 9534010578</a>
        <a href="https://sourav8963.in" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="https://github.com/Sourav8963" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/Abhi6722" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="text-gray-600 mb-4">
        Ranchi, Jharkhand / Bokaro / Remote
      </div>

      {/* [The rest of your sections like Education, Skills, etc. remain unchanged...] */}
    </div>
  );
};

export default Resume;
