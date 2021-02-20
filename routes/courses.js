const express = require('express');
const {
  getCourses,
  getCourse,
  //   updateCourse,
  createCourse,
  //   deleteCourse,
  //   getCoursesInRadius,
} = require('../controllers/courses');
const router = express.Router({ mergeParams: true });

// router.route('/radius/:zipcode/:distance').get(getCoursesInRadius);

router.route('/').get(getCourses).post(createCourse);

router.route('/:id').get(getCourse);
// .put(updateCourse).delete(deleteCourse);
module.exports = router;
