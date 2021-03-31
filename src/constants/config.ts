// ----------------------------------------------------------
const isProduction = false // 	<== SET YOUR ENVIRONMENT HERE
// ----------------------------------------------------------

const ENVIRONMENT = isProduction ? 'production' : 'staging'
console.log(`Runned in ${ENVIRONMENT} env`)

export default Object.freeze({
  ENVIRONMENT,
  APP_NAME: isProduction ? 'Renko' : 'Renko (BETA)',
  API_URL_DEV: isProduction ? 'http://3.10.197.162:4000/v1' : 'http://3.11.189.221:4000/v1',
  API_URL_PROD: isProduction ? 'http://3.10.197.162:4000/v1' : 'http://3.11.189.221:4000/v1', // @TODO Change to real PROD base URL.
  IMAGE_BASE_URL: isProduction
    ? 'https://lbd-production-main-bucket.s3.eu-west-2.amazonaws.com'
    : 'https://lbd-staging-main-bucket.s3.eu-west-2.amazonaws.com',
  API_AUTH_HEADER: 'access_token',
  API_REQUEST_TIMEOUT: 25000,
  SENTRY_DSN: 'https://bef124739c404a06b877ea246fb9299d@sentry.artjoker.ua/26',
  CONTACT_EMAIL: 'info@littleblackdoor.io',
  INSTAGRAM_CLIENT_ID: '1386623564825424',
  INSTAGRAM_REDIRECT_URL: 'https://www.littleblackdoor.io/login',
  GOOGLE_MAPS_API_KEY: 'AIzaSyDm0dYcbPtmLOa-QJaTWKWibe9M4NoDpDI',
  GOOGLE_WEB_CLIENT_ID: '291240066393-d10u8dgve5gquigfs8a4ti459scntdog.apps.googleusercontent.com',
  /** If you want enter in app as influencer you must enter "LBD_ASSIST_PASSWORD_KEY + OTP code" into password field in Login.
   * 	@example { "email": "jenifer_lopez@gmail.com", "password": "assist9382" }
   */
  LBD_ASSIST_PASSWORD_KEY: 'assist',
})
