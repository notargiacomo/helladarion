import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicoesComponent } from './condicoes/condicoes.component';

const routes: Routes = [
  {path: 'condicoes', component: CondicoesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
