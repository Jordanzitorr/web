import React, { useState, useEffect } from "react";
import Newsletter from "../components/Newsletter";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import { client } from "../lib/client";
import { format } from "date-fns";

export default function Homepage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data)
        console.log(data)
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto my-20 px-5">
        <article className="relative">
          <img
            src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-96 w-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl lg:text-5xl mb-6 text-white">
              Document title
            </h1>
            <p className="text-slate-100 mb-8 md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa quibusdam ad consequatur aliquam accusantium officia dolores
              aspernatur enim, explicabo recusandae quidem, voluptatem sunt
              fugiat deleniti ipsum maxime esse itaque.
            </p>
            <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200">
              Read More
            </button>
          </div>
        </article>
      </section>
      <section className="grid grid-caols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10">
        <article className="border border-slate-400 rounded-lg overflow-hidden hover:bg-slate-200 transition-all duration-200">
          <img
            src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="p-4">
            <p className="text-sm">By Jordanzitorr &middot; 15 June 2023</p>
            <h2 className="text-xl mb-2">Document title</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              officiis dolore culpa eveniet adipisci earum porro maiores id
              cupiditate quasi nobis, aperiam natus ab fugiat recusandae,
              provident, dignissimos quo. Ab.
            </p>
          </div>
        </article>
      </section>
      <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
        <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200">
          Read all blog posts
        </button>
      </div>
      <Newsletter />
      <Profile />
      <Footer />
    </>
  );
}
