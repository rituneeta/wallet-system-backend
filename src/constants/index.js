export const MESSAGES = {
  bad_request: "Getting error, due to bad request.",
  token_missing: 'Token missing from header.',
  acc_already_exists: "Account already exists please try with different email id.",
  invalid_password: "Incorrect Password.",
  user_not_found: 'An account with given info does not exist.',
  profile_fetched: "Profile fetched successfully.",
  profileUpdated: "Profile updated successfully.",
  users_fetched: "Users fetched successfully",
  incorrect_passcode: "Passcord is incorrect. please enter a correct passcode.",
  insufficient_amount: "Insufficient amount.",
  receiver_wallet_not_available: "wallet of this user is not added.",
  wallet_user_invalid: "user is not added in the wallet table"
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