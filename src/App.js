import React, { Component } from 'react'; //zaciagamy główną klase reactową którą będziemy rozszerzac
import './App.css';
import Article from './Article/Article';
import styled from 'styled-components';

//styled components - normalny css
const StyledButton = styled.button`
background-color: white;
border: ${props=> props.altButton ? '2px solid red' : '2px solid #326647'}; //warunek w styled divie, który przekazujemy przez propsy
color: black;
padding: 10px 16px;
text-align: center;
font-size: 20px;
cursor: pointer;
margin-top: 10px;
margin-bottom: 10px;
transitionDuration: 0.4s;
&:hover{
  background-color: ${props => props.altButton ? 'red' : '#326647' };
  color: white;
}`


class App extends Component {
  state = {
    articles: [
      { id: '11sss111', title: "Title1", content: "Content1" },
      { id: 'gdgsf', title: "Title2", content: "Content2" },
      { id: '11sgsgs111', title: "Title3", content: "Content3" },
      { id: '111gsgs11', title: "Title4", content: "Content4" },
    ],
    showArticles: false

  }

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({ showArticles: !doesShow });

  }


  //nigdy nie można edytować bezpośrednio na this.state - herezja
  deleteArticleHandler = (index) => {
    //tworzymy kopie poprzez slice (od kiedy kopiować , do kiedy)
    // const articles = this.state.articles.slice();
    //drugi sposób bardziej nowoczesny 
    //spread operator ... i z czego kopiować. Kropki dodają do nowej tablicy 
    const articles = [...this.state.articles];
    articles.splice(index, 1);
    this.setState({ articles: articles });
  }

  render() //obligatoryjna funkcja
  {

    // //inline styles 
    // const buttonStyle = {
    //   backgroundColor: 'white',
    //   border: '2px solid #326647',
    //   color: 'black',
    //   padding: '10px 16px',
    //   textAlign: 'center',
    //   fontSize: '20px',
    //   cursor: 'pointer',
    //   marginTop: '10px',
    //   marginBottom: '10px',
    //   transitionDuration: '0.4s',
    //   ':hover':{
    //     backgroundColor: '#326647 ',
    //     color: 'white'
    //   }
    // };




    let articles = null;

    //wyswietlanie list ze state'a

    if (this.state.showArticles) {
      articles = this.state.articles.map((article, index) => {
        return (<Article title={article.title} content={article.content} deleteClick={() => this.deleteArticleHandler(index)}
          key={article.id}
        />);
      });

      // buttonStyle.border = '2px solid red';
      // buttonStyle.transitionDuration = '0.4s';
      // buttonStyle[":hover"] = 
      // {
      //   backgroundColor: 'red ',
      //   color: 'white'
      // }
    }

    const articleStyles = [];


    if (this.state.articles.length === 1) {
      articleStyles.push("OneArticle");
    }
    if (this.state.articles.length >= 4) {
      articleStyles.push("GreenArticles");
    }
    else {
      articleStyles.push("OrangeArticles");
    }


    return ( //zwraca jsx nie html
      <div className="App">
     <StyledButton altButton={this.state.showArticles}
       onClick={this.toggleArticlesHandler}>Toggle Articles
      </StyledButton>
        <div className={articleStyles.join(' ')}>
          {articles}
        </div>
      </div>
    );
  }
}

export default App; //jeżeli będziesz importować ten plik to będziesz importować te klasę