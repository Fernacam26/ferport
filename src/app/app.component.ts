import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('seccioncontacto') seccioncontacto: ElementRef | any
  @ViewChild('seccionexperiencia') seccionexperiencia: ElementRef | any
  @ViewChild('seccionhabilidades') seccionhabilidades: ElementRef | any
  @ViewChild('seccionsobre-mi') seccionsobremi: ElementRef | any
  ngOnInit(): void {


  }


}
