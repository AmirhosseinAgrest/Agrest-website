import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/config';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Services = lazy(() => import('@/pages/Services'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Resume = lazy(() => import('@/pages/Resume'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PROJECTS} element={<Projects />} />
      <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />
      <Route path={ROUTES.SERVICES} element={<Services />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
      <Route path={ROUTES.BLOG_POST} element={<BlogPost />} />
      <Route path={ROUTES.RESUME} element={<Resume />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;