import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grading } from './grading/grading';
import { Contacts } from './contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Grading, Contacts],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular.pierreviprey.fr';

  backend: { [key: string]: { path: string, grade: number } } = {
    'java': { path: '/java.svg', grade: 8 },
    'springBoot': { path: '/springboot.svg', grade: 6 },
    'nodejs': { path: '/nodejs.svg', grade: 8 },
  };
  frontend: { [key: string]: { path: string, grade: number } } = {
    'html': { path: '/html5.svg', grade: 8 },
    'sass': { path: '/sass.svg', grade: 7 },
    'typescript': { path: '/typescript.svg', grade: 7 },
    'angular': { path: '/angular.svg', grade: 7 },
    'ngrx': { path: '/ngrx.svg', grade: 4 },
    'react': { path: '/react.svg', grade: 2 },
  };
  database: { [key: string]: { path: string, grade: number } } = {
    'SQL': { path: '/sql.svg', grade: 8 },
  };
  softSkills: { [key: string]: { path: string, grade: number } } = {
    'Teamwork': { path: '/teamwork.svg', grade: 9 },
    'Autonomy': { path: '/autonomy.svg', grade: 10 },
    'Communication': { path: '/communication.svg', grade: 8 },
    'Adaptability': { path: '/adaptability.svg', grade: 8 },
  };
  practice: { [key: string]: { path: string, grade: number } } = {
    'TDD': { path: '/tdd.svg', grade: 6 },
    'Agile': { path: '/agile.svg', grade: 8 },
    'Unit Testing': { path: '/unitTesting.svg', grade: 9 },
  };
  operatingSystem: { [key: string]: { path: string, grade: number } } = {
    'linux': { path: '/linux.svg', grade: 8 },
    'Windows': { path: '/windows.svg', grade: 8 },
  };
  language: { [key: string]: { path: string, grade: number } } = {
    'fr': { path: '/Flag_of_France.svg', grade: 10 },
    'en': { path: '/Flag_of_the_United_Kingdom.svg', grade: 9 },
    'de': { path: '/Flag_of_Germany.svg', grade: 2 },
  };
  devOps: { [key: string]: { path: string, grade: number } } = {
    'git': { path: '/git.svg', grade: 8 },
    'docker': { path: '/docker.svg', grade: 6 },
    'jenkins': { path: '/jenkins.svg', grade: 6 },
    'sonarqube': { path: '/sonarqube.svg', grade: 6 },
  };
  


}
