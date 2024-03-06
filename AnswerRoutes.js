const { Router } = require("express");
const { getAnswer, saveAnswer } = require('./AnswerController');
const router = Router();

router.get("/", getAnswer);
router.post("/saveAnswer", saveAnswer);

module.exports = router;
