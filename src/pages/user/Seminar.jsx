import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function Seminar() {
  return (
    <PagePlaceholder
      title="Seminars"
      description="Upcoming and past academic seminars hosted by our departments and guest speakers."
      crumbs={[{ label: 'Seminars' }]}
    />
  );
}
