import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function Blog() {
  return (
    <PagePlaceholder
      title="Blog"
      description="News, campus stories, research highlights, and student experiences."
      crumbs={[{ label: 'Blog' }]}
    />
  );
}
