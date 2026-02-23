import { useNavigate } from "react-router";
import { ArrowLeft, Package, MapPin, Clock, TrendingUp, Menu, CheckCircle2, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const activeOrders = [
  {
    id: "#8452",
    items: 2,
    amount: 385,
    status: "Pickup Soon",
    statusColor: "orange",
    restaurant: "Burger King, MG Road",
    restaurantDistance: "1.2 km",
    customer: "Koramangala 5th Block",
    customerDistance: "3.5 km",
    time: "10 mins ago",
  },
  {
    id: "#8451",
    items: 1,
    amount: 250,
    status: "Delivering",
    statusColor: "blue",
    restaurant: "Pizza Hut, Indiranagar",
    restaurantDistance: "0.8 km",
    customer: "HSR Layout Sector 2",
    customerDistance: "2.1 km",
    time: "25 mins ago",
  },
];

const completedOrders = [
  {
    id: "#8450",
    items: 3,
    amount: 520,
    restaurant: "Domino's Pizza",
    customer: "Bellandur",
    time: "1 hour ago",
    earning: 65,
  },
  {
    id: "#8449",
    items: 2,
    amount: 340,
    restaurant: "KFC, Whitefield",
    customer: "Marathahalli",
    time: "2 hours ago",
    earning: 45,
  },
  {
    id: "#8448",
    items: 1,
    amount: 180,
    restaurant: "Subway",
    customer: "Koramangala",
    time: "3 hours ago",
    earning: 35,
  },
  {
    id: "#8447",
    items: 4,
    amount: 680,
    restaurant: "McDonald's",
    customer: "BTM Layout",
    time: "4 hours ago",
    earning: 75,
  },
];

const cancelledOrders = [
  {
    id: "#8446",
    items: 2,
    amount: 420,
    restaurant: "Biryani House",
    customer: "Electronic City",
    time: "5 hours ago",
    reason: "Customer Cancelled",
  },
];

export function OrdersList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-6 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl text-white">My Orders</h1>
        </div>

        {/* Today's Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-purple-200 text-sm mb-2">Today's Summary</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl text-white">12 Orders</p>
              <p className="text-purple-200 text-sm">10 completed • 2 active</p>
            </div>
            <div className="text-right">
              <p className="text-2xl text-white">₹850</p>
              <p className="text-purple-200 text-sm">Total earnings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Tabs */}
      <div className="px-6 py-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          {/* Active Orders */}
          <TabsContent value="active" className="space-y-4">
            {activeOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border-2 border-purple-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order {order.id}</p>
                    <p className="text-lg text-gray-900">{order.items} items • ₹{order.amount}</p>
                  </div>
                  <div className={`bg-${order.statusColor}-100 px-3 py-1 rounded-full`}>
                    <p className={`text-xs text-${order.statusColor}-700`}>{order.status}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-900">{order.restaurant}</p>
                      <p className="text-xs text-gray-500">{order.restaurantDistance} away</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-900">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.customerDistance} from restaurant</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{order.time}</p>
                  <button className="text-sm text-purple-600">View Details →</button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Completed Orders */}
          <TabsContent value="completed" className="space-y-4">
            {completedOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order {order.id}</p>
                    <p className="text-base text-gray-900">{order.items} items • ₹{order.amount}</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{order.restaurant}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{order.time}</p>
                  <p className="text-sm text-green-600">Earned ₹{order.earning}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Cancelled Orders */}
          <TabsContent value="cancelled" className="space-y-4">
            {cancelledOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Order {order.id}</p>
                    <p className="text-base text-gray-900">{order.items} items • ₹{order.amount}</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded-full">
                    <XCircle className="w-4 h-4 text-red-600" />
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{order.restaurant}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{order.time}</p>
                  <p className="text-sm text-red-600">{order.reason}</p>
                </div>
              </div>
            ))}
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
          <button className="flex flex-col items-center gap-1">
            <Clock className="w-6 h-6 text-purple-600" />
            <span className="text-xs text-purple-600">Orders</span>
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
