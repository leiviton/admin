import { NgModule } from '@angular/core';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';
import { NavigationsModule } from '@app/blocks/navigations/navigations.module';
import { DatePickersModule } from '@app/blocks/date-pickers/date-pickers.module';

import { FormComponentsRoutingModule } from './form-components-routing.module';
import { TextEditorsComponent } from './components/text-editors/text-editors.component';
import { MaskedInputsComponent } from './components/masked-inputs/masked-inputs.component';
import { CopyPasteComponent } from './components/copy-paste/copy-paste.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';
import { RadiosComponent } from './components/radios/radios.component';

@NgModule({
    declarations: [
        ...FormComponentsRoutingModule.declarations,
        TextEditorsComponent,
        MaskedInputsComponent,
        CopyPasteComponent,
        CardOptionsComponent,
        RadiosComponent
    ],
    imports: [
        SharedModule,
        UtilsModule,
        NavigationsModule,
        DropzoneModule,
        DatePickersModule,
        FormComponentsRoutingModule
    ]
})
export class FormComponentsModule {}
