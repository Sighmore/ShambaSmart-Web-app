

import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './forums.html',
  styleUrls: ['./forums.scss'],
})
export class Forums {
  posts = [
    { title: 'Welcome to ShambaSmart!', content: 'This is your space to ask and share.', createdAt: new Date() }
  ];

  newPost = { title: '', content: '' };

  createPost() {
    if (!this.newPost.title || !this.newPost.content) return;

    this.posts.unshift({
      ...this.newPost,
      createdAt: new Date()
    });

    this.newPost = { title: '', content: '' };
  }
}
