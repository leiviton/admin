import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, ApplicationConfigurationService } from '@app/core';
import { SharedModule } from '@app/shared';
import { AboutModule } from './about/about.module';
import { ShellModule } from './shell/shell.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';

import {
    getBsDatepickerConfiguration,
    getBsModulesForRoot
} from './bootstrap/bootstrap.module';

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { UserIdleModule } from 'angular-user-idle';
import {
    DropzoneModule,
    DROPZONE_CONFIG,
    DropzoneConfigInterface
} from 'ngx-dropzone-wrapper';
import { NgxMaskModule } from 'ngx-mask';
import { QuillModule } from 'ngx-quill';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/**
 * Perfect Scrollbar Default Configuration
 **/
const defaultPerfectScrollbarConfiguration: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

/**
 * DropZone Default Configuration
 **/
const defaultDropZoneConfiguration: DropzoneConfigInterface = {
    url: `${environment.serverUrl}/upload-file`, // Change this to your upload POST address
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};

/**
 * Initializing Application
 * Here we load the configuration for the layout and some other stuffs that should be triggered once when the application is loading
 **/
const initializeApp = (_config: ApplicationConfigurationService) => {
    return () => _config.initialize();
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('./ngsw-worker.js', {
            enabled: environment.production
        }),
        TranslateModule.forRoot(),

        CoreModule,
        ShellModule,
        SharedModule,
        AboutModule,
        AuthModule,

        DropzoneModule,
        PerfectScrollbarModule,

        // Optionally you can set time for `idle`, `timeout` and `ping` in seconds.
        // Default values: `idle` is 600 (10 minutes), `timeout` is 300 (5 minutes) and `ping` is 120 (2 minutes).
        UserIdleModule.forRoot({ idle: 600, timeout: 300, ping: 120 }),
        QuillModule.forRoot(),
        NgxMaskModule.forRoot(),

        // Ngx Bootstrap
        ...getBsModulesForRoot(),

        AppRoutingModule // must be imported as the last module as it contains the fallback route
    ],
    declarations: [AppComponent],
    providers: [
        // App Initializer
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [ApplicationConfigurationService],
            multi: true
        },
        //hashcode
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },

        // PerfectScrollbar Configuration
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: defaultPerfectScrollbarConfiguration
        },

        // Ngx-Bootstrap Datepicker Default Configuration
        {
            provide: BsDatepickerConfig,
            useFactory: getBsDatepickerConfiguration
        },

        // DropZone Configuration
        {
            provide: DROPZONE_CONFIG,
            useValue: defaultDropZoneConfiguration
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
