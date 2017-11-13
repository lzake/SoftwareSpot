exports.seed = function(knex, Promise) {
  return knex('review').del().then(function() {
    // Inserts seed entries
    return knex('review').insert([
      {
        title: "I love Atom.",
        body: "Prior to using Atom, I was a heavy Sublime Text user. I have been using Atom as my everyday text editor for about 3-months. What I truly love about Atom is that you can literally make it whatever you want. If you want IDE features, easy, just install a package. Want to spawn terminal sessions and servers from within Atom? There is packages for that too.There are plugins and themes for just about anything.",
        rating: 5,
        username_id: 1,
        tech_id: 1
      }, {
        title: "VS Code was ok.",
        body: "This is a very good editor for code/general purpose, and has (almost) totally replaced notepad++/sublimeText/Atom for me. It feels lighter than Atom, while being easily extended anyway, is way faster to configure, and have quite good autocomplete out of the box. It also have a nice integrated debug tool, which is always nice to have, and is always evolving and listening to user's requests. It is known for its great typescript support, but I mainly used it for Python, Java, and other langages (not as much as these two), and it did not disappoint me. There are still a few things that are not great. First of all, it's still heavy compared to \"native\" code editor (being based on electron, it's natural). It does not support opening large files, as opposed to sublime text or another big log explorer. Also, it is currently not possible (although planned) to open more than one project per window, which is sometime problematic when you're used to switching projects ",
        rating: 3,
        username_id: 2,
        tech_id: 2
      }, {
        title: "Postman was extremely helpful",
        body: "Postman is a software that helps developers and companies develope API workflow, it is efficient on Chrome to test, develop and document APIs and create complex requests, go back in time and view results in a beautiful way.",
        rating: 4,
        username_id: 3,
        tech_id: 3
      }, {
        title: "JavaScript very helpful.",
        body: "I’ll concede that JavaScript can be considered an Object Oriented language, I just don’t think it’s a good example of one. Especially as your first exposure. Most of the ways you program in an object oriented fashion with JavaScript go drastically against the grain of other languages. That’s not a bad thing in itself, I just think you’ll be better served by learning the more common style of OOP first so that you’re set up to learn several of the C based languages (and others) more easily.",
        rating: 5,
        username_id: 4,
        tech_id: 4
      }, {
        title: "Bulma",
        body: "Bulma is still in early development. It doesn't use any vendor prefixes for flexbox (but autoprefixer could fix that). Even then, it would only support IE10+.",
        rating: 4,
        username_id: 5,
        tech_id: 5
      },
      {
        title: "React = The Ultimate JS Library",
        body: "React.js allows you to describe your UI in a modular way that captures the dependency tree of your view.  React makes it particularly easy to build very asymmetric DOM structures in pure Javascript.  It does this by allowing you to clearly describe a one-to-one mapping between the HTML elements you plan to put in the DOM tree and the context free grammar of the Javascript functions used to represent these elements.  This method of describing the DOM also implicitly captures the dependency tree of your UI components, so when something changes, the framework is able to traverse the tree and figure out what changed.",
        rating: 5,
        username_id: 1,
        tech_id: 10
      },
      {
        title: "Perl is nothing compared to Python.",
        body: "Python came along. Compared to Perl’s straight-jacketed scripting, Python was a lopsided affair. It even took after its namesake, Monty Python’s Flying Circus. Fittingly, most of Wall’s early references to Python were lighthearted jokes at its expense.",
        rating: 1,
        username_id: 4,
        tech_id: 9
      },
      {
        title: "Bulma. The CSS Framework that doesn't waste your time.",
        body: "The hours I wasted using Materialize and Bootstrap are 10X or more compared to the amount I've used with Bulma. 100% recommend Bulma as a CSS Framework.",
        rating: 5,
        username_id: 3,
        tech_id: 5
      },
      {
        title: "Use Materialize - brace yourself to want to switch careers.",
        body: "Materialize is primarily a UI/UX framework and dictates how elements will appear on the page. There is some overlap between the two in that Materialize also offers a grid system, among other things.",
        rating: 1,
        username_id: 4,
        tech_id: 8
      },
    ]);
  });
};
