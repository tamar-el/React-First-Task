import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
function App() {
    return (
        <div className="app">
            <Header />
            <main className="profile-container">

                <ProfileCard
                    name="David Cohen"
                    description="A good friend who loves programming and technology."
                    avatar="src\pictures\תמונה-של-גבר-25.jpg"
                    type="Friend"
                />

                <ProfileCard
                    name="Sarah Levi"
                    description="An experienced teacher who enjoys sharing knowledge."
                    avatar="src\pictures\תמונה-של-גבר-16.jpg"
                    type="Teacher"
                />
                <ProfileCard
                    name="Daniel Israel"
                    description="A student learning React and web development."
                    avatar="src\pictures\תמונה-של-גבר-15.jpg"
                    type="Student"
                />

            </main>
            <Footer />
        </div>
    );
}

export default App
