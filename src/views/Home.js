import React from "react";
import { Link } from "react-router-dom";
import Layout from "../common/Layout";
import Card from "../components/Card";
import payload from "../utils/payload";
//TODO: agregar props a Card

function Home() {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-8">
          <Card
            profile_pic="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
            media="https://newsweekespanol.com/wp-content/uploads/2018/05/maxresdefault.jpg"
            username="pablomdd"
            description="Maravillosa vista de la cdmx 😍😍😍."
            date="3 mins ago"
          />
          <Card
            profile_pic="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
            media="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            username="pablomdd"
            description="Maravillosa vista de la cdmx 😍😍😍."
            date="3 mins ago"
          />
          <Card
            profile_pic="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
            media="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
            username="pablomdd"
            description="Maravillosa vista de la cdmx 😍😍😍."
            date="3 mins ago"
          />
          <div className="d-flex justify-content-center align-items-center p-3">
            <div class="loader"></div>
          </div>
        </div>
        <div className="col-md-4 mt-3">
          <Link to="/profile">
            <div className="card-header d-flex">
              <img
                className="card-profile-pic  w-25"
                src="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
                alt="profile pic"
              />
              <div>
                <h6 className="card-title ml-2 mb-0">pablomdd</h6>
                {/* <p className="text-muted ml-2 small">{payload().first_name + " " + payload().last_name}</p> */}
                <p className="text-muted ml-2 small">Pablo Domínguez Durán</p>
              </div>
            </div>
          </Link>
          {/* card de stories */}
          <div className="card bg-light mb-3 mt-3">
            <div className="card-header d-flex justify-content-between">
              <span className="text-muted font-weight-bold">Stories</span>
              <span className="text-muted">Ver todas</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">Light card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
