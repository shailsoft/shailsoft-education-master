import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import AdminMainMenu from '../pages/admin/AdminMainMenu.jsx';
import AdminAboutMenu from '../pages/admin/AdminAboutMenu.jsx';
import AdminAdmissionMenu from '../pages/admin/AdminAdmissionMenu.jsx';
import AdminAllMenu from '../pages/admin/AdminAllMenu.jsx';
import AdminAddCourses from '../pages/admin/AdminAddCourses.jsx';
import AdminAllCourses from '../pages/admin/AdminAllCourses.jsx';
import AdminCourseDetails from '../pages/admin/AdminCourseDetails.jsx';
import AdminTrashCourses from '../pages/admin/AdminTrashCourses.jsx';
import AdminAdmissionEnquiry from '../pages/admin/AdminAdmissionEnquiry.jsx';
import AdminAllEnquiry from '../pages/admin/AdminAllEnquiry.jsx';
import AdminCommonEnquiry from '../pages/admin/AdminCommonEnquiry.jsx';
import AdminCourseEnquiry from '../pages/admin/AdminCourseEnquiry.jsx';
import AdminEventEnquiry from '../pages/admin/AdminEventEnquiry.jsx';
import AdminSeminarEnquiry from '../pages/admin/AdminSeminarEnquiry.jsx';
import AdminViewEnquiry from '../pages/admin/AdminViewEnquiry.jsx';
import AdminEventAdd from '../pages/admin/AdminEventAdd.jsx';
import AdminEventAll from '../pages/admin/AdminEventAll.jsx';
import AdminEventEdit from '../pages/admin/AdminEventEdit.jsx';
import AdminExam from '../pages/admin/AdminExam.jsx';
import AdminExamAdd from '../pages/admin/AdminExamAdd.jsx';
import AdminExamAll from '../pages/admin/AdminExamAll.jsx';
import AdminExamEdit from '../pages/admin/AdminExamEdit.jsx';
import AdminExamGroupAdd from '../pages/admin/AdminExamGroupAdd.jsx';
import AdminExamGroupAll from '../pages/admin/AdminExamGroupAll.jsx';
import AdminExportData from '../pages/admin/AdminExportData.jsx';
import AdminImportData from '../pages/admin/AdminImportData.jsx';
import AdminJobAdd from '../pages/admin/AdminJobAdd.jsx';
import AdminJobAll from '../pages/admin/AdminJobAll.jsx';
import AdminJobEdit from '../pages/admin/AdminJobEdit.jsx';
import AdminPageAdd from '../pages/admin/AdminPageAdd.jsx';
import AdminPageAll from '../pages/admin/AdminPageAll.jsx';
import AdminPageEdit from '../pages/admin/AdminPageEdit.jsx';
import AdminPanelSetting from '../pages/admin/AdminPanelSetting.jsx';
import AdminQuickLink from '../pages/admin/AdminQuickLink.jsx';
import AdminSeminarAdd from '../pages/admin/AdminSeminarAdd.jsx';
import AdminSeminarAll from '../pages/admin/AdminSeminarAll.jsx';
import AdminSeminarEdit from '../pages/admin/AdminSeminarEdit.jsx';
import AdminSetting from '../pages/admin/AdminSetting.jsx';
import AdminSlider from '../pages/admin/AdminSlider.jsx';
import AdminSliderEdit from '../pages/admin/AdminSliderEdit.jsx';
import AdminStudentDetails from '../pages/admin/AdminStudentDetails.jsx';
import AdminUserAdd from '../pages/admin/AdminUserAdd.jsx';
import AdminUserAll from '../pages/admin/AdminUserAll.jsx';

export const adminRoutes = [
  { index: true, element: <AdminDashboard /> },
  { path: 'dashboard', element: <AdminDashboard /> },
  { path: 'main-menu', element: <AdminMainMenu /> },
  { path: 'about-menu', element: <AdminAboutMenu /> },
  { path: 'admission-menu', element: <AdminAdmissionMenu /> },
  { path: 'all-menu', element: <AdminAllMenu /> },
  { path: 'add-courses', element: <AdminAddCourses /> },
  { path: 'all-courses', element: <AdminAllCourses /> },
  { path: 'course-details', element: <AdminCourseDetails /> },
  { path: 'trash-courses', element: <AdminTrashCourses /> },
  { path: 'admission-enquiry', element: <AdminAdmissionEnquiry /> },
  { path: 'all-enquiry', element: <AdminAllEnquiry /> },
  { path: 'common-enquiry', element: <AdminCommonEnquiry /> },
  { path: 'course-enquiry', element: <AdminCourseEnquiry /> },
  { path: 'event-enquiry', element: <AdminEventEnquiry /> },
  { path: 'seminar-enquiry', element: <AdminSeminarEnquiry /> },
  { path: 'view-enquiry', element: <AdminViewEnquiry /> },
  { path: 'event-add', element: <AdminEventAdd /> },
  { path: 'event-all', element: <AdminEventAll /> },
  { path: 'event-edit', element: <AdminEventEdit /> },
  { path: 'exam', element: <AdminExam /> },
  { path: 'exam-add', element: <AdminExamAdd /> },
  { path: 'exam-all', element: <AdminExamAll /> },
  { path: 'exam-edit', element: <AdminExamEdit /> },
  { path: 'exam-group-add', element: <AdminExamGroupAdd /> },
  { path: 'exam-group-all', element: <AdminExamGroupAll /> },
  { path: 'export-data', element: <AdminExportData /> },
  { path: 'import-data', element: <AdminImportData /> },
  { path: 'job-add', element: <AdminJobAdd /> },
  { path: 'job-all', element: <AdminJobAll /> },
  { path: 'job-edit', element: <AdminJobEdit /> },
  { path: 'page-add', element: <AdminPageAdd /> },
  { path: 'page-all', element: <AdminPageAll /> },
  { path: 'page-edit', element: <AdminPageEdit /> },
  { path: 'panel-setting', element: <AdminPanelSetting /> },
  { path: 'quick-link', element: <AdminQuickLink /> },
  { path: 'seminar-add', element: <AdminSeminarAdd /> },
  { path: 'seminar-all', element: <AdminSeminarAll /> },
  { path: 'seminar-edit', element: <AdminSeminarEdit /> },
  { path: 'setting', element: <AdminSetting /> },
  { path: 'slider', element: <AdminSlider /> },
  { path: 'slider-edit', element: <AdminSliderEdit /> },
  { path: 'student-details', element: <AdminStudentDetails /> },
  { path: 'user-add', element: <AdminUserAdd /> },
  { path: 'user-all', element: <AdminUserAll /> },
];
