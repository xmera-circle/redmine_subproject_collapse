
function addProjectsListCollapse(){
  $("div#projects-index li.root, div#projects-index div.child").each(function(id, el) {
    $parent = $(el);
    $content1 = $parent.next("ul");
    $content2 = $parent.children(".description");

    if($content1.length || $content2.length) {
      if($parent.hasClass('root')) {
        $parent.prepend("<a href='javascript:void(0);' class='expcolroot collapsible'></a>");
      } else {
        $content1.toggle();
        $content2.toggle();
        $parent.prepend("<a href='javascript:void(0);' class='expcolroot collapsible collapsed'></a>");
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
    $content1 = $header.parent().next("ul");
    $content2 = $header.parent().children(".description");
    $content1.toggle();
    $content2.toggle();
  });
}
function addSubprojectListCollapse(){
  $subprojects = $('#projects-index li.root ul.projects');
  $subprojects.addClass('collabsible');
  $('div#projects-index').prepend("<a href='#' class='toggle-subprojects'>Alle einklappen/Alle ausklappen</a>");
  $toggle = $('a.toggle-subprojects');
  $toggle.click(function(){
    $subprojects.toggleClass('collapsed');
    $subprojects.toggle('collapsed');
  });
}

$(document).ready(addProjectsListCollapse);
$(document).ready(addSubprojectListCollapse);
