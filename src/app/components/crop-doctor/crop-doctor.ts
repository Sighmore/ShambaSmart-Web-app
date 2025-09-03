import { Component, OnInit } from '@angular/core';
import { CropDoctorService } from '../../services/crop_doctor/crop-doctor-service';
import { CommonModule } from '@angular/common';
import { Diagnosis } from './crop-doctor.model';

@Component({
  selector: 'app-crop-doctor',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './crop-doctor.html',
  styleUrls: ['./crop-doctor.scss'] 
})
export class CropDoctor implements OnInit {
  imagePreview: string | null = null; 
  uploading = false;
  diagnosis: Diagnosis | null = null;
  history: Diagnosis[] = [];
  errorMessage: string | null = null;

  constructor(private cropDoctorService: CropDoctorService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    //  Temporary dummy data — replace with API call later
    this.cropDoctorService.history
  }

  //a method to handle file input change event
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Please upload an image file.';
      return;
    }
    this.errorMessage = null;
    this.readFileAsDataURL(file)
      .then((dataUrl) => (this.imagePreview = dataUrl))
      .catch(() => (this.errorMessage = 'Unable to read file.'));
  }

  //a method to read a file as a data URL
  private readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject();
      reader.readAsDataURL(file);
    });
  }

  analyzeImage() {
    throw new Error('Method not implemented.');
  }

  shareOnWhatsapp() {
    throw new Error('Method not implemented.');
  }

  findNearByAgrovet() {
    throw new Error('Method not implemented.');
  }

  clearHistory() {
    throw new Error('Method not implemented.');
  }
}

//an interface that models the diagnosis data

