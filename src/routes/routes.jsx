import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout";
import ContactUs from "../pages/ContactUs/ContactUs";
import Careers from "../pages/careers/Careers";
import WebDevelopment from "../pages/SingleServices/WebDevelopment";
import BigData from "../pages/SingleServices/BigData";
import CloudDevops from "../pages/SingleServices/CloudDevops";
import CyberSecurity from "../pages/SingleServices/CyberSecurity";
import DataScience from "../pages/SingleServices/DataScience";
import IotAutomation from "../pages/SingleServices/IotAutomation";
import SystemDesign from "../pages/SingleServices/SystemDesign";
import WordpressDevelopment from "../pages/SingleServices/WordpressDevelopment";
import UiUx from "../pages/SingleServices/UiUx";
import Service from "../pages/services/Service";
import Home from "../pages/home/Home";
import Dashboard from "../pages/LoginPage/Dashboard";
import ATSpage from "../pages/LoginPage/ATSpage";
import Createjob from "../pages/LoginPage/Createjob";
import Login from "../pages/LoginPage/Loginpage";
import Aboutus from "../pages/aboutus/AboutUs";
import AppDevelopment from "../pages/SingleServices/AppDevelopment";
import ProtectedRoute from "../context/ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import ScrollToTop from "../layouts/ScrollToTop";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-job" element={<Createjob />} />
            <Route path="ats/:id" element={<ATSpage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="about-us" element={<Aboutus />} />
            <Route path="services">
              <Route index element={<Service />} />
              <Route path="app-development" element={<AppDevelopment />} />
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="Cloud-Devops" element={<CloudDevops />} />
              <Route path="CyberSecurity" element={<CyberSecurity />} />
              <Route path="Data-Science" element={<DataScience />} />
              <Route path="System-Design" element={<SystemDesign />} />
              <Route
                path="Wordpress-Development"
                element={<WordpressDevelopment />}
              />
              <Route path="Ui-Ux" element={<UiUx />} />
              <Route path="Iot-Automation" element={<IotAutomation />} />
              <Route path="Big-Data" element={<BigData />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
