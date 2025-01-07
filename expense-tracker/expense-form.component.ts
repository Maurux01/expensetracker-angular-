import { Component } from '@angular/core';
import { ExpenseService, Expense } from '../../services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent {
  description = '';
  amount: number | null = null;
  category = '';
  date = '';

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    if (this.description && this.amount && this.category && this.date) {
      const newExpense: Expense = {
        id: Date.now(),
        description: this.description,
        amount: this.amount,
        category: this.category,
        date: this.date,
      };
      this.expenseService.addExpense(newExpense);

      // Reset form
      this.description = '';
      this.amount = null;
      this.category = '';
      this.date = '';
   
