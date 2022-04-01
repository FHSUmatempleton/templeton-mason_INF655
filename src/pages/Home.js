import TaskForm from "../components/TaskForm";
import AddTask from "../components/AddTask";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Navigation />
            <div className="container">
                <AddTask />
                <TaskForm />
            </div>
            <Footer />
        </>
    )
}