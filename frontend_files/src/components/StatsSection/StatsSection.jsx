import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ label, type }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (type === "once") {
      let current = 0;
      const end = 2500;
      const step = 100;
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setCount(current);
      }, 100);
      return () => clearInterval(interval);
    }

    if (type === "loop") {
      const steps = [10000, 15000, 20000, 25000, 30000, 35000];
      let index = 0;
      setCount(steps[index]);
      const interval = setInterval(() => {
        index = (index + 1) % steps.length;
        setCount(steps[index]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [type]);

  return (
    <div className="text-center transition-all">
      <h3 className="text-3xl font-extrabold text-sky-500 dark:text-yellow-400">
        {count.toLocaleString()}+
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm max-w-sm mx-auto">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <AnimatedCounter
          type="once"
          label="Aenean condimentum cursus aliquet. Aliquam eget pulvinar lorem."
        />
        <AnimatedCounter
          type="loop"
          label="Aenean condimentum cursus aliquet. Aliquam eget pulvinar lorem."
        />
      </div>
    </section>
  );
};

export default StatsSection;
