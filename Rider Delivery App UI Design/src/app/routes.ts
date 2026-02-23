import { createBrowserRouter } from "react-router";
import { Splash } from "./screens/Splash";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { VerifyOTP } from "./screens/VerifyOTP";
import { ProfileSetup } from "./screens/ProfileSetup";
import { DocumentUpload } from "./screens/DocumentUpload";
import { BankDetails } from "./screens/BankDetails";
import { PendingApproval } from "./screens/PendingApproval";
import { ForgotPassword } from "./screens/ForgotPassword";
import { BiometricLogin } from "./screens/BiometricLogin";
import { Dashboard } from "./screens/Dashboard";
import { OrdersList } from "./screens/OrdersList";
import { Earnings } from "./screens/Earnings";
import { Profile } from "./screens/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify-otp",
    Component: VerifyOTP,
  },
  {
    path: "/profile-setup",
    Component: ProfileSetup,
  },
  {
    path: "/document-upload",
    Component: DocumentUpload,
  },
  {
    path: "/bank-details",
    Component: BankDetails,
  },
  {
    path: "/pending-approval",
    Component: PendingApproval,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/biometric-login",
    Component: BiometricLogin,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/orders",
    Component: OrdersList,
  },
  {
    path: "/earnings",
    Component: Earnings,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);