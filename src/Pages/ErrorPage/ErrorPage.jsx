import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('https://media.istockphoto.com/id/1481759725/photo/404-error-isolated-on-white-background-page-not-found.webp?b=1&s=170667a&w=0&k=20&c=kJIxn9cRT_p_EAu-5KAhYVxV6ZfITm711yts_SA2LbU=')] bg-cover bg-no-repeat">
      <div className="">
        <h1 className="text-3xl font-bold md:text-6xl mb-5 text-primary-color">PAGE NOT FOUND</h1>
        <div className="flex justify-center">
        <Link to="/">
          <button className="primary-btn text-white w-52">GO TO HOME</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
