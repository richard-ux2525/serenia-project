import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Building2,
  ChevronDown,
  ClipboardList,
  Globe,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  PanelLeft,
  Plus,
  Search,
  Settings,
  X,
} from 'lucide-react'
import logoImage from '../assets/Logo (1).png'
import LogoutDialog from './LogoutDialog'

interface AsideProps {
  sidebarOpen?: boolean
  setSidebarOpen?: (open: boolean) => void
}

export default function Aside({ sidebarOpen = false, setSidebarOpen }: AsideProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [propertiesExpanded, setPropertiesExpanded] = useState(true)
  const [selectedProperty, setSelectedProperty] = useState('Aruna residence')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const handleClose = () => {
    if (setSidebarOpen) setSidebarOpen(false)
  }

  const handleConfirmLogout = () => {
    setIsLogoutOpen(false)
    handleClose()
    navigate('/admin/login')
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={handleClose}
        />
      ) : null}

      {/* Logout Confirmation Dialog */}
      <LogoutDialog
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoImage} alt="Serenia" className="h-6 w-auto" />
          </Link>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 lg:hidden cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 lg:block cursor-pointer"
          >
            <PanelLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50/50 py-2 pl-9 pr-12 text-xs text-gray-800 placeholder-gray-400 focus:border-[#53583C] focus:bg-white focus:outline-none"
            />
            <div className="absolute right-2.5 flex items-center gap-0.5 border border-gray-200 bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-500">
              <span className="text-[9px]">⌘</span> F
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
          {/* MAIN MENU */}
          <div>
            <h3 className="px-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Main Menu
            </h3>
            <nav className="mt-2 space-y-1">
              <Link
                to="/admin/user/dashboard"
                onClick={handleClose}
                className={`flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors ${
                  isActive('/admin/user/dashboard')
                    ? 'bg-[#53583C] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                Dashboard
              </Link>

              <Link
                to="/admin/properties/aruna/details"
                onClick={handleClose}
                className={`flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors ${
                  isActive('/admin/properties/aruna/details')
                    ? 'bg-[#53583C] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <ClipboardList className="h-4 w-4 shrink-0" />
                Cluster details
              </Link>

              {/* Properties Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setPropertiesExpanded(!propertiesExpanded)}
                  className="flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-gray-500 shrink-0" />
                    Properties
                  </span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                      propertiesExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {propertiesExpanded ? (
                  <div className="mt-1 ml-4 space-y-0.5 border-l border-gray-200 pl-3">
                    {[
                      { name: 'Liora estate', path: '/properties' },
                      { name: 'Nava heights', path: '/properties' },
                      { name: 'Aruna residence', path: '/admin/properties/aruna/details' },
                      { name: 'Velora park', path: '/properties' },
                      { name: 'Seraya grove', path: '/properties' },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                          setSelectedProperty(item.name)
                          handleClose()
                        }}
                        className={`block w-full text-left px-3 py-1.5 text-xs transition-colors ${
                          selectedProperty === item.name && isActive('/admin/properties/aruna/details')
                            ? 'font-semibold text-gray-900 bg-stone-100'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Create Cluster Wizard */}
              <Link
                to="/admin/properties/create"
                onClick={handleClose}
                className={`flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors ${
                  isActive('/admin/properties/create')
                    ? 'bg-[#53583C] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Plus className="h-4 w-4 shrink-0" />
                Add new cluster
              </Link>
            </nav>
          </div>

          {/* OTHERS */}
          <div>
            <h3 className="px-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Others
            </h3>
            <nav className="mt-2 space-y-1">
              <Link
                to="/properties"
                onClick={handleClose}
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Globe className="h-4 w-4 text-gray-500 shrink-0" />
                Public site
              </Link>
              <Link
                to="/gallery"
                onClick={handleClose}
                className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <ImageIcon className="h-4 w-4 text-gray-500 shrink-0" />
                Gallery
              </Link>
            </nav>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-100 p-3 space-y-1">
          <Link
            to="/contact"
            onClick={handleClose}
            className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings className="h-4 w-4 text-gray-500 shrink-0" />
            Support & Settings
          </Link>

          <button
            type="button"
            onClick={() => setIsLogoutOpen(true)}
            className="flex w-full items-center gap-3 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 cursor-pointer text-left"
          >
            <LogOut className="h-4 w-4 text-red-600 shrink-0" />
            Log out
          </button>
        </div>
      </aside>
    </>
  )
}
