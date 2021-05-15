import {Component, Input} from '@angular/core';
import {Constants} from './constants/Constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() eva00ModalFiles = Constants.EVA_FILENAMES[0].slice(1);
}
