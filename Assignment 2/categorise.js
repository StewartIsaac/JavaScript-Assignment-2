// Categorize Student Scores

function scoreCategory(score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 80) {
      return "Very Good";
    } else if (score >= 70) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
  
  // Loop through each student in the utme2024Students array
  
  utme2024Students.forEach(student => {
    const category = scoreCategory(student.score);
    console.log(`${student.firstName} ${student.lastName} - Score: ${student.score}, Category: ${category}`);
  });
  //---------------------------------------------------------