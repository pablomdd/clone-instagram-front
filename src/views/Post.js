import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../common/Layout";
import Card from "../components/Card"

//TODO reemplazar query data
const DETAIL_EVENT = gql`
  query detail_event($id: ID!) {
    getEvent(id: $id) {
      title
      description
      created_by {
        first_name
        last_name
      }
      date
      address {
        street
        number
        state
        city
      }
    }
  }
`;

function Post(props) {
  const { loading, data, error } = useQuery(DETAIL_EVENT, {
    variables: { id: props.match.params.id }
  });

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <p>{error.message}</p>;

  return (
    <Layout> 
        <Card
            profile_pic="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
            media= "https://newsweekespanol.com/wp-content/uploads/2018/05/maxresdefault.jpg"
            username= "pablomdd"
            description="Maravillosa vista de la cdmx 😍😍😍."
            date = "3 mins ago"
        />
    </Layout>
    );
  }
  
  export default Post;