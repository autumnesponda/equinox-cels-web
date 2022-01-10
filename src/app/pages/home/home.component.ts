import { Component, OnInit } from '@angular/core';
import {Constants} from '../../constants/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mediaPrefix = Constants.MediaUrlPrefix + 'Other/';
  galleryUrls = [
    'GHOST_STORIES_01_00.png',
    'GHOST_STORIES_01_00.png',
    'GHOST_STORIES_01_00.png',
  ];
  ngOnInit(): void {
  }

}
