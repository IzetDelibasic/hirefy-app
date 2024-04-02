import { UnauthenticatedError } from "../errors/customErrors.js";

export const authenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid");
  next();
};
