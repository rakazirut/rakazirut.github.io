import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoingCardComponent } from './doing-card/doing-card.component';
import { AboutTextArray, WhatDoArray } from '../../../data/data-source';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../content-area.component.scss'],
  imports: [DoingCardComponent, CommonModule],
})
export class AboutMeComponent {
  aboutTextArray = AboutTextArray;
  whatDoArray = WhatDoArray;

  visibleCount: number = 2; // Initially show 2 items

  showAll(): void {
    this.visibleCount = this.aboutTextArray.length; // Show all items
  }

  showLess(): void {
    this.visibleCount = 2; // Show 2 items
  }
}
