import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public getMethod(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public getMethodWithQueryParam(url: string, param: any): Observable<any> {
    return this.httpClient.get(url, {
      params: param,
      observe: 'response'
    });
  }

  public postMethod(url: string, requestBody: any): Observable<any> {
    return this.httpClient.post(url, requestBody).pipe();
  }

  public postMethodWithOptions(url: string, requestBody: any, options: any): Observable<any> {
    return this.httpClient.post(url, requestBody, options);
  }

  public putMethod(url: string, requestBody: any): Observable<any> {
    return this.httpClient.put(url, requestBody);
  }

  public deleteMethod(url: string): Observable<any> {
    return this.httpClient.delete(url);
  }
}
