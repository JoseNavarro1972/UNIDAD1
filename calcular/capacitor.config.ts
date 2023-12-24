import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.calcular',
  appName: 'calcular',
  webDir: 'www\browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
