import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doing-card',
  templateUrl: './doing-card.component.html',
  styleUrls: ['../about-me.component.scss'],
  standalone: true,
})
export class DoingCardComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) desc!: string;
}
