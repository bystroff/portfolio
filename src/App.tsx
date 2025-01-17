import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Testimony } from './layout/sections/testimony/Testimony';
import { About } from './layout/sections/about/About';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Projects />
            <Skills />
            <Testimony />
            <About />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;

