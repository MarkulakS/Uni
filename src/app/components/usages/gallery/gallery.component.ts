import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showGallery() {
    console.log('show more gallery');
  }

  row1 = [
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2020-09-07-083115.jpg'},
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2020-09-07-082900.jpg'},
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2020-09-06-134621.jpg'}
  ]
  row2 = [
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2019-09-26-075226.jpg'},
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2019-09-26-074841.jpg'},
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2019-07-17-140230.jpg'}
  ]
  row3 = [
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2019-07-04-152135.jpg'},
    { link: 'https://uni.opole.pl/uploads/slider-big/thumbnail/2019-07-04-151808.jpg'},
    { link: './assets/more-gallery2.jpg'}
  ]
}

