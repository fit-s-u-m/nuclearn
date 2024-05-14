"use client";
import { useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const onResize = item => {
      let item_width = item[0].contentRect.width;
      if (item_width > window.innerWidth - 150) {
        router.push('/level')
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
            // className='object-contain'
            alt="With nucler plant"
          />
        </div>
        <div className="diff-item-2">
          <Image
            src="/1.png"
            width={500}
            height={500}
            alt="with out nuclear plant"
          />
        </div>
        <div className="diff-resizer" id="diff-resizer"></div>
      </div>
    </>
  )
}
