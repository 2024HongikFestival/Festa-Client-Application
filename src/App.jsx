import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main/MainPage";
import NotFoundPage from "@/pages/notFound/NotFound";
import BoothPage from "@/pages/booth/BoothPage";
import EventPage from "@/pages/event/EventPage";
import Layout from "@/components/layouts/Layout";
import EnterEvent from "./pages/event/EnterEvent";
import CompleteEvent from "./pages/event/CompleteEvent";
import MapPage from "./pages/wdf/map/MapPage";
import TimeTablePage from "./pages/wdf/timetable/TimeTablePage";
import TicketPage from "./pages/wdf/ticket/TicketPage";
import LineupPage from "./pages/wdf/lineup/LineupPage";
import ProductPage from "./pages/wdf/product/ProductPage";
import PromotionPage from "./pages/wdf/promotion/PromotionPage";

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
            <Route path="/wdf/map" element={<MapPage />} />
            <Route path="/wdf/timetable" element={<TimeTablePage />} />
            <Route path="/wdf/ticket" element={<TicketPage />} />
            {/* 수연 라우팅 ✌🏻 */}

            {/* 준혁 라우팅 🐳 */}

            {/* 동욱 라우팅 🍷 */}
            <Route path="/wdf/lineup" element={<LineupPage />} />
            <Route path="/wdf/product" element={<ProductPage />} />
            <Route path="/wdf/promotion" element={<PromotionPage />} />

            {/* 채영 라우팅 💭 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
