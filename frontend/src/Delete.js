import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {
  const [memoData, setMemoData] = useState({});
  useEffect(() =>{
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const method = "GET";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(`/memo/delete?id=${id}`, {method, headers})
      .then((res) => res.json())
      .then((data) => setMemoData(data.data.memoData));
  },[])

  return (
    <div>
      <p>以下のメモを削除しますか？</p>
      <p>{memoData.text}</p>
      <form action="/memo/delete" method="post">
        <input type="hidden" name="id" value={memoData.id} />
        <p><input type="submit" value="削除" /></p>
      </form>
      <Link to="/memo">Back</Link>
    </div>
  );
}

export default Delete;