us_grading_system = {
  "A": 90,
  "B": 80,
  "C": 70,
  "D": 60,
  "F": 0
}

uk_grading_system = {
  "A": 70,
  "B": 60,
  "C": 50,
  "D": 40,
  "F": 0
}

task_grading_system = {
  "A+": 90,
  "A": 80,
  "B": 70,
  "C": 60,
  "D": 50,
  "E": 40,
  "F": 30,
  "Fail": 0
}

// Input scores
scores = [55]

console.log("Scores:", scores)

function graderFactory(context) {

  // enforce sorted in descending order i.e. highest grade first
  const sorted_grading_system = Object.entries(context.grading_system).sort((a, b) => b[1] - a[1])

  console.log("Grading system:", sorted_grading_system)

  const grade = (score) => {
    if (score < 0 || score > 100) {
      return "Invalid"
    }
    for (const [grade, min_score] of sorted_grading_system) {
      if (score >= min_score) {
        return grade
      }
    }
    return grade
  }

  return { grade }
}

// Choose your grading system

grader = graderFactory({
  grading_system: task_grading_system
})

grades = scores.map(grader.grade)

console.log("Grades:", grades)
