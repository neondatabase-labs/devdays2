import AgendaTable from 'components/pages/agenda/agenda-table';
import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.developerDays2);

const DeveloperDays2Page = () => (
  <Layout>
    <link rel="preload" crossOrigin="anonymous" href="/animations/input-lines.riv" as="fetch" />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-defuse.jpg"
      as="image"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-depth.jpg"
      as="image"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <div className="relative mx-auto max-w-[1760px] w-full 2xl:px-14 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4">
      <EmailRegistrationStep />
      <AgendaTable />
    </div>
  </Layout>
);

export default DeveloperDays2Page;
