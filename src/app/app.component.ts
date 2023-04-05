import { Component, TemplateRef, ViewChild } from '@angular/core';

import { ModalService } from './shared/components/modal/services/modal.service';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent {
  @ViewChild('modal')
  public modalTemplateRef!: TemplateRef<any>;
  title = 'design-acessivel-angular-2';
  firstName: string = 'Ismael';
  modalRef!: ModalRef;
  info = false;

  constructor(private modalService: ModalService) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
