import { SignUpWrapper } from "./signUp.style";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <div className="signUp">
        <div className="signUp__title--wrapper">
          <h2>Subscribe to our newsletter & get the latest news</h2>
        </div>
        <form className="signUp__form">
          <input
            type="text"
            id="signUp__input"
            placeholder="name@gmail.com"
            className="input signUp__input"
          />
          <button type="submit" className="cta__sage signUp__btn">
            Subscribe
          </button>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default SignUp;
