import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Profile from '../components/Profile'
import ActivitiesList from '../components/ActivitiesList'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                // Small timeout to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Profile />
            <ActivitiesList />
            <Projects />
            <TechStack />
            <Contact />
        </>
    )
}

export default Home
