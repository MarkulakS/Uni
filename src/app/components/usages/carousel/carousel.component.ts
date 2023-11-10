import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    // { label: 'Studiuj u nas!', text: 'UO to 12 wydziałów i 18 instytutów. Znajdź coś dla siebie!', url: 'https://www.uni.opole.pl/uploads/slider-big/2023-06-15-094029.jpg'},
    { label: 'Chcesz studiować na UO? Poznaj nas!', text: 'Z ogromną przyjemnością zapraszamy Was na Dzień Otwarty na Uniwersytecie Opolskim, który odbędzie się 24 października 2023 roku.', url: 'https://www.uni.opole.pl/uploads/slider-big/2023-10-02-151845.jpg'},
    { label: 'Uniwersytet Opolski - solidarni z Ukrainą', text: 'Drodzy studenci z Ukrainy - wspólnota akademicka stoi za Wami!', url: 'https://www.uni.opole.pl/uploads/slider-big/2022-02-25-072556.jpg'},
    { label: 'Pałac w Dąbrowie, budynek UO przy ul. Dmowskiego w centrum Opola - współpracujmy!', text: 'UO organizuje konsultacje dla sektora prywatnego', url: 'https://www.uni.opole.pl/uploads/slider-big/2021-11-23-101256.png'},
    { label: 'Studiuj po Angielsku!', text: 'Atrakcyjne kierunki: International Business, Paleobiology, Sustainable Development, Global Studies', url: 'https://www.uni.opole.pl/uploads/slider-big/2020-01-27-125916.jpg'},
    { label: 'Kampus UO - centrum życia studenckiego', text: 'Uniwersytet Opolski ma jeden z najciekawszych i najlepiej położonych kampusów w Polsce', url: 'https://www.uni.opole.pl/uploads/slider-big/2020-04-30-151830.jpg'},
    { label: 'Jeszcze lepsze efekty ewaluacji na UO!', text: 'Aż pięć dyscyplin naukowych uprawianych w Uniwersytecie Opolskim ma ostatecznie wyższą ocenę od pierwotnej przyznanej przez Ministerstwo Edukacji i Nauki.', url: 'https://www.uni.opole.pl/uploads/slider-big/2023-03-23-114135.jpg'}
  ]

}
