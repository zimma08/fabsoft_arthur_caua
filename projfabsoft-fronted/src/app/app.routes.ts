import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FormFuncionarioComponent } from './form-funcionario/form-funcionario.component';

export const routes: Routes = [
    {path: 'clientes', component: ClienteComponent},
    {path: 'clientes/novo', component: FormClienteComponent},
    {path: 'clientes/alterar/:id', component: FormClienteComponent},
    {path: 'funcionarios', component: FuncionarioComponent},
    {path: 'funcionarios/novo', component: FormFuncionarioComponent},
    {path: 'funcionarios/alterar/:id', component: FormFuncionarioComponent}
];