const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const DASHBOARD_STATS = [
  { label: 'All Courses', value: 948, className: 'dash-b-1' },
  { label: 'Admission', value: 672, className: 'dash-b-2' },
  { label: 'Students', value: 689, className: 'dash-b-3' },
  { label: 'Enquiry', value: 24, className: 'dash-b-4' },
];

export const STUDENTS = [
  { img: '/images/user/1.png', name: 'Marsha Hogan', city: 'Illinois, United States', phone: '+01 3214 6522', email: 'marsha@dummy.com', country: 'United States', sid: 'ST17241', dob: '03 Jun 1990', status: 'Active' },
  { img: '/images/user/2.png', name: 'Lucas Caden', city: 'Illinois, United States', phone: '+01 8574 6854', email: 'lucas@gmail.com', country: 'Illinois', sid: 'ST10231', dob: '16 Feb 1987', status: 'Active' },
  { img: '/images/user/4.png', name: 'Ethan Oliver', city: 'Illinois, United States', phone: '+01 8574 6854', email: 'ethan@gmail.com', country: 'Illinois', sid: 'ST32168', dob: '21 Jun 1992', status: 'Active' },
  { img: '/images/user/5.png', name: 'Harper Elena', city: 'Illinois, United States', phone: '+01 8574 6854', email: 'harper@gmail.com', country: 'Illinois', sid: 'ST33102', dob: '01 Apr 1994', status: 'Active' },
  { img: '/images/user/1.png', name: 'Marsha Hogan', city: 'Illinois, United States', phone: '+01 3214 6522', email: 'marsha@dummy.com', country: 'United States', sid: 'ST17241', dob: '03 Jun 1990', status: 'Active' },
  { img: '/images/user/2.png', name: 'Lucas Caden', city: 'Illinois, United States', phone: '+01 8574 6854', email: 'lucas@gmail.com', country: 'Illinois', sid: 'ST10231', dob: '16 Feb 1987', status: 'Active' },
].map((student) => ({ ...student, img: withBase(student.img) }));

export const MAIN_MENU_ITEMS = [
  { id: 1, label: 'Home', url: '/', order: 1, visible: true },
  { id: 2, label: 'About us', url: '/about', order: 2, visible: true },
  { id: 3, label: 'Admission', url: '/admission', order: 3, visible: true },
  { id: 4, label: 'All Courses', url: '/all-courses', order: 4, visible: true },
  { id: 5, label: 'Events', url: '/events', order: 5, visible: true },
  { id: 6, label: 'Student', url: '/dashboard', order: 6, visible: true },
  { id: 7, label: 'Contact us', url: '/contact-us', order: 7, visible: true },
];
