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


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './app.config';
import { LikeButtonComponent } from './like-button/like-button.component';

// Bootstrap full Angular app
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('Error bootstrapping AppModule:', err));

// Bootstrap Angular Elements separately (Web Components)
createApplication(appConfig)
  .then((app) => {
    const LikeButton = createCustomElement(LikeButtonComponent, { injector: app.injector });
    customElements.define('like-button', LikeButton);
  })
  .catch(err => console.error('Error creating Angular Element:', err));
