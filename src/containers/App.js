import React, { Component } from 'react';
import './App.css';
import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';
import Links from '../components/Links/Links';



class App extends Component {

  state= {
    articles: [
      { id: 'asdad213', title: "title1", content: "This is content 1" },
      { id: 'asqwecz13', title: "title2", content: "This is content 2" },
      { id: 'czxve', title: "title3", content: "This is content 3" },
      { id: 'aczbdd', title: "title4", content: "This is content 4" }
    ],
    showArticles: false,
    showSeconds: false
  }

  toggleSecondHandler = () =>
  {
    const areSecondsVisible= this.state.showSeconds;
    this.setState({showSeconds: !areSecondsVisible});
  }

  constructor(props)
  {
    console.log("constructor");
    //musimy ją wywołać ponieważ ona wywołuje konstruktor klasy którą extendujemy
    super(props);
    //kontruktor musi być zawsze gdy przy tworzeniu komponent musimy ustawić jakiś state (wartość początkową)
    
    
  }

  static getDerivedStateFromProps(props, state)
  {
    console.log(" App getDerivedStateFromProps");
    //zwracam zaktualizowany stan
    //możliwość edycji state gdy zmieniają się propsy 
    return state;
  }

  //ostatnia metoda życia komponentu 
  componentDidMount()
  {
    console.log("App componentDidMount");
    //puszczanie zapytan http np.
    //nie wolno aktualizować state synchronicznie
    //tylko asynchroniczne
    //czyli np zwrócone dane z serwera
  }
  componentDidUpdate(){
    console.log("App componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("App shouldComponentUpdate");
    return true;
  }

 

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({ showArticles: !doesShow });

  }

  deleteArticleHandler = (articleIndex) => {
    const articles = [...this.state.articles];
    articles.splice(articleIndex, 1);
    this.setState({ articles: articles });
  }


  render() {
    console.log("App render");

    let articles = null;
    if(this.state.showArticles){
      articles = <Articles articles={this.state.articles} deleteArticle={this.deleteArticleHandler} />
    }

    let seconds = null;

    if(this.state.showSeconds){
      const now = new Date();
      seconds = <h1>{now.getSeconds()}</h1>
    }

    return (
      
     
      <div className='App'>
         <button onClick={this.toggleSecondHandler}>Toggle Seconds</button>
      {seconds}
        <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandler} />
        {articles}
        <Links/>
      </div>
     

    );
  }
}

export default App;