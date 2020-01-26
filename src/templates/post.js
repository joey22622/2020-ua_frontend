import React from 'react';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Post from "..components/post"


export const query = graphql`
    query ($slug : String) {
        sanityPost(slug : {current : {eq : $slug}}){
            _rawBody
        }
      }   
  `

export default ({ data }) => (
      <Layout
      
        // pathname={window.location.pathname}
        // search={window.location.search}
        bodyClass="project"
        
        coverPage={false}
        homeLink={'/?home'}
        data={<Post/>}
      >
        
      </Layout>
  )

  