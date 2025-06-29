import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';
import { CarroComponent } from './carro/carro.component';
import { FormCarroComponent } from './form-carro/form-carro.component';
import { ConcessionariaComponent } from './concessionaria/concessionaria.component';
import { FormConcessionariaComponent } from './form-concessionaria/form-concessionaria.component';

export const routes: Routes = [
    {path: 'clientes', component: ClienteComponent},
    {path: 'clientes/novo', component: FormClienteComponent},
    {path: 'clientes/alterar/:id', component: FormClienteComponent},
    {path: 'funcionarios', component: FuncionarioComponent},
    {path: 'funcionarios/novo', component: FormFuncionarioComponent},
    {path: 'funcionarios/alterar/:id', component: FormFuncionarioComponent},
    {path: 'carros', component: CarroComponent},
    {path: 'carros/novo', component: FormCarroComponent},
    {path: 'carros/alterar/:id', component: FormCarroComponent},
    {path: 'concessionarias', component: ConcessionariaComponent},
    {path: 'concessionarias/novo', component: FormConcessionariaComponent},
    {path: 'concessionarias/alterar/:id', component: FormConcessionariaComponent}
];