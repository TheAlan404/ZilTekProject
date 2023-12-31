import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            by_dennis: "by dennis",
            
            content1: "ZilTek is a free school bell app.",
            feats_header: "Features",
            features: [
                "Nice User Interface",
                "Unlimited amount of melodies",
                "Specify per-day timetables",
                "Timetable generator",
                "See which melodies were played, were interrupted or failed to play",
                "Multilanguage",
                "Import and Export configurations",
                "Optional Remote Control",
            ].join("|"),
            screenshots: "Screenshots",
            use_ziltek: "Use ZilTek",
            download: "Download",
            open: "Open in Browser",
        }
    },

    tr: {
        translation: {
            by_dennis: "deniz tarafından",
            
            content1: "ZilTek bedava bir okul zil programıdır",
            feats_header: "Özellikler",
            features: [
                "Güzel kullanıcı arayüzü",
                "Limitsiz melodi sayısı",
                "Her güne bir tablo atama",
                "Zaman tablosu oluşturucu",
                "Çalan, durdurulan, çalınamayan melodileri görüntüleme",
                "İçe ve dışa aktarma",
                "Opsiyonel Uzaktan kontrol",
            ].join("|"),
            screenshots: "Ekran Görüntüleri",
            use_ziltek: "ZilTek'i Kullan",
            download: "İndir",
            open: "Tarayıcıda Aç",
        }
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
