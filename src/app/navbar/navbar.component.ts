import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() seccionContacto: any;
@Input() seccionExperiencia: any;
@Input() seccionHabilidades: any;
@Input() seccionSobremi: any;
  constructor() { }

  ngOnInit(): void {
  }

  scrollHaciaExperiencia() {
    this.seccionExperiencia.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );
  }

  scrollHaciaHabilidades() {
    this.seccionHabilidades.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );
  }

  scrollHaciaContacto() {
    this.seccionContacto.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );
  }

  scrollHaciaSobremi() {
    this.seccionSobremi.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
    );
  }

}
