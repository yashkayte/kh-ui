import { useState } from "react";
import { useNavigate } from "react-router";
import { Package, Fingerprint, Lock, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

export function BiometricLogin() {
  const navigate = useNavigate();
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(true);

  const handleBiometricAuth = () => {
    // Simulate biometric authentication
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-8 px-6 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <Package className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl text-white mb-1">Khana Anywhere</h1>
        <p className="text-purple-200">Rider Partner App</p>
      </div>

      {/* Login Options */}
      <div className="flex-1 bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl mb-2 text-gray-900">Welcome Back!</h2>
          <p className="text-gray-600 mb-8">Choose your login method</p>

          <div className="space-y-4">
            {/* Biometric Login */}
            {isBiometricEnabled && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-purple-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 mb-4">
                    <Fingerprint className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-1">Biometric Login</h3>
                  <p className="text-sm text-gray-600">Use your fingerprint to login securely</p>
                </div>

                <Button 
                  onClick={handleBiometricAuth}
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
                >
                  <Fingerprint className="w-5 h-5 mr-2" />
                  Authenticate with Fingerprint
                </Button>
              </div>
            )}

            {/* Phone Login */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base text-gray-900">Phone Number</h3>
                  <p className="text-xs text-gray-600">Login with OTP</p>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/login")}
                variant="outline"
                className="w-full h-11 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
              >
                Continue with Phone
              </Button>
            </div>

            {/* Password Login */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-base text-gray-900">Password</h3>
                  <p className="text-xs text-gray-600">Use your account password</p>
                </div>
              </div>
              <Button 
                onClick={() => navigate("/login")}
                variant="outline"
                className="w-full h-11 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl"
              >
                Continue with Password
              </Button>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-8 space-y-3">
            <button 
              onClick={() => navigate("/forgot-password")}
              className="w-full text-sm text-purple-600 hover:underline"
            >
              Forgot Password?
            </button>
            <div className="text-center">
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

          {/* Security Note */}
          <div className="mt-8 bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600">
              🔒 Your biometric data is stored securely on your device and never shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
