import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BaseInputsComponent } from './components/base-inputs/base-inputs.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { DatePickersComponent } from './components/date-pickers/date-pickers.component';
import { FileUploadersComponent } from './components/file-uploaders/file-uploaders.component';
import { InputGroupsComponent } from './components/input-groups/input-groups.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { SelectsComponent } from './components/selects/selects.component';
import { StickyBarComponent } from './components/sticky-bar/sticky-bar.component';
import { CopyPasteComponent } from './components/copy-paste/copy-paste.component';
import { MaskedInputsComponent } from './components/masked-inputs/masked-inputs.component';
import { CardOptionsComponent } from './components/card-options/card-options.component';
import { RadiosComponent } from './components/radios/radios.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    { path: '', redirectTo: 'basic-inputs', pathMatch: 'full' },
    {
        path: 'basic-inputs',
        component: BaseInputsComponent,
        data: { title: extract('Basic Inputs') }
    },
    {
        path: 'checkboxes',
        component: CheckboxesComponent,
        data: { title: extract('Checkboxes') }
    },
    {
        path: 'copy-paste',
        component: CopyPasteComponent,
        data: { title: extract('Copy & Paste') }
    },
    {
        path: 'date-pickers',
        component: DatePickersComponent,
        data: { title: extract('Date pickers') }
    },
    {
        path: 'file-uploaders',
        component: FileUploadersComponent,
        data: { title: extract('File uploaders') }
    },
    {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: { title: extract('Input groups') }
    },
    {
        path: 'masked-inputs',
        component: MaskedInputsComponent,
        data: { title: extract('Masked Inputs') }
    },
    {
        path: 'radios',
        component: RadiosComponent,
        data: { title: extract('Radios') }
    },
    {
        path: 'radio-cards',
        component: CardOptionsComponent,
        data: { title: extract('Radio Cards') }
    },
    {
        path: 'sliders',
        component: SlidersComponent,
        data: { title: extract('Range Sliders') }
    },
    {
        path: 'selects',
        component: SelectsComponent,
        data: { title: extract('Select2 selects') }
    },
    {
        path: 'sticky-bar',
        component: StickyBarComponent,
        data: { title: extract('Sticky Bar') }
    }

    //{ path: 'text-editors', component: TextEditorsComponent, data: { title: extract('Text editors') } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormComponentsRoutingModule {
    static declarations = [
        BaseInputsComponent,
        CheckboxesComponent,
        DatePickersComponent,
        FileUploadersComponent,
        InputGroupsComponent,
        SlidersComponent,
        SelectsComponent,
        StickyBarComponent
    ];
}
