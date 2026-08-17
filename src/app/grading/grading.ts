import { Component, Input } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-grading',
  imports: [KeyValuePipe],
  templateUrl: './grading.html',
  styleUrl: './grading.scss',
})
export class Grading {
  @Input() title: string = "Grading";
  @Input() svgs: { [key: string]: { path: string, grade: number, x?: number, y?: number } } = {};

  ngOnInit() {
    const keys = Object.keys(this.svgs);
    const total = keys.length;

    keys.forEach((key, index) => {
      const grade = this.svgs[key].grade;
      this.svgs[key] = {
        ...this.svgs[key],
        ...this.setCoordinates(grade, index, total)
      };
    });
  }

private setCoordinates(grade: number, index: number, total: number): { x: number, y: number } {
  if (grade == 10){
    return { x: 0, y: 0 };
  }
  
  const radius = 45 * (10 - grade) / 10;
  const angle = (index / total) * 2 * (Math.random() * 2 - 1);
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}
}