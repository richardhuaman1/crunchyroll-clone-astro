import type { EnvironmentMode } from '@/utilities/types';

export class EnvService {
  static mode() {
    return process.env.NODE_ENV as EnvironmentMode;
  }

  static getClient() {
    return import.meta.env.VITE_APP_URL as string;
  }
}
