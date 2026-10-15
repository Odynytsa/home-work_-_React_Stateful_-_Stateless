# Компоненти React: Stateful проти Stateless (Лічильник)

Навчальний React + Vite проєкт: демонстрація різниці між stateful, stateless та класовим компонентами на прикладі лічильника.

## Що всередині

- `StatefulCounter.jsx` — **stateful** функціональний компонент: `useState` для `count`/`step`, `useEffect` для оновлення `document.title`.
- `StatelessDisplay.jsx` — **stateless** презентаційний компонент: тільки приймає `props { count, step }` (деструктуризація) і рендерить їх, стану немає.
- `ClassCounter.jsx` — **опціональний** класовий аналог: `this.state`, `componentDidMount` / `componentDidUpdate`.
- `App.jsx` — збирає все разом + блок порівняння підходів.

Структура:

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── StatefulCounter.jsx
│   │   ├── StatelessDisplay.jsx
│   │   └── ClassCounter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Встановлення та запуск

Вимоги: Node.js LTS, npm.

```bash
cd my-react-app
npm install
npm run dev
```

Відкрити в браузері: `http://localhost:5173/` (або порт, який покаже Vite).

Інші команди:

```bash
npm run build    # продакшн-збірка в dist/
npm run preview  # перегляд збірки локально
npm run lint     # перевірка коду (oxlint)
```

## Як перевірити

1. Кнопки `+step / -step` змінюють значення, `Скинути` обнуляє.
2. Поле «Крок» змінює крок для обох дій.
3. `StatelessDisplay` оновлюється тільки через пропси від батьків.
4. Заголовок вкладки браузера змінюється через `useEffect` / lifecycle-методи.

## Порівняння: функції vs класи

| Аспект | Функція + хуки | Клас |
| --- | --- | --- |
| Зручність | Коротше, без `this` і конструктора | Більше бойлерплейту |
| Читабельність | Деструктуризація, плоска логіка | Логіка розмазана по методах |
| Життєвий цикл | `useEffect` | `componentDidMount / DidUpdate` |

## Демо-версія

Посилання на розгорнутий проєкт (Vercel / Netlify):

> TODO: вставити посилання після деплою, наприклад:
> `https://my-react-counter.vercel.app`

## Деплой (коротко)

Vercel: Import з GitHub → Framework `Vite` → Build `npm run build` → Output `dist`.
Netlify: New site from Git → Build `npm run build` → Publish `dist`.

## Критерії виконання

- [x] Проєкт на Vite + React, запускається без помилок.
- [x] Є stateful (`useState`) і stateless (тільки `props`) компоненти в окремих файлах.
- [x] Код-стайл: `const`, зрозумілі імена, деструктуризація пропсів.
- [x] Опціонально: класовий компонент-аналог.
- [ ] Деплой + посилання на демо (додати сюди після публікації).
