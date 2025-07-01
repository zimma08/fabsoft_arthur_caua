import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CarroComponent } from './carro/carro.component';
import { ConcessionariaComponent } from './concessionaria/concessionaria.component';
import { FormCarroComponent } from './form-carro/form-carro.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'carros', component: CarroComponent },               
  { path: 'carros/novo', component: FormCarroComponent },
  { path: 'carros/alterar/:id', component: FormCarroComponent },
  { path: 'concessionarias', component: ConcessionariaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}