import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompanyInfo from "./components/CompanyInfo";
import TabNavigation from "./components/TabNavigation";
import InformationSection from "./components/InformationSection";
import BookingSection from "./components/BookingSection";
import ReviewSection from "./components/ReviewSection";

function App() {
  const [activeTab, setActiveTab] = useState("Personal");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Ana İçerik */}
      <main className="flex-grow container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Taraftaki Şirket Bilgileri ve Tab */}
        <div className="space-y-4">
          <CompanyInfo />
          <TabNavigation onSelectTab={handleTabSelect} />
        </div>

        {/* Sağ Taraftaki İçerik */}
        <div className="lg:col-span-2">
          {activeTab === "Personal" && <InformationSection />}
          {activeTab === "Bookings" && <BookingSection />}
          {activeTab === "Reviews" && <ReviewSection />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
