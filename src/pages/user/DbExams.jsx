import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function DbExams() {
  return (
    <PagePlaceholder
      title="My Exams"
      description="Your exam schedule, past results, and upcoming assessments."
      crumbs={[{ label: 'My Exams' }]}
    />
  );
}
