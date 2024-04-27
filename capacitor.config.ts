import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AlpacaGenerator',
  "android": {
    "allowMixedContent": true
  },
  webDir: 'dist'
};

export default config;
