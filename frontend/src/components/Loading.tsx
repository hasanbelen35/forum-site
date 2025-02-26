"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full blur bg-gray-100 dark:bg-darkBg">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
