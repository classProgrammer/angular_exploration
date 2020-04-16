import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageTile} from '../photobook/interfaces/image-tile';
import {PhotobookService} from '../photobook.service';
import {PhotobookV2} from '../photobook/interfaces/PhotoBookV2';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input()
  photobook: PhotobookV2;
  @Output()
  valueChange = new EventEmitter();

  constructor(private photobookService: PhotobookService) { }

  setEditTile(tile: ImageTile, value: boolean) {
    const tiles = this.photobook.images;
    tiles[tiles.indexOf(tile)].edit = value;
  }

  edit(tile: ImageTile): void {
    this.setEditTile(tile, true);
    this.subscribe(this.photobookService.updateImage(this.photobook, tile));
  }

  remove(tile: ImageTile): void {
    this.subscribe(this.photobookService.removeImage(this.photobook, tile));
  }

  close(tile: ImageTile): void {
    this.setEditTile(tile, false);
    this.subscribe(this.photobookService.updateImage(this.photobook, tile));
  }

  addTile(): void {
    this.subscribe(this.photobookService.addImage(this.photobook));
  }

  deletePhotobook() {
    this.photobookService.remove(this.photobook).subscribe(x =>
      this.valueChange.emit(true)
    );
  }

  savePhotobook() {
    this.subscribe(this.photobookService.update(this.photobook));
  }

  private subscribe(observable: Observable<[PhotobookV2]>) {
    observable.subscribe(books => {
      this.photobook = books[books.findIndex(book => book.id === this.photobook.id)];
    });
  }
}

