const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disnehy.com',
    'dogpictures.com'
]
it('this is searching google',() => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock).length).toEqual(2);
})