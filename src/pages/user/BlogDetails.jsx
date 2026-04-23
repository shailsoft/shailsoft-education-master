import PagePlaceholder from '../../components/common/PagePlaceholder.jsx';

export default function BlogDetails() {
  return (
    <PagePlaceholder
      title="Blog Details"
      description="Read the full article with comments and related posts."
      crumbs={[{ label: 'Blog Details' }]}
    />
  );
}
