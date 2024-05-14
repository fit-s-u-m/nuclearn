"use client";
import { useRouter } from 'next/navigation'

function Beginner() {
  const route = new useRouter()
  const next = () => route.push('/enthusiast')

  return (
    <div className="flex flex-col gap-32">
      <div className="container flex gap-10">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ytimg.com/vi/KWAsz59F8gA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnIYtusctxFED4OH7EGgJjKJAxrQ"
              alt="Shoes"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CrashCourse</h2>
            <p>Nuclear Chemistry: Crash Course Chemistry #38</p>
            <div className="card-actions">
              <a
                href="https://www.youtube.com/watch?v=KWAsz59F8gA"
                className="  py-2 px-6 btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Repeat the same structure for other cards */}

        {/* Second card */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ytimg.com/vi/rcOFV4y5z8c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQuzIuYJhAKM5i_VMUZAeJeGDsOQ"
              alt="Shoes"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kurzgesagt - In a Nutshell</h2>
            <p>Nuclear Energy Explained: How does it work? 1/3</p>
            <div className="card-actions">
              <a
                href="https://www.youtube.com/watch?v=rcOFV4y5z8c&t=1s"
                className="  py-2 px-6 btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ytimg.com/vi/KC7YD98HixM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM3RskKeSHuectLf_RDNxwuLP4pQ"
              alt="Shoes"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Vox</h2>
            <p>Why nuclear plants are shutting down</p>
            <div className="card-actions">
              <a
                href="https://www.youtube.com/watch?v=KC7YD98HixM"
                className="py-2 px-6 btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Fourth card */}
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.natgeofe.com/n/92b4487c-3aa1-4ee4-94ec-4abf89832a8b/0000015e-c8d8-dba1-a7fe-cefa56f70000_3x2.jpg?wp=1&w=1280&h=853"
              alt="Shoes"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">National Geographic</h2>
            <p>What is nuclear energy and is it a viable resource?</p>
            <div className="card-actions">
              <a
                href="https://www.nationalgeographic.com/environment/article/nuclear-energy"
                className="py-2 px-6 btn btn-accent btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Fifth card */}
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg/220px-2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg"
              alt="Shoes"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Wikipedia</h2>
            <p>Nuclear power</p>
            <div className="card-actions">
              <a
                href="https://en.wikipedia.org/wiki/Nuclear_power"
                className="py-2 px-6 btn btn-accent btn-outline "
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

export default Beginner;
