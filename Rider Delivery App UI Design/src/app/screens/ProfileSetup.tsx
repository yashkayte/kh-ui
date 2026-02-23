import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Camera, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function ProfileSetup() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/document-upload");
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
            <h1 className="text-2xl text-white">Profile Setup</h1>
            <p className="text-purple-200 text-sm">Step 1 of 3</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 transition-all" style={{ width: "33%" }} />
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Profile Photo Upload */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-3">
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-16 h-16 text-gray-400" />
                )}
              </div>
              <label 
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              >
                <Camera className="w-5 h-5 text-white" />
              </label>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-sm text-gray-600">Upload Profile Photo</p>
            <p className="text-xs text-gray-500">JPG, PNG (Max 5MB)</p>
          </div>

          {/* Personal Details Form */}
          <form onSubmit={handleContinue} className="space-y-5">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Full Name *</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12 bg-white border-gray-200 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Date of Birth *</label>
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="h-12 bg-white border-gray-200 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Full Address *</label>
              <Input
                type="text"
                placeholder="House/Flat No., Street Name"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="h-12 bg-white border-gray-200 rounded-xl"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">City *</label>
                <Input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="h-12 bg-white border-gray-200 rounded-xl"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">State *</label>
                <Input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="h-12 bg-white border-gray-200 rounded-xl"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">PIN Code *</label>
              <Input
                type="text"
                placeholder="6-digit PIN code"
                maxLength={6}
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="h-12 bg-white border-gray-200 rounded-xl"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl mt-6"
            >
              Continue to Documents
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
