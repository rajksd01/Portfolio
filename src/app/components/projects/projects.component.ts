import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  public data: string = 'Text';
  disableValue: boolean = false;

  imagePath: string =
    'https://cdn.pixabay.com/photo/2023/06/14/02/18/flowers-8062135_640.jpg';
  imageHeight = '500px';
  imageWidth = '100px';
  caption = 'imageho';
}
