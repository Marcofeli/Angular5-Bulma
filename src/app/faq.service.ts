import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class FaqService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  private errorHandler<T>(msg = "Error Message", result?:T){
    return (error:any):Observable<T> =>{
      console.error(msg);
      console.error(error);
      return of(result as T);
    }
  }

  public getAll():Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(_=>console.log("Loading all the posts from the url")),
        catchError(this.errorHandler('Cannot get all the posts from the server',[]))        
      );
  }
}
