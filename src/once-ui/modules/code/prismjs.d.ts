declare module "prismjs" {
  interface Grammar {
    [key: string]: unknown;
  }

  const Prism: {
    highlightAll: () => void;
    highlight: (code: string, grammar: Grammar, language: string) => string;
    languages: {
      [language: string]: Grammar;
    };
  };
  export default Prism;
}
