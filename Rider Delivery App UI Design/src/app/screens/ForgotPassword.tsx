import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

type Step = "phone" | "otp" | "reset";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("reset");
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <button 
          onClick={() => navigate("/login")}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <h1 className="text-3xl text-white mb-2">Reset Password</h1>
          <p className="text-purple-200">
            {step === "phone" && "Enter your registered phone number"}
            {step === "otp" && "Enter the verification code"}
            {step === "reset" && "Create a new password"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          {/* Step 1: Phone Number */}
          {step === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="Enter your registered phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
              >
                Send OTP
              </Button>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">Verification Code</label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="h-12 bg-white border-gray-200 rounded-xl text-center text-xl tracking-widest"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  OTP sent to +91 {phone.slice(-4).padStart(10, "*")}
                </p>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-purple-600 hover:underline"
                >
                  Resend OTP
                </button>
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
              >
                Verify OTP
              </Button>
            </form>
          )}

          {/* Step 3: Reset Password */}
          {step === "reset" && (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                <label className="block text-sm mb-2 text-gray-700">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-enter new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-10 h-12 bg-white border-gray-200 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-3">
                <p className="text-xs text-gray-700 mb-2">Password must contain:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• At least 8 characters</li>
                  <li>• One uppercase letter</li>
                  <li>• One number</li>
                  <li>• One special character</li>
                </ul>
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
              >
                Reset Password
              </Button>
            </form>
          )}

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate("/login")}
              className="text-sm text-gray-600 hover:text-purple-600"
            >
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
