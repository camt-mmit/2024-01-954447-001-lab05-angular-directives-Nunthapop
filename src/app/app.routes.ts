import { Routes } from '@angular/router';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';

export const routes: Routes = [
    { 
        path: 'dynamic-section', 
        component: DynamicSectionComponent
    },
    {
        path: 'dynamic-input',
        component: DynamicInputComponent
    }
   
];
