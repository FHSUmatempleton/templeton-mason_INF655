import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./components/context/TaskContext";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./userbase/User";


function App() {
  return (
    // To do: long-wided explanation about TaskProvider?
    <TaskProvider>
      
      {/* To do: long-winded explanation about BrowserRouter, Routes, and Route... */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* To do: comment here... */}
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App;