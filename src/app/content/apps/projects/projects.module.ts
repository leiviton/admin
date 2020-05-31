import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';

import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [...ProjectsRoutingModule.declarations],
    imports: [SharedModule, UtilsModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
