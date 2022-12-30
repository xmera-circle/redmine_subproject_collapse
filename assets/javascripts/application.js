
function addProjectsListCollapse(){
  $("div#projects-index li.root, div#projects-index div.child").each(function(id, el) {
    $parent = $(el);
    $content1 = $parent.next("ul");
    $content2 = $parent.children(".description");

    if($content1.length || $content2.length) {
      if($parent.hasClass('root')) {
        $parent.prepend("<a href='javascript:void(0);' class='icon expcolroot collapsible'></a>");
      } else {
        $content1.toggle();
        $content2.toggle();
        $parent.prepend("<a href='javascript:void(0);' class='icon icon-collapsed expcolroot collapsible collapsed'></a>");
      }
    } else {
      if(!$parent.hasClass('root')) {
        $parent.prepend("<a style='padding-left:12px;'></a>");
      }
    }
  });

  $("a.expcolroot").click(function(){
    $header = $(this);
    $header.toggleClass("collapsed")
    $header.toggleClass("icon-expanded icon-expended icon-collapsed")
    $content1 = $header.parent().next("ul");
    $content2 = $header.parent().children(".description");
    $content1.toggle();
    $content2.toggle();
  });
}
function addSubprojectListCollapse(){
  $subprojects = $('#projects-index li.root ul.projects');
  $subprojects.addClass('collabsible');
  $('form#query_form').append("<div class='toggle-subprojects-container'><a href='#' class='toggle-subprojects'>" + l('collapse_all') + "/" + l('expand_all') + "</a></div>");
  $toggle = $('div a.toggle-subprojects');
  $toggle.click(function(){
    $subprojects.toggleClass('collapsed');
    $subprojects.toggle('collapsed');
  });
}

function l(text) {
  let lang = document.documentElement.lang

  if (typeof translations()[lang] === 'undefined') {
    lang = 'en'
  }

  return translations()[lang][text]
}

function translations(){
  return {
    en: {
      collapse_all: 'Collapse all',
      expand_all: 'Expand all'
    },
    fr: {
      collapse_all: 'Plier tout',
      expand_all: 'Déplier tout'
    },
    pl: {
      collapse_all: 'Zwiń wszystkie',
      expand_all: 'Rozwiń wszystkie'
    },
    de: {
      collapse_all: 'Alles einklappen',
      expand_all: 'Alles ausklappen'
    },
    ja: {
      collapse_all: '折りたたみ',
      expand_all: '展開'
    }
  }
}

$(document).ready(addProjectsListCollapse);
$(document).ready(addSubprojectListCollapse);
