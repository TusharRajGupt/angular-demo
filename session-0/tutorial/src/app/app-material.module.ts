import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialMods = [
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
];

@NgModule({
    imports: materialMods,
    exports: materialMods,
})
export class AppMaterialModule {}
