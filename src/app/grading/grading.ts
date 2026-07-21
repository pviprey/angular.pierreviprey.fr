import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grading',
  imports: [],
  templateUrl: './grading.html',
  styleUrl: './grading.scss',
})
export class Grading {

  @Input()title: string = "Grading";
}
