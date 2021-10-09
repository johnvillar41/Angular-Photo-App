import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit(): void {
  }

}
