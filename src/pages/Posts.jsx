import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://codebuddy.review/posts');
        const res = await response.json();
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.writeup} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center">
                <img src={post.avatar} alt={`${post.firstName} ${post.lastName}`} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h2 className="text-xl font-bold">{post.firstName} {post.lastName}</h2>
                </div>
              </div>
              <p className="mt-4">{post.writeup}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Posts;
