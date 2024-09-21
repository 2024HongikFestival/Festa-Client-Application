import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from '@/context/AuthProvider';
import { LostProtectedRoute, EventProtectedRoute } from '@/outlet/ProtectedRoute';
import ScrollToTop from '@/components/layouts/ScrollToTop';
const RedirectEvents = lazy(() => import('@/auth/RedirectEvents'));
const RedirectLosts = lazy(() => import('@/auth/RedirectLosts'));
const Layout = lazy(() => import('@/components/layouts/Layout'));
const AdminEvent = lazy(() => import('@/pages/admin/AdminEvent'));
const AdminPage = lazy(() => import('@/pages/admin/AdminPage'));
const BoothPage = lazy(() => import('@/pages/booth/BoothPage'));
const Fleamarket = lazy(() => import('@/pages/booth/fleamarket/Fleamarket'));
const FleamarketDetail = lazy(() => import('@/pages/booth/fleamarket/FleamarketDetail'));
const MdPage = lazy(() => import('@/pages/booth/merchandiser/MdPage'));
const PromotionPage = lazy(() => import('@/pages/booth/promotion/PromotionPage'));
const EnterEvent = lazy(() => import('@/pages/event/enter/EnterEvent'));
const EventPage = lazy(() => import('@/pages/event/main/EventPage'));
const SubmitEvent = lazy(() => import('@/pages/event/SubmitEvent'));
const FacilitiesPage = lazy(() => import('@/pages/facilities/FacilitiesPage'));
const FlameMainPage = lazy(() => import('@/pages/flame/FlameMainPage'));
const FlameLineupPage = lazy(() => import('@/pages/flame/lineup/FlameLineupPage'));
const FlameMapPage = lazy(() => import('@/pages/flame/map/FlameMapPage'));
const FlameMdPage = lazy(() => import('@/pages/flame/merchandiser/FlameMdPage'));
const FlamePromotionPage = lazy(() => import('@/pages/flame/promotion/FlamePromotionPage'));
const FlameReservationPage = lazy(() => import('@/pages/flame/reservation/FlameReservationPage'));
const FlameTimeTablePage = lazy(() => import('@/pages/flame/timetable/FlameTimeTablePage'));
const MainPage = lazy(() => import('@/pages/main/MainPage'));
const GaehwaPage = lazy(() => import('@/pages/makers/GaehwaPage'));
const LikelionPage = lazy(() => import('@/pages/makers/LikelionPage'));
const MapPage = lazy(() => import('@/pages/map/MapPage'));
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'));
const HongikZonePage = lazy(() => import('@/pages/stage/HongikZonePage'));
const LineupPage = lazy(() => import('@/pages/stage/LineupPage'));
const StageInfoPage = lazy(() => import('@/pages/stage/StageInfoPage'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AddLostItem = lazy(() => import('@/pages/lost-and-found/pages/AddLostItem/AddLostItem'));
const LostAndFoundPage = lazy(() => import('@/pages/lost-and-found/pages/LostAndFoundPage/LostAndFoundPage'));

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
        <Suspense fallback={null}>
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
              <Route path="/event" element={<EventPage />} />
              <Route element={<EventProtectedRoute />}>
                <Route path="/event/enter" element={<EnterEvent />} />
                <Route path="/event/submit" element={<SubmitEvent />} />
              </Route>
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
              <Route element={<LostProtectedRoute />}>
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
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
