import { menu } from "../data/menu";

const Menu = () => {
  return (
    <section className="menuCover">
      <div className="menuText">
        <p>This weeks specials!</p>
        <button>Online Menu</button>
      </div>

      <section className="menuSection">
        {menu.map((item, index) => (
          <article key={index} className="menuItem">
            <img alt={item.name} src={item.image} />
            <div className="namePrice">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <p>{item.text}</p>
            <button>Order a delivery</button>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Menu;
