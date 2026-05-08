import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; // Certifique-se que o import está aqui!
import { ContatoComponent } from './contato/contato';
import { SuporteComponent } from './suporte/suporte';
import { CadastroComponent } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota inicial (abre o foguete)
  { path: 'contato', component: ContatoComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: 'cadastro', component: CadastroComponent },
  // Remova a linha do redirectTo, pois você já definiu que o '' abre a Home
];