import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./screens/Lobby";
import { SocketProvider } from "./context/SocketProvider";
import Room from "./screens/Room";

function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </SocketProvider>
    </BrowserRouter>
  );
}

export default App;
