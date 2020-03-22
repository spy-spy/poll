import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Conversation, Post } from './interfaces';
import { Message } from './interfaces';

@Injectable()
export class FeatureApiService {
  constructor(private http: HttpClient) { }

  public getConversations(): Observable<Conversation[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/comments').pipe(
      map((posts: Post[]) => {
        return Array.from(
          new Set(
            posts.map((p: Post) => p.postId)
          )
        ).map(
          (id: number) => ({
            id,
            name: `Conversation ${id}`
          })
        )
      })
    );
  }


  public getMessages(conversationId: number): Observable<Message[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/comments').pipe(
      map((posts: Post[]) => {
        return posts
          .filter((p: Post) => p.postId === conversationId)
          .map((p: Post) => ({
            conversationId,
            id: p.id,
            name: p.name,
            email: p.email,
            body: p.body
          }))
      })
    )
  }
}
