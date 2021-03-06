import React from "react";
import Layout from "../common/Layout";
import Card from "../components/Card";
import PostItem from "../components/PostItem";

function Profile() {
  const ProfilePic =
    "https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png";

  const username = "pablomdd";

  return (
    <Layout>
      <header className="row profile-header my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <img
                className="profile-pic my-2"
                src={ProfilePic}
                alt="profile pic"
              />
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  <h3 className="font-weight-lighter">{username}</h3>
                </div>
                <div className="row d-flex">
                  <p className="mr-5">
                    <span className="font-weight-bold">65</span> Publicaciones
                  </p>
                  <p className="mr-5">
                    <span className="font-weight-bold">300</span> Seguidores
                  </p>
                  <p className="mr-5">
                    <span className="font-weight-bold">600</span> Seguidos
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row d-flex flex-column justify-content-center">
                  <h6 className="d-block mb-0">Pablo Domínguez Durán</h6>
                  <p className="d-block">Café con leche sin azúcar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="gallery-container">
        <div className="gallery">
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
          <PostItem
            src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
            likes="55"
            comments="10"
          />
        </div>
      </main>

      <div className="row">
        {/* <div className="col-md-8">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div> */}
        {/* <div className="col-md-4 mt-3">
          <div className="card-header d-flex">
            <img
              className="card-profile-pic  w-25"
              src="https://pbs.twimg.com/profile_images/1129433578100678663/ncsC3UcT_400x400.png"
              alt="profile pic"
            />
            <div>
              <h6 className="card-title ml-2 mb-0">pablomdd</h6>
              <p className="text-muted ml-2 small">Pablo Domínguez Durán</p>
            </div>
          </div>
          
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
        </div> */}
      </div>
    
    
    </Layout>
  );
}

export default Profile;
