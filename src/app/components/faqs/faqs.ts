import { Comment } from './../../ngrx/comments/comments.model';

import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CommentsActions from '../../ngrx/comments/comments.actions';
import {
  selectAllComments,
  selectCommentsLoading,
} from '../../ngrx/comments/comments.selector';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatSlideToggleModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './faqs.html',
  styleUrls: ['./faqs.scss'],
})
export class Faqs {
  Comment: Comment[] = [];

  comments$!: Observable<Comment[]>;
  loading$!: Observable<boolean>;

  //DI
  constructor(private readonly store: Store) {}

  //On initialization call a function to fetch the API data and subscribe to

  // ngOnInit(): void {
  //   this.faqsService.getFaqs().subscribe(res => {
  //     console.log("Comments Response",res);
  //     this.faqs = res.comments;
  //     this.loading = false;
  //   });

  //on initialization, it loads from the store

  ngOnInit() {
    this.comments$ = this.store.select(selectAllComments);
    this.loading$ = this.store.select(selectCommentsLoading);

  

    //log the comments data
    console.log('Comments Data on the component', this.comments$);

    this.store.dispatch(CommentsActions.loadComments());
  }
}
