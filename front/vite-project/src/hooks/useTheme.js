// import { useState, useEffect } from 'react';

// const useTheme = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkTheme(true);
//       document.body.classList.add('dark-theme');
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkTheme((prevTheme) => {
//       const newTheme = !prevTheme;
//       if (newTheme) {
//         document.body.classList.add('dark-theme');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.body.classList.remove('dark-theme');
//         localStorage.setItem('theme', 'light');
//       }
//       return newTheme;
//     });
//   };

//   return { isDarkTheme, toggleTheme };
// };

// export default useTheme;
