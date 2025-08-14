
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as CommentsActions from './comments.actions';
import { CommentsResponse } from './comments.model';
import { FaqsService } from '../../services/faqs/faqs';

@Injectable()
export class CommentsEffects {
  loadComments$;

  constructor(
    private readonly actions$: Actions,
    private readonly faqsService: FaqsService
  ) {
    this.loadComments$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommentsActions.loadComments),
        mergeMap(() =>
          this.faqsService.getFaqs().pipe(
            map((res: CommentsResponse) => {
              // log the response with the array of comments
              console.log('Comments loaded at the effects class:', res?.comments ?? []);
              return CommentsActions.loadCommentsSuccess({ comments: res?.comments ?? [] });
            }),
            catchError((error) =>
              of(CommentsActions.loadCommentsFailure({
                error: error?.message ?? 'Unknown error'
              }))
            )
          )
        )
      )
    );
  }
}

