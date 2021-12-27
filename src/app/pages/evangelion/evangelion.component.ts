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
  ritzyMistoUrls = Constants.EVA_FILENAMES[3];
  heliManUrls = Constants.EVA_FILENAMES[4];
  mistoSketchUrls = Constants.EVA_FILENAMES[5];
  ngOnInit(): void {
  }
}
