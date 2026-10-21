import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Information } from '../models/information';
import { HttpClient } from '@angular/common/http';

@Service()
export class InformationService {
  private http = inject(HttpClient);

  get(id: string): Observable<Information> {
    return this.http.get<Information>(`/api/informations/${encodeURIComponent(id.toLowerCase())}`);
  }
  
}
