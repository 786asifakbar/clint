import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurMember from './pages/OurMember';
import Contact from "./pages/Contact"
import ShadiMubark from './pages/ShadiMubark'
import FoodAid from './pages/FoodAid';
import HelpEducation from './pages/HelpEducation';
import Health from './pages/Health';
import WaterPlant from './pages/WaterPlant'
import MedicineCharity from './pages/MedicineCharity';
import DonationForm from './pages/DonationForm';
import HelpJobBank from './pages/HelpJobBank'
import LegalAid from './pages/LegalAid'
import OldAgeHome from './pages/OldAgeHome'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import ChildrenHospital from './pages/ChildrenHospital';
import Orphans from './pages/Orphans'
import Carousel from './pages/Carousel';
import CenterExecutiveCommunityMember from './pages/CenterExecutiveCommunityMember';
import SuportPage from './pages/SuportPage';
import EducationCommunityMember from "./pages/EducationCommunityMember";
import FundRaisingCommunityMember from './pages/FundRaisingCommunityMember';
import HealthCommunityMember from './pages/HealthCommunityMember';
import HiringRequestForm from './pages/HiringForm';
import ITDepartmentMember from './pages/ITDepartmentMember';
import JobSeekerForm from './pages/JobSeekerForm';
import LegalAidCommunityMember from './pages/LegalAidCommunityMember';
import MainLayout from './pages/PageOfEdu'

const App = () => {
  return (
    <>  
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ShadiMubark" element={<ShadiMubark />} />
          <Route path="/FoodAid" element={<FoodAid />} />
          <Route path="/HelpEducation" element={<HelpEducation/>} />
          <Route path="/Health" element={<Health/>} />
          <Route path="/WaterPlant" element={<WaterPlant />} />
          <Route path="/MedicineCharity" element={<MedicineCharity />} />
          <Route path="/HelpJobBank" element={<HelpJobBank/>} />
          <Route path="/LegalAid" element={<LegalAid/>} />
          <Route path="/OldAgeHome" element={<OldAgeHome/>} />
          <Route path="/ChildrenHospital" element={<ChildrenHospital/>} />
          <Route path="/Orphans" element={<Orphans/>} />
          <Route path="/DonationForm" element={<DonationForm />} />
          <Route path="/OurMember" element={<OurMember />} />
          <Route path="/Carousel" element={<Carousel/>} />
          <Route path="/CenterExecutiveCommunityMember" element={<CenterExecutiveCommunityMember/>} />
          <Route path="/SuportPage" element={<SuportPage/>} />
          <Route path="/PageOfEdu" element={<MainLayout/>} />
            <Route path="/EducationCommunityMember" element={<EducationCommunityMember/>} />
              <Route path="/FundRaisingCommunityMember" element={<FundRaisingCommunityMember/>} />
                <Route path="/HealthCommunityMember" element={<HealthCommunityMember/>} />
                  <Route path="/HiringRequestForm" element={<HiringRequestForm/>} />
                    <Route path="/ITDepartmentMember" element={<ITDepartmentMember/>} />
                      <Route path="/JobSeekerForm" element={<JobSeekerForm/>} />
                        <Route path="/LegalAidCommunityMember" element={<LegalAidCommunityMember/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
         </BrowserRouter>
    </>
  );
}
export default App;