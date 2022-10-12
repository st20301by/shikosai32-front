import type { NextPage } from 'next';
import { TemporalIndex } from '@/features/index/TemporalIndex';
import { Layout } from '@/layouts';

const IndexPage: NextPage = () => (
  <Layout title="OZ: 第32回茨香祭で開催予定！">
    <TemporalIndex />
  </Layout>
);

export default IndexPage;
