const api = require('../backend/api');

const { FLASHCARDS, getCards, getCard, toggleCard} = require('../backend/api');

// Mock `res` object
const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test('getCards should return all cards', () => {
    const req = {};  // No params needed
    const res = mockResponse();

    api.getCards(req, res);
    expect(res.json).toHaveBeenCalledWith(FLASHCARDS);
});

test('getCard should return the correct card', () => {
    const req = { params: { index: 1 } };
    const res = mockResponse();

    api.getCard(req, res);
    expect(res.json).toHaveBeenCalledWith(FLASHCARDS[1]);
});