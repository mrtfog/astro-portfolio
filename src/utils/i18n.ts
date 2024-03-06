type Translations = {
    greeting: string;
};

export async function loadTranslations(locale: string): Promise<Translations> {
    const translations = await import(`../content/${locale}/${locale}.json`);
    return translations.default;
}
