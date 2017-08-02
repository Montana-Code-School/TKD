const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.MY_PUBLISHABLE_LIVE
  : 'pk_test_7T3jvVyaz5XZ0r01Bpn85Zro'

export default STRIPE_PUBLISHABLE;
