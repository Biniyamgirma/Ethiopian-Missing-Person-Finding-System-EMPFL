import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';
import { translate } from '@/utils/translations';

export function useTranslation() {
  const { language } = useContext(AppContext);
  console.log(language);

  return {
    t: (key) => {
      return translate(key, language);
    },
    language,
  };
}