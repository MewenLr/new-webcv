import en from '../../data/trans/en'
import fr from '../../data/trans/fr'

export default {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  },
}
