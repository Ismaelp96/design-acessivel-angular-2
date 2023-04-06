import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ModalService } from './shared/components/modal/services/modal.service';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent implements OnInit {
  @ViewChild('modal')
  public modalTemplateRef!: TemplateRef<any>;
  title = 'design-acessivel-angular-2';
  firstName: string = 'Ismael';
  modalRef!: ModalRef;
  info = false;
  form!: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Ismael', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  submit(): void {
    console.log(this.form.value);
    this.modalRef.close();
  }
}
