import { Link } from "react-router-dom";
import introImg from "../../assets/images/intro.jpg";
import Button from "../button/Button";

function Header() {
  return (
    <header className="header pt-32">
      <div className="container px-4 md:px-24">
        <div className="flex flex-row items-center gap-10 mb-10">
          <div className="lg:basis-1/2 mb-5 hidden lg:block transition-transform hover:scale-95 duration-500">
            <img
              src={introImg}
              alt="Website introduction banner"
              className="w-full rounded"
            />
          </div>
          <div className="lg:basis-1/2 flex flex-col gap-8 items-center">
            <p className="text-3xl font-medium text-center">
              Every story deserves to be heard. <br />
              Publish your articles, share your expertise, and make an impact!
              <br />
            </p>
            <Button variant="primary">
              <Link to={"/register"}>Sign up & start writing!</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
