import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { provideHttpClient } from '@angular/common/http';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      FormsModule,

      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule
    ),
    provideAnimations(),
  ],
};
