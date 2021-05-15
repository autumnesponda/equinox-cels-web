import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {

  @Input() imgUrls!: string[];
  @Input() modalId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
