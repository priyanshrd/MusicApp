import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { SidebarItem } from './components/Sidebar';
import Header from './components/Header';
import {
  LayoutDashboard,
  Plus,
  GitFork,
  BarChart3,
  Settings
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll event
  const handleScroll = () => {
    const dashboard = document.getElementById('dashboard');
    const dashboardPosition = dashboard.getBoundingClientRect();
    
    if (dashboardPosition.top < window.innerHeight && dashboardPosition.bottom > 0) {
      setActiveSection('dashboard');
    } else {
      setActiveSection('home');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-[#d4c084] to-[#e60202] relative flex">
      <Sidebar>
        <SidebarItem 
          icon={<LayoutDashboard size={20} />}
          text='Dashboard'
          active={activeSection === 'dashboard'}
        /> 
        <SidebarItem 
          icon={<Plus size={20} />}
          text='Create'
        />
        <SidebarItem 
          icon={<GitFork size={20} />}
          text='Fork Project'
        />
        <SidebarItem 
          icon={<BarChart3 size={20} />}
          text='Statistics'
          alert
        />
        <SidebarItem 
          icon={<Settings size={20} />}
          text='Settings'
        />
      </Sidebar>

      <Header />
{/* 
      <Home />
      <Dashboard /> */}
    </div>
  );
}
