import { Component, inject, OnInit } from '@angular/core';
import { DummyService } from '../service/dummy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css',
})
export class DummyComponent implements OnInit {
  constructor(private router: Router) {}
  public dummyService = inject(DummyService);
  public data: any;

  public currentIndex = 0;
  public lastIndex = 0;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dummyService.getData().subscribe({
      next: (data) => {
        this.data = data;
        console.log('Data', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  previousButtonClick() {
    if (this.lastIndex > 0) {
      this.lastIndex--;
      this.currentIndex--;
    }
  }
  nextButtonClick(): void {
    if (this.currentIndex < this.data.length) {
      this.currentIndex++;
      this.lastIndex++;
    }
  }
}
