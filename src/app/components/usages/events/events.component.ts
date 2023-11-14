import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  toggleWillHappenEventsVisible = true;
  toggleHappenedEventsVisible = false; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleWillHappenEvents() {
    this.toggleWillHappenEventsVisible = true;
    this.toggleHappenedEventsVisible = false;
  }

  toggleHappenedEvents() {
    this.toggleHappenedEventsVisible = true;
    this.toggleWillHappenEventsVisible = false;
  }

  happenedEvents = [
    { title: 'Przerwa w dostępie do systemu bibliotecznego UO', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-10-25-075904.jpg', alt: 'event-image', text: 'Utrudnienia nastąpią w okresie od 17 do 21 listopada 2023 r.'},
    { title: 'Szkolenie Clarivate w korzystaniu z InCites Benchmarking & Analytics', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-07-145653.png', alt: 'event-image', text: 'Na wydarzenie obowiązują zapisy. '},
    { title: 'Kryształowe Medale „Przyjaciel Nietoperzy”', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-10-090013.jpg', alt: 'event-image', text: 'Nagroda dla naszych naukowców. '},
    { title: '"Złóż to sam"', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-08-142636.png', alt: 'event-image', text: 'Podcast Biura Dydaktyki i Spraw Studenckich.'},
    { title: 'Warsztaty coachingowe na UO ', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-14-141334.jpg', alt: 'event-image', text: 'Zapisz się już teraz! '}
  ]

  willHappenEvents = [
    { title: 'Genius loci. Żywa energia dawnych mieszkańców Opola', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-07-124125.jpg', alt: 'event-image', text: 'Wystawa w Bibliotece Głównej UO. '},
    { title: 'Wielki Test Wiedzy o Klimacie', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-10-130636.jpg', alt: 'event-image', text: 'Uniwersytet Opolski partnerem wydarzenia.'},
    { title: 'Msza za zmarłych pracowników', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-03-114932.jpg', alt: 'event-image', text: '10 listopada o godz. 19.00 w kościele seminaryjno-akademickim.'},
    { title: 'Jubileusz pracy naukowej i dydaktycznej', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-10-085627.jpg', alt: 'event-image', text: 'Prof. dr hab. Stanisławy Sokołowskiej '},
    { title: 'Dyplomatorium Katedry Nauk Socjologicznych ', link: '#', src: 'https://uni.opole.pl/uploads/news/thumbnail/2023-11-09-120622.jpg', alt: 'event-image', text: 'Wydarzenie zakończyło się tradycyjnym rzutem biretem. '}
  ]
}
