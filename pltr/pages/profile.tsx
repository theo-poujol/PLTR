import React, { useState } from "react";
import TopHeaderNli from "./../components/topheadernli";
import Footer from "./../components/footer";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

async function getServerSideCookie() {
  const scs = await fetch(`${server}/api/getSSC`, {
    method: "POST",
  });
}

export const getServerSideProps = async (ctx) => {
  const scs = await getServerSideCookie();
  if (scs == null) {
    return {
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html className="p-7 bg-black">
        <header>
          <TopHeaderNli />
        </header>
        <body></body>
        <footer>
          <Footer />
        </footer>
      </html>
    );
  }
}

export default Profile;
