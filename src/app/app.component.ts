import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Grading } from './grading/grading';
import { Contacts } from './contacts/contacts';
import { Skill } from './models/skill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Grading, Contacts],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular.pierreviprey.fr';

  backend: { [key: string]: Skill } = {
    'java': {type: 'icon', data: '/java.svg', grade: 8 },
    'springBoot': {type: 'icon', data: '/springboot.svg', grade: 6 },
    'nodejs': {type: 'icon', data: '/nodejs.svg', grade: 8 },
  };
  frontend: { [key: string]: Skill } = {
    'html': {type: 'icon', data: '/html5.svg', grade: 8 },
    'react': {type: 'icon', data: '/react.svg', grade: 2 },
    'sass': {type: 'icon', data: '/sass.svg', grade: 7 },
    'typescript': {type: 'icon', data: '/typescript.svg', grade: 7 },
    'angular': {type: 'icon', data: '/angular.svg', grade: 7 },
    'ngrx': {type: 'icon', data: '/ngrx.svg', grade: 4 },
  };
  database: { [key: string]: Skill } = {
    'SQL': { type: 'icon', data: '/sql.svg', grade: 8 },
    'NoSQL': { type: 'word', data: 'noSQL', grade: 1 },
  };
  softSkills: { [key: string]: Skill } = {
    'Teamwork': { type: 'word', data: 'Teamwork', grade: 8 },
    'Autonomy': { type: 'word', data: 'Autonomy', grade: 10 },
    'Communication': { type: 'word', data: 'Communication', grade: 6 },
    'Adaptability': { type: 'word', data: 'Adaptability', grade: 7 },
  };
  practice: { [key: string]: Skill } = {
    'TDD': { type: 'word', data: 'TDD', grade: 6 },
    'Agile': { type: 'word', data: 'Agile', grade: 8 },
    'Unit Testing': { type: 'word', data: 'Unit Testing', grade: 9 },
  };
  operatingSystem: { [key: string]: Skill } = {
    'linux': { type: 'icon', data: '/linux.svg', grade: 8 },
    'Windows': { type: 'icon', data: '/windows.svg', grade: 8 },
  };
  language: { [key: string]: Skill } = {
    'fr': { type: 'flag', data: '/Flag_of_France.svg', grade: 10 },
    'en': { type: 'flag', data: '/Flag_of_the_United_Kingdom.svg', grade: 9 },
    'de': { type: 'flag', data: '/Flag_of_Germany.svg', grade: 2 },
  };
  devOps: { [key: string]: Skill } = {
    'git': { type: 'icon', data: '/git.svg', grade: 8 },
    'docker': { type: 'icon', data: '/docker.svg', grade: 6 },
    'jenkins': { type: 'icon', data: '/jenkins.svg', grade: 6 },
    'sonarqube': { type: 'icon', data: '/sonarqube.svg', grade: 6 },
  };
}
