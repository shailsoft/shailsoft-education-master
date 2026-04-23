import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function DbCourses() {
  return (
    <PagePlaceholder
      title="My Courses"
      description="Courses you are currently enrolled in, with progress and upcoming lessons."
      crumbs={[{ label: 'My Courses' }]}
    />
  );
}
