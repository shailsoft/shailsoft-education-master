import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function DbProfile() {
  return (
    <PagePlaceholder
      title="My Profile"
      description="View and edit your student profile, contact details, and preferences."
      crumbs={[{ label: 'My Profile' }]}
    />
  );
}
