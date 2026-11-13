import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();

  readonly skills = [
    'Angular 15/16/17/18/19/20',
    'TypeScript',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Bootstrap',
    'Git',
    'GitHub',
    'Figma',
    'Jest',
    'Testes unitários',
    'Integração com APIs',
    'Acessibilidade Web',
    'Engenharia de IA',
    'Scrum'
  ];
}
