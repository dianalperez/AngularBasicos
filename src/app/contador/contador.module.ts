import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contador/contador.components';


@NgModule({
    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ],
    imports:[
        CommonModule
    ]

})

export class ContadorModule{}


