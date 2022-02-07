module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'af5b6be0363dd7a2051f1ee315cfe3c5'),
  },
});
