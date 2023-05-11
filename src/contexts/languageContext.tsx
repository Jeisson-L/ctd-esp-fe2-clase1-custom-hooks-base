import { Languages } from "features/language";
import { createContext } from "react";

type LanguageComponentProps = {
    language: Languages
    setLanguage: (language: Languages) => void
    t: (key: string) => string;
}

export const LenguageContext = createContext<LanguageComponentProps | null>(null);