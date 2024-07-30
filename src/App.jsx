import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main/MainPage";
import NotFoundPage from "@/pages/notFound/NotFound";
import BoothPage from "@/pages/booth/BoothPage";
import EventPage from "@/pages/event/EventPage";
import EnterEvent from "./pages/event/EnterEvent";

function App() {
  return (
    <>
      {/* url 세그먼트 확정 후 수정 예정 */}
      <BrowserRouter>
        <Routes>
          {/* 윤서 라우팅 😽 */}
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/pub&booth" element={<BoothPage />} />

          {/* 가영 라우팅 ✨ */}
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:eventId" element={<EnterEvent />} />
          {/* 정인 라우팅 🍀 */}

          {/* 수연 라우팅 ✌🏻 */}

          {/* 준혁 라우팅 🐳 */}

          {/* 동욱 라우팅 🍷 */}

          {/* 채영 라우팅 💭 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
