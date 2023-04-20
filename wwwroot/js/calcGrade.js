$(document).ready(function () {
    //This runs when the Calculate button is clicked
    $('#calculate').click(function () {
        // Creates variables to hold the input from the user, and takes the data from the HTML form.
        var assignments = parseFloat($('#assignments').val());
        var groupProjects = parseFloat($('#groupProjects').val());
        var quizzes = parseFloat($('#quizzes').val());
        var midtermExam = parseFloat($('#midtermExam').val());
        var finalExam = parseFloat($('#finalExam').val());
        var intex = parseFloat($('#intex').val());

        //Calculated the grade percentage by multiplying each category by their values.
        var total = ((assignments * .5) + (groupProjects * .1) + (quizzes * .1) + (midtermExam * .1) + (finalExam * .1) + (intex * .1));

        //Creates the letterGrade variable
        var letterGrade;

        //if statement to determin what letter grade goes with the total percentage
        if (total >= 94) {
            letterGrade = "A";
        } else if (total >= 90) {
            letterGrade = "A-";
        } else if (total >= 87) {
            letterGrade = "B+";
        } else if (total >= 84) {
            letterGrade = "B";
        } else if (total >= 80) {
            letterGrade = "B-";
        } else if (total >= 77) {
            letterGrade = "C+";
        } else if (total >= 74) {
            letterGrade = "C";
        } else if (total >= 70) {
            letterGrade = "C-";
        } else if (total >= 67) {
            letterGrade = "D+";
        } else if (total >= 64) {
            letterGrade = "D";
        } else if (total >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }

        //Sends the letter grade and total percentage back to the HTML page to be displayed in the form
        $('#letterGrade').text(letterGrade);
        $('#total').text(total);
    });
});