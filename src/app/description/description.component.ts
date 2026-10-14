import { Component } from '@angular/core';
import { inject, input, computed } from '@angular/core';
import { InformationService } from '../../service/information.service';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class Description {
  private service = inject(InformationService);

  id = input.required<string>();          // reçu depuis l'URL (:id)
  // contenu = computed(() => this.service.get(this.id()));

}
