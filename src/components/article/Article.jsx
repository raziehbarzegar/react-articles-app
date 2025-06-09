import React from "react";

function Article({ imgUrl, title, author, date, readingTime }) {
  return (
    <>
      <div className="article shadow p-5 rounded">
        <img src={imgUrl} className="rounded w-full" alt="" />
        <p className="text-secondary text-2xl py-2 ">{title}</p>
        <p className="text-slate-600 font-medium">{author}</p>
        <p className="text-slate-600 text-sm py-1">{date}</p>
        <p className="text-slate-600 text-sm py-1">{readingTime} minutes</p>
      </div>
    </>
  );
}

export default Article;
