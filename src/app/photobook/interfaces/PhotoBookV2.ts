import {ImageTile} from './image-tile';

export interface PhotobookV2 {
  id: number;
  title: string;
  subtitle: string;
  columns: number;
  gutterSize: string;
  rowHeight: string;
  images: ImageTile[];
}
