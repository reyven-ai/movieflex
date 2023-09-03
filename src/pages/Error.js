import MainNavigation from "../components/header/MainNavigation";

function ErrorPage() {
    return <>
    <main>
        <MainNavigation />
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
    </main>
    </>
}

export default ErrorPage;