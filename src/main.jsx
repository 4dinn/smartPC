import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const builds = [
  {
    id: 1,
    name: "SmartPC Start",
    type: "Бюджет",
    purpose: "Full HD / учеба",
    price: 64990,
    cpu: "Ryzen 5 5600",
    gpu: "RTX 3050 8GB",
    ram: "16 GB DDR4",
    ssd: "SSD 512 GB",
    fps: 90,
    image:
      "https://avatars.mds.yandex.net/get-mpic/12301852/2a0000018c52956b432b2a5898511b47e1b4/9hq",
  },
  {
    id: 2,
    name: "SmartPC Regular",
    type: "Средний сегмент",
    purpose: "Full HD / 2K",
    price: 124990,
    cpu: "Intel Core i5-13400F",
    gpu: "RTX 4060 Ti",
    ram: "32 GB DDR5",
    ssd: "SSD 1 TB",
    fps: 155,
    image: "https://ae04.alicdn.com/kf/Haa4c402fd351415a84b1412773b3726fm.jpg",
  },
  {
    id: 3,
    name: "SmartPC Ultra",
    type: "Топ / 4K",
    purpose: "4K / стриминг",
    price: 249990,
    cpu: "Ryzen 7 7800X3D",
    gpu: "RTX 4080 Super",
    ram: "32 GB DDR5",
    ssd: "SSD 2 TB",
    fps: 240,
    image:
      "https://delta-game.ru/wp-content/uploads/2020/09/atlas-6-600x600.webp",
  },
  {
    id: 4,
    name: "SmartPC Studio",
    type: "Рабочая станция",
    purpose: "Монтаж / 3D",
    price: 189990,
    cpu: "Intel Core i7-14700K",
    gpu: "RTX 4070 Ti",
    ram: "64 GB DDR5",
    ssd: "SSD 2 TB",
    fps: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViZvdeaRlPunrMznMS-UMhc6A9XL-H6LSCQ&s",
  },
];

const components = [
  ["RTX 4070 Super", "Видеокарты", "72 990 ₽", "В наличии"],
  ["Ryzen 7 7800X3D", "Процессоры", "44 990 ₽", "В наличии"],
  ["SSD NVMe 1 TB", "SSD", "7 990 ₽", "В наличии"],
  ["DDR5 32 GB", "ОЗУ", "12 490 ₽", "Под заказ"],
  ["750W Gold", "БП", "10 990 ₽", "В наличии"],
  ["AirFlow RGB Case", "Корпуса", "8 990 ₽", "В наличии"],
];

const services = [
  [
    "Диагностика ПК",
    "0 ₽",
    "30–60 мин",
    "Проверим железо, температуры, ошибки и состояние накопителей.",
  ],
  [
    "Чистка и термопаста",
    "от 1 990 ₽",
    "1–2 часа",
    "Убираем пыль, меняем термопасту, снижаем температуры.",
  ],
  [
    "Апгрейд компьютера",
    "от 2 490 ₽",
    "1 день",
    "Подберём комплектующие и аккуратно установим их в систему.",
  ],
  [
    "Настройка Windows",
    "от 1 490 ₽",
    "1 час",
    "Установка драйверов, программ, оптимизация автозагрузки.",
  ],
];

const posts = [
  "Как выбрать игровой ПК в 2026 году",
  "RTX 4070 vs RTX 4080: что брать для 2K и 4K",
  "Почему греется процессор и как это исправить",
  "Разбор сборки за 100 000 ₽",
  "Почему готовый ПК с маркетплейса — это риск",
];

const nav = [
  ["home", "Главная"],
  ["builds", "Готовые сборки"],
  ["configurator", "Конфигуратор"],
  ["components", "Комплектующие"],
  ["service", "Сервис и ремонт"],
  ["blog", "Блог"],
  ["contacts", "Контакты"],
];

const money = (v) => new Intl.NumberFormat("ru-RU").format(v) + " ₽";

function Header({ page, setPage }) {
  return (
    <header className="header">
      <div className="header__inner">
        <button className="logo" onClick={() => setPage("home")}>
          <span className="logo__icon">S</span>
          <span className="logo__text">SmartPC</span>
        </button>
        <nav className="nav">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={
                page === id ? "nav__link nav__link_active" : "nav__link"
              }
              onClick={() => setPage(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className="header__button"
          onClick={() => setPage("configurator")}
        >
          Собрать ПК
        </button>
      </div>
    </header>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="section-title">
      <span className="section-title__label">{label}</span>
      <h2 className="section-title__title">{title}</h2>
      <p className="section-title__text">{text}</p>
    </div>
  );
}

function BuildCard({ build, setPage }) {
  return (
    <article className="product-card">
      <img className="product-card__image" src={build.image} alt={build.name} />
      <div className="product-card__body">
        <div className="product-card__top">
          <h3 className="product-card__title">{build.name}</h3>
          <span className="product-card__tag">{build.type}</span>
        </div>
        <p className="product-card__purpose">{build.purpose}</p>
        <ul className="product-card__specs">
          <li>{build.cpu}</li>
          <li>{build.gpu}</li>
          <li>{build.ram}</li>
          <li>{build.ssd}</li>
        </ul>
        <div className="product-card__fps">до {build.fps} FPS</div>
        <div className="product-card__footer">
          <strong className="product-card__price">{money(build.price)}</strong>
          <button
            className="button button_primary"
            onClick={() => setPage("contacts")}
          >
            Купить
          </button>
        </div>
      </div>
    </article>
  );
}

function LeadForm({ title = "Оставить заявку" }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="lead-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3 className="lead-form__title">{title}</h3>
      <input className="lead-form__input" placeholder="Ваше имя" />
      <input className="lead-form__input" placeholder="Телефон" />
      <textarea className="lead-form__textarea" placeholder="Комментарий" />
      <button className="button button_primary" type="submit">
        Отправить
      </button>
      {sent && (
        <p className="lead-form__success">
          Заявка отправлена. Менеджер скоро свяжется с вами.
        </p>
      )}
    </form>
  );
}

function Home({ setPage }) {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">Сборка ПК за 24 часа</span>
          <h1 className="hero__title">
            Готовые ПК, комплектующие и сервис под ключ
          </h1>
          <p className="hero__text">
            Подберём игровой компьютер, рабочую станцию или офисный парк
            техники. Перед выдачей проводим стресс-тест и показываем реальные
            результаты.
          </p>
          <div className="hero__actions">
            <button
              className="button button_primary"
              onClick={() => setPage("builds")}
            >
              Смотреть сборки
            </button>
            <button
              className="button button_secondary"
              onClick={() => setPage("configurator")}
            >
              Открыть конфигуратор
            </button>
          </div>
        </div>
        <div className="hero__panel">
          <div className="hero__panel-card">
            <span>Гарантия</span>
            <strong>до 3 лет</strong>
          </div>
          <div className="hero__panel-card">
            <span>Тесты FPS</span>
            <strong>перед продажей</strong>
          </div>
          <div className="hero__panel-card">
            <span>Диагностика</span>
            <strong>бесплатно</strong>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          label="Популярное"
          title="Готовые сборки"
          text="ПК под игры, работу, монтаж и бизнес."
        />
        <div className="product-grid">
          {builds.slice(0, 3).map((b) => (
            <BuildCard key={b.id} build={b} setPage={setPage} />
          ))}
        </div>
      </section>
      <section className="split-section">
        <div className="info-card">
          <h2>Сервис и ремонт</h2>
          <p>
            Чистка, диагностика, замена комплектующих, настройка Windows и
            апгрейд.
          </p>
          <button
            className="button button_secondary"
            onClick={() => setPage("service")}
          >
            Перейти в сервис
          </button>
        </div>
        <LeadForm title="Получить консультацию" />
      </section>
    </main>
  );
}

function BuildsPage({ setPage }) {
  const [filter, setFilter] = useState("Все");
  const filtered =
    filter === "Все" ? builds : builds.filter((i) => i.type === filter);
  return (
    <main className="page">
      <SectionTitle
        label="Каталог"
        title="Готовые ПК-сборки"
        text="Выбирайте по бюджету, назначению и примерному FPS."
      />
      <div className="filters">
        {[
          "Все",
          "Бюджет",
          "Средний сегмент",
          "Топ / 4K",
          "Рабочая станция",
        ].map((i) => (
          <button
            key={i}
            className={
              filter === i
                ? "filters__item filters__item_active"
                : "filters__item"
            }
            onClick={() => setFilter(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filtered.map((b) => (
          <BuildCard key={b.id} build={b} setPage={setPage} />
        ))}
      </div>
    </main>
  );
}

function ConfiguratorPage() {
  const parts = {
    cpu: [
      ["Ryzen 5 5600", 11990],
      ["Core i5-13400F", 21990],
      ["Ryzen 7 7800X3D", 44990],
    ],
    gpu: [
      ["RTX 3050", 25990],
      ["RTX 4060 Ti", 52990],
      ["RTX 4080 Super", 129990],
    ],
    ram: [
      ["16 GB DDR4", 4990],
      ["32 GB DDR5", 12990],
      ["64 GB DDR5", 24990],
    ],
    ssd: [
      ["SSD 512 GB", 3990],
      ["SSD 1 TB", 7990],
      ["SSD 2 TB", 15990],
    ],
    cooling: [
      ["Башенное охлаждение", 3990],
      ["СЖО 240 мм", 9990],
      ["СЖО 360 мм", 16990],
    ],
  };
  const [selected, setSelected] = useState({
    cpu: parts.cpu[0],
    gpu: parts.gpu[0],
    ram: parts.ram[0],
    ssd: parts.ssd[0],
    cooling: parts.cooling[0],
  });
  const total =
    Object.values(selected).reduce((s, item) => s + item[1], 0) + 15990;
  return (
    <main className="page">
      <SectionTitle
        label="Конфигуратор"
        title="Соберите ПК под себя"
        text="Выберите комплектующие, а система покажет итоговую стоимость."
      />
      <div className="configurator">
        <div className="configurator__list">
          {Object.entries(parts).map(([key, list]) => (
            <div className="select-card" key={key}>
              <label className="select-card__label">{key.toUpperCase()}</label>
              <select
                className="select-card__select"
                value={selected[key][0]}
                onChange={(e) =>
                  setSelected({
                    ...selected,
                    [key]: list.find((item) => item[0] === e.target.value),
                  })
                }
              >
                {list.map((item) => (
                  <option key={item[0]} value={item[0]}>
                    {item[0]} — {money(item[1])}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <aside className="summary-card">
          <h3>Итог сборки</h3>
          {Object.values(selected).map((item) => (
            <div className="summary-card__row" key={item[0]}>
              <span>{item[0]}</span>
              <strong>{money(item[1])}</strong>
            </div>
          ))}
          <div className="summary-card__row">
            <span>Корпус + БП + сборка</span>
            <strong>{money(15990)}</strong>
          </div>
          <div className="summary-card__total">{money(total)}</div>
          <p className="summary-card__hint">
            Совместимость проверена. Можно отправлять заявку.
          </p>
          <button className="button button_primary">
            Отправить конфигурацию
          </button>
        </aside>
      </div>
    </main>
  );
}

function ComponentsPage() {
  return (
    <main className="page">
      <SectionTitle
        label="Каталог"
        title="Комплектующие"
        text="Видеокарты, процессоры, SSD, ОЗУ, корпуса и блоки питания."
      />
      <div className="component-grid">
        {components.map(([name, category, price, status]) => (
          <article className="component-card" key={name}>
            <div className="component-card__image">PC</div>
            <span className="component-card__category">{category}</span>
            <h3>{name}</h3>
            <p>{status}</p>
            <strong>{price}</strong>
            <button className="button button_primary">Купить</button>
          </article>
        ))}
      </div>
    </main>
  );
}

function ServicePage() {
  return (
    <main className="page">
      <SectionTitle
        label="Сервис"
        title="Ремонт и обслуживание ПК"
        text="Диагностика, чистка, апгрейд и настройка системы."
      />
      <div className="service-grid">
        {services.map(([title, price, time, text]) => (
          <article className="service-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="service-card__meta">
              <span>{price}</span>
              <span>{time}</span>
            </div>
            <button className="button button_secondary">Оставить заявку</button>
          </article>
        ))}
      </div>
      <div className="section section_inner">
        <LeadForm title="Заявка на ремонт" />
      </div>
    </main>
  );
}

function BlogPage() {
  return (
    <main className="page">
      <SectionTitle
        label="Блог"
        title="Статьи и разборы"
        text="Контент для SEO: тесты, сравнения и советы по апгрейду."
      />
      <div className="blog-list">
        {posts.map((post, i) => (
          <article className="blog-card" key={post}>
            <span>Статья #{i + 1}</span>
            <h3>{post}</h3>
            <p>
              Короткое описание материала, полезного для выбора ПК и
              комплектующих.
            </p>
            <button className="button button_secondary">Читать</button>
          </article>
        ))}
      </div>
    </main>
  );
}

function ContactsPage() {
  return (
    <main className="page">
      <SectionTitle
        label="Контакты"
        title="Свяжитесь с SmartPC"
        text="Оставьте заявку или приезжайте в сервисный центр."
      />
      <div className="contacts">
        <div className="contacts__info">
          <h3>SmartPC</h3>
          <p>Телефон: +7 900 000-00-00</p>
          <p>Email: info@smartpc.ru</p>
          <p>Адрес: г. Москва, ул. Компьютерная, 10</p>
          <p>График: Пн–Вс, 10:00–21:00</p>
          <div className="contacts__map">Карта / схема проезда</div>
        </div>
        <LeadForm title="Форма обратной связи" />
      </div>
    </main>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const pages = {
    home: <Home setPage={setPage} />,
    builds: <BuildsPage setPage={setPage} />,
    configurator: <ConfiguratorPage />,
    components: <ComponentsPage />,
    service: <ServicePage />,
    blog: <BlogPage />,
    contacts: <ContactsPage />,
  };
  return (
    <>
      <Header page={page} setPage={setPage} />
      {pages[page]}
      <footer className="footer">
        <div className="footer__inner">
          <strong>SmartPC</strong>
          <span>Готовые ПК, комплектующие и сервисное обслуживание</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
