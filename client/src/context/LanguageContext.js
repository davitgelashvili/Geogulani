import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState("ka");

    // ✅ ერთხელ, აპის ჩატვირთვისას
    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
