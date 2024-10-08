import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Project } from '../_models/ProjectCardModel';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  project = {} as Project;
  bsModalRef!: BsModalRef;
  constructor(modalRef: BsModalRef) {
    this.bsModalRef = modalRef;
  }
  closeModal() {
    if (this.bsModalRef) {
      this.bsModalRef.hide(); // Call hide() on bsModalRef
    } else {
      console.error('bsModalRef is undefined!'); // Log if undefined
    }
  }
}
