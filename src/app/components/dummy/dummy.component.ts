import { Component, inject, OnInit } from '@angular/core';
import { DummyService } from '../service/dummy.service';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css',
})
export class DummyComponent implements OnInit {
  public dummyService = inject(DummyService);
  public data: any;
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
}
