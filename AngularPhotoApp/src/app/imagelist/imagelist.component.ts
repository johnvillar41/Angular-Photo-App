import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit, OnDestroy {
  public items: Array<number> = [1, 2, 3, 4];
  public mediaSubscription!: Subscription;
  public devicePercentSize!: number;
  constructor(private mediaObserver: MediaObserver) { }

  ngOnDestroy(): void {
    if (this.mediaSubscription) {
      this.mediaSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.handleScreenSize();
  }

  private handleScreenSize(): void {
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      console.log(changes);
      for (var change of changes) {
        if (change.mqAlias == 'xs') {
          this.devicePercentSize = 100;
          break;
        } else if (change.mqAlias == 'sm') {
          this.devicePercentSize = 50;
          break;
        } else if (change.mqAlias == 'md') {
          this.devicePercentSize = 33;
          break;
        } else if (change.mqAlias == 'lt-xl') {
          this.devicePercentSize = 25;
          break;
        } else {
          this.devicePercentSize = 25;
          break;
        }
      }
    });
  }
}
