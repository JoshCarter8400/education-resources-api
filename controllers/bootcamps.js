// @desc Get all bootcamps
// @route Get /api/v1/bootcamps
// @access Public no token needed
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @access Public no token needed
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show single bootcamps' });
};

// @desc Create new bootcamp
// @route Post /api/v1/bootcamps
// @access Private  token needed
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new bootcamps' });
};

// @desc Update bootcamp
// @route Put /api/v1/bootcamps/:id
// @access Private  token needed
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

// @desc Delete bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private token needed
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
