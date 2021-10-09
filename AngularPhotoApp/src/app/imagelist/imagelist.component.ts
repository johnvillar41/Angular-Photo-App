import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
