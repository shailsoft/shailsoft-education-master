import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function EventDetails() {
  return (
    <PagePlaceholder
      title="Event Details"
      description="Detailed information about this event — agenda, speakers, and venue."
      crumbs={[{ label: 'Event Details' }]}
    />
  );
}
