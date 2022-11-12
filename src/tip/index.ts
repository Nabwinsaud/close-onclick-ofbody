interface ILanguage {
  python: string;
  javascript: string;
  dart?: string;
}

const languageList: ILanguage = {
  python: "Machine learning Ai",
  javascript: "Web development | Mobile dev",
  dart: "Beautiful App dev",
};

function suggestLanguageUses(
  language: ILanguage,
  languageName: keyof ILanguage,
  languageUses: string
) {
  return (language[languageName] = languageUses);
}

suggestLanguageUses(
  languageList,
  "python",
  "Machine Learning ,Backend Development"
);

export {};
