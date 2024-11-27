import courses from "../Database/courses.js";
import Database from "../Database/index.js";

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  Database.courses = courses.filter((course) => course._id !== courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
);}

export function findAllCourses() {
  return Database.courses;
}

export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = Database;
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }
  

  export function createCourse(course) {
    const newCourse = { ...course, _id: Date.now().toString() };
    Database.courses = [...Database.courses, newCourse];
    return newCourse;
  }

  export function updateCourse(courseId, courseUpdates) {
    const { courses } = Database;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
  }
  
  
  // export function findCoursesForEnrolledUser(userId){
  //   const {Courses} = Database;
  //   const course = Courses.find((c) => c.userId === userId);
  //   return course;
  // }

// export default function deleteCourse(courseId){
//   const {Courses} = Database;
//   const courses = Courses.filter((c) => c._id !== courseId);
//   return courses;
// }