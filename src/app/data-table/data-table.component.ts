import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  Name: string;
  Roll_No: number;
  Gender: string;
  DOB: string;
  Class:number;
  Pin:number;
  Marks:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Roll_No: 1, Name: 'PRANAY', Gender: 'M', DOB: '31-10-2001',Class:8,Pin:14450,Marks:89},
  {Roll_No: 2, Name: 'ISHIKA JAIN', Gender: 'F', DOB: '15-9-2000',Class:9,Pin:14908,Marks:91},
  {Roll_No: 3, Name: 'RANVEER RAJ', Gender: 'M', DOB: '17-4-2000',Class:9,Pin:46546,Marks:88},
  {Roll_No: 4, Name: 'KANAK SHARMA', Gender: 'F', DOB: '11-7-2001',Class:8,Pin:46346,Marks:99},
  {Roll_No: 5, Name: 'OM JAISWAL', Gender: 'M', DOB: '12-11-1999',Class:10,Pin:97868,Marks:70},
  {Roll_No: 6, Name: 'JANHAVI PATIL', Gender: 'F', DOB: '5-12-1999',Class:10,Pin:57575,Marks:99},
  {Roll_No: 7, Name: 'PRAJOT SARDAR', Gender: 'M', DOB: '1-7-2000',Class:9,Pin:68779,Marks:96},
  {Roll_No: 8, Name: 'PRIYANSHU SONI', Gender:'M', DOB: '19-9-2001',Class:8,Pin:99808,Marks:85},
  {Roll_No: 9, Name: 'RAGHAV GUPTA', Gender: 'M', DOB: '18-2-2000',Class:9,Pin:78777,Marks:91},
  {Roll_No: 10, Name: 'KEERTI JAIN', Gender: 'F', DOB: '14-3-2001',Class:8,Pin:40461,Marks:87},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  displayedColumns: string[] = ['Roll_No', 'Name', 'Gender', 'DOB','Class','Pin','Marks' ];
  dataSource = ELEMENT_DATA;

}
