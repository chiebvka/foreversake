// declare global {
//     interface Window {
//       gtag: (event: string, id: string, config: object) => void;
//     }
//   }



export const pageview = (GA_MEASUREMENT_ID : string, url : string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};