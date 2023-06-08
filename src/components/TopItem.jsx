/* eslint-disable react/prop-types */
export default function TopItem({ data }) {
  return (
    <div className="top-side">
      <div className="image-box">
        <img src={data.image} alt="" />
      </div>
      <div className="detail-side">
        <div className="top-detail-box">
          <div className="txt">{data.title}</div>
          <div className="txt">Rate: {data.rating.rate}</div>
          <div className="txt">Category: {data.category}</div>
          <div className="txt">${data.price}</div>
          <div className="txt">No-in-Stock: {data.rating.count}</div>
        </div>
      </div>
    </div>
  );
}
