import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-48 bg-footerGreen text-green-800 font-serif text-lg ">
      {/* Sosyal Medya Bağlantıları */}
      <div className="flex justify-center items-center h-20 border-b-2 dark:border-darkBg dark:bg-darkerBG bg-greenBg text-white gap-8 text-6xl">
        <a href="https://github.com/hasanbelen35" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hasan-belen-668457318/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {/* Site Kuralları & Footer Bilgi */}
      <div className="flex flex-col justify-center dark:text-gray-300 dark:bg-darkerBG bg-footerGreen items-center h-full gap-2">
        <nav className="pt-4 space-x-2">
          <a className="hover:underline" href="/site-rules">Site Kuralları</a>
          <span>|</span>
          <a className="hover:underline" href="/privacy-policy">Gizlilik Politikası</a>
        </nav>
        <p className="text-xl">Developed by Hasan Belen</p>
      </div>
    </footer>
  );
};

export default Footer;
