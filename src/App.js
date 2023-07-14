import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      `https://dummyjson.com/comments?limit=10&skip=${skip}&select=body,postId`
    );
    if (response.data.comments.length > 0) {
      setData(data.concat(response.data.comments));
      setSkip(skip + 10);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div>
        <h1>INFINITE SCROLL</h1>
        <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </InfiniteScroll>
    </div>
    
  );
};
export default App;
