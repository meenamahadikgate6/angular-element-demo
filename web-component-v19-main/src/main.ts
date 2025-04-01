// import { createApplication } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { appConfig } from './app.config';
// import { LikeButtonComponent } from './like-button/like-button.component';

// createApplication(appConfig)
//     .then((app) => {
//         const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
//         customElements.define('like-button', LikeButton);
//     })
//     .catch((err) => console.error(err));


//     import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app.module';
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

/********************************************************/ 

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// // import { AppModule } from './app.module';
// import { createApplication } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { appConfig } from './app.config';
// import { LikeButtonComponent } from './like-button/like-button.component';

// // Bootstrap full Angular app
// platformBrowserDynamic()
//   .bootstrapModule(LikeButtonComponent)
//   .catch(err => console.error('Error bootstrapping LikeButtonComponent:', err));


// createApplication(appConfig)
//   .then((app) => {
//     const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
//     customElements.define('like-button', LikeButton);
//   })
//   .catch(err => console.error('Error creating Angular Element:', err));




import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LikeButtonComponent } from './like-button/like-button.component';
import { appConfig } from './app.config';

// Bootstrap the Angular app
createApplication({
  ...appConfig,
  providers: [importProvidersFrom(HttpClientModule)] // ✅ Provide HttpClientModule globally
})
  .then((app) => {
    // Convert LikeButtonComponent into a Web Component
    const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
    customElements.define('like-button', LikeButton);
  })
  .catch((err) => console.error('Error creating Angular Element:', err));
