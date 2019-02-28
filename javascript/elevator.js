
class Elevator {
  constructor(startingFloor, floorCount) {
    this.currentFloor = startingFloor;
    this.doorOpened = false;
    this.floorCount = floorCount;
  }

  moveToFloor(floor) {
    if (floor <= this.floorCount) {
      this.closeDoor();
      this.currentFloor = floor;
    }
  }

  openDoor() {
    this.doorOpened = true;
  }

  closeDoor() {
    this.doorOpened = false;
  }

  getCurrentFloor() {
    return this.currentFloor;
  }
}

let hospitalElevator = new Elevator(0, 8);
let ibmElevator = new Elevator(0, 5);
ibmElevator.open();
ibmElevator.moveToFloor(3);
ibmElevator.open();
ibmElevator.moveToFloor(0);
ibmElevator.open();
