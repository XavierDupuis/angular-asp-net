import {
    ApplicationConfig,
    isDevMode,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { environment as prod } from '@environments/environment.prod';
import { environment as dev } from '@environments/environment.dev';
import { API_BASE_URL } from '@api/api';

const env = isDevMode() ? dev : prod;
const baseUrlProvider = { provide: API_BASE_URL, useValue: env.API_BASE_URL };

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        baseUrlProvider,
    ],
};
