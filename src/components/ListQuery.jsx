import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import Navbar from '../pages/Navbar'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { queryClient } from '..'

function ListQuery() {

        const { data } = useQuery({
            queryKey: 'listQuery',
            queryFn: async () => {
               return axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then(res => res.data)
            },
        })
    
        const refresh = () => {
            queryClient.invalidateQueries(['listQuery'])
        }
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
    <Button style={{color:"white"}} onClick={refresh}>Refresh</Button>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
            rows={data}
            columns={columns}
        />
        </div>
    </>
  )
}

export default ListQuery