import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GigaaaAccountMenuComponent } from './gigaaa-account-menu/gigaaa-account-menu.component';
import { GigaaaTopbarComponent } from './gigaaa-topbar/gigaaa-topbar.component';

const routes: Routes = [{ path: 'dashboard', component: GigaaaTopbarComponent 
},
{ path: 'call',component: GigaaaTopbarComponent },
{ path: 'accountmenu',component: GigaaaAccountMenuComponent },
{ path: 'agents', component: GigaaaTopbarComponent 
},
{ path: '', redirectTo: "dashboard", pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
