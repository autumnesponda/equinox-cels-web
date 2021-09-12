import {Component, Input} from '@angular/core';
import {Constants} from '../../../constants/Constants';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {
  mediaPrefix = Constants.MediaUrlPrefix + 'Other/';
  @Input() source!: string;
  @Input() text!: string;
}
