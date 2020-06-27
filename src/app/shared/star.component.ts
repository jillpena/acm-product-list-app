import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
   @Input() rating: number;
   starWidth: number;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

   ngOnChanges(): void {
       this.starWidth = this.rating * 75 / 5;
   }

   onClick() {
       this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
   }
}