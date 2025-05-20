import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwind(),
    autoprefixer(),
  ],
};


// // export default {
// //   plugins: {
// //      "@tailwindcss/postcss": {},
// //     // tailwindcss: {config: './tailwindcss-config.js'},
// //     // autoprefixer: {},
// //   },
// // }
// // module.exports = {
// //   plugins: {
// //     tailwindcss: {},
// //     autoprefixer: {},
// //   },
// // };
// export default {
//   plugins: {
//     "@tailwindcss/postcss": {},
//     autoprefixer: {},
//   },
// };
// module.exports = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//     autoprefixer: {},
//   },
// };
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };