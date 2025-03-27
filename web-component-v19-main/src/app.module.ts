import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { LikeButtonComponent } from './like-button/like-button.component';
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
// import { ServicesComponent } from './services/services.component';
// import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports: [BrowserModule, LikeButtonComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const aboutElement = createCustomElement(LikeButtonComponent, { injector });
    customElements.define('lite-button', aboutElement);
    // const homeElement = createCustomElement(HomeComponent, { injector });
    // customElements.define('home-page', homeElement);
    // const servicesElement = createCustomElement(ServicesComponent, { injector });
    // customElements.define('services-page', servicesElement);
    // const contactElement = createCustomElement(ContactComponent, { injector });
    // customElements.define('contact-page', contactElement);
  }
  ngDoBootstrap() {}
}