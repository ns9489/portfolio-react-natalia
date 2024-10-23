import { Header } from './components/Layouts/Header/Header'
import {AboutMe} from './components/Pages/AboutMe/AboutMe'
import { ContactMe } from './components/Pages/ContactMe/ContactMe'
import { Home } from './components/Pages/Home/Home'


export const App = () => {
  return (
    <>
      <Header/>
      <Home />
      <AboutMe/>
      <ContactMe/>
    </>

  )
}

