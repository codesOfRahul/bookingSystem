import { Component } from '@angular/core';

@Component({
  selector: 'app-hbooking',
  templateUrl: './hbooking.component.html',
  styleUrls: ['./hbooking.component.css']
})
export class HbookingComponent {
   calculateCost(): void {
    // Add your calculation logic here based on the form inputs
    // Update the total cost input field with the calculated value
    // For example:
    const numRooms: number = parseFloat((document.getElementById('numRooms') as HTMLSelectElement).value);
    const numPersons: number = parseFloat((document.getElementById('numPersons') as HTMLSelectElement).value);
    const numChildren: number = parseFloat((document.getElementById('numChildren') as HTMLSelectElement).value);
    const totalCost: number = numRooms * 100 + numPersons * 50 + numChildren * 25;

    // Display the total cost in the input field
    (document.getElementById('totalCost') as HTMLInputElement).value = totalCost.toFixed(2);
}
}
