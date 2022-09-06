import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboarhComponent } from './components/dashboarh/dashboarh.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'registrar-usuario',component: RegistrarUsuarioComponent},
  {path:'verificar-correo',component: VerificarCorreoComponent},
  {path:'recuperar-password',component: RecuperarPasswordComponent},
  {path:'dashboarh',component: DashboarhComponent},
  { path: 'products', component: ProductsComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
