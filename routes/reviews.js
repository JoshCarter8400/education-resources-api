const express = require('express');
const {
  getReviews,
  getReview,
  //   updateCourse,
  createReview,
  //   deleteCourse,
  //   getCoursesInRadius,
} = require('../controllers/reviews');

const Review = require('../models/Review');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');

const { protect, authorize } = require('../middleware/auth');

// router.route('/radius/:zipcode/:distance').get(getCoursesInRadius);

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, authorize('user', 'admin'), createReview);

router.route('/:id').get(getReview);
//   .delete(protect, authorize('publisher', 'admin'), deleteCourse)
//   .put(protect, authorize('publisher', 'admin'), updateCourse);

module.exports = router;
