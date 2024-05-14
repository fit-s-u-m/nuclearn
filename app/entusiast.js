function Enthusiast() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 align-center md-items-center justify-between">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/64a937e4f745ca4557288943eac0cec7_22-01f16.jpg"
            alt="MIT OCW"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">MIT OCW</h2>
          <p>Introduction To Nuclear Engineering And Ionizing Radiation</p>
          <div className="card-actions">
            <a
              href="https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ytimg.com/vi/R7WPEYGr1Vs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA-jn4qUqxge10ca2iRHyUoTt5Sw"
            alt="TED-ED"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">TED-ED</h2>
          <p>
            How do nuclear power plants work? - M. V. Ramana and Sajan Saini
          </p>
          <div className="card-actions">
            <a
              href="https://www.youtube.com/watch?v=R7WPEYGr1Vs"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://world-nuclear.org/images/articles/e186406f-a2aa-4377-b3c3-6aecc4660344.jpg"
            alt="World Nuclear Association"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">World Nuclear Association</h2>
          <p>World Nuclear Performance Report 2023</p>
          <div className="card-actions">
            <a
              href="https://world-nuclear.org/our-association/publications/global-trends-reports/world-nuclear-performance-report-2023"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3CNY-L4xxX7byq0Ogy_SMJbST69akc18RrPw9RoP5FLPa3N-"
            alt="Council on Foreign Relations"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Council on Foreign Relations</h2>
          <p>Energy and Environment - Nuclear Energy</p>
          <div className="card-actions">
            <a
              href="https://www.cfr.org/energy-and-environment/nuclear-energy"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enthusiast;
