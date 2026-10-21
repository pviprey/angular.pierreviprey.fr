import { Component } from '@angular/core';
import { inject, input, computed } from '@angular/core';
import { InformationService } from '../../service/information.service';
import { Information } from '../../models/information';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class Description {
  private service = inject(InformationService);

  information = input.required<Information>();


}
