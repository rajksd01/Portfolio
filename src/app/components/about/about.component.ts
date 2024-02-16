import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public contactData: string = '1234';
  public today_date: Date = new Date();

  onKeyUp(value: string): void {
    this.contactData = value;
  }
}
