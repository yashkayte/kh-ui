import { useNavigate } from "react-router";
import { Package, TrendingUp, Clock, MapPin, CheckCircle2, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { useState } from "react";

export function Dashboard() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-lg">RK</span>
            </div>
            <div>
              <h3 className="text-white text-lg">Rajesh Kumar</h3>
              <p className="text-purple-200 text-sm">Rider ID: #12345</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/profile")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Online Status */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span className="text-white">You are {isOnline ? 'Online' : 'Offline'}</span>
          </div>
          <Switch checked={isOnline} onCheckedChange={setIsOnline} />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-24 min-h-[calc(100vh-240px)]">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div 
            onClick={() => navigate("/orders")}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">12</p>
            <p className="text-sm text-gray-600">Today's Orders</p>
          </div>

          <div 
            onClick={() => navigate("/earnings")}
            className="bg-white rounded-2xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl text-gray-900 mb-1">₹850</p>
            <p className="text-sm text-gray-600">Today's Earnings</p>
          </div>
        </div>

        {/* Active Order Card */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-900 mb-3">Active Order</h3>
          <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-purple-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order #8452</p>
                <p className="text-lg text-gray-900">2 items • ₹385</p>
              </div>
              <div className="bg-orange-100 px-3 py-1 rounded-full">
                <p className="text-xs text-orange-700">Pickup Soon</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-900">Burger King, MG Road</p>
                  <p className="text-xs text-gray-500">1.2 km away</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-900">Koramangala 5th Block</p>
                  <p className="text-xs text-gray-500">3.5 km from restaurant</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl">
                Navigate
              </Button>
              <Button variant="outline" className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl">
                Call Customer
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-lg text-gray-900 mb-4">This Week</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xl text-gray-900">68</p>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-xl text-gray-900">32h</p>
              <p className="text-xs text-gray-600">Online Time</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xl text-gray-900">₹5,200</p>
              <p className="text-xs text-gray-600">Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <Package className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-purple-600">Home</span>
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
          <button 
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center gap-1"
          >
            <Menu className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-600">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
