import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding-componente',
  templateUrl: './data-binding-componente.component.html',
  styleUrls: ['./data-binding-componente.component.css']
})
export class DataBindingComponenteComponent implements OnInit {
	classes = ["alert-success","alert-info","alert-warning","alert-danger"];
 valorAtual:String="";
 valorSalvo:String="";
 isMouseOver:boolean = false;
  
  nome:string ='abc';
  pessoa:any = {
  	nome:"felipe",
  	idade:23,
  }
  constructor() { }

  ngOnInit() {
  }
  botaoClicado(){
  	alert("Clicou no botão");
  }

  onkeyUp(evento:KeyboardEvent){
  	this.valorAtual=(<HTMLInputElement> evento.target).value;

  }
  salvarValor(valor){
  	this.valorSalvo = valor;
  }
  onMouseOverOut(){
   this.isMouseOver = !this.isMouseOver;
  }
}
