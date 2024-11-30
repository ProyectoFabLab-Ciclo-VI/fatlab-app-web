import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

interface CloudinaryDestroy {
  public_id: string;
  signature: string;
  api_key: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private url: string = `${environment.API_CLOUDINARY_URL}/image`;

  constructor(
    private http: HttpClient,
  ) { }

  public uploadImg(data: any): Observable<any> {
    return this.http.post(`${this.url}/upload`, data);
  }

  public deleteImg(public_id: string, signature: string): Observable<any> {
    const dataDestroy: CloudinaryDestroy = {
      public_id: public_id,
      api_key: environment.API_KEY_CLOUDINARY,
      signature: signature,
    };
    return this.http.post(`${this.url}/destroy`, dataDestroy);
  }
}
