function signUpHtml() {
	return `<div class="bg-modal-signup">
    <div class="modal-content">
        <div class="contentSignup">
            <div class="loginIn">
                <Strong>Login or Create an account</Strong>
                <i class="fas fa-times" id="close-sign-up-form"></i>
            </div>
            <div class="emailIdNumber">Email ID or Mobile Number</div>
            <div class="form">
                <form action="">
                    <input type="email" id="form-signIn-email" placeholder="enter email ID or mobile Number"
                        required>
                    <button type="submit" class="signupContinue" id="continue">Continue</button>
                </form>
            </div>
            <div class="signUpPara">By logging in, I understand & agree to EaseMyTrip <span> terms of use</span>
                and<span> privacy policy</span>
            </div>
        </div>
    </div>
</div>`;
}

function passwordHtml() {
	return `<div class="bg-modal-password">
    <div class="modal-content">
        <div class="contentSignup">
            <div class="loginIn ">
                <div class="password">
                    <i class="fas fa-arrow-left"></i>
                    <Strong>Password Authentication</Strong>
                </div>
                <i class="fas fa-times" id="close-pass-up-form"></i>
            </div>
            <div class="emailIdNumber">Please enter your password.</div>

            <div class="form">
                <form action="">
                    <input type="password" id="form-signIn-password" placeholder="**************" required>
                    <div class="text-right signUpPara"><span>Reset Password</span></div>
                    <button type="submit" class="signupContinue login">Login</button>
                </form>
            </div>
            <div class="signUpPara loginOTP"><span>Login with OTP</span></div>
        </div>
    </div>
</div>`;
}

export { signUpHtml, passwordHtml };
