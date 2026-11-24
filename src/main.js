import './style.css'
import './assets/scss/main.scss'
import { state } from './core/state';
import { createCard } from './core/card';
import { toDateString } from './core/dates';
import { renderCardList } from './components/cardList';
import { renderCardForm } from './components/cardForm';

const app = document.querySelector('#app');

function render () {
    app.replaceChildren(renderCardList(state.cards), renderCardForm())
}

const today = toDateString(new Date());
state.cards.push(createCard("2 + 2 ؟", "4", today))
state.cards.push(createCard("<img src=x onerror=alert('XSS')>", "کارت خطرناک", today))

render();