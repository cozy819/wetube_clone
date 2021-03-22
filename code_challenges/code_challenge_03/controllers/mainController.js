function funcHome(req, res) {
  res.render("home", { pageTitle: "Home" });
}
function funcLogin(req, res) {
  res.render("login", { pageTitle: "Login" });
}
function funcPhotos(req, res) {
  res.render("photos", { pageTitle: "Photos" });
}
function funcProfile(req, res) {
  res.render("profile", { pageTitle: "Profile" });
}

export const home = funcHome;
export const login = funcLogin;
export const photos = funcPhotos;
export const profile = funcProfile;
