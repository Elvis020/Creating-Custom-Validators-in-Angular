import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


export class AdminName {
  static InvalidName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Testty') {
      return { 'nameIsIvalid': true };
    } else {
      return null;
    }
  }
  static AsyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestAsync') {
          resolve({ 'PleaseItsInvalid': true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
