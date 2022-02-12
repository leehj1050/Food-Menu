import "./Menu.css";

export default function Menu({ menu }) {
  return (
    <div className="MenuWrap">
      {menu.map((menu) => {
        const { img, title, price, category, id, desc } = menu;
        return (
          <article className="MenuInner" key={id}>
            <img src={img} />
            <div>
              <header>
                <h4>{title}</h4>
                <h4>{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
