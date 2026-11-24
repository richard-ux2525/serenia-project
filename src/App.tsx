import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Forgotpwd from './auth/Forgotpwd'
import Resetpwd from './auth/Resetpwd'
import Updated from './auth/Updated'
import { Brochure, Dialog, Footer, Nav } from './imports'
import Amenities from './pages/Amenities'
import ArunaTypeA from './pages/ArunaTypeA'
import Calendar from './pages/Calendar'
import Colors from './pages/Colors'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import GroundFloor from './pages/GroundFloor'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Properties from './pages/Properties'
import Aruna from './pages/Aruna'
import Details from './pages/Details'
import CreateCluster from './pages/CreateCluster'
import HomePage from './pages/HomePage'
import useRevealAnimation from './components/hook'

function SiteLayout() {
  return (
    <>
      <Nav />
      <Dialog />
      <Outlet />
      <Brochure />
      <Footer />
    </>
  )
}

function StandaloneLayout() {
  return <Outlet />
}

function App() {
  useRevealAnimation()
  return (
    <Routes>
      {/* Public Site Layout with Navigation & Footer */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/backup" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/aruna" element={<Aruna />} />
        <Route path="/properties/aruna/type-a" element={<ArunaTypeA />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/colors" element={<Colors />} />
      </Route>

      {/* Standalone Layout for Dashboards, Wizards & Authentication */}
      <Route element={<StandaloneLayout />}>
        {/* Dashboard Routes */}
        <Route path="/admin/user/dashboard" element={<HomePage />} />

        {/* Details & Cluster Info Routes */}
        <Route path="/admin/properties/aruna/details" element={<Details />} />

        {/* Create / Edit Cluster Routes */}
        <Route path="/admin/properties/create" element={<CreateCluster />} />

        {/* Ground Floor Walkthrough */}
        <Route path="/properties/aruna/type-a/ground-floor" element={<GroundFloor />} />

        {/* Authentication Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot_password" element={<Forgotpwd />} />
        <Route path="/admin/reset_password" element={<Resetpwd />} />
        <Route path="/admin/updated" element={<Updated />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
