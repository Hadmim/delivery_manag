import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
 
})

export class OrdersTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
columnsToDisplay :string[]= ["N° Order", "Payment way", "Reservation date", "Payment delay", "Montant total", "Addrees delivery", "Staus Delivery", "Status Order"];
rows:any =[
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
  {
    'N° Order': '16654',
    'Payment way': "Dhahabia",
    'Reservation date': "2021-03-04",
    'Payment delay': '5',
    'Montant total': '1200',
    'Addrees delivery': "algeria/eloued/echatt",
    'Staus Delivery': "waiting",
    'Status Order': "reserved",
  },
];


}

  

 
  
