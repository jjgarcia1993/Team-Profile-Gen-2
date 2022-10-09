const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Mikey Myers', 90, 'Mikeym@gmail.com', 'KAU');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Mikey Myers', 90, 'Mikeym@gmail.com', 'KAU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Mikey Myers', 90, 'Mikeym@gmail.com', 'KAU');

    expect(intern.getRole()).toEqual("Intern");
}); 