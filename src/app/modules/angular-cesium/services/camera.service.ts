import {MapService} from './map.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CameraService {
  constructor(private mapService: MapService) {

  }

  flyTo(position: any) {
    this.mapService.getViewer().scene.camera.flyTo(position);
  }
}
