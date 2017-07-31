const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://myapidomain.com'
  : 'https://localhost:8080';

  export default PAYMENT_SERVER_URL;
