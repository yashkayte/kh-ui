import { useState } from "react";
import { useNavigate } from "react-router";
import { Package, Phone, Fingerprint } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-8 px-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <Package className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl text-white mb-1">Khana Anywhere</h1>
        <p className="text-purple-200">Rider Partner App</p>
      </div>

      {/* Login Card */}
      <div className="flex-1 bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl mb-2 text-gray-900">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">Login to start accepting orders</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
            >
              Continue
            </Button>
          </form>

          {/* Alternative Login Methods */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">or</span>
              </div>
            </div>

            <Button 
              onClick={() => navigate("/biometric-login")}
              variant="outline"
              className="w-full h-12 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl mt-4"
            >
              <Fingerprint className="w-5 h-5 mr-2" />
              Login with Biometric
            </Button>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-purple-600 hover:underline mb-3 block w-full"
            >
              Forgot Password?
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              New to Khana Anywhere?{" "}
              <button 
                onClick={() => navigate("/register")}
                className="text-purple-600 hover:underline"
              >
                Sign up as a rider
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}