import { Component } from '@angular/core';

@Component({
  selector: 'app-hbooking',
  templateUrl: './hbooking.component.html',
  styleUrls: ['./hbooking.component.css']
})
export class HbookingComponent {

  roomTypeCosts: { [key: string]: number } = {
    single: 50,
    double: 80,
    suite: 120
  };

  numRoomsCosts: { [key: string]: number } = {
    '1': 0,
    '2': 50,
    '3': 100
  };

  numPersonsCosts: { [key: string]: number } = {
    '1': 0,
    '2': 20,
    '3': 40
  };

  numChildrenCosts: { [key: string]: number } = {
    '0': 0,
    '1': 10,
    '2': 20
  };

  restaurantFacilitiesCosts: { [key: string]: number } = {
    yes: 30,
    no: 0
  };

  // Function to calculate total cost
  calculateCost(): void {
    // Get selected values from the form
    let selectedRoomType = (document.getElementById('roomType') as HTMLSelectElement).value;
    let selectedNumRooms = (document.getElementById('numRooms') as HTMLSelectElement).value;
    let selectedNumPersons = (document.getElementById('numPersons') as HTMLSelectElement).value;
    let selectedNumChildren = (document.getElementById('numChildren') as HTMLSelectElement).value;
    let selectedRestaurantFacilities = (document.getElementById('restaurantFacilities') as HTMLSelectElement).value;

    // Calculate total cost based on selected options
    let totalCost =
      this.roomTypeCosts[selectedRoomType] +
      this.numRoomsCosts[selectedNumRooms] +
      this.numPersonsCosts[selectedNumPersons] +
      this.numChildrenCosts[selectedNumChildren] +
      this.restaurantFacilitiesCosts[selectedRestaurantFacilities];

    // Update the displayed total cost
    let totalCostButton = document.querySelector('.purple-btn') as HTMLButtonElement;
    totalCostButton.textContent = '$' + totalCost.toFixed(2);
  }







}



 


