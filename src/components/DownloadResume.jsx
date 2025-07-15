import React from "react";

const DownloadResume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1BVzDgwLwle--4Q59L6_frzMFX_c9JmVT/view?usp=sharing"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm h-fit"
    >
      Download Resume
    </a>
  );
};

export default DownloadResume;
