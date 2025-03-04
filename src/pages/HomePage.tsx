import { JSX, Suspense } from "react";
import { Helmet } from "react-helmet";

export default function HomePage(): JSX.Element {
    return (
        <>
        <Helmet>
            <title>BeerHopper - Web</title>
            <meta 
                name="description"
                content="Your one place for everything beer."
            />
        </Helmet>
        <Suspense>
            <h1>Hello World</h1>
        </Suspense>
        </>
    );
}