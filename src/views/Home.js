import React from "react";
import Layout from "../common/Layout";
import Card from "../components/Card";

function Home() {
  return (
    <Layout>
      <div className="row">
        <div className="col-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="col-4 mt-3">
          <div className="container">
            <div className="row d-flex justify-content-start">
              <img
                className="card-profile-pic w-25"
                src="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
                alt="profile pic"
              />
              <div className="row">
                <h6 className="">pablomdd</h6>
              </div>
              <div className="row">
                <p className=" text-muted">Pablo Domínguez Durán</p>
              </div>
            </div>
          </div>
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
