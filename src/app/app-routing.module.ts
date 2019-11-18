import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StandardLoginGuard } from './_guards/standard-login.guard';
import { StoreComponent } from './store/store.component';
import { NewComponent } from './new/new.component';
import { SearchComponent } from './search/search.component';
import { ArtComponent } from './art/art.component';
import { ClothingComponent } from './clothing/clothing.component';
import { OtherComponent } from './other/other.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReturnsComponent } from './returns/returns.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home' } },
  {path: 'Home', component: HomeComponent, data: { title: 'Home' } },
  {path: 'Login', component: LoginComponent, data: { title: 'Login' }, canActivate: [StandardLoginGuard]
},
  {path: 'Register', component: RegisterComponent, data: { title: 'Register' }, canActivate: [StandardLoginGuard]
},
  {path: 'Dashboard', component: UserDashboardComponent, data: { title: 'Dashboard' } , canActivate: [StandardLoginGuard]
},
{path: 'Store', component: StoreComponent, data: { title: 'Store' }
},
{path: 'New', component: NewComponent, data: { title: 'New In' }
},
{path: 'Art', component: ArtComponent, data: { title: 'Art' }
},
{path: 'Clothing', component: ClothingComponent, data: { title: 'Clothing' }
},
{path: 'Other', component: OtherComponent, data: { title: 'Other' }
},
{path: 'Item/:id', component: ItemDetailsComponent, data: { title: 'Details' } } ,

{path: 'FAQs', component: QuestionsComponent, data: { title: 'FAQs' } } ,

{path: 'About', component: AboutComponent, data: { title: 'About Us' } } ,

{path: 'Contact', component: ContactUsComponent, data: { title: 'Contact Us' } } ,

{path: 'Shipping', component: ShippingComponent, data: { title: 'Shipping' } } ,

{path: 'Returns', component: ReturnsComponent, data: { title: 'Returns' }
},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
