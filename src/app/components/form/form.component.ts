import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() buscar= new EventEmitter()
  user:string;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.buscar.emit(this.user)    
  }

}
