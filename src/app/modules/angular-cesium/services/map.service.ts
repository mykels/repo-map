import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapService {
  private initSubject = new Subject<any>();
  private viewer: any;

  initViewer(viewer) {
    this.viewer = viewer;
    this.initSubject.next(this.viewer);
  }

  getViewer(): any {
    return this.viewer;
  }

  onInit(): Observable<any> {
    return this.initSubject;
  }
}
