import { Injectable } from '@angular/core';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];

  constructor() {
    this.loadExpenses();
  }

  private loadExpenses() {
    const savedExpenses = localStorage.getItem('expenses');
    this.expenses = savedExpenses ? JSON.parse(savedExpenses) : [];
  }

  private saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.saveExpenses();
  }

  getTotal(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}
