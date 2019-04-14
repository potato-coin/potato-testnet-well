module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'potato-testnet-wall',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_sandbox: {
        NODE_ENV: 'sandbox',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
