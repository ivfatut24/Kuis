import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
//  styleUrls: ['./tugas3.component.css']

styles:[`
        .online {
            color:  white;
        }      
    `]

})
export class Tugas3Component implements OnInit {

status = false;
tulisan = '';
servers = ['TestServer', 'TestServer 2'];
showPar = false;
log = [];

constructor() { }

  ngOnInit() {
}
onCreationStatus(){
  if(this.status == false){
    this.tulisan= 'POLITEKNIK NEGERI MALANG';
    this.status = true;
  } else {
    this.tulisan = '';
    this.status = false;
  }
  this.log.push(this.log.length+1);
}
}