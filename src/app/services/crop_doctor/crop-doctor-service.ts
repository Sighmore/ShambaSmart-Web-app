import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CropDoctorService {


  history = [
      {
        crop: 'Maize',
        issue: 'Leaf Blight',
        confidence: 85,
        severity: 'moderate',
        recommendations: ['Apply fungicide X within 3 days'],
        timestamp: new Date().toISOString()
      },
      {
        crop: 'Beans',
        issue: 'Nitrogen Deficiency',
        confidence: 78,
        severity: 'mild',
        recommendations: ['Add nitrogen fertilizer (CAN/Urea)'],
        timestamp: new Date(Date.now() - 86400000).toISOString() // yesterday
      }
    ];
  // Put your API base in environment.ts and replace below
  private base = '/api';

  constructor(private http: HttpClient) {}

  diagnose(base64Image: string): Observable<any> {
    // Backend expectation: { image_base64: "..." }
    return this.http.post(`${this.base}/diagnose`, { image_base64: base64Image });
  }
}

