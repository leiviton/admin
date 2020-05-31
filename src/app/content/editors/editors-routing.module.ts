import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';

import { QuillDefaultComponent } from './components/quill-editor/quill-default/quill-default.component';
import { CkDefaultComponent } from './components/ckeditor/ck-default/ck-default.component';
import { QuillReactiveFormsComponent } from './components/quill-editor/quill-reactive-forms/quill-reactive-forms.component';
import { QuillBubbleComponent } from './components/quill-editor/quill-bubble/quill-bubble.component';
import { CkBindingOptionsComponent } from './components/ckeditor/ck-binding-options/ck-binding-options.component';

const routes: Routes = [
    // Module is lazy loaded, see app-routing.module.ts
    {
        path: 'quill',
        children: [
            {
                path: 'basic',
                component: QuillDefaultComponent,
                data: { title: extract('Quill Default') }
            },
            {
                path: 'bubble',
                component: QuillBubbleComponent,
                data: { title: extract('Quill Bubble Editor') }
            },
            {
                path: 'reactive-forms',
                component: QuillReactiveFormsComponent,
                data: { title: extract('Reactive Forms') }
            }
        ]
    },

    {
        path: 'ckeditor',
        children: [
            {
                path: 'classic',
                component: CkDefaultComponent,
                data: { title: extract('CKEditor Default') }
            },
            {
                path: 'binding-options',
                component: CkBindingOptionsComponent,
                data: { title: extract('Binding Options') }
            }
        ]
    },

    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorsRoutingModule {
    static declarations = [
        QuillDefaultComponent,
        QuillReactiveFormsComponent,
        QuillBubbleComponent,
        CkDefaultComponent,
        CkBindingOptionsComponent
    ];
}
