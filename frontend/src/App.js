import { useState, useEffect} from "react";
import Index from "./components/Index";

function App() {
  const [isLoggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      console.log('setLoggedIn:')
      setLoggedIn(true);
    }
  }, []);  

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </>

  );
}

export default App;
