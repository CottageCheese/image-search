import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] = [];
  imagesFound: boolean = false;
  searching = false;
  searchQuery: string = '';

handleSuccess(data: any){
  this.imagesFound = true;
  this.images = data.hits;
  console.log(data.hits);
}


handleError(error: any){
  console.log(error);
}
  constructor(private _imageService : ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => (this.searching = false))
  }

  ngOnInit(): void {
   
  }

}
