// information.resolver.ts
import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Information } from '../models/information';
import { InformationService } from '../service/information.service';

export const informationResolver: ResolveFn<Information> = route => {
  const router = inject(Router);
  const id = route.paramMap.get('id') ?? '';

  return inject(InformationService).get(id).pipe(
    catchError(() => of(new RedirectCommand(router.parseUrl('/')))),
  );
};