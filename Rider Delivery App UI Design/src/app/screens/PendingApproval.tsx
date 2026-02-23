import { useNavigate } from "react-router";
import { Clock, CheckCircle2, FileText, Shield, Headphones } from "lucide-react";
import { Button } from "../components/ui/button";

export function PendingApproval() {
  const navigate = useNavigate();

  const verificationSteps = [
    { 
      id: 1, 
      title: "Documents Received", 
      description: "Your documents have been uploaded successfully",
      status: "completed"
    },
    { 
      id: 2, 
      title: "Admin Verification", 
      description: "Our team is reviewing your documents",
      status: "in-progress"
    },
    { 
      id: 3, 
      title: "Background Check", 
      description: "Security verification in process",
      status: "pending"
    },
    { 
      id: 4, 
      title: "Account Activation", 
      description: "Your account will be activated once verified",
      status: "pending"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-3xl">
              <Clock className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-3xl text-white mb-2">Application Submitted!</h1>
          <p className="text-purple-200">Your profile is under review</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Status Card */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-base text-gray-900 mb-1">Verification in Progress</h3>
                <p className="text-sm text-gray-700">
                  Expected completion time: <span className="text-orange-700">24-48 hours</span>
                </p>
              </div>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2 mt-4">
              <div className="bg-orange-500 rounded-full h-2 transition-all" style={{ width: "40%" }} />
            </div>
          </div>

          {/* Verification Steps */}
          <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
            <h3 className="text-base text-gray-900 mb-4">Verification Process</h3>
            <div className="space-y-4">
              {verificationSteps.map((step, index) => (
                <div key={step.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed" 
                        ? "bg-green-100" 
                        : step.status === "in-progress"
                        ? "bg-yellow-100"
                        : "bg-gray-100"
                    }`}>
                      {step.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <span className={`text-sm ${
                          step.status === "in-progress" ? "text-yellow-600" : "text-gray-400"
                        }`}>
                          {step.id}
                        </span>
                      )}
                    </div>
                    {index < verificationSteps.length - 1 && (
                      <div className={`w-0.5 h-12 mt-1 ${
                        step.status === "completed" ? "bg-green-300" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <h4 className="text-sm text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-900 mb-1">Documents Submitted</h4>
                <p className="text-xs text-gray-500">
                  All 5 documents uploaded successfully. You can view or update them anytime.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-900 mb-1">Secure Verification</h4>
                <p className="text-xs text-gray-500">
                  Your information is encrypted and handled securely by our verification team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-900 mb-1">Need Help?</h4>
                <p className="text-xs text-gray-500">
                  Our support team is available 24/7 to assist you with any queries.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/track-application")}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl"
            >
              Track Application Status
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full h-12 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl"
            >
              Back to Home
            </Button>
          </div>

          {/* Notification Note */}
          <div className="mt-6 bg-purple-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-700 mb-1">
              We'll notify you via SMS & Email
            </p>
            <p className="text-xs text-gray-500">
              Once your application is approved, you can start accepting orders immediately!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
