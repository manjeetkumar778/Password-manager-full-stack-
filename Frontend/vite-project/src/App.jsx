import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AddCredentialForm from './components/AddCredentialForm';
import PasswordTable from './components/PasswordTable';
import Footer from './components/Footer';
import { getPassword } from './services/passwordApis';

function App() {

  return (
    <>
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        {/* <Sidebar /> */}
        <main className="flex-1 overflow-y-auto bg-background p-container-padding pb-32">
          <HeroSection />
          <AddCredentialForm />
          <PasswordTable />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
