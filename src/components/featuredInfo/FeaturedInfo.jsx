import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Aradhana</span>
        <div className="featuredMoneyContainer">
          {/* <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span> */}
        </div>
        <span className="featuredSub">Udupi</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">XYZ</span>
        <div className="featuredMoneyContainer">
        </div>
        <span className="featuredSub">Hasana</span>
      </div>

    </div>
  );
}