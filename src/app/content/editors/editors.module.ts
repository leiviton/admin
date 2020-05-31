import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { UtilsModule } from '@app/blocks/utils';

import { QuillModule } from 'ngx-quill';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EditorsRoutingModule } from './editors-routing.module';

@NgModule({
    declarations: [...EditorsRoutingModule.declarations],
    imports: [
        SharedModule,
        UtilsModule,
        QuillModule,
        CKEditorModule,
        EditorsRoutingModule
    ]
})
export class EditorsModule {}
