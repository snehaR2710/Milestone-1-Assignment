// Color Mixer
/**Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria:
 If color1 is "red" and color2 is "blue" or vice versa, print "purple". If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
 If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green".
 If any other com#ination of colors is input, the program should print "Invalid color com#ination".*/

 const mixColors = (color1, color2)  => {
    switch (color1.toLowerCase()) {
        case "red":
            switch (color2.toLowerCase()) {
                case "blue":
                    console.log("Purple");
                    break;
                case "yellow":
                    console.log("Orange");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        case "blue":
            switch (color2.toLowerCase()) {
                case "red":
                    console.log("Purple");
                    break;
                case "yellow":
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        case "yellow":
            switch (color2.toLowerCase()) {
                case "red":
                    console.log("Orange");
                    break;
                case "blue":
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;
        default:
            console.log("Invalid color combination");
    }
}

// Example usage:
mixColors("red", "blue");    // Output: Purple
mixColors("red", "yellow");  // Output: Orange
mixColors("blue", "yellow"); // Output: Green
mixColors("green", "red");   // Output: Invalid color combination
