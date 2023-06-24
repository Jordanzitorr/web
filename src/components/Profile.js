import React from "react";
import {GrFacebook} from "react-icons/gr";
import {FaTwitter} from "react-icons/fa";

export default function Profile() {
  return (
    <>
        <div className="max-w-2xl mx-auto my-20 grid grid-cols-1 gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden">
            <article>
                <img 
                src="https://avatars.githubusercontent.com/u/122113360?s=400&u=e3d1a201d9425f786fb3f2e4636fc882eaf2ba44&v=4" 
                alt="Jordanzitor" 
                className="md:h-64 md:object-cover"
                />
            </article>

            <article className="md:pr-8">
                <h3 className="text-2xl mb-4">Jordanzitor</h3>
                <p>Is a Front-end web designer and developer in Figma and React, based in Seville, Spain.</p>

                <ul className="flex items-center justify-start gap-4">
                    <li className="text-2xl text-slate-600"><GrFacebook /></li>
                    <li className="text-2xl text-slate-600"><FaTwitter /></li>
                </ul>
            </article>
        </div>
    </>
  )
}
