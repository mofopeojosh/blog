import React from 'react';
import Header from '../components/header';
import SEO from '../components/seo';

const ViewArticle = ({data}) => (
    <>
        <SEO title={data.strapiArticle.title}/>
        <div className="blog-view-wrapper">
            <Header showBackButton={true}/>
            <div className="blog-view-body">
                <h2 className="blog-view-title">
                    {data.strapiArticle.title}
                </h2>
                <div className="blog-view-content">
                    {data.strapiArticle.content}
                </div>
            </div>
        </div>
    </>
);

export default ViewArticle;

export const pageQuery = graphql`
  query ArticleTemplate($id: String) {
    strapiArticle(id: {eq: $id}) {
      title
      content
    }
  }
`;
