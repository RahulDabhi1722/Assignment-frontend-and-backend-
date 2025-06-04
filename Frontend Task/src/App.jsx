import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Process from './components/Process/Process'
import Try from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import CTA from './components/CTA/CTA'
import EntriesTable from './components/EntriesTable/EntriesTabel'

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (formData) => {
    setEntries([...entries, formData]);
  };

  return (
    <div>
      <Navbar/>
      <HeroSection addEntry={addEntry}/>
      <Process/>
      <Try/>
      <CTA/>
      {entries.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Submitted Entries</h2>
            <div className="max-w-5xl mx-auto">
              <EntriesTable entries={entries} />
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default App
