import React from 'react';
import Article from './Article/Article';


const articles = (props) =>
{
    const articleStyles = [];


    if (props.articles.length === 1) {
      articleStyles.push("OneArticle");
    }
    if (props.articles.length >= 4) {
      articleStyles.push("GreenArticles");
    }
    else {
      articleStyles.push("OrangeArticles");
    }


    const articles =props.articles.map((article, index) => {
        return (<Article title={article.title} content={article.content} 
        deleteClick={() => props.deleteArticle(index)}
          key={article.id}
        />);
      });

      return(
        <div className={articleStyles.join(' ')}>
        {articles}
      </div>
      );
}
export default articles;