import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { MatDialogModule } from '@angular/material/dialog';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
     provideAnimationsAsync(),
     provideHttpClient(withInterceptorsFromDi(),withFetch()),
     MatDialogModule
    ]
};
