import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import NotFoundPage from '@/pages/notfound/NotFound';
import BoothPage from '@/pages/booth/BoothPage';
// import EventPage from "@/pages/event/EventPage";
import Layout from '@/components/layouts/Layout';
import ScrollToTop from './components/layouts/ScrollToTop';
// import EnterEvent from "./pages/event/EnterEvent";
// import CompleteEvent from "./pages/event/SubmitEvent";
import MapPage from './pages/map/MapPage';
import LineupPage from './pages/stage/LineupPage';
import StageInfoPage from './pages/stage/StageInfoPage';
import HongikZonePage from './pages/stage/HongikZonePage';
import Fleamarket from './pages/booth/fleamarket/Fleamarket';
import FleamarketDetail from './pages/booth/fleamarket/FleamarketDetail';
import PromotionPage from './pages/booth/promotion/PromotionPage';
import FacilitiesPage from './pages/facilities/FacilitiesPage';
import LostAndFoundPage from './pages/lost-and-found/LostAndFoundPage';
import LostAndFoundDetail from './pages/lost-and-found/LostAndFoundDetail';
import AddLostItem from './pages/lost-and-found/AddLostItem';
import LikelionPage from './pages/makers/LikelionPage';
import GaehwaPage from './pages/makers/GaehwaPage';
import AdminPage from './pages/admin/AdminPage';
import FlameMainPage from './pages/flame/FlameMainPage';
import FlameMapPage from './pages/flame/map/FlameMapPage';
import FlameTimeTablePage from './pages/flame/timetable/FlameTimeTablePage';
import FlameReservationPage from './pages/flame/reservation/FlameReservationPage';
import FlameLineupPage from './pages/flame/lineup/FlameLineupPage';
import FlameMdPage from './pages/flame/merchandiser/FlameMdPage';
import FlamePromotionPage from './pages/flame/promotion/FlamePromotionPage';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <>
      {/* url 세그먼트 확정 후 수정 예정 */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            {/* 윤서 라우팅 😽 */}
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/booth" element={<BoothPage />} />
            <Route path="/fleamarket" element={<Fleamarket />} />
            <Route path="/fleamarket/:marketId" element={<FleamarketDetail />} />
            <Route path="/promotion" element={<PromotionPage />} />

            {/* 가영 라우팅 ✨ */}
            <Route path="/event/:eventId" element={<EventPage />} />
            <Route path="/event/enter" element={<EnterEvent />} />
            <Route path="/event/submit" element={<CompleteEvent />} />
            <Route path="/oauth/events" element={<RedirectEvents />} />

            {/* 정인 라우팅 🍀 */}
            <Route path="/map" element={<MapPage />} />
            <Route path="/flame/map" element={<FlameMapPage />} />
            <Route path="/flame/timetable" element={<FlameTimeTablePage />} />
            <Route path="/flame/reservation" element={<FlameReservationPage />} />

            {/* 수연 라우팅 ✌🏻 */}
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/likelion" element={<LikelionPage />} />
            <Route path="/gaehwa" element={<GaehwaPage />} />

            {/* 준혁 라우팅 🐳 */}
            <Route path="/lost-and-found" element={<LostAndFoundPage />} />
            <Route path="/lost-and-found/:lostId" element={<LostAndFoundDetail />} />
            <Route path="/lost-and-found/add" element={<AddLostItem />} />
            <Route path="/oauth/losts" element={<RedirectLosts />} />

            {/* 동욱 라우팅 🍷 */}
            <Route path="/lineup" element={<LineupPage />} />
            <Route path="/stage-info" element={<StageInfoPage />} />
            <Route path="/hongik-zone" element={<HongikZonePage />} />
            <Route path="/flame/lineup" element={<FlameLineupPage />} />
            <Route path="/flame/md" element={<FlameMdPage />} />
            <Route path="/flame/promotion" element={<FlamePromotionPage />} />

            {/* 채영 라우팅 💭 */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/flame" element={<FlameMainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
