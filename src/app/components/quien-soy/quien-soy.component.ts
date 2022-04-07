import { Component, OnInit } from '@angular/core';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
