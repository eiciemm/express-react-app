import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  margin: 8px;
`;

const Edit = () => {
  const [memoData, setMemoData] = useState({});
  useEffect(() =>{
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const method = "GET";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(`/memo/edit?id=${id}`, {method, headers})
      .then((res) => res.json())
      .then((data) => setMemoData(data.data.memoData));
  },[])

  return (
    <div>
      <Form action="/memo/edit" method="post">
        <input type="text" name="text" defaultValue={memoData.text} />
        <input type="hidden" name="id" value={memoData.id} />
        <p><input type="submit" value="更新" /></p>
      </Form>
      <Link to="/memo">Back</Link>
    </div>
  );
}

export default Edit;