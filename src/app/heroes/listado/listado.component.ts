import { LifecycleHooks } from "@angular/compiler/src/lifecycle_reflector";
import { Component } from "@angular/core";

@Component({
    selector:'app-listado',
    templateUrl:'./listado.component.html'
})
export class ListadoComponent{
    heroes:string[]=['spiderman','Iroman','hulk','thor','Capitan America'];
    dato:string='';
    

        borradorHeroe(){
            console.log(this.heroes.shift());
            this.dato=this.heroes.shift() || '';

        }
}