import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../interface/NavBar";
import {
  CryptoConceptsPage,
  DisclamerPage,
  EncryptorsPage,
  HomePage,
  InformationIntegrityPage,
  NormsStandarsPage,
  SecurityProtocolsPage,
  TermCondsPage
} from '../pages';
export const AppRouter = () => {
  return (
    <>  
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="home" element={ <HomePage /> } />
              <Route path="term-conds" element={ <TermCondsPage /> } />
              <Route path="disclaimer" element={ <DisclamerPage /> } />
              <Route path="encryptors" element={ <EncryptorsPage /> } />
              <Route path="norms-standards" element={ <NormsStandarsPage /> } />
              <Route path="crypto-concepts" element={ <CryptoConceptsPage /> } />
              <Route path="security-protocols" element={ <SecurityProtocolsPage /> } />
              <Route path="info-integrity" element={ <InformationIntegrityPage /> } />
              
              <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
    </>
  )
}
