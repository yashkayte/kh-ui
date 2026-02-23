import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Upload, CheckCircle2, FileText, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

type DocumentStatus = "pending" | "uploaded" | "verified";

interface Document {
  id: string;
  name: string;
  description: string;
  status: DocumentStatus;
  file?: File;
}

export function DocumentUpload() {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Document[]>([
    { id: "aadhaar", name: "Aadhaar Card", description: "Front & Back side", status: "pending" },
    { id: "pan", name: "PAN Card", description: "Clear readable copy", status: "pending" },
    { id: "license", name: "Driving License", description: "Valid DL (Front & Back)", status: "pending" },
    { id: "rc", name: "Vehicle RC", description: "Registration Certificate", status: "pending" },
    { id: "insurance", name: "Vehicle Insurance", description: "Valid insurance copy", status: "pending" },
  ]);

  const handleFileUpload = (docId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocuments(docs => docs.map(doc => 
        doc.id === docId ? { ...doc, status: "uploaded" as DocumentStatus, file } : doc
      ));
    }
  };

  const allDocumentsUploaded = documents.every(doc => doc.status === "uploaded");

  const handleContinue = () => {
    navigate("/bank-details");
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
            <h1 className="text-2xl text-white">Upload Documents</h1>
            <p className="text-purple-200 text-sm">Step 2 of 3</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 transition-all" style={{ width: "66%" }} />
        </div>
      </div>

      {/* Documents List */}
      <div className="px-6 py-8 pb-24">
        <div className="max-w-md mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900 mb-1">Important</p>
              <p className="text-xs text-blue-700">
                Please ensure all documents are clear, valid, and not expired. 
                Supported formats: JPG, PNG, PDF (Max 5MB each)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base text-gray-900">{doc.name}</h3>
                      {doc.status === "uploaded" && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{doc.description}</p>
                    {doc.file && (
                      <p className="text-xs text-purple-600 mt-1">{doc.file.name}</p>
                    )}
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    doc.status === "uploaded" ? "bg-green-100" : "bg-gray-100"
                  }`}>
                    {doc.status === "uploaded" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <FileText className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <label 
                  htmlFor={`upload-${doc.id}`}
                  className={`flex items-center justify-center gap-2 w-full h-11 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
                    doc.status === "uploaded"
                      ? "border-green-300 bg-green-50 text-green-700"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-50 text-gray-700"
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">
                    {doc.status === "uploaded" ? "Re-upload" : "Upload Document"}
                  </span>
                </label>
                <input
                  id={`upload-${doc.id}`}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileUpload(doc.id, e)}
                  className="hidden"
                />
              </div>
            ))}
          </div>

          <Button 
            onClick={handleContinue}
            disabled={!allDocumentsUploaded}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl mt-6 disabled:opacity-50"
          >
            Continue to Bank Details
          </Button>
        </div>
      </div>
    </div>
  );
}
