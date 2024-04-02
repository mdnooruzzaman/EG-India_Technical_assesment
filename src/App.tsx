import './App.css';
import Main from './pages/main';
import { useArticlesData } from './utils/hooks/useArticlesData';

function App() {
  const {listOfArticles, detailsOfArticles } = useArticlesData()
  console.log(listOfArticles)
  console.log(detailsOfArticles)
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
