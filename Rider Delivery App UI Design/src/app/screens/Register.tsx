import { useState } from "react";
import { useNavigate } from "react-router";
import { Package, Phone, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

export function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex flex-col">
      {/* Header */}
      <div className="pt-12 pb-6 px-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <Package className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl text-white mb-1">Join Khana Anywhere</h1>
        <p className="text-purple-200">Start earning as a delivery partner</p>
      </div>

      {/* Registration Form */}
      <div className="flex-1 bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-6 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl mb-2 text-gray-900">Create Account</h2>
          <p className="text-gray-600 mb-6">Enter your details to get started</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Email Address (Optional)</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Create Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 h-12 bg-white border-gray-200 rounded-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Confirm Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-purple-600 hover:underline">Terms & Conditions</a>
                {" "}and{" "}
                <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button 
              type="submit"
              disabled={!formData.acceptTerms}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl disabled:opacity-50"
            >
              Continue
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button onClick={() => navigate("/login")} className="text-purple-600 hover:underline">
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
