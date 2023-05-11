import enTranslations from "data/i18n.en";
import esTranslations from "data/i18n.es";
import ptTranslations from "data/i18n.pt";
import { Languages } from "features/language";
import React, { createContext, useState, useContext  } from "react";

type LanguageComponentProps = {
    language: Languages
    setLanguage: (language: Languages) => void
    t: (key: string) => string;
}

export const LenguageContext = createContext<LanguageComponentProps>({} as LanguageComponentProps);


export const LenguageProvider = ({ children  } : {children: React.ReactNode}) => {
    const [language, setLanguage] = useState<Languages>('ENGLISH' as Languages);

    const translate = (key: string) => {
        if (language === 'SPANISH') {
                return esTranslations[key];
        } else if (language === 'ENGLISH') {
            return enTranslations[key];
        } else if (language === 'PORTUGUESE') {
                return ptTranslations[key];
        }
        return key;
    }

    return (
    <LenguageContext.Provider value={{language:language, setLanguage: setLanguage, t:translate}}>
        {children}
    </LenguageContext.Provider>
    )
}