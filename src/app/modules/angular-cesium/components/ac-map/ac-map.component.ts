import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MapService} from '../../services/map.service';
import {CameraService} from '../../services/camera.service';

@Component({
  selector: 'ac-map',
  templateUrl: './ac-map.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcMapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() id: string;
  @Input() flyTo: any;

  viewer: any;

  constructor(private mapService: MapService,
              private cameraService: CameraService) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initViewer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flyTo) {
      this.flyToLocation(changes.flyTo.currentValue);
    }
  }

  private initViewer() {
    this.viewer = new Cesium.Viewer(this.id);
    this.mapService.initViewer(this.viewer);
  }

  private flyToLocation(position: any) {
    if (this.viewer) {
      this.cameraService.flyTo(position);
      this.viewer.scene.camera.flyTo(position);
    }
  }


}
