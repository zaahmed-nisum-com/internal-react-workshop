import React from "react";
import { signOut } from "supertokens-auth-react/recipe/passwordless";

function Home(props) {
  async function handleLogout() {
    await signOut();
    window.location.href = "/login";
  }

  return (
    <div>
      <div className="home-main-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
