import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from '../app//contact-list/contact-list.component';
import { DeliveryBroadcastComponent } from '../app/delivery-broadcast/delivery-broadcast.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'broadcast', component: DeliveryBroadcastComponent},
  {path: 'contacts', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
