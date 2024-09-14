import RedirectEvents from '@/auth/RedirectEvents';
import RedirectLosts from '@/auth/RedirectLosts';
import Layout from '@/components/layouts/Layout';
import ScrollToTop from '@/components/layouts/ScrollToTop';
import AdminEvent from '@/pages/admin/AdminEvent';
import AdminPage from '@/pages/admin/AdminPage';
import BoothPage from '@/pages/booth/BoothPage';
import Fleamarket from '@/pages/booth/fleamarket/Fleamarket';
import FleamarketDetail from '@/pages/booth/fleamarket/FleamarketDetail';
import MdPage from '@/pages/booth/merchandiser/MdPage';
import PromotionPage from '@/pages/booth/promotion/PromotionPage';
import EnterEvent from '@/pages/event/EnterEvent';
import EventPage from '@/pages/event/EventPage';
import CompleteEvent from '@/pages/event/SubmitEvent';
import FacilitiesPage from '@/pages/facilities/FacilitiesPage';
import FlameMainPage from '@/pages/flame/FlameMainPage';
import FlameLineupPage from '@/pages/flame/lineup/FlameLineupPage';
import FlameMapPage from '@/pages/flame/map/FlameMapPage';
import FlameMdPage from '@/pages/flame/merchandiser/FlameMdPage';
import FlamePromotionPage from '@/pages/flame/promotion/FlamePromotionPage';
import FlameReservationPage from '@/pages/flame/reservation/FlameReservationPage';
import FlameTimeTablePage from '@/pages/flame/timetable/FlameTimeTablePage';
import MainPage from '@/pages/main/MainPage';
import GaehwaPage from '@/pages/makers/GaehwaPage';
import LikelionPage from '@/pages/makers/LikelionPage';
import MapPage from '@/pages/map/MapPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import HongikZonePage from '@/pages/stage/HongikZonePage';
import LineupPage from '@/pages/stage/LineupPage';
import StageInfoPage from '@/pages/stage/StageInfoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthProvider } from './components/lost-and-found/AddLostItem/context/AuthProvider';
import ProtectedRoute from './components/lost-and-found/AddLostItem/outlet/ProtectedRoute';
import AddLostItem from './pages/lost-and-found/pages/AddLostItem/AddLostItem';
import LostAndFoundPage from './pages/lost-and-found/pages/LostAndFoundPage/LostAndFoundPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />

          <Route element={<Layout />}>
            {/* 윤서 라우팅 😽 */}
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/booth" element={<BoothPage />} />
            <Route path="/fleamarket" element={<Fleamarket />} />
            <Route path="/fleamarket/:marketId" element={<FleamarketDetail />} />
            <Route path="/promotion" element={<PromotionPage />} />
            <Route path="/md" element={<MdPage />} />

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
            <Route element={<ProtectedRoute />}>
              <Route path="/lost-and-found/add" element={<AddLostItem />} />
            </Route>

            <Route path="/oauth/losts" element={<RedirectLosts />} />

            {/* 동욱 라우팅 🍷 */}
            <Route path="/lineup" element={<LineupPage />} />
            <Route path="/stage-info" element={<StageInfoPage />} />
            <Route path="/hongik-zone" element={<HongikZonePage />} />
            <Route path="/flame/lineup" element={<FlameLineupPage />} />
            <Route path="/flame/md" element={<FlameMdPage />} />
            <Route path="/flame/promotion" element={<FlamePromotionPage />} />

            {/* 채영 라우팅 💭 */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/losts" element={<AdminPage />} />
            <Route path="/admin/event" element={<AdminEvent />} />
            <Route path="/flame" element={<FlameMainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
