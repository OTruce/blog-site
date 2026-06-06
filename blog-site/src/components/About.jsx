function About({ image, about }) {
  return (
    <section>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </section>
  );
}

export default About;