const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Post = require('../../models/post');
const User = require('../../models/user');
const auth = require('../../middleware/auth');

router.post('/', auth,
  [
    check('text', 'Content is required').not().isEmpty(),
    check('userId', 'Owner is required').not().isEmpty(),
    check('summary', 'Summary is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { text, userId, summary } = req.body;

    try {
      const selectedUser = await User.findById(userId);

      if (selectedUser) {
        post = new Post({
          text,
          summary,
          user: {
            userId: selectedUser._id,
            name: selectedUser.name,
            email: selectedUser.email,
            gravatar: selectedUser.gravatar
          },
          archived: false,
        });
      }

      await post.save();
      res.json(post);

    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;