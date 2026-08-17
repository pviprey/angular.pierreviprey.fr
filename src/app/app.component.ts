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

  backend: { [key: string]: { path: string, grade: number } } = {};
  frontend: { [key: string]: { path: string, grade: number } } = {};
  database: { [key: string]: { path: string, grade: number } } = {};
  softSkills: { [key: string]: { path: string, grade: number } } = {};
  testing: { [key: string]: { path: string, grade: number } } = {};
  operatingSystem: { [key: string]: { path: string, grade: number } } = {};
  language: { [key: string]: { path: string, grade: number } } = {
    'fr': { path: '/Flag_of_France.svg', grade: 10 },
    'en': { path: '/Flag_of_the_United_Kingdom.svg', grade: 9 },
    'de': { path: '/Flag_of_Germany.svg', grade: 2 },
  };
  


}
