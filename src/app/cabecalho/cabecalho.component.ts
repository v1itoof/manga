import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('body').on('click', '.js_input_fechado', function(event){
        event.preventDefault();

        $('.js_botao_pesquisar').addClass('js_input_aberto');
        $('.js_botao_pesquisar').removeClass('js_input_fechado');

        $('.js_input_pesquisa').show('slow');
        console.log('teste');

    });

    setInterval(function() {
        if ($('#input-pesqusa-manga').val() === '') {
            $('.js_botao_pesquisar').removeClass('js_input_aberto');
            $('.js_botao_pesquisar').addClass('js_input_fechado');

            $('.js_input_pesquisa').hide('slow');
        }
    }, 5000);

    });
  }
}
