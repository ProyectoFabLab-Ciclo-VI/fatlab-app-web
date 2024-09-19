import { Component } from '@angular/core';

@Component({
  selector: 'app-debtor-list',
  templateUrl: './debtor-list.component.html',
  styleUrl: './debtor-list.component.css'
})
export class DebtorListComponent {
  // todo: scroll in this section
  debtors = [
    { name: 'Esau Morales Mostacero', code: 202312322, debt: 50 },
    { name: 'Jose Morales Mostacero', code: 202312322, debt: 50 },
    { name: 'Roberto Morales Mostacero', code: 202312322, debt: 50 },
    { name: 'Roberto Morales Mostacero', code: 202312322, debt: 50 },
    { name: 'Roberto Morales Mostacero', code: 202312322, debt: 50 },
    { name: 'Roberto Morales Mostacero', code: 202312322, debt: 50 },
  ];
}
