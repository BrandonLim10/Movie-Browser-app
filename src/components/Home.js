import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dicta aliquid rem commodi laborum reiciendis facere, praesentium
              velit, sequi quam nemo quod nobis alias mollitia dolores
              repellendus ullam nisi. Blanditiis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
