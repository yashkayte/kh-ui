import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Package, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile-setup");
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-6 px-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors mb-6"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <Package className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-3xl text-white mb-2">Verify OTP</h1>
          <p className="text-purple-200">Enter the 6-digit code sent to</p>
          <p className="text-white mt-1">+91 98765 43210</p>
        </div>
      </div>

      {/* OTP Form */}
      <div className="flex-1 bg-gray-50 rounded-t-[2rem] px-6 pt-8 pb-6">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="flex justify-center gap-3 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-xl bg-white border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors"
                />
              ))}
            </div>

            <div className="text-center mb-6">
              {timer > 0 ? (
                <p className="text-sm text-gray-600">
                  Resend OTP in <span className="text-purple-600">{timer}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Resend OTP
                </button>
              )}
            </div>

            <Button 
              type="submit"
              disabled={otp.some((digit) => !digit)}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl disabled:opacity-50"
            >
              Verify & Continue
            </Button>
          </form>

          <div className="mt-8 bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-700">
              Didn't receive the code?
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Check your SMS or try again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
