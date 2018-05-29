import {Injectable} from '@angular/core';
import {BrowserXhr} from '@angular/http';

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
  constructor() {
    super();
}

  build(): any {
    const xhr = super.build();
    xhr.responseType = 'blob';
    return <any>(xhr);
  }
}
