import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['../resume-section.component.scss'],
  standalone: true,
})
export class ExperienceItemComponent {
  @Input({ required: true }) experience!: any;
}
