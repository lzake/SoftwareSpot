module.exports = {seed: function(knex, Promise) {
  return knex('tech').del()
    .then(function () {
      // Inserts seed entries
      return knex('tech').insert([
  {
    name: "Atom",
    description: "Text Editor",
    url: "www.atom.io",
    category: "TE"
  },
  {
    name: "VS Code",
    description: "Text Editor",
    url: "code.visualstudio.com",
    category: "TE"
  },
  {
    name: "Postman",
    description: "API Development",
    url: "www.getpostman.com",
    category: "Software"
  },
  {
    name: "JavaScript",
    description: "Programming Language",
    url: "www.javascript.com/",
    category: "Language"
  },
  {
    name: "Bulma",
    description: "CSS Framework",
    url: "bulma.io",
    category: "Library"
  },
  {
    name: "HTML5",
    description: "Good for gaming",
    url: "html5.com/",
    category: "Markup language"
  },
  {
    name: "Python",
    description: "Programming Language",
    url: "www.python.org",
    category: "Language"
  },
  {
    name: "Materialize",
    description: "CSS Framework",
    url: "materializecss.com",
    category: "Library"
  },
  {
    name: "Perl",
    description: "Programming Language",
    url: "www.perl.org",
    category: "Language"
  },
  {
    name: "React",
    description: "UI JavaScript library",
    url: "facebook.github.io/react/",
    category: "Library"
  },
  ]);
});
}
}
