import React from 'react';

import Hero from 'components/pages/case-studies/hero';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';
import data from 'data/pages/case-studies';
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages['fr-fr'].code;

const Description = () => (
  <span>
    Voici quelques-unes des organisations qui utilisent eBPF en production. Si vous utilisez eBPF et
    que vous ne figurez pas sur cette liste,{' '}
    <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
      veuillez soumettre une pull request
    </Link>
    .
  </span>
);

const CaseStudies = () => (
  <Layout lang={lang} pageUrls={data.pageUrls}>
    <Hero {...data[lang].hero} description={<Description />} />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.caseStudies[lang]} />
);

export default CaseStudies;
