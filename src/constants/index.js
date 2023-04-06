export const MESSAGES = {
  bad_request: "Getting error, due to bad request.",
  token_missing: 'Token missing from header.',
  acc_already_exists: "Account already exists please try with different email id.",
  invalid_password: "Incorrect Password.",
  user_not_found: 'An account with given info does not exist.',
  profile_fetched: "Profile fetched successfully.",
  profileUpdated: "Profile updated successfully.",
  users_fetched: "All Users fetched successfully"
}

export const CODE = {
  error_code: 400
}

export const defaultServerResponse = {
  status: 400,
  success: false,
  message: '',
  body: {}
}
export const USER_SECRET_KEY = "test";