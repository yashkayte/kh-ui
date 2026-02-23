import { useNavigate } from "react-router";
import { ArrowLeft, Package, TrendingUp, Clock, Menu, Wallet, Calendar, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

const todayEarnings = [
  { time: "2:45 PM", order: "#8452", amount: 65, distance: "4.7 km" },
  { time: "1:30 PM", order: "#8451", amount: 45, distance: "2.9 km" },
  { time: "12:15 PM", order: "#8450", amount: 65, distance: "5.2 km" },
  { time: "11:00 AM", order: "#8449", amount: 45, distance: "3.1 km" },
  { time: "10:20 AM", order: "#8448", amount: 35, distance: "2.3 km" },
];

const weeklyEarnings = [
  { day: "Mon", orders: 15, amount: 1250 },
  { day: "Tue", orders: 18, amount: 1450 },
  { day: "Wed", orders: 12, amount: 950 },
  { day: "Thu", orders: 20, amount: 1650 },
  { day: "Fri", orders: 16, amount: 1280 },
  { day: "Sat", orders: 22, amount: 1820 },
  { day: "Sun", orders: 12, amount: 850 },
];

export function Earnings() {
  const navigate = useNavigate();
  const totalWeekly = weeklyEarnings.reduce((sum, day) => sum + day.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-6 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl text-white">Earnings</h1>
        </div>

        {/* Total Balance Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-purple-200 text-sm mb-1">Total Balance</p>
              <p className="text-4xl text-white">₹12,450</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="text-purple-200 text-xs mb-1">This Week</p>
              <p className="text-white text-lg">₹{totalWeekly}</p>
            </div>
            <div className="border-l border-white/20 pl-4">
              <p className="text-purple-200 text-xs mb-1">Today</p>
              <p className="text-white text-lg">₹850</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-white text-purple-700 hover:bg-purple-50 rounded-xl h-12">
          <Download className="w-4 h-4 mr-2" />
          Withdraw Earnings
        </Button>
      </div>

      {/* Earnings Tabs */}
      <div className="px-6 py-6">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="weekly">This Week</TabsTrigger>
          </TabsList>

          {/* Today's Earnings */}
          <TabsContent value="today" className="space-y-4">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">12</p>
                <p className="text-xs text-gray-600">Orders</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">₹850</p>
                <p className="text-xs text-gray-600">Earned</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">38 km</p>
                <p className="text-xs text-gray-600">Distance</p>
              </div>
            </div>

            <div className="space-y-3">
              {todayEarnings.map((earning, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">Order {earning.order}</p>
                        <p className="text-xs text-gray-500">{earning.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg text-gray-900">₹{earning.amount}</p>
                      <p className="text-xs text-gray-500">{earning.distance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Weekly Earnings */}
          <TabsContent value="weekly" className="space-y-4">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">115</p>
                <p className="text-xs text-gray-600">Orders</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">₹{totalWeekly}</p>
                <p className="text-xs text-gray-600">Earned</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl text-gray-900 mb-1">32h</p>
                <p className="text-xs text-gray-600">Online</p>
              </div>
            </div>

            {/* Daily Breakdown */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-base text-gray-900 mb-4">Daily Breakdown</h3>
              <div className="space-y-3">
                {weeklyEarnings.map((day, index) => {
                  const maxAmount = Math.max(...weeklyEarnings.map(d => d.amount));
                  const barWidth = (day.amount / maxAmount) * 100;
                  
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-600">{day.day}</p>
                        <div className="text-right">
                          <p className="text-sm text-gray-900">₹{day.amount}</p>
                          <p className="text-xs text-gray-500">{day.orders} orders</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bonus Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-purple-200 text-sm mb-1">Weekly Bonus</p>
                  <p className="text-2xl">₹500</p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-purple-100">
                Complete 20 more orders this week to unlock ₹1000 bonus!
              </p>
            </div>
          </TabsContent>
        </Tabs>
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
          <button className="flex flex-col items-center gap-1">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-purple-600">Earnings</span>
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
