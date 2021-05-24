import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-eva-card',
  templateUrl: './basic-eva-card.component.html',
  styleUrls: ['./basic-eva-card.component.scss']
})
export class BasicEvaCardComponent implements OnInit {
  @Input() primaryImageUrl!: string;
  @Input() secondaryImageUrl!: string;
  @Input() celInfo!: string[];
  @Input() cardTitle!: string;
  @Input() cardSubtitle!: string;
  @Input() cardBody!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
