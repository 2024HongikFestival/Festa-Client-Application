import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/layouts/ScrollToTop';
import { AuthProvider } from '@/context/AuthProvider';
import { LostProtectedRoute, EventProtectedRoute } from '@/outlet/ProtectedRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pre-load components
import MapPage from '@/pages/map/MapPage';
import LineupPage from '@/pages/stage/LineupPage';
import StageInfoPage from '@/pages/stage/StageInfoPage';
import HongikZonePage from '@/pages/stage/HongikZonePage';
import BoothPage from '@/pages/booth/BoothPage';
import Fleamarket from '@/pages/booth/fleamarket/Fleamarket';
import MdPage from '@/pages/booth/merchandiser/MdPage';
import FacilitiesPage from '@/pages/facilities/FacilitiesPage';
import LostAndFoundPage from '@/pages/lost-and-found/pages/LostAndFoundPage/LostAndFoundPage';
import EventPage from '@/pages/event/main/EventPage';
import FlameMainPage from '@/pages/flame/FlameMainPage';
import FlameMapPage from '@/pages/flame/map/FlameMapPage';
import FlameTimeTablePage from '@/pages/flame/timetable/FlameTimeTablePage';
import FlameReservationPage from '@/pages/flame/reservation/FlameReservationPage';
import FlameLineupPage from '@/pages/flame/lineup/FlameLineupPage';
import FlameMdPage from '@/pages/flame/merchandiser/FlameMdPage';
import FlamePromotionPage from '@/pages/flame/promotion/FlamePromotionPage';

// Lazy-load components
const MainPage = lazy(() => import('@/pages/main/MainPage'));
const RedirectEvents = lazy(() => import('@/auth/RedirectEvents'));
const RedirectLosts = lazy(() => import('@/auth/RedirectLosts'));
const Layout = lazy(() => import('@/components/layouts/Layout'));
const AdminEvent = lazy(() => import('@/pages/admin/AdminEvent'));
const AdminPage = lazy(() => import('@/pages/admin/AdminPage'));
const FleamarketDetail = lazy(() => import('@/pages/booth/fleamarket/FleamarketDetail'));
const EnterEvent = lazy(() => import('@/pages/event/enter/EnterEvent'));
const SubmitEvent = lazy(() => import('@/pages/event/SubmitEvent'));
const GaehwaPage = lazy(() => import('@/pages/makers/GaehwaPage'));
const LikelionPage = lazy(() => import('@/pages/makers/LikelionPage'));
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AddLostItem = lazy(() => import('@/pages/lost-and-found/pages/AddLostItem/AddLostItem'));

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
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />

            <Route element={<Layout />}>
              {/*  pre-loaded routes */}
              <Route path="/map" element={<MapPage />} />
              <Route path="/lineup" element={<LineupPage />} />
              <Route path="/stage-info" element={<StageInfoPage />} />
              <Route path="/hongik-zone" element={<HongikZonePage />} />
              <Route path="/booth" element={<BoothPage />} />
              <Route path="/fleamarket" element={<Fleamarket />} />
              <Route path="/md" element={<MdPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/lost-and-found" element={<LostAndFoundPage />} />
              <Route path="/event" element={<EventPage />} />
              <Route path="/flame" element={<FlameMainPage />} />
              <Route path="/flame/map" element={<FlameMapPage />} />
              <Route path="/flame/timetable" element={<FlameTimeTablePage />} />
              <Route path="/flame/reservation" element={<FlameReservationPage />} />
              <Route path="/flame/lineup" element={<FlameLineupPage />} />
              <Route path="/flame/md" element={<FlameMdPage />} />
              <Route path="/flame/promotion" element={<FlamePromotionPage />} />

              {/*  lazy-loaded routes */}
              <Route path="/" element={<MainPage />} />
              <Route path="/fleamarket/:marketId" element={<FleamarketDetail />} />

              <Route element={<EventProtectedRoute />}>
                <Route path="/event/enter" element={<EnterEvent />} />
                <Route path="/event/submit" element={<SubmitEvent />} />
              </Route>
              <Route path="/oauth/events" element={<RedirectEvents />} />

              <Route path="/likelion" element={<LikelionPage />} />
              <Route path="/gaehwa" element={<GaehwaPage />} />

              <Route element={<LostProtectedRoute />}>
                <Route path="/lost-and-found/add" element={<AddLostItem />} />
              </Route>
              <Route path="/oauth/losts" element={<RedirectLosts />} />

              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/losts" element={<AdminPage />} />
              <Route path="/admin/event" element={<AdminEvent />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
