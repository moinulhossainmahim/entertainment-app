import SimpleBottomNavigation from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import SearchMovie from "./components/Search/Search";

function App() {
  return (
    <>
      <Navbar />
      {/* <Movies /> */}
      <SearchMovie />
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
