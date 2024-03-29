import React from 'react';
import { Link } from 'react-router-dom';
import './Glossary.css'

function Glossary() {
  return (
    <div class="wrapper">
        <Link to="/">
            <button>Семантический граф</button>
        </Link>
        <ul>
            <li>
                <span><strong>Язык программирования</strong> – формальный язык, содержащий набор инструкций, которые производят различные виды выходных данных. Языки программирования используются в компьютерном программировании для реализации алгоритмов.</span>
            </li>
            <li>
                <span><strong>Web-приложение</strong> – программа с определенным набором функционала, использующая в качестве клиента браузер. Другими словами, если приложению для осуществления бизнес-логики требуется сетевое соединение и наличие на стороне пользователя браузера, то его относят к web-приложению.</span>
            </li>
            <li>
                <span><strong>Front-end</strong> – часть веб-приложения, которая отвечает за отображение контента и взаимодействие с пользователем в браузере.</span>
            </li>
            <li>
                <span><strong>Javascript</strong> – высокоуровневый, интерпретируемый язык программирования, широко используемый для создания динамических веб-страниц и веб-приложений.</span>
            </li>
            <li>
                <span><strong>React</strong> – это JavaScript-библиотека для создания пользовательских интерфейсов, разработанная Facebook. Она позволяет создавать компоненты, которые обновляются при изменении данных.</span>
            </li>
            <li>
                <span><strong>Vue.js</strong> – это прогрессивный фреймворк JavaScript для создания пользовательских интерфейсов. Он фокусируется на простоте интеграции и гибкости.</span>
            </li>
            <li>
                <span><strong>Angular</strong> – это структурный фреймворк Javascript для разработки динамических веб-приложений. Он поддерживает создание модульных компонентов и обеспечивает обширные возможности для управления данными и состоянием приложения.</span>
            </li>
            <li>
                <span><strong>Svelte</strong> – это компилируемый фреймворк JavaScript, который переносит логику фронтенда на этап компиляции, что позволяет создавать эффективные и легкие веб-приложения.</span>
            </li>
            <li>
                <span><strong>Next.js</strong> – это фреймворк для разработки веб-приложений на основе React. Он предоставляет инструменты для создания приложений с использованием серверного рендеринга, статической генерации страниц и маршрутизации.</span>
            </li>
            <li>
                <span><strong>Nuxt.js</strong> – это фреймворк для создания универсальных (или изоморфных) веб-приложений на базе Vue.js. Он облегчает разработку приложений с использованием серверного рендеринга и статической генерации страниц. Nuxt.js предоставляет удобные средства для организации структуры приложения и автоматизации многих задач, таких как генерация маршрутов и управление состоянием приложения.</span>
            </li>
            <li>
                <span><strong>Web-фреймворк</strong> — структура и набор инструментов для разработки веб-приложений, облегчающих создание, организацию и обслуживание кода.</span>
            </li>
            <li>
                <span><strong>Серверный рендеринг (SSR)</strong> – процесс, при котором HTML-код веб-страницы формируется на сервере и отправляется браузеру, что способствует улучшению производительности и SEO.</span>
            </li>
            <li>
                <span><strong>Производительность</strong> – способность веб-приложения эффективно выполнять свои функции, обеспечивая быстрый отклик и минимизацию задержек.</span>
            </li>
            <li>
                <span><strong>Тестирование производительности</strong> – это процесс оценки и измерения производительности веб-приложения с целью выявления узких мест и оптимизации.</span>
            </li>
            <li>
                <span><strong>Размер пакета</strong> – это объем данных, который необходим для загрузки веб-приложения, включая все его зависимости и ресурсы.</span>
            </li>
            <li>
                <span><strong>Ленивая загрузка</strong> – это техника оптимизации, при которой ресурсы (например, изображения, скрипты) загружаются только в тот момент, когда они действительно нужны, что помогает ускорить начальную загрузку страницы.</span>
            </li>
        </ul>
    </div>
  );
}

export default Glossary;
