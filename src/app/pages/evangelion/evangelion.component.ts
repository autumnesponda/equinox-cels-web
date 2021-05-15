import {Component, OnInit} from '@angular/core';
import {Constants} from '../../constants/Constants';

@Component({
  selector: 'app-evangelion',
  templateUrl: './evangelion.component.html',
  styleUrls: ['./evangelion.component.scss']
})
export class EvangelionComponent implements OnInit {
  ripAsukaUrls = Constants.EVA_FILENAMES[0];
  catNoiseNpeUrls = Constants.EVA_FILENAMES[1];
  ngOnInit(): void {
  }
}
