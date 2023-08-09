import { Component, OnInit, ViewChild } from '@angular/core';
import { Assingment } from 'src/app/models/assingment.model';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { GridOptions, ICellRendererParams } from 'ag-grid-community';



@Component({
  selector: 'app-pendingtask',
  templateUrl: './pendingtask.component.html',
  styleUrls: ['./pendingtask.component.css']
})
export class PendingtaskComponent implements OnInit {

  ngOnInit(): void {

  }

}
















