import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dicta aliquid rem commodi laborum reiciendis facere, praesentium
              velit, sequi quam nemo quod nobis alias mollitia dolores
              repellendus ullam nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
