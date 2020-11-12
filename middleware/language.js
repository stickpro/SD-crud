export default async function({ app: { i18n, $axios } }) {
  $axios.defaults.headers.common['Accept-Language'] = i18n.locale;
}
