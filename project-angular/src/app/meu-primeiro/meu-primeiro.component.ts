import  {Component} from '@angular/core';

@Component({
	selector:'meu-primeiro-component',
	template: `
 		<p>Meu primeiro component com angular 6</p> 
 		{{title}}
	`
})
export class MeuPrimeiroComponent{
    title = 'Teste atributo class';
}