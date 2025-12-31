import { useMemo } from 'react';
import { blogPosts } from '../data/blogPosts';
import { blogPostsTranslations } from '../data/blogPostsTranslations';
import { useLanguage } from '../contexts/LanguageContext';

export const useTranslatedBlogPosts = () => {
  const { language } = useLanguage();

  const translatedPosts = useMemo(() => {
    // Always return English posts since we only have EN now
    return blogPosts;
  }, []);

  const translatedCategories = useMemo(() => {
    const translations = blogPostsTranslations[language as 'EN'];
    return translations.categories;
  }, [language]);

  return { translatedPosts, translatedCategories };
};

