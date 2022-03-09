export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loadingIndicator: {
    name: 'three-bounce',
    color: '#ffcd06',
    background: 'white',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'koinonia',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/koinoiologo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css',
      },
      {
        rel: 'preload',
        href: '../font/AnconaEx.woff',
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js',
      },
      {
        src: 'https://code.iconify.design/2/2.1.2/iconify.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css', '~/assets/css/bootstrap.css'],
  js: ['~/assets/js/bootstrap.min.js'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    '~/plugins/axios',
    '~/plugins/store_initializer',
    '~/plugins/filter',
    // '~/plugins/iconify.js',
    '~/plugins/vue-select.js',
    '~/plugins/bootstrap-icon.js',
    '~/plugins/vue-editor.js',
    '~/plugins/global-filter.js',
    '~/plugins/luxon.js',
    '~/plugins/vue-html2pdf',
    '~/plugins/vue-html-to-paper.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    'vue2-editor/nuxt',
  ],
  toast: {
    position: 'bottom-right',
    singleton: true,
    duration: 5000,
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  // loading: {
  //   color: '#ffcd06',
  //   height: '5px',
  // },

  env: {
    BASE_URL: process.env.BASE_URL,
    SCHOOL_ID: process.env.SCHOOL_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
