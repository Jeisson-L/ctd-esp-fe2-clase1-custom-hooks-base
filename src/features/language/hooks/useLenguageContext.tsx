import { LenguageContext } from "features/language/contexts/languageContext";
import { useContext } from "react";

export const useLanguageContext = () => {
    const { language, setLanguage, t } = useContext(LenguageContext)
    return { language, setLanguage, t };
}