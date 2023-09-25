import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <h1 className="text-5xl lg:text-8xl font-extrabold text-blue-950 mb-6">{error.status}</h1>
            <h2 className="text-2xl lg:text-5xl font-bold mb-4">Page {error.statusText}</h2>
            <p className="text-center text-slate-400 mb-6">We&apos;re sorry, the page you requested could not be found. 
                <br />
                Please go back to the homepage
            </p>
            <Link to="/">
                <button className="bg-blue-950 text-white font-extrabold text-base lg:text-xl py-2 px-4 lg:py-3 lg:px-7 rounded-lg lg:rounded-2xl">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;