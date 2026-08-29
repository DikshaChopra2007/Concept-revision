//Write a function getGrade(score) that
//Takes a student's marks (0 to 100)
//and returns a grade based on the following criteria:
//90-100: A+
//80-89: A
//70-79: B
//60-69: C
//33-59: D
//0-32: F
//Anything else: Invalid score

function getGrade(score) {
    if(score>=90 && score<=100){
        return "A+";   }