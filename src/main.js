import './assets/scss/main.scss'
import { state } from './core/state.js';
import { createCard, removeCard, updateCard } from './core/card.js';
import { toDateString } from './core/dates.js';
import { renderCardList } from './components/cardList.js';
import { renderCardForm } from './components/cardForm.js';

const app = document.querySelector('#app');

function render () {
    const editingCard = state.cards.find(c => c.id === state.editingCardId) ?? null

    app.replaceChildren(
        renderCardList(state.cards, onRemove, onEditStart), 
        renderCardForm(onSubmit, onCancel, editingCard)
    )
}

function onSubmit(front, back) {
    if (state.editingCardId) {
        state.cards = updateCard(state.cards, state.editingCardId, front, back)
        state.editingCardId = null
    } else {
        const today = toDateString(new Date());
        state.cards.push(createCard(front, back, today))
    }
    render();
}

function onRemove(id) {
    state.cards = removeCard(state.cards, id);
    if (state.editingCardId === id) state.editingCardId = null
    render();
}

function onEditStart(id) {
    state.editingCardId = id;
    render()
}

function onCancel() {
    state.editingCardId = null
    render()
}

render();