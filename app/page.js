"use client";
import Image from "next/image";
import Expert from "./expert";
import Intermidiate from "./intermidiate";
import Enthusiast from "./entusiast";
import Beginner from "./beginner";
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    const onResize = item => {
      let item_width = item[0].contentRect.width;
      if (item_width > window.innerWidth - 100) {
        window.location.href = "http://localhost:3000/level"
        // redirect('/level')
      }
    }
    if (typeof document !== 'undefined') {
      const diffResizer = document.getElementById('diff-resizer');
      if (diffResizer) {
        const observer = new ResizeObserver(onResize); // add observer to detect if it resizes
        observer.observe(diffResizer);
      } else {
        console.log("error can not find elment")
      }
    }

  }, []);
  return (
    <>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <Image
            src="/with_out_nuclear.jpeg"
            width={500}
            height={500}
            alt="With nucler plant"
          />
        </div>
        <div className="diff-item-2">
          <Image
            src="/with_nuclear.jpeg"
            width={500}
            height={500}
            alt="with out nuclear plant"
          />
        </div>
        <div className="diff-resizer" id="diff-resizer"></div>
      </div>

      <button className="btn btn-accent"> Start
      </button>

    </>
  )
}
