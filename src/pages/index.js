import React from 'react';
import {Link, graphql} from 'gatsby';

import '../styles/index.css';
import Header from '../components/header';
import SEO from '../components/seo';

const IndexPage = ({data}) => (
    <>
        <SEO title="Articles by Mofope Ojosh"/>
        <div className="home">
            <Header/>
            <div className="blog-list-wrapper">
                {data.allStrapiArticle.edges.map(document => (
                    <div className="blog-item">
                        <div className="blog-item-body">
                            <h2 className="blog-item-title">
                                <Link to={`/article/${document.node.id}`}>{document.node.title}</Link>
                            </h2>
                            <p className="blog-item-content">{document.node.content}</p>
                        </div>
                        {document.image ?
                            <div className="blog-item-image">
                            </div> : ''}
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`;
