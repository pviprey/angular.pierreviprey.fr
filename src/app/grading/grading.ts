import {AfterViewInit, Component, Input, OnDestroy, signal} from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { SkillWithCoordinates } from '../models/skill';

@Component({
  selector: 'app-grading',
  imports: [KeyValuePipe],
  templateUrl: './grading.html',
  styleUrl: './grading.scss',
})
export class Grading implements AfterViewInit, OnDestroy {

  @Input() title = 'Grading';

  @Input()
  set svgs(value: {
    [key: string]: SkillWithCoordinates;
  }) {
    this.icon.set(value);
  }

  private readonly icon = signal<{
    [key: string]: SkillWithCoordinates;
  }>({});

  readonly svgsSignal = this.icon.asReadonly();

  private zIndexAnimationId?: number;
  private currentIndex = 0;

  ngOnInit() {
    const svgs = this.icon();

    const keys = Object.keys(svgs);
    const total = keys.length;

    const initialized = Object.fromEntries(
      keys.map((key, index) => {
        const svg = svgs[key];

        return [
          key,
          {
            ...svg,
            ...this.setCoordinates(
              svg.grade,
              index,
              total
            ),
            z: 0,
            active: false,
            ...this.createFloatAnimation()
          }
        ];
      })
    );

    this.icon.set(initialized);
  }

  ngAfterViewInit() {
    this.startZIndexAnimation();
  }

  ngOnDestroy() {
    if (this.zIndexAnimationId !== undefined) {
      clearInterval(this.zIndexAnimationId);
    }
  }

  private startZIndexAnimation() {
    const keys = Object.keys(this.icon());

    if (keys.length <= 1) {
      return;
    }

    this.currentIndex = 0;

    this.updateZIndexes(keys);

    this.zIndexAnimationId = window.setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % keys.length;

      this.updateZIndexes(keys);
    }, 1000);
  }

  private updateZIndexes(keys: string[]) {
    const current = this.icon();
    const total = keys.length;

    const updated = Object.fromEntries(
      keys.map((key, index) => {
        const distance =
          (index - this.currentIndex + total) % total;

        const z = total - distance;

        return [
          key,
          {
            ...current[key],
            z,
            active: z === total
          }
        ];
      })
    );

    this.icon.set(updated);
  }

  private setCoordinates(grade: number, index: number, total: number): { x: number; y: number } {
    const radius = 42 * (grade) / 10;
    const angle = (index / total) * 2 * Math.PI;

    return { x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
  }

  private createFloatAnimation() {
    const floatX = this.randomFloat(1.5, 5);
    const floatY = this.randomFloat(1.5, 5);
    const floatDuration = this.randomFloat(3.5, 7);
    const floatDelay = this.randomFloat(-floatDuration, 0);
    const shineDuration = this.randomFloat(3, 6);

    return {floatX, floatY, floatDuration, floatDelay, shineDuration};
  }

  private randomFloat(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}