import { inject, Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transactions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {

  private httpclient = inject(HttpClient);
  
 getAll() {
   return this.httpclient
      .get<Transaction[]>('http://localhost:3000/transactions')
  }

  
}
