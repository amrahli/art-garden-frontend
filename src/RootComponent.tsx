import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ServicesPage from './pages/ServicesPage'
import EventPage from './pages/EventPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import ServiceFieldPage from 'pages/ServiceFieldPage'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.Home} element={<HomePage />} />
                <Route path={ROUTES.About} element={<AboutPage />} />
                <Route path={ROUTES.ServiceField} element={<ServiceFieldPage />} />
                <Route path={ROUTES.Services} element={<ServicesPage />} />
                <Route path={ROUTES.Projects} element={<ProjectsPage />} />
                <Route path={ROUTES.Project} element={<ProjectPage />} />
                <Route path={ROUTES.Event} element={<EventPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
