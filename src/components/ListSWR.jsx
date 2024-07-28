import React from 'react'
import Navbar from '../pages/Navbar'
import useSWR from 'swr'
import { DataGrid } from '@mui/x-data-grid'

function ListSWR() {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    const columns = [
        {
            field:"id",
            headerName: "Id",
            flex:0.1
        },
        {
            field:"postId",
            headerName:"PostId",
            flex:0.1
        },
        {
            field:"name",
            headerName:"Name",
            flex:0.2
        },
        {
            field:"email",
            headerName:"E Mail",
            flex:0.2
        },
        {
            field:"body",
            headerName:"Body",
            flex:0.4
        }
    ]

  return (
    <>
    <Navbar/>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
            rows={data}
            columns={columns}
        />
        </div>
    </>
  )
}

export default ListSWR