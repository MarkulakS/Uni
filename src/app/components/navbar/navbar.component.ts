import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainLinks = [
    { 
      label: 'uczelnia',
      id: 'flush-collapseOne',
      links: [
        {label: 'wybory', url: '#'},
        {label: 'kontakt', url: '#'},
        {label: 'o uczelni', url: '#'},
        {label: 'strukura', url: '#'},
        {label: 'władze', url: '#'},
        {label: 'monitor uo', url: '#'},
        {label: 'strategia rozwoju', url: '#'}
      ]
    },
    { 
      label: 'kandydat',
      id: 'flush-collapseTwo',
      links: [
        {label: 'studia 2023/2024', url: '#'},
        {label: 'szkoła doktorska', url: '#'},
        {label: 'studia podyplomowe', url: '#'},
        {label: 'rekrutacja zimowa 2022/2023 (archiwum)', url: '#'},
        {label: 'cudzoziemiec', url: '#'}
      ]
    },
    { 
      label: 'student',
      id: 'flush-collapseThree',
      links: [
        {label: 'wybory', url: '#'},
        {label: 'kontakt', url: '#'},
        {label: 'E-learning - platforma Moodle', url: '#'},
        {label: 'Kalendarz akademicki', url: '#'},
        {label: 'Samorząd Studencki', url: '#'},
        {label: 'USOS', url: '#'},
        {label: 'Kampus UO', url: '#'},
        {label: 'Erasmus', url: '#'},
        {label: 'Sport', url: '#'},
        {label: 'Legia Akademicka', url: '#'},
        {label: 'Koła Naukowe', url: '#'},
        {label: 'Zaproś wykładowcę', url: '#'},
        {label: 'Akademickie Centrum Karier', url: '#'}
      ]
    },
    { 
      label: 'doktorant'
    },
    { 
      label: 'pracownik',
      id: 'flush-collapseFive',
      links: [
        {label: 'Aktualności pracownicze', url: '#'},
        {label: 'Pracownicze Plany Kapitałowe', url: '#'},
        {label: 'Oferta grantów', url: '#'},
        {label: 'E-learning - platforma Moodle', url: '#'},
        {label: 'Oferty pracy', url: '#'},
        {label: 'Biuro Spraw Pracowniczych', url: '#'},
        {label: 'Elektroniczna legitymacja służbowa', url: '#'},
        {label: 'Dokumenty do pobrania', url: '#'},
        {label: 'Związki zawodowe', url: '#'},
        {label: 'SIP', url: '#'},
        {label: 'Szukaj', url: '#'}
      ]
    },
    { 
      label: 'nauka',
      id: 'flush-collapseSix',
      links: [
        {label: 'Postępowania awansowe', url: '#'},
        {label: 'Jednostki badawcze', url: '#'},
        {label: 'Granty', url: '#'},
        {label: 'Czasopisma ', url: '#'},
        {label: 'Wydawnictwa UO', url: '#'},
        {label: 'Baza Wiedzy UO', url: '#'},
        {label: 'Współpraca z zagranicą', url: '#'},
        {label: 'Projekty finansowane z budżetu państwa', url: '#'},
      ]
    },
    { 
      label: 'biznes',
      id: 'flush-collapseSeven',
      links: [
        {label: 'Oferta dla biznesu', url: '#'},
        {label: 'Inkubator Przedsiębiorczości', url: '#'},
        {label: 'Uniwersyteckie Centrum Transferu Wiedzy i Technologii', url: '#'},
        {label: 'Umowy i porozumienia', url: '#'},
        {label: 'Wynajem sal', url: '#'},
        {label: 'Potencjał intelektualny', url: '#'},
        {label: 'Partnerzy', url: '#'}
      ]
    }
  ]

}
