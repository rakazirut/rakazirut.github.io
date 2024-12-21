import { Component } from '@angular/core';
import { ContactInfoJson } from '../../../data/data-source';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  standalone: true,
})
export class ContactSectionComponent {
  get name() {
    return ContactInfoJson.name;
  }

  get title() {
    return ContactInfoJson.title;
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
}
