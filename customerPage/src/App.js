import { HomePage } from "./pages/homePage/HomePage";
import { Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import { DonatePage } from "./pages/donatepage/DonatePage";
import { PayPage } from "./pages/paypage/PayPage";
import { PayCompletePage } from "./pages/paypage/PayCompletePage";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Volunteer } from "./pages/homePage/VolunteerPage";
import { FaqPage } from "./pages/homePage/FaqPage";
import { AnaLysicItem } from "./pages/analysic/AnalysicItem";
import { AnalysicStatement } from "./pages/analysic/AnalysicStatement";
import { AnalysicUser } from "./pages/analysic/AnalysicUser";
import { TestTable } from "./pages/analysic/TestTable";
import { CreatePostPage } from "./pages/post/createpost/CreatePostPage";
import { PostPage } from "./pages/post/post/PostPage";

import { ListPost } from "./pages/post/listpost/ListPost";
import { AnalysicResult } from "./pages/analysic/AnalysicResult";
import { DashBoard } from "./pages/dashboard/DashBoard";
import { DashBoardUser } from "./pages/dashboard/DashBoardUser";
import { DashBoardChuongTrinh } from "./pages/dashboard/DashBoardChuongTrinh";
import { DashBoardMonthly } from "./pages/dashboard/DashBoardMonthly";
import { DashBoardVolunteer } from "./pages/dashboard/DashBoardVolunteer";
import { VolunteerSuccessPage } from "./pages/homePage/VolunteerSuccessPage";
import { DonateMonthlyPage } from "./pages/donatepage/DonateMonthlyPage";
import { RegisterOrgnizationPage } from "./pages/homePage/RegisterOrgnizationPage";
import { ChuongTrinhSuccessPage } from "./pages/homePage/ChuongTrinhSuccessPage";
import { DashBoardVolunteerAdmin } from "./pages/dashboard/DashBoardVolunteerAdmin";
import { DashBoardChuongTrinhAdmin } from "./pages/dashboard/DashBoardChuongTrinhAdmin";
import { Profile } from "./pages/auth/Profile";
import { ProfilePassword } from "./pages/auth/ProfilePassword";
import { ProfileDonate } from "./pages/auth/ProfileDonate";
import { ProfileVolunteer } from "./pages/auth/ProfileVolunteer";
import DashBoardRoute from "./pages/dashboard/DashBoardRoute";
import { NoSupport } from "./pages/homePage/NoSupport";
import AnalysicRoute from "./pages/analysic/AnalysicRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/donate-monthly" element={<DonateMonthlyPage />} />
        <Route path="/paying" element={<PayPage />} />
        <Route path="/paying-complete" element={<PayCompletePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/password" element={<ProfilePassword />} />
        <Route path="/profile/donate" element={<ProfileDonate />} />
        <Route path="/profile/volunteer" element={<ProfileVolunteer />} />

        {/* link  */}
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/volunteer/success" element={<VolunteerSuccessPage />} />
        <Route
          path="/register-orginization"
          element={<RegisterOrgnizationPage />}
        />

        {/* post page */}
        <Route path="/createpost" element={<CreatePostPage />} />
        <Route
          path="/createpost-success"
          element={<ChuongTrinhSuccessPage />}
        />

        {/* link post type */}

        <Route path="/listpost/*" element={<ListPost />} />
        <Route path="/post" element={<PostPage />} />

        {/* dash board */}

        <Route path="/dashboard/*" element={<DashBoardRoute />}></Route>
        {/* <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/donator" element={<DashBoardUser />} />
        <Route
          path="/dashboard/chuongtrinh"
          element={<DashBoardChuongTrinh />}
        />
        <Route path="/dashboard/monthly" element={<DashBoardMonthly />} />
        <Route path="/dashboard/volunteer" element={<DashBoardVolunteer />} />
        <Route
          path="/dashboard/postadmin"
          element={<DashBoardChuongTrinhAdmin />}
        />
        <Route
          path="/dashboard/checkuser"
          element={<DashBoardVolunteerAdmin />}
        /> */}
        <Route path="*" element={<AnalysicRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
