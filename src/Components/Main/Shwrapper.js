import React from "react";
import Learn from "./Child/Learn";
function Shwrapper() {
  return (
    <div>
      <section className="second-hightlight-wrapper">
        <div className="container"> 
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <Learn first="Learn more" second="Buy" />
        </div>
      </section>
    </div>
  );
}

export default Shwrapper;
