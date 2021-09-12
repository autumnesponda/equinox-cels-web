import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../../constants/Constants';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {
  mediaPrefix = Constants.MediaUrlPrefix;
  @Input() imgUrls!: string[];
  @Input() modalId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
