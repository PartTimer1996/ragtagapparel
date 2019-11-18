import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Firebase Libraries required for the project
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// Material imports required for layout etc.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
// Local Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './_navigation/navbar/navbar.component';
import { FooterComponent } from './_navigation/footer/footer.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SwiperComponent } from './swiper/swiper.component';
import { StoreComponent } from './store/store.component';
import { SearchComponent } from './search/search.component';
import { NewComponent } from './new/new.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ArtComponent } from './art/art.component';
import { ClothingComponent } from './clothing/clothing.component';
import { OtherComponent } from './other/other.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReturnsComponent } from './returns/returns.component';
import { ShippingComponent } from './shipping/shipping.component';
import { QuestionsComponent } from './questions/questions.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

// Firebase config data
const config = {
  apiKey: 'AIzaSyB1tO6FVDuJDbhz9VC8P9ByzMF-s4OGkkE',
  authDomain: 'ragtagapparel-634ac.firebaseapp.com',
  databaseURL: 'https://ragtagapparel-634ac.firebaseio.com',
  projectId: 'ragtagapparel-634ac',
  storageBucket: 'ragtagapparel-634ac.appspot.com',
  messagingSenderId: '205367402304',
  appId: '1:205367402304:web:b3db7df3946f6676c0a4a5',
  measurementId: 'G-HKJX8C9X16'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserDashboardComponent,
    NavbarComponent,
    FooterComponent,
    SwiperComponent,
    StoreComponent,
    SearchComponent,
    NewComponent,
    ArtComponent,
    ClothingComponent,
    OtherComponent,
    ItemDetailsComponent,
    AboutComponent,
    ContactUsComponent,
    ReturnsComponent,
    ShippingComponent,
    QuestionsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
     // Initiliase Firebase with the below and the required libraries from Firebase
     AngularFireModule.initializeApp(config),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule,
      BrowserAnimationsModule, // storage
      FormsModule,
      ReactiveFormsModule,
      SwiperModule,
      FontAwesomeModule
  ],
  providers: [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
