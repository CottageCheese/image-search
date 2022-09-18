    export interface RootObject {
        id: number;
        pageURL: string;
        type: string;
        tags: string;
        previewURL: string;
        previewWidth: number;
        previewHeight: number;
        webformatURL: string;
        webformatWidth: number;
        webformatHeight: number;
        largeImageURL: string;
        imageWidth: number;
        imageHeight: number;
        imageSize: number;
        views: number;
        downloads: number;
        collections: number;
        likes: number;
        comments: number;
        user_id: number;
        user: string;
        userImageURL: string;
    }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable()
export class ImageService{
  //private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";

  constructor(private _http: HttpClient ){ }

 getImage(query: string){
    return this._http.get(this.URL + query + this.perPage)
    .pipe(map(response => {return response;}
     ));
 };
}