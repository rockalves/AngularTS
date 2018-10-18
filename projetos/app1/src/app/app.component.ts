import { Component } from 'node_modules/@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app1';

  public encerrarJogo(tipo: string): void {
    console.log(tipo)
  }

}
