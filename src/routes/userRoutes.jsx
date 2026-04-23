import Home from '../pages/user/Home.jsx';
import About from '../pages/user/About.jsx';
import Admission from '../pages/user/Admission.jsx';
import AllCourses from '../pages/user/AllCourses.jsx';
import CourseDetails from '../pages/user/CourseDetails.jsx';
import Awards from '../pages/user/Awards.jsx';
import Seminar from '../pages/user/Seminar.jsx';
import Events from '../pages/user/Events.jsx';
import EventDetails from '../pages/user/EventDetails.jsx';
import EventRegister from '../pages/user/EventRegister.jsx';
import ContactUs from '../pages/user/ContactUs.jsx';
import Blog from '../pages/user/Blog.jsx';
import BlogDetails from '../pages/user/BlogDetails.jsx';
import Departments from '../pages/user/Departments.jsx';
import Facilities from '../pages/user/Facilities.jsx';
import FacilitiesDetail from '../pages/user/FacilitiesDetail.jsx';
import GalleryPhoto from '../pages/user/GalleryPhoto.jsx';
import Research from '../pages/user/Research.jsx';
import Dashboard from '../pages/user/Dashboard.jsx';
import DbCourses from '../pages/user/DbCourses.jsx';
import DbExams from '../pages/user/DbExams.jsx';
import DbProfile from '../pages/user/DbProfile.jsx';
import DbTimeLine from '../pages/user/DbTimeLine.jsx';
import SdbCourseEdit from '../pages/user/SdbCourseEdit.jsx';
import SdbCourseView from '../pages/user/SdbCourseView.jsx';

export const userRoutes = [
  { index: true, element: <Home /> },
  { path: 'home', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'admission', element: <Admission /> },
  { path: 'all-courses', element: <AllCourses /> },
  { path: 'course-details', element: <CourseDetails /> },
  { path: 'course-details/:slug', element: <CourseDetails /> },
  { path: 'awards', element: <Awards /> },
  { path: 'seminar', element: <Seminar /> },
  { path: 'events', element: <Events /> },
  { path: 'event-details', element: <EventDetails /> },
  { path: 'event-details/:slug', element: <EventDetails /> },
  { path: 'event-register', element: <EventRegister /> },
  { path: 'contact-us', element: <ContactUs /> },
  { path: 'blog', element: <Blog /> },
  { path: 'blog-details', element: <BlogDetails /> },
  { path: 'blog-details/:slug', element: <BlogDetails /> },
  { path: 'departments', element: <Departments /> },
  { path: 'facilities', element: <Facilities /> },
  { path: 'facilities-detail', element: <FacilitiesDetail /> },
  { path: 'gallery-photo', element: <GalleryPhoto /> },
  { path: 'research', element: <Research /> },
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'db-courses', element: <DbCourses /> },
  { path: 'db-exams', element: <DbExams /> },
  { path: 'db-profile', element: <DbProfile /> },
  { path: 'db-time-line', element: <DbTimeLine /> },
  { path: 'sdb-course-edit', element: <SdbCourseEdit /> },
  { path: 'sdb-course-view', element: <SdbCourseView /> },
];
