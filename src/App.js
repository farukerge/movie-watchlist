import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Add } from "./Components/Add";
import { Navbar } from "./Components/Navbar";
import Trending from "./Components/Trending";
import { Watched } from "./Components/Watched";
import { Watchlist } from "./Components/Watchlist";

import { GlobalProvider } from "./Hooks/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element= {<Add />} />
            <Route path="/watched" element= {<Watched />} />
            <Route path="/watchlist" element= {<Watchlist />} />
            <Route path="/trending" element= {<Trending />} />
          </Routes>
      </BrowserRouter>
    </GlobalProvider>  
  );
}

export default App;
