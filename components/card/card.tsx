import Image from 'next/image';

const Card = () => {
  return (
    <article className="card">
      <header className="card_header">
        <Image src="/images/Rectangle 3.png" alt="" width={800} height={500} />
      </header>
      <div className="card__div">
        <Image
          src="/images/Ellipse 2.png"
          alt="image"
          width={800}
          height={500}
        />
      </div>
      <div className="card_div">
        <Image src="/images/corazon.png" alt="image" width={800} height={500} />
      </div>
      <section className="card_body">
        <div className="card_content">
          <h1 className="card_title">Tienda de rop femenina Zara</h1>
          <p className="card_p">Tienda de Ropa</p>
        </div>
        <ul className="card_ul">ladygaga.com</ul>
        <div className="card_voto">
          <Image
            src="/images/Vector.png"
            alt="image"
            width={800}
            height={500}
          />
          <p className="card__p">90'800'756 votos</p>
        </div>
      </section>
    </article>
  );
};

export default Card;
