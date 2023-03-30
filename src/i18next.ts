import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	eng: {
		translation: {
			goArticle: "Go to article",
			"News from": "News from",
			loading: "Loading...",
			"No news avaible": "No news avaible",
			date: "Date",
			news: "News",
			more: "More.."
		},
	},
	pl: {
		translation: {
			goArticle: "Przejdz do artykułu",
			"News from": "Wiadomości z",
			loading: "Ładowanie...",
			"No news avaible": "Brak dostępnych wiadomości",
			date: "Data",
			news: "Wiadomości",
			more: "Więcej.."
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: localStorage.getItem('lang') || 'eng',

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
