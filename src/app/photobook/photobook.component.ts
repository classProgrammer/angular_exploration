import {Component, Input, OnInit} from '@angular/core';
import {PhotobookV2} from './interfaces/PhotoBookV2';

@Component({
  selector: 'app-photobook',
  templateUrl: './photobook.component.html',
  styleUrls: ['./photobook.component.css']
})
export class PhotobookComponent {
  @Input()
  photobook: PhotobookV2;
}
