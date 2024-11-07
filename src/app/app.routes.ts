import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HoneyMoonTripsComponent } from './components/honey-moon-trips/honey-moon-trips.component';
import { OffersComponent } from './components/offers/offers.component';
import { TripInfoComponent } from './components/trip-info/trip-info.component';
import { PaymentComponent } from './components/payment/payment.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'travels',component:HoneyMoonTripsComponent},
    {path:'offers',component:OffersComponent},
    {path:'tripInfo/:id',component:TripInfoComponent},
    {path:'payment',component:PaymentComponent}
];
