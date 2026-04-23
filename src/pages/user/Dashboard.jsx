import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function Dashboard() {
  return (
    <PagePlaceholder
      title="Student Dashboard"
      description="Your personalised learning dashboard with courses, exams, and announcements."
      crumbs={[{ label: 'Student Dashboard' }]}
    />
  );
}
