import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-eva-card',
  templateUrl: './eva-card.component.html',
  styleUrls: ['./eva-card.component.scss']
})
export class EvaCardComponent implements OnInit {
  @Input() fileUrls!: string[];
  @Input() cardTitle!: string;
  @Input() cardSubtitle!: string;
  @Input() celInfo?: string[];
  @Input() cardBody!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
