import {Component} from 'node_modules/@angular/core'

@Component({
    /** 
     * Selectors: 
     * 
     * selector:'.app-topo' (ponto)
     * Será utilizado no html do componente como uma classe
     * Ex.: <div class='app-topo'>
     * 
     * selector:'app-topo' (componente)
     * SErá utilizado como componente em tag html
     * Ex.: <app-topo></app-topo>
     * 
     * selector:'[app-topo]'
     * Será utilizado em forma de atributo
     * Ex.: <div app-topo></div> 
     * 
     * * */
    
    selector:'.app-topo',
    templateUrl:'./topo.component.html',
    styleUrls:['./topo.component.css']
    //styles:['.exemplo{color:red}']
}
)

export class TopoComponent{


}