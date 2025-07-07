// Check if person is eligible for international travel based on age and passport status

var age = 25;
var hasPassport = true;

if (age < 18) {
  console.log("You are under 18. You need parental permission to travel.");
} else if (age >= 18 && hasPassport === true) {
  console.log("You are eligible for international travel.");
} else {
  console.log(
    "You are not eligible for international travel. Get a valid passport."
  );
}

// Now let's select mode of transport using switch

var transport = "Train";

switch (transport) {
  case "Bus":
    console.log("You have selected Bus. Estimated travel time: 5 hours.");
    break;
  case "Train":
    console.log("You have selected Train. Estimated travel time: 3 hours.");
    break;
  case "Flight":
    console.log("You have selected Flight. Estimated travel time: 1 hour.");
    break;
  default:
    console.log(
      "Invalid transport selected. Please choose Bus, Train, or Flight."
    );
    break;
}
