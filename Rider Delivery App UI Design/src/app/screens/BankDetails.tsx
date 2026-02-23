import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Building2, CreditCard, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function BankDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountHolder: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    bankName: "",
    branchName: "",
    upiId: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/pending-approval");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-6 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl text-white">Bank Details</h1>
            <p className="text-purple-200 text-sm">Step 3 of 3</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 transition-all" style={{ width: "100%" }} />
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-8 pb-24">
        <div className="max-w-md mx-auto">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-purple-900 mb-1">Secure Payment Setup</p>
            <p className="text-xs text-purple-700">
              Your earnings will be transferred to this account. Ensure all details are correct.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Bank Account Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-base text-gray-900">Bank Account</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Account Holder Name *</label>
                  <Input
                    type="text"
                    placeholder="As per bank records"
                    value={formData.accountHolder}
                    onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">Account Number *</label>
                  <Input
                    type="text"
                    placeholder="Enter account number"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">Confirm Account Number *</label>
                  <Input
                    type="text"
                    placeholder="Re-enter account number"
                    value={formData.confirmAccountNumber}
                    onChange={(e) => setFormData({ ...formData, confirmAccountNumber: e.target.value })}
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">IFSC Code *</label>
                  <Input
                    type="text"
                    placeholder="e.g., SBIN0001234"
                    value={formData.ifscCode}
                    onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value.toUpperCase() })}
                    className="h-12 bg-gray-50 border-gray-200 rounded-xl uppercase"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Bank Name *</label>
                    <Input
                      type="text"
                      placeholder="Bank name"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Branch Name</label>
                    <Input
                      type="text"
                      placeholder="Branch"
                      value={formData.branchName}
                      onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
                      className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* UPI Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-base text-gray-900">UPI Details (Optional)</h3>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">UPI ID</label>
                <Input
                  type="text"
                  placeholder="yourname@upi"
                  value={formData.upiId}
                  onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                  className="h-12 bg-gray-50 border-gray-200 rounded-xl"
                />
                <p className="text-xs text-gray-500 mt-2">
                  For quick withdrawals and instant payments
                </p>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl mt-6"
            >
              Submit for Verification
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Your information is encrypted and secure. We never share your details with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
