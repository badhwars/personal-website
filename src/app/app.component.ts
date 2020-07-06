import { Component } from '@angular/core';
interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
  img: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sarvesh-badhwar';



    tiles: Tile[] = [
    {text: 'One', cols: 8,rows: 4, color: '#347B98', link: '', img: "../assets/linkedin.jpg"},
    {text: 'Two', cols: 8, rows: 4, color: '#06B4F9', link: '', img: "../assets/linkedin.jpg"},
    {text: 'Three', cols: 8, rows: 4, color: '#56A0BD' , link: '', img: "../assets/linkedin.jpg"},
    {text: 'Four', cols: 4, rows: 2, color: '#CDFF05' , link: '', img: "../assets/linkedin.jpg" },
    {text: 'Github', cols: 4, rows: 2, color: '#347B98' , link: 'https://github.com/badhwars', img: "../assets/linkedin.jpg"},
    {text: 'LinkedIN', cols: 4, rows: 2, color: '#092834', link: 'https://www.linkedin.com/in/sarveshb53/', img: "../assets/linkedin.jpg"},
    {text: 'Resume', cols: 4, rows: 2, color: '#06B4F9',link: "https://drive.google.com/file/d/1RyydYDQIeK0vUAzbBek31gC8cLIHVs6e/view?usp=sharing", img: "../assets/linkedin.jpg"},
    // {text: 'Eight', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}
 

