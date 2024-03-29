var facets = [
  {
    name: "cook",
    avatarPath: "/images/cookie-monster.png",
    bodyCss: {background: "white"},
    updateContent: function() {
      // nothing here
    },
    hideContent: function() {
      // nothing here
    }
  },
  {
    name: "code",
    avatarPath: "/images/code.png",
    bodyCss: {background: "#DCDCDC"},
    updateContent: function() {
      $('#welcome').addClass('code');
      $('#content')
        .html('<ul class="skill-table">' +
          _.reduce(_.shuffle(skills), function(items, skill) {
            return items + `<li class="code ${nextSkillClass()}">${skill}</li>`;
          }, '') +
          '</ul>')
        .append('<div id="connect-on" class="footer">' +
          _.reduce(socialNetworks, function(html, socialNetwork) {
            return html + `<a target="_blank" alt=${socialNetwork.name} title="${socialNetwork.name}" href="${socialNetwork.url}"><img src="${socialNetwork.img}"></img></a>`;
          }, '') +
          '</div>')
        .fadeIn(1000);
    },
    hideContent: function() {
      $('#welcome').removeClass('code');
      $('#content').html('');
    }
  },
  {
    name: "hiking",
    avatarPath: "/images/yeti.png",
    bodyCss: {background: '#A92415'},
    updateContent: function() {
      $('#welcome').addClass('hiking');
      $('#avatar')
      //   .mouseenter(function(event) {
      //     $(event.target).addClass('mega-size');
      // }).mouseleave(function(event) {
      //     $(event.target).removeClass('mega-size');
      // });
        .contextmenu(function(event) {
          event.preventDefault();
      });
    },
    hideContent: function() {
      $('#welcome').removeClass('hiking');
    }
  },
  // {
  // 	name: "music",
  // 	avatarPath: "images/code.png"
  // }
];

var languages = [
  {
    name: "english",
    welcomeMessage: "Welcome!"
  },
  {
    name: "spanish",
    welcomeMessage: "¡Bienvenido!"
  },
  {
    name: "french",
    welcomeMessage: "Bienvenue !"
  }];

var skillClasses = ["skill1", "skill2", "skill3"];
var currentSkillClass = skillClasses[0];

function nextSkillClass() {
  var oldSkillClass = currentSkillClass;
  currentSkillClass = skillClasses.cycleNext(currentSkillClass);
  return oldSkillClass;
}

var socialNetworks = [
  {
    name: 'Connect on LinkedIn',
    url: 'https://ar.linkedin.com/in/olivamiguel',
    img: '/images/connect-on-linkedin.png'
  },
  {
    name: 'Checkout repos in GitHub',
    url: 'https://github.com/moliva',
    img: '/images/connect-on-github.png'
  }
];
var skills = ['General Programming', 'Web Development', 'Java', 'Scala', 'Javascript', 'Big Data', 'Spark', 'CSS', 'Node.js', 'OSGI', 'Eclipse', 'Object Oriented Design', 'XP', 'Maven', 'Clojure', 'Design Patterns', 'Smalltalk', 'DBMS', 'Git',
  'TDD', 'Scrum', 'Continuous Delivery', 'Functional Programming', 'MongoDB', 'Machine Learning', 'SQL', 'ORM', 'ClojureScript', 'Gradle', 'Gulp', 'Angular JS', 'Reagent', 'Rails', 'MapReduce', 'BDD', 'Express', 'Bootstrap', 'Octave', 'API',
  'Stream Processing', 'CEP', 'Drools', 'Storm', 'Haskell', 'Monadic Programming', 'Buzzwords', 'Mule', 'VIm', 'Bash', 'Buzzwords everywhere!', 'jQuery', 'nginx', 'SSH', 'ZSH', 'Grunt'];
