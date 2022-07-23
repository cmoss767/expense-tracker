import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints: builder => ({
       getCategories : builder.query({
        query: ()=>'/api/categories'
       }),
       //get labels
       getLabels:builder.query({
        query: ()=>'/api/labels'
       }),
       //add new Transaction
       addTransaction : builder.mutation({
        query:(initialTransaction)=>({
            url: '/api/transaction',
            method: 'POST',
            body: initialTransaction
        })
       }),
       //delete record
       deleteTransaction: builder.mutation({
        query: recordId =>({
            url: '/api/transaction',
            method: 'DELETE',
            body: recordId
        }) 
       })
    })
})

export default apiSlice