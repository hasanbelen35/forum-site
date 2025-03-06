"use client";
import React from "react";

const Amacimiz = () => {
  const hedefler = [
    "🚀 Güncel teknolojileri takip etmek",
    "🤝 Bilgi paylaşımı ve işbirliği sağlamak",
    "🌱 Topluluk içinde destekleyici bir ortam oluşturmak"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-darkerBG p-10 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide">Amacımız</h1>
      <p className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
        Platformumuz, geliştiricilerin bilgi paylaşmasını, deneyim aktarmasını ve birbirlerine destek olmasını sağlamak için kurulmuştur.
      </p>
      <ul className="mt-8 text-gray-800 dark:text-gray-200 list-none space-y-4 text-lg">
        {hedefler.map((hedef, index) => (
          <li key={index} className="bg-white dark:bg-darkBg px-6 py-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
            {hedef}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amacimiz;