// // import i18next from "i18next";
// // import { initReactI18next } from "react-i18next";
// // import LanguageDetector from "i18next-browser-languagedetector";

// // // Định nghĩa các bản dịch
// // const resources = {
// //   en: {
// //     translation: {
// //       welcome: "Welcome to my website!",
// //       description: "This is a multilingual Next.js application.",
// //     },
// //   },
// //   vi: {
// //     translation: {
// //       welcome: "Chào mừng bạn đến với trang web của tôi!",
// //       description: "Đây là một ứng dụng Next.js đa ngôn ngữ.",
// //     },
// //   },
// // };
// // i18next
// //   .use(LanguageDetector) // Sử dụng detector để phát hiện ngôn ngữ trình duyệt
// //   .use(initReactI18next) // Kết nối với React
// //   .init({
// //     resources, // Tải bản dịch
// //     fallbackLng: "vi", // Ngôn ngữ dự phòng nếu không phát hiện được
// //     supportedLngs: ["en", "vi"], // Danh sách ngôn ngữ hỗ trợ
// //     interpolation: {
// //       escapeValue: false, // React đã tự xử lý XSS
// //     },
// //     detection: {
// //       order: ["localStorage"], // Thứ tự ưu tiên phát hiện ngôn ngữ
// //       caches: ["localStorage"], // Lưu ngôn ngữ vào localStorage và cookie
// //     },
// //   });

// // export default i18next;

// import { createInstance } from 'i18next';
// import { initReactI18next } from 'react-i18next/initReactI18next';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import i18nConfig from '@/i18nConfig';

// export default async function initTranslations(
//   locale,
//   namespaces,
//   i18nInstance,
//   resources
// ) {
//   i18nInstance = i18nInstance || createInstance();

//   i18nInstance.use(initReactI18next);

//   if (!resources) {
//     i18nInstance.use(
//       resourcesToBackend(
//         (language, namespace) =>
//           import(`@/locales/${language}/${namespace}.json`)
//       )
//     );
//   }

//   await i18nInstance.init({
//     lng: locale,
//     resources,
//     fallbackLng: i18nConfig.defaultLocale,
//     supportedLngs: i18nConfig.locales,
//     defaultNS: namespaces[0],
//     fallbackNS: namespaces[0],
//     ns: namespaces,
//     preload: resources ? [] : i18nConfig.locales
//   });

//   return {
//     i18n: i18nInstance,
//     resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
//     t: i18nInstance.t
//   };
// }