import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Collapsible admin sidebar. Each group expands independently
 * (replaces Materialize's collapsible accordion with React state).
 */
const MENU = [
  { label: 'Dashboard', to: '/admin', icon: 'fa-bar-chart' },
  { label: 'Site Setting', to: '/admin/setting', icon: 'fa-cogs' },
  {
    label: 'All Courses', icon: 'fa-book',
    items: [
      { label: 'All Course', to: '/admin/all-courses' },
      { label: 'Add New Course', to: '/admin/add-courses' },
      { label: 'Trash Course', to: '/admin/trash-courses' },
    ],
  },
  {
    label: 'Users', icon: 'fa-user',
    items: [
      { label: 'All Users', to: '/admin/user-all' },
      { label: 'Add New user', to: '/admin/user-add' },
    ],
  },
  {
    label: 'All Pages', icon: 'fa-bookmark-o',
    items: [
      { label: 'Pages', to: '/admin/page-all' },
      { label: 'Create New Page', to: '/admin/page-add' },
    ],
  },
  {
    label: 'Menu', icon: 'fa-bars',
    items: [
      { label: 'Main menu', to: '/admin/main-menu' },
      { label: 'About menu', to: '/admin/about-menu' },
      { label: 'Admission menu', to: '/admin/admission-menu' },
      { label: 'All page menu', to: '/admin/all-menu' },
    ],
  },
  { label: 'Slider', to: '/admin/slider', icon: 'fa-image' },
  { label: 'Slider quick link', to: '/admin/quick-link', icon: 'fa-external-link-square' },
  {
    label: 'Events', icon: 'fa-calendar',
    items: [
      { label: 'All Events', to: '/admin/event-all' },
      { label: 'Create New Events', to: '/admin/event-add' },
    ],
  },
  {
    label: 'Seminar', icon: 'fa-bullhorn',
    items: [
      { label: 'All Seminar', to: '/admin/seminar-all' },
      { label: 'Create New Seminar', to: '/admin/seminar-add' },
    ],
  },
  {
    label: 'Job Vacants', icon: 'fa-graduation-cap',
    items: [
      { label: 'All Jobs', to: '/admin/job-all' },
      { label: 'Create New Job', to: '/admin/job-add' },
    ],
  },
  {
    label: 'Exam time table', icon: 'fa-pencil',
    items: [
      { label: 'All Exams', to: '/admin/exam-all' },
      { label: 'Add New Exam', to: '/admin/exam-add' },
      { label: 'All Groups', to: '/admin/exam-group-all' },
      { label: 'Create New Groups', to: '/admin/exam-group-add' },
    ],
  },
  {
    label: 'Students', icon: 'fa-users',
    items: [
      { label: 'All Students', to: '/admin/user-all' },
      { label: 'Student Details', to: '/admin/student-details' },
    ],
  },
  {
    label: 'Enquiry', icon: 'fa-commenting-o',
    items: [
      { label: 'All Enquiry', to: '/admin/all-enquiry' },
      { label: 'Course Enquiry', to: '/admin/course-enquiry' },
      { label: 'Admission Enquiry', to: '/admin/admission-enquiry' },
      { label: 'Seminar Enquiry', to: '/admin/seminar-enquiry' },
      { label: 'Event Enquiry', to: '/admin/event-enquiry' },
      { label: 'Common Enquiry', to: '/admin/common-enquiry' },
    ],
  },
  {
    label: 'Import & Export', icon: 'fa-cloud-download',
    items: [
      { label: 'Export all data', to: '/admin/export-data' },
      { label: 'Import all data', to: '/admin/import-data' },
    ],
  },
];

export default function AdminSidebar({ open }) {
  const [expanded, setExpanded] = useState(null);
  const toggle = (label) => setExpanded((cur) => (cur === label ? null : label));

  return (
    <div className="sb2-1" style={{ display: open ? 'block' : undefined }}>
      <div className="sb2-12">
        <ul>
          <li><img src="/images/placeholder.jpg" alt="" /></li>
          <li>
            <h5>Victoria Baker <span>Santa Ana, CA</span></h5>
          </li>
          <li></li>
        </ul>
      </div>

      <div className="sb2-13">
        <ul className="collapsible" data-collapsible="accordion">
          {MENU.map((entry) => {
            if (entry.to) {
              return (
                <li key={entry.label}>
                  <NavLink
                    to={entry.to}
                    end={entry.to === '/admin'}
                    className={({ isActive }) => (isActive ? 'menu-active' : '')}
                  >
                    <i className={`fa ${entry.icon}`} aria-hidden="true"></i> {entry.label}
                  </NavLink>
                </li>
              );
            }
            const isOpen = expanded === entry.label;
            return (
              <li key={entry.label} className={isOpen ? 'active' : ''}>
                <a
                  href="#"
                  className="collapsible-header"
                  onClick={(e) => { e.preventDefault(); toggle(entry.label); }}
                >
                  <i className={`fa ${entry.icon}`} aria-hidden="true"></i> {entry.label}
                </a>
                <div className="collapsible-body left-sub-menu" style={{ display: isOpen ? 'block' : 'none' }}>
                  <ul>
                    {entry.items.map((it) => (
                      <li key={it.to}>
                        <Link to={it.to}>{it.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
