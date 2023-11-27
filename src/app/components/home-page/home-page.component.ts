import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  departmenst = [
    { label: 'Wydział Chemii', link: '#' },
    { label: 'Wydział Ekonomiczny', link: '#' },
    { label: 'Wydział Filologiczny', link: '#' },
    { label: 'Wydział Lekarski', link: '#' },
    { label: 'Wydział Matematyki, Fizyki i Informatyki', link: '#' },
    { label: 'Wydział Nauk o Polityce i Komunikacji Społecznej', link: '#' },
    { label: 'Wydział Nauk o Zdrowiu', link: '#' },
    { label: 'Wydział Nauk Społecznych', link: '#' },
    { label: 'Wydział Prawa i Administracji', link: '#' },
    { label: 'Wydział Przyrodniczo-Techniczny', link: '#' },
    { label: 'Wydział Sztuki', link: '#' },
    { label: 'Wydział Teologiczny', link: '#' }
  ]

}
