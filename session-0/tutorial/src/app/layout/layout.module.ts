import { NgModule } from '@angular/core';

import { HeadComponent } from './head/head.component';
import { NeckComponent } from './neck/neck.component';
import { TorsoComponent } from './torso/torso.component';

const layoutComponents = [
    HeadComponent, NeckComponent, TorsoComponent
];

@NgModule({
    declarations: layoutComponents,
    exports: layoutComponents,

})

export class LayoutModule {}
