import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Package } from "lucide-react";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-3xl">
            <Package className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-4xl text-white mb-2">Khana Anywhere</h1>
        <p className="text-purple-200 text-lg">Rider Partner</p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
