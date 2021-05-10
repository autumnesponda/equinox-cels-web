import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {
  @Input() source!: string;
  @Input() text!: string;
}
