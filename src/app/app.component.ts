import {
  ModalRef,
  ModalService,
} from './shared/components/modal/services/modal.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  title = 'design-acessivel-angular-2';
  firstName: string = 'Ismael';
  modalRef!: ModalRef;

  constructor(private modalService: ModalService) {}

  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
