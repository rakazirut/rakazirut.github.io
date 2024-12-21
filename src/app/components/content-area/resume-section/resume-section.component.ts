import { Component } from '@angular/core';
import { ExperienceArray } from '../../../data/data-source';
import { ExperienceItemComponent } from './experience-item/experience-item.component';

@Component({
  selector: 'app-resume-section',
  imports: [ExperienceItemComponent],
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss'],
  standalone: true,
})
export class ResumeSectionComponent {
  experienceArray = ExperienceArray;

  download() {
    window.open('/assets/resume.pdf', '_blank');
  }
}
