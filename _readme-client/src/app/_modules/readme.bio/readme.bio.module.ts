import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturePanelComponent } from './picture-panel/picture-panel.component';
import { DevinfoPanelComponent } from './devinfo-panel/devinfo-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PicturePanelComponent, DevinfoPanelComponent],
  exports: [PicturePanelComponent, DevinfoPanelComponent]

})
export class ReadmeBioModule { }
