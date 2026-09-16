import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  itens: ItemCesta[] = [
    {
      "codigo": 1,
      "nome": "Martelo de Unha 25mm",
      "quantidade": 2,
      "valor": 29.00
    },
    {
      "codigo": 2,
      "nome": "Chave de Fenda 6x150mm",
      "quantidade": 1,
      "valor": 18.50
    },
    {
      "codigo": 8,
      "nome": "Furadeira de Impacto 650W",
      "quantidade": 1,
      "valor": 250.00
    }
  ];

  total: number = 326.50;
}
