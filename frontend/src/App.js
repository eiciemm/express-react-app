import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Edit from './Edit';
import Delete from './Delete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>To Do List</h1>
        <div>
          <Route path="/memo" exact component={Main} />
          <Route path="/memo/edit" exact component={Edit} />
          <Route path="/memo/delete" exact component={Delete} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;