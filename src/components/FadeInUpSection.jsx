<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const FadeInUpSection = ({ children, className = '', threshold = 0.5 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: threshold }
    );

    const section = document.getElementById(className);
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [className, threshold]);

  return (
    <div
      id={className}
      className={`${inView ? 'fade-in-up' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInUpSection;
=======
import React, { useEffect, useState } from 'react';

const FadeInUpSection = ({ children, className = '', threshold = 0.5 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: threshold }
    );

    const section = document.getElementById(className);
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [className, threshold]);

  return (
    <div
      id={className}
      className={`${inView ? 'fade-in-up' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInUpSection;
>>>>>>> 06c2902c8872ef915a2ecf686b77835a5dfb7f4e
