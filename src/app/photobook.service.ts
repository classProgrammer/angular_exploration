import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {PhotobookV2} from './photobook/interfaces/PhotoBookV2';
import {ImageTile} from './photobook/interfaces/image-tile';

@Injectable({
  providedIn: 'root'
})
export class PhotobookService {

  constructor(private http: HttpClient) {}

  getPhotobooks(): Observable<[PhotobookV2]> {
    return this.http.get<[PhotobookV2]>(this.getUrl('photobook'));
  }

  add(): Observable<[PhotobookV2]> {
    return this.http.post<[PhotobookV2]>(this.getUrl('photobook/add'), undefined);
  }

  remove(photobook: PhotobookV2): Observable<[PhotobookV2]> {
    return this.put(photobook, 'photobook/delete');
  }

  updateImage(photobook: PhotobookV2, tile: ImageTile): Observable<[PhotobookV2]>  {
    const tiles = photobook.images;
    tiles[this.getTileIndex(tiles, tile)] = tile;
    return this.put(photobook, 'photobook/update');
  }

  removeImage(photobook: PhotobookV2, tile: ImageTile): Observable<[PhotobookV2]>  {
    const tiles = photobook.images;
    tiles.splice(this.getTileIndex(tiles, tile), 1);
    return this.put(photobook, 'photobook/update');
  }

  addImage(photobook: PhotobookV2): Observable<[PhotobookV2]> {
    return this.put(photobook, 'photobook/add/image');
  }

  update(photobook: PhotobookV2): Observable<[PhotobookV2]> {
    return this.put(photobook, 'photobook/update');
  }

  private getTileIndex(tiles, tile: ImageTile) {
    return tiles.findIndex(elem => elem.id === tile.id);
  }

  private put(photobook: PhotobookV2, postfix: string): Observable<[PhotobookV2]> {
    return this.http.put<[PhotobookV2]>(this.getUrl(postfix), photobook);
  }

  private getUrl(postfix: string) {
    return 'http://127.0.0.1:5000/' + postfix;
  }
}
