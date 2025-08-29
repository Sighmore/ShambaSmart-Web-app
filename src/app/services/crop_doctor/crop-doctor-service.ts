import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CropDoctorService {
  // Put your API base in environment.ts and replace below
  private base = '/api';

  constructor(private http: HttpClient) {}

  diagnose(base64Image: string): Observable<any> {
    // Backend expectation: { image_base64: "..." }
    return this.http.post(`${this.base}/diagnose`, { image_base64: base64Image });
  }
}