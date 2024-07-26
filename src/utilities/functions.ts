import { EnvService } from '@/services/env.service';

export function isDev() {
  return EnvService.mode() === 'development';
}

export function isProd() {
  return EnvService.mode() === 'production';
}
