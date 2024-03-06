const AnswerModel = require("./AnswerModel");

//get
module.exports.getAnswer = async (req, res) => {
  const myAnswer = await AnswerModel.find();
  res.send(myAnswer);
};

//post
module.exports.saveAnswer = async (req, res) => {
  const { activity } = req.body;
  AnswerModel.create({ activity })
    .then((data) => { console.log('Activity added')
    res.send(data)
});
}