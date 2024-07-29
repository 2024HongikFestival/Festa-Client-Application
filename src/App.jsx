import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main/MainPage";
import NotFoundPage from "@/pages/notFound/NotFoundPage";
import EventPage from "./pages/event/EventPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 윤서 라우팅 😽 */}
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* 가영 라우팅 ✨ */}
          <Route path="/" element={<EventPage />} />
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
