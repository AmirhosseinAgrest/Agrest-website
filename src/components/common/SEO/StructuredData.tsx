import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data)
    ? data.map((item) => JSON.stringify(item)).join('\n')
    : JSON.stringify(data);

  return (
    <Helmet>
      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
}

export default StructuredData;