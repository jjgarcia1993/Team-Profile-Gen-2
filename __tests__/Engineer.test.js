const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Mikey Myers', 90, 'Mikeym@gmail.com', 'mikeym92');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Mikey Myers', 90, 'Mikeym@gmail.com', 'mikeym92');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Mikey Myers', 90, 'Mikeym@gmail.com', 'mikeym92');

    expect(engineer.getRole()).toEqual("Engineer");
})