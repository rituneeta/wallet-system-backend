export const MESSAGES = {
  success: 'Success.',
  signup_success: "Successfully created an account.",
  login_success: "Successfully login!",
  email_exist: "we can't update the email because this email is already existing and it should be unique.",
  add_money: "Successfully add the money to your wallet",
  pay_money: "Successfully pay the money from your wallet to another wallet",
  something_went_wrong: "Something went wrong during transaction!!",
  bad_request: "Getting error, due to bad request.",
  token_missing: 'Token missing from header.',
  acc_already_exists: "Account already exists either with same email id or accountNumber.",
  invalid_password: "Incorrect Password.",
  user_not_found: 'An account with given info does not exist.',
  profile_fetched: "Profile fetched successfully.",
  fetch_passbook: "Passbook Detils fetched successfully",
  profile_updated: "Profile updated successfully.",
  users_fetched: "Users fetched successfully",
  incorrect_passcode: "Passcord is incorrect. please enter a correct passcode.",
  insufficient_amount: "ou have an insufficient balance in your wallet account to perform this transaction.",
  receiver_wallet_not_available: "Invalid receiver account number.",
  incorrect_receiver: "you can't send money to yourself",
  wallet_user_invalid: "user wallet account not found."
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