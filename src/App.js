import Topbar from "./components/Topbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
           <Topbar />
            <Content />
            <Footer />
        </div>
    );
}

export default App;