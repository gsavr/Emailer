module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(402)
      .send({ error: "You must purchase credits to send out a survey" });
  }

  next(); /* next is what our middleware does when it's done(next middleware) */
};
