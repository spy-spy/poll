import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, fromEvent, merge, BehaviorSubject } from 'rxjs';
import { mapTo, startWith, map, catchError, distinctUntilChanged } from 'rxjs/operators';

import { Post, Message } from './interfaces';
import { Theame } from './enums';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private theameSource: BehaviorSubject<Theame> = new BehaviorSubject(Theame.Light);

  public isUserLoggedIn$: Observable<boolean> = this.loggedInSource.asObservable().pipe(distinctUntilChanged());
  public theame$: Observable<Theame> = this.theameSource.asObservable().pipe(distinctUntilChanged());


  constructor(private http: HttpClient) { }

  get currentTheme(): Theame {
    return this.theameSource.value;
  }

  public logIn(): void {
    this.loggedInSource.next(true);
  }

  public logout(): void {
    this.loggedInSource.next(false);
  }

  public getOnlineStatus(): Observable<boolean> {
    return merge(
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    ).pipe(startWith(navigator.onLine));
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((posts: Post[]) => {
        const random: number = Math.floor(Math.random() * posts.length) + 1;
        return posts.slice(1, random === 1 ? random + 1 : random);
      }),
      catchError(() => {
        return [];
      })
    );
  }

  public searchMessages(searchTerm: string): Observable<Message[]> {
    return this.http.get('https://api.github.com/search/repositories', {
      params: new HttpParams({
        fromObject: {
          q: searchTerm
        }
      })
    }).pipe(
      map(({ items }: { items: Message[] }) => {
        return items;
      }),
      catchError(() => [])
    );
  }

  public setTheame(theam: Theame): void {
    this.theameSource.next(theam);
  }
}
