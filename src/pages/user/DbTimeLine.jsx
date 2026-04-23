import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function DbTimeLine() {
  return (
    <PagePlaceholder
      title="My Timeline"
      description="A chronological view of your academic activities and milestones."
      crumbs={[{ label: 'My Timeline' }]}
    />
  );
}
