import './assets/scss/main.scss'
import { state } from './core/state.js';
import { createCard } from './core/card.js';
import { toDateString } from './core/dates.js';
import { renderCardList } from './components/cardList.js';
import { renderCardForm } from './components/cardForm.js';

const app = document.querySelector('#app');

function render () {
    app.replaceChildren(renderCardList(state.cards), renderCardForm(onSubmit))
}

export function onSubmit(front, back) {
    const today = toDateString(new Date());
    state.cards.push(createCard(front, back, today))
    render();
}

render();