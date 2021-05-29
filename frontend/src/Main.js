import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const Form = styled.form`
  display: flex;
  margin: 8px;
`;

const Main = () => {
  const history = useHistory();
  const [allMemoData, setAllMemoData] = useState([]);
  useEffect(() =>{
    const method = "GET";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch('/memo', {method, headers})
      .then((res) => res.json())
      .then((data) => setAllMemoData(data.data.content));
  },[])

  const handleEdit = id => {
    history.push(`/memo/edit?id=${id}`)
  }

  const handleDelete = id => {
    history.push(`/memo/delete?id=${id}`)
  }

  return (
    <div>
      <div>
        <Form action="/memo/add" method="post">
          <input type="text" name="text" />
          <input type="submit" value="新規追加" />
        </Form>
      </div>
      <table>
        {allMemoData.map(memo => {
          return (
            <tr key={memo.id}>
              <td>{memo.text}</td>
              <td><button onClick={() => handleEdit(memo.id)}>編集</button></td>
              <td><button onClick={() => handleDelete(memo.id)}>削除</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Main;