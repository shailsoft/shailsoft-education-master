import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('src/pages');

function userStub({ component, title, description, crumbs }) {
  const crumbsLiteral = crumbs
    ? `[${crumbs.map((c) => `{ label: '${c.label}'${c.to ? `, to: '${c.to}'` : ''} }`).join(', ')}]`
    : `[{ label: '${title}' }]`;
  return `import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function ${component}() {
  return (
    <PagePlaceholder
      title="${title.replace(/"/g, '\\"')}"
      description="${(description || '').replace(/"/g, '\\"')}"
      crumbs={${crumbsLiteral}}
    />
  );
}
`;
}

function adminStub({ component, title, description }) {
  return `import AdminPagePlaceholder from '../../components/admin/AdminPagePlaceholder.jsx';

export default function ${component}() {
  return (
    <AdminPagePlaceholder
      title="${title.replace(/"/g, '\\"')}"
      description="${(description || '').replace(/"/g, '\\"')}"
    />
  );
}
`;
}

const USER_PAGES = [
  ['Awards', 'Awards', 'Celebrating our achievements, student honours, and institutional recognitions.'],
  ['Seminar', 'Seminars', 'Upcoming and past academic seminars hosted by our departments and guest speakers.'],
  ['Events', 'Events', 'Campus events, open days, and community activities throughout the year.'],
  ['EventDetails', 'Event Details', 'Detailed information about this event — agenda, speakers, and venue.'],
  ['EventRegister', 'Event Registration', 'Register for an upcoming event or seminar at Education Master.'],
  ['Blog', 'Blog', 'News, campus stories, research highlights, and student experiences.'],
  ['BlogDetails', 'Blog Details', 'Read the full article with comments and related posts.'],
  ['Departments', 'Departments', 'Explore our academic departments, faculty, and research groups.'],
  ['Facilities', 'Facilities', 'Our modern campus facilities — labs, libraries, hostels, and sports complexes.'],
  ['FacilitiesDetail', 'Facility Details', 'Detailed overview of this campus facility with photos and amenities.'],
  ['GalleryPhoto', 'Photo Gallery', 'A visual tour of campus life, events, and our vibrant community.'],
  ['Research', 'Research', 'Ongoing research initiatives, labs, publications, and collaborations.'],
  ['Dashboard', 'Student Dashboard', 'Your personalised learning dashboard with courses, exams, and announcements.'],
  ['DbCourses', 'My Courses', 'Courses you are currently enrolled in, with progress and upcoming lessons.'],
  ['DbExams', 'My Exams', 'Your exam schedule, past results, and upcoming assessments.'],
  ['DbProfile', 'My Profile', 'View and edit your student profile, contact details, and preferences.'],
  ['DbTimeLine', 'My Timeline', 'A chronological view of your academic activities and milestones.'],
  ['SdbCourseEdit', 'Edit Course', 'Edit your enrolled course preferences and electives.'],
  ['SdbCourseView', 'View Course', 'Detailed view of a course from your enrolled list.'],
];

const ADMIN_PAGES = [
  ['AdminMainMenu', 'Admin — Main Menu Editor', 'Configure the frontend main navigation menu structure.'],
  ['AdminAboutMenu', 'Admin — About Menu', 'Edit the About mega-menu items and banners.'],
  ['AdminAdmissionMenu', 'Admin — Admission Menu', 'Configure the Admission mega-menu items.'],
  ['AdminAllMenu', 'Admin — All Menus', 'Manage all navigation menus across the site.'],
  ['AdminAddCourses', 'Admin — Add Course', 'Create a new course entry with details, fees, and schedule.'],
  ['AdminAllCourses', 'Admin — All Courses', 'List, edit, and manage every course offered.'],
  ['AdminCourseDetails', 'Admin — Course Details', 'Edit a specific course — curriculum, seats, instructors.'],
  ['AdminTrashCourses', 'Admin — Trashed Courses', 'Courses moved to trash, with restore/delete actions.'],
  ['AdminAdmissionEnquiry', 'Admin — Admission Enquiries', 'Review admission enquiries from prospective students.'],
  ['AdminAllEnquiry', 'Admin — All Enquiries', 'Unified view of all enquiries submitted via the website.'],
  ['AdminCommonEnquiry', 'Admin — Common Enquiries', 'Generic enquiries from visitors.'],
  ['AdminCourseEnquiry', 'Admin — Course Enquiries', 'Enquiries from students interested in specific courses.'],
  ['AdminEventEnquiry', 'Admin — Event Enquiries', 'Enquiries and registrations for events.'],
  ['AdminSeminarEnquiry', 'Admin — Seminar Enquiries', 'Enquiries and registrations for seminars.'],
  ['AdminViewEnquiry', 'Admin — Enquiry Details', 'Detailed view of a single enquiry with reply history.'],
  ['AdminEventAdd', 'Admin — Add Event', 'Create a new event with date, speakers, and venue.'],
  ['AdminEventAll', 'Admin — All Events', 'All upcoming and past events.'],
  ['AdminEventEdit', 'Admin — Edit Event', 'Update event information.'],
  ['AdminExam', 'Admin — Exams', 'Exam time-table management hub.'],
  ['AdminExamAdd', 'Admin — Add Exam', 'Add a new exam to the schedule.'],
  ['AdminExamAll', 'Admin — All Exams', 'List all scheduled exams.'],
  ['AdminExamEdit', 'Admin — Edit Exam', 'Update an existing exam entry.'],
  ['AdminExamGroupAdd', 'Admin — Add Exam Group', 'Create a new exam group (e.g. semester, subject cluster).'],
  ['AdminExamGroupAll', 'Admin — All Exam Groups', 'All exam groups with student counts.'],
  ['AdminExportData', 'Admin — Export Data', 'Export students, courses, and enquiry data to CSV/XLSX.'],
  ['AdminImportData', 'Admin — Import Data', 'Import data into the system from CSV/XLSX files.'],
  ['AdminJobAdd', 'Admin — Add Job Vacancy', 'Post a new job vacancy.'],
  ['AdminJobAll', 'Admin — All Jobs', 'All job vacancies currently listed.'],
  ['AdminJobEdit', 'Admin — Edit Job', 'Update a job posting.'],
  ['AdminPageAdd', 'Admin — Add Page', 'Create a new content page for the website.'],
  ['AdminPageAll', 'Admin — All Pages', 'All content pages managed through the admin panel.'],
  ['AdminPageEdit', 'Admin — Edit Page', 'Edit a content page.'],
  ['AdminPanelSetting', 'Admin — Panel Settings', 'Admin account and panel preferences.'],
  ['AdminQuickLink', 'Admin — Quick Links', 'Manage slider quick-link buttons.'],
  ['AdminSeminarAdd', 'Admin — Add Seminar', 'Schedule a new seminar.'],
  ['AdminSeminarAll', 'Admin — All Seminars', 'All scheduled seminars.'],
  ['AdminSeminarEdit', 'Admin — Edit Seminar', 'Update seminar details.'],
  ['AdminSetting', 'Admin — Site Settings', 'Site-wide configuration and branding.'],
  ['AdminSlider', 'Admin — Home Slider', 'Manage the homepage hero slider.'],
  ['AdminSliderEdit', 'Admin — Edit Slide', 'Update a single slider entry.'],
  ['AdminStudentDetails', 'Admin — Student Details', 'View and edit a student record.'],
  ['AdminUserAdd', 'Admin — Add User', 'Create a new user account (admin, staff, or student).'],
  ['AdminUserAll', 'Admin — All Users', 'All registered users with role and status filters.'],
];

function writeFile(fullPath, content) {
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
}

let created = 0;

for (const [component, title, description] of USER_PAGES) {
  const file = path.join(ROOT, 'user', `${component}.jsx`);
  if (!fs.existsSync(file)) {
    writeFile(file, userStub({ component, title, description }));
    created += 1;
  }
}

for (const [component, title, description] of ADMIN_PAGES) {
  const file = path.join(ROOT, 'admin', `${component}.jsx`);
  // Overwrite admin stubs since generator was updated to admin placeholder.
  writeFile(file, adminStub({ component, title, description }));
  created += 1;
}

console.log(`Generated/updated ${created} page stubs.`);
