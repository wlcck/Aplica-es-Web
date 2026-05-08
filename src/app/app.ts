import { Component, signal } from '@angular/core'; // Verifique se o 'signal' está aqui
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Importante para os links funcionarem
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Essa linha abaixo é o que faz o @if do seu HTML funcionar!
  title = signal('projeto_aula19'); 
}