 export default async function({ app ,  $axios })  {
   app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
     $axios.defaults.headers.common['X-localization'] = newLocale
   }
}
