import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ResumeSectionComponent } from './resume-section/resume-section.component';

@Component({
  selector: 'app-content-area',
  imports: [CommonModule, AboutMeComponent, ContactSectionComponent, ResumeSectionComponent],
  standalone: true,
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss',
})
export class ContentAreaComponent {
  @Input({ required: true }) selected!: string;
  @Output() contentSelected = new EventEmitter<string>();

  onSelect(str: string) {
    this.selected = str;
    this.contentSelected.emit(this.selected);
  }
}
