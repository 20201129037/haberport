import { KayitekleComponent } from './../components/kayitekle/kayitekle.component';

import { HaberekleComponent } from './../components/haberekle/haberekle.component';
import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';
import { AnasayfaComponent } from './../components/anasayfa/anasayfa.component';
import { IletisimComponent } from './../components/iletisim/iletisim.component';
import { AdminpanelComponent } from './../components/adminpanel/adminpanel.component';
import { MagazinComponent } from './../components/magazin/magazin.component';
import { SporComponent } from './../components/spor/spor.component';
import { GundemComponent } from './../components/gundem/gundem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'anasayfa' , component: AnasayfaComponent },
  { path: 'iletisim' , component: IletisimComponent },
  { path: 'adminpanel' , component: AdminpanelComponent },
  { path: 'spor' , component: SporComponent },
  { path: 'magazin' , component: MagazinComponent },
  { path: 'gundem' , component: GundemComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent },

  { path: 'haberekle' ,
  component: HaberekleComponent,
  canActivate: [AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLogin
  }
},
  { path: 'kayitekle' , component: KayitekleComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
