require('dotenv').config()

export default {
	mode: 'universal',

	server: {
			port: process.env.PORT,
			host: process.env.HOST,
			serverUrl: process.env.API_URL
		},

		env: {
		serverUrl: process.env.API_URL
	},

	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
  ],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
  ],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/tailwindcss'
	],

	tailwindcss: {
		configPath: '~/config/tailwind.config.js',
		cssPath: '~/assets/css/tailwind.css',
		exposeConfig: false
	},
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/cloudinary',
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    '@nuxtjs/date-fns',
    ['@nuxtjs/pwa', {icon: false }],
    ['nuxt-tailvue', {toast: true, modal: true}],

  ],
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
		baseUrl: process.env.API_URL,
		credentials: true,
    header: {
      common: {
        'X-localization': 'ru'
      }
    },
	},

	auth: {
		strategies: {
		cookie: {
			cookie: {
			name: 'XSRF-TOKEN',
			}
		},
			'laravelSanctum': {
			provider: 'laravel/sanctum',
			url: process.env.API_URL
			},
		},
		redirect: {
			login: '/login',
			logout: '/login',
			callback: '/login',
			home: '/'
		}
	},
  /* i18n */
  i18n: {
    parsePages: false,
    locales: [
      {
        code: 'ru',
        file: 'ru-RU.js',
        name: 'Русский'
      },
      {
        code: 'en',
        file: 'en-EN.js',
        name: 'English'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
  },


  router: {
		middleware: ['auth', 'language']
	},

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
    useComponent: true
  },

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
    extend (config, ctx) {},
	},

}
