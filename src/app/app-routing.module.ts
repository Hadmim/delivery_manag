import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersTableComponent } from './orders-table/orders-table.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
