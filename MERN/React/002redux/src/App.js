import React from 'react'
import { useCreatePostMutation, useDeletePostMutation, useGetApiByNameQuery, useUpdatePostMutation } from './services/api'

function App() {
  const { data, error, isLoading, isSuccess, isFetching } = useGetApiByNameQuery();

  return (
    <div>
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div>
          {data.map(posts => {
            return (
              <div key={posts.id}>
                <span>{posts.title}</span>
              </div>
            )
          })}
        </div>
      )}
      <AddPost />
    </div>
  )
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const posts = {
    "id": 101,
    "title": "Posted",
    "body": "Me"
  }
  // const updatePosts = {
  //   "id": 101,
  //   "title": "Updated",
  //   "body": "Me Updated"
  // }
  
  // const postsDelete = {
  //   "id": 101,
  //   "title": "Posted",
  //   "body": "Me Updated"
  // }

  const handler = async () => {
    await addPost(posts);
  }
  const deletehandler = async () => {
    await deletePost(posts.id);
  }
  const updatehandler = async () => {
    await updatePost(posts);
  }
  return (
    <>
      <button onClick={handler}>Post</button>
      <button onClick={deletehandler}>Delete</button>
      <button onClick={updatehandler}>Update</button>
    </>
  )
}
export default App
