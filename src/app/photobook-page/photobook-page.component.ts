import { Component, OnInit } from '@angular/core';
import {PhotobookService} from '../photobook.service';
import {PhotobookV2} from '../photobook/interfaces/PhotoBookV2';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photobook-page',
  templateUrl: './photobook-page.component.html',
  styleUrls: ['./photobook-page.component.css']
})
export class PhotobookPageComponent implements OnInit {

  photobooks: PhotobookV2[];

  constructor(private photobookService: PhotobookService) { }

  ngOnInit(): void {
    this.getPhotobooks();
  }

  getPhotobooks(): void {
    this.subscribe(this.photobookService.getPhotobooks());
  }

  addPhotobook(): void {
    this.subscribe(this.photobookService.add());
  }

  private subscribe(observable: Observable<[PhotobookV2]>) {
    observable.subscribe(books => this.photobooks = books);
  }
}
