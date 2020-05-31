/*!
 * =========================================================
 * Proxima Angular Dashboard - v1.0.0
 * =========================================================
 *
 * Theme Page: https://www.5studios.net/premium/dashboard/proxima
 * Copyright 2019 5studios - https://5studios.net
 * Coded by 5studios.net Team
 *
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { hmrBootstrap } from './hmr';

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
    hmrBootstrap(module, bootstrap);
} else {
    bootstrap().catch(err => console.error(err));
}
