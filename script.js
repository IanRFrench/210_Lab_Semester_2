// When the button is clicked
document.getElementById("calculate").onclick = function() {

    // Get input values
    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    let sub3 = parseInt(document.getElementById("sub3").value);

    // Calculate average
    let average = (sub1 + sub2 + sub3) / 3;

    // Determine grade
    let grade;

    if (average >= 90) {
        grade = "A";
    } 
    else if (average >= 80) {
        grade = "B";
    } 
    else if (average >= 70) {
        grade = "C";
    } 
    else if (average >= 60) {
        grade = "D";
    } 
    else {
        grade = "F";
    }

    // Display results
    document.getElementById("average").innerHTML = "Average: " + average.toFixed(2);
    document.getElementById("grade").innerHTML = "Grade: " + grade;
};