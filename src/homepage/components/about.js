import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import SectionContainer from '../../common/components/sectionContainer';
import ReactMarkdown from 'react-markdown';
import markdownRender from '../../common/renders/markdownRender';
import styled from 'styled-components';
const Section = styled.div`
  width: 100%;
`;
const ContactLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0.5rem auto 0 auto;
  padding: 1rem 4rem;
  background-color: #333;
  color: #f4f4f4;
  letter-spacing: 0.1em;
  font-weight: bold;
  display: block;
  font-family: 'Cormorant', sans-serif;
  width: 40%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export default () => {
  return (
    <SectionContainer>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                homepageHeader
                homepageAbout
              }
            }
            contentfulAbout {
              mainContent {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        `}
        render={data => {
          const { mainContent } = data.contentfulAbout;
          return (
            <Section>
              <ReactMarkdown
                source={mainContent.childMarkdownRemark.rawMarkdownBody}
                renderers={markdownRender}
              />
              <ContactLink to="/contact">Contact Me</ContactLink>
            </Section>
          );
        }}
      />
    </SectionContainer>
  );
};
