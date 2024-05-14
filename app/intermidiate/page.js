"use client";
import { useRouter } from "next/navigation";
function Intermidiate() {
  const route = new useRouter(); const next = () => route.push("/expert")
  return (
    <div className="flex flex-col gap-32">
      <div className="container flex gap-10 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://ocw.mit.edu/courses/22-312-engineering-of-nuclear-reactors-fall-2015/c44a93b7289721d920ea7d7be5f44db2_22-312f15.jpg"
              alt="MIT OCW"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MIT OCW</h2>
            <p>Engineering of Nuclear Reactors</p>
            <div className="card-actions">
              <a
                href="https://ocw.mit.edu/search/?q=Nuclear+Engineering+Courses"
                className="btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://yt3.googleusercontent.com/8pI0p8Pzt82Wk9lvYeEQzUeqj2yGme1FNskfE7RxvVPnn6ttVCrO7jwSaFwUx7qj69c4oHt0Kw=s120-c-k-c0x00ffffff-no-rj"
              alt="Argonne National Laboratory"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Argonne National Laboratory</h2>
            <p>
              One of the world's great scientific destinations, Argonne offers...
            </p>
            <div className="card-actions">
              <a
                href="https://www.youtube.com/@ArgonneLab"
                className="btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.iaea.org/sites/default/files/styles/portrait_thumbnail_100x140/public/24/04/p15195-sti-doc-010-1003_cov_250px_0.png?itok=f88piDMg"
              alt="IAEA"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">IAEA</h2>
            <p>International Atomic Energy Agency</p>
            <div className="card-actions">
              <a
                href="https://www.iaea.org/publications/search/type/technical-reports-series"
                className="btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="card  card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://world-nuclear.org/images/articles/035234b0-8fde-4739-b9d0-e32c112c3cea.jpg"
              alt="World Nuclear Association"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">World Nuclear Association</h2>
            <p>Safety of Nuclear Power Reactors</p>
            <div className="card-actions">
              <a
                href="https://world-nuclear.org/Information-Library/Safety-and-Security/Safety-of-plants/Safety-of-Nuclear-Power-Reactors"
                className="btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-active" onClick={next}>next</div>
    </div>
  );
}

export default Intermidiate;
