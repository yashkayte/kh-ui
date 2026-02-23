import { useNavigate } from "react-router";
import { ArrowLeft, Package, TrendingUp, Clock, Menu, User, Phone, MapPin, Star, Award, Settings, HelpCircle, LogOut, ChevronRight, Shield, Bell } from "lucide-react";

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-6 pt-8 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl text-white">Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-2xl">RK</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl text-white mb-1">Rajesh Kumar</h2>
              <p className="text-purple-200 text-sm">Rider ID: #12345</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <p className="text-white text-lg">4.8</p>
              </div>
              <p className="text-purple-200 text-xs">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-white text-lg mb-1">2,458</p>
              <p className="text-purple-200 text-xs">Deliveries</p>
            </div>
            <div className="text-center">
              <p className="text-white text-lg mb-1">98%</p>
              <p className="text-purple-200 text-xs">Acceptance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-6 py-6 space-y-4">
        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100">
            <h3 className="text-sm text-gray-600">Personal Information</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Edit Profile</p>
                  <p className="text-xs text-gray-500">Update your details</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Phone Number</p>
                  <p className="text-xs text-gray-500">+91 98765 43210</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Location</p>
                  <p className="text-xs text-gray-500">Bangalore, Karnataka</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100">
            <h3 className="text-sm text-gray-600">Achievements</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Badges & Rewards</p>
                  <p className="text-xs text-gray-500">View your achievements</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Performance</p>
                  <p className="text-xs text-gray-500">Track your metrics</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Settings & Support */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100">
            <h3 className="text-sm text-gray-600">Settings & Support</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Settings</p>
                  <p className="text-xs text-gray-500">App preferences</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Notifications</p>
                  <p className="text-xs text-gray-500">Manage alerts</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Privacy & Safety</p>
                  <p className="text-xs text-gray-500">Your data security</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-pink-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">Help & Support</p>
                  <p className="text-xs text-gray-500">Get assistance</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout */}
        <button 
          onClick={() => navigate("/login")}
          className="w-full bg-white rounded-2xl shadow-sm px-5 py-4 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5 text-red-600" />
          <span className="text-sm text-red-600">Logout</span>
        </button>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">Khana Anywhere Rider</p>
          <p className="text-xs text-gray-400">Version 2.4.1</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button 
            onClick={() => navigate("/dashboard")}
            className="flex flex-col items-center gap-1"
          >
            <Package className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-600">Home</span>
          </button>
          <button 
            onClick={() => navigate("/orders")}
            className="flex flex-col items-center gap-1"
          >
            <Clock className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-600">Orders</span>
          </button>
          <button 
            onClick={() => navigate("/earnings")}
            className="flex flex-col items-center gap-1"
          >
            <TrendingUp className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-600">Earnings</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Menu className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-purple-600">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
