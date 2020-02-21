import { useEffect, useState } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return { posts, loading, error };
};

export default usePosts;
