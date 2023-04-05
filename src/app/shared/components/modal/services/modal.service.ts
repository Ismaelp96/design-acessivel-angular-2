import { Injectable } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  open(config: ModalConfig) {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  close(): void {
    console.log('Close called');
  }
}
