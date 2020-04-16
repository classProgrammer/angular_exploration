import { Component, OnInit } from '@angular/core';
import {PhotobookService} from '../photobook.service';
import {PhotobookV2} from '../photobook/interfaces/PhotoBookV2';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photobook-view',
  templateUrl: './photobook-view.component.html',
  styleUrls: ['./photobook-view.component.css']
})
export class PhotobookViewComponent implements OnInit {

  photobooks: PhotobookV2[];

  constructor(private photobookService: PhotobookService) { }

  ngOnInit(): void {
    this.getPhotobooks();
  }

  getPhotobooks(): void {
    this.subscribe(this.photobookService.getPhotobooks());
  }

  private subscribe(observable: Observable<[PhotobookV2]>) {
    observable.subscribe(books => this.photobooks = books);
  }
}
