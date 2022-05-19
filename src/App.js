import { useEffect } from "react";
import { logoutAllTabs } from "./auth/auth";
import Router from "./routes";




function App() {
  useEffect(() => {
    logoutAllTabs()
  }, [])
  
  return (
    <>
    <Router/>
    </>
  );
}

export default App;
