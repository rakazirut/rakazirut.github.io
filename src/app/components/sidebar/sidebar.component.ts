import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ContactInfoJson, TitleArray } from '../../data/data-source';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input({ required: true }) selected!: string;
  @Output() locationSelected = new EventEmitter<string>();

  themes: string[] = [
    'cheesecake',
    'cupcake',
    'modern-ink',
    'snes',
    'sonaki',
    'superuser',
    'retro',
  ];

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000); // Update every second
    setInterval(() => this.updateTitle(), 60000); // Update every minute
  }

  showDebug = false;
  showTheme = false;
  title = 'Software Engineer';
  time: string = '';
  selectedTheme = 'sonaki';
  hoveredTheme: string | null = null;

  get name() {
    return ContactInfoJson.name;
  }

  get phone() {
    return ContactInfoJson.phone;
  }

  get phoneHref() {
    return ContactInfoJson.phoneHref;
  }

  get email() {
    return ContactInfoJson.email;
  }

  get emailHref() {
    return ContactInfoJson.emailHref;
  }

  get location() {
    return ContactInfoJson.location;
  }

  get linkedIn() {
    return ContactInfoJson.linkedIn;
  }

  get github() {
    return ContactInfoJson.github;
  }

  passLocation() {
    this.selected = 'contact';
    this.locationSelected.emit(this.selected);
  }

  updateClock(): void {
    const now = new Date();
    this.time = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
      hour12: false,
    }).format(now);
  }

  updateTitle(): void {
    const index = Math.floor(Math.random() * TitleArray.length);
    this.title = TitleArray[index];
  }

  onThemeSelected(event: any) {
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    document.body.className = selectedValue;
    this.selectedTheme = selectedValue;
  }

  onOptionHover(theme: string): void {
    this.selectedTheme = theme;
  }

  onOptionLeave(): void {
    this.selectedTheme = 'sonaki';
  }
}