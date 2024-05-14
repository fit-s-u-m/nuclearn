function Expert() {
  return (
    <div className="container flex gap-10">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://www.oecd-nea.org/upload/docs/image/jpeg/2020-08/power-line-grid.jpg"
            alt="NEA"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">NEA</h2>
          <p>Webinar: Nuclear Power and the Cost-effective Decarbonisation of Electricity Systems</p>
          <div className="card-actions">
            <a href="https://www.oecd-nea.org/jcms/pl_34288/webinar-nuclear-power-and-the-cost-effective-decarbonisation-of-electricity-systems" className="btn btn-accent btn-outline">Learn More</a>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://www.ans.org/file/10312/am23+banner.jpg"
            alt="ANS"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">ANS</h2>
          <p>Advancing nuclear science and technology for the benefit of humanity</p>
          <div className="card-actions">
            <a href="https://www.ans.org/meetings/am2023/media/recordings/" className="btn btn-accent btn-outline">Learn More</a>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://sdfestaticassets-eu-west-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg"
            alt="ScienceDirect"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">ScienceDirect</h2>
          <p>Progress in Nuclear Energy</p>
          <div className="card-actions">
            <a href="https://www.sciencedirect.com/journal/progress-in-nuclear-energy" className="btn btn-accent btn-outline">Learn More</a>
          </div>
        </div>
      </div>
      <div className="card w-full md:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://pris.iaea.org/PRIS/ReactorImage.aspx?image=477.jpg"
            alt="IAEA PRIS"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">IAEA PRIS</h2>
          <p>The Database on Nuclear Power Reactors</p>
          <div className="card-actions">
            <a href="https://pris.iaea.org/pris/" className="btn btn-accent btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expert;

