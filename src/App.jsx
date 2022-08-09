import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import Auth from "./Components/Auth";
import Footer from "./Components/Footer";
import Home from "./Components/home/Home";
import Message from "./Components/messages/Message";
import Messages from "./Components/messages/Messages";
import Navbar from "./Components/Navbar";
import PageError from "./Components/PageError";
import SideBarNavigation from "./Components/sidebar/SideBarNavigation";
// AOS
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  // SideBar Menu Ref
  const navRef = useRef();

  // Re:plain config
  useEffect(() => {
    window.replainSettings = { id: '0db757df-71b5-4fe7-b872-436f5f6ccd57' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');

    AOS.init({
        duration: 1000
  });
  }, [])

  return (
    <div className="container">
      {/* Auth */}
      <Auth />

      {/* Navbar */}
      <Navbar navref={navRef} />

      <div className="cnt">
        {/* SideBar menu */}
        <SideBarNavigation navref={navRef} />

        <div className="app">
          {/* Routing Components */}
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<Message />} />
            <Route path="*" element={<PageError />} />
          </Routes>

          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;