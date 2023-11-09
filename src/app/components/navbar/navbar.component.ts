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
      label: 'doktorant',
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
      label: 'pracownik',
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
      label: 'nauka',
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
      label: 'biznes',
      links: [
        {label: 'wybory', url: '#'},
        {label: 'kontakt', url: '#'},
        {label: 'o uczelni', url: '#'},
        {label: 'strukura', url: '#'},
        {label: 'władze', url: '#'},
        {label: 'monitor uo', url: '#'},
        {label: 'strategia rozwoju', url: '#'}
      ]
    }
  ]

}
