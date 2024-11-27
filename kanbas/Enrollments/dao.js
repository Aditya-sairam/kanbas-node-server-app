import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  // console.log("courseId")
  console.log(courseId)
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
  console.log(enrollments);
}


export function unEnrollUsers(userId, courseId) {
  const { enrollments } = Database; // Access enrollments from Database

  console.log("UserId:", userId);
  console.log("CourseId:", courseId);

  // Filter out the specific enrollment
  const updatedEnrollments = enrollments.filter(
    enrollment => !(enrollment.user === userId && enrollment.course === courseId)
  );

  // Update the Database enrollments
  Database.enrollments = updatedEnrollments;

  console.log("Updated Enrollments:", Database.enrollments);
}
