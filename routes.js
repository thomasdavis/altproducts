const routes = require("next-routes");

module.exports = routes()
  .add("signup")
  .add("login")
  .add("chat")
  .add("forgot_password")
  .add("reset_password")
  .add("browse")
  .add("all")
  .add("new_contact")
  .add("sms")
  .add("logout")
  .add("dashboard")
  .add("settings")
  .add("connections")
  .add("profile", "/:username", "profile")
  .add("pdf", "/pdf/:username", "pdf");
