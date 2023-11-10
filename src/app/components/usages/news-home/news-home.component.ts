import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allNews = [
    { title: 'Rektor UO: dobrze wykorzystajcie przestrzeń wolności', link: '#', src: 'https://uni.opole.pl/uploads/news/h528/2023-10-03-211231.jpg', alt: 'news-image', date: '2023-10-02', text: 'Uroczysta inauguracja roku akademickiego 2023/2024 odbyła się 3 października 2023 r. w Auli Wydziału Teologicznego UO.'},
    { title: 'Tłumy na Dniu Otwartym UO ', link: '#', src: 'https://uni.opole.pl/uploads/news/h528/2023-10-25-075918.jpg', alt: 'news-image', date: '2023-10-24', text: 'Ponad 1300 uczniów odwiedziło mury naszej Alma Mater!'}
  ]

}
