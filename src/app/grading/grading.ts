import {AfterViewInit, Component, Input, OnDestroy, signal} from '@angular/core';
import { KeyValuePipe } from '@angular/common';

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
    [key: string]: {
      path: string;
      grade: number;
      x?: number;
      y?: number;
      z?: number;
      floatX?: number;
      floatY?: number;
      floatDuration?: number;
      floatDelay?: number;
    };
  }) {
    this._svgs.set(value);
  }

  private readonly _svgs = signal<{
    [key: string]: {
      path: string;
      grade: number;
      x?: number;
      y?: number;
      z?: number;
      floatX?: number;
      floatY?: number;
      floatDuration?: number;
      floatDelay?: number;
    };
  }>({});

  readonly svgsSignal = this._svgs.asReadonly();

  private zIndexAnimationId?: number;
  private currentIndex = 0;

  ngOnInit() {
    const svgs = this._svgs();

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
            ...this.createFloatAnimation()
          }
        ];
      })
    );

    this._svgs.set(initialized);
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
    const keys = Object.keys(this._svgs());

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
    const current = this._svgs();
    const total = keys.length;

    const updated = Object.fromEntries(
      keys.map((key, index) => {
        const distance =
          (index - this.currentIndex + total) % total;

        return [
          key,
          {
            ...current[key],
            z: total - distance
          }
        ];
      })
    );

    this._svgs.set(updated);
  }

  private setCoordinates(
    grade: number,
    index: number,
    total: number
  ): { x: number; y: number } {
    if (grade === 10) {
      return { x: 0, y: 0 };
    }

    const radius = 45 * (10 - grade) / 10;

    const angle =
      (index / total) *
      2 *
      (Math.random() * 2 - 1);

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  }

  private createFloatAnimation() {
    const floatX = this.randomFloat(1.5, 5);
    const floatY = this.randomFloat(1.5, 5);
    const floatDuration = this.randomFloat(3.5, 7);
    const floatDelay = this.randomFloat(
      -floatDuration,
      0
    );

    return {
      floatX,
      floatY,
      floatDuration,
      floatDelay
    };
  }

  private randomFloat(
    min: number,
    max: number
  ): number {
    return min + Math.random() * (max - min);
  }
}