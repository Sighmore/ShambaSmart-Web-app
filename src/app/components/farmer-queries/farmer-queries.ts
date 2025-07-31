
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './farmer-queries.html',
  styleUrls: ['./farmer-queries.scss']
})
export class FarmerQueries {
  query = {
    name: '',
    topic: '',
    message: ''
  };

  queries: { name: string; topic: string; message: string }[] = [];

  onSubmit() {
    this.queries.unshift({ ...this.query });
    this.query = { name: '', topic: '', message: '' };
  }
}
