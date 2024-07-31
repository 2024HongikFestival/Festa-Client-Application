import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main/MainPage";
import NotFoundPage from "@/pages/notFound/NotFound";
import BoothPage from "@/pages/booth/BoothPage";
import EventPage from "@/pages/event/EventPage";
import Layout from "@/components/layouts/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 윤서 라우팅 😽 */}
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/pub&booth" element={<BoothPage />} />

            {/* 가영 라우팅 ✨ */}
            <Route path="/event" element={<EventPage />} />
            {/* 정인 라우팅 🍀 */}

            {/* 수연 라우팅 ✌🏻 */}

            {/* 준혁 라우팅 🐳 */}

            {/* 동욱 라우팅 🍷 */}

            {/* 채영 라우팅 💭 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
