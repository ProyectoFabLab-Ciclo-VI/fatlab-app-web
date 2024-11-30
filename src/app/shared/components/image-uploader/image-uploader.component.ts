import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NotificationService } from '@core/index.service.trigger';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class ImageUploaderComponent {
  @Input() isAddImage: boolean = false;
  @Input() sizeBox: string = '400px';
  image: string | ArrayBuffer = '';
  hovering: boolean = false;
  accept: string = 'image/*';

  allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  maxSize = 10 * 1024 * 1024;

  constructor(
    private notificationSrv: NotificationService,
  ) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.hovering = true;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();

    if (!event.dataTransfer) {
      return;
    }

    this.hovering = false;
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.hovering = false;
  }

  onFileSelect(event: any): void {
    if (event.target.files && event.target.files.length) {
      this.handleFile(event.target.files[0]);
    }
  }

  handleFile(file: File): void {
    if (!this.allowedTypes.includes(file.type)) {
      this.notificationSrv.addNotification('error', 'la imagen debe estar en formato PNG, JPG o JPEG.')
      this.image = '';
      return;
    }

    if (file.size > this.maxSize) {
      this.notificationSrv.addNotification('error', 'El archivo debe ser menor a 10MB.')
      this.image = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => (this.image = reader.result ?? '');
    reader.readAsDataURL(file);
  }

  removeImage(event: MouseEvent): void {
    event.stopPropagation();
    this.image = '';
  }
}
