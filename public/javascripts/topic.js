var $fil = $('#fil');
var $search = $('#search');
var $list = $('#list').find('a');
var $del = $('a.del');

function go(page){
  var F = new Array(), G = new Array();
  var search = JudgeString($search.val());

  if (page) F.push('page'), G.push(page);
  if (search) F.push('search'), G.push(search);
  var url = '/topic', flg = true;
  for (var i = 0; i < F.length; i++) {
    if (flg) {
      url += '?';
      flg = false;
    } else {
      url += '&';
    }
    url += F[i] + '=' + G[i];
  }

  window.location.href = url;
}

$(document).ready(function(){
  $fil.click(function(){
    go(null);
  });
  $.each($list, function(i, p){
    $(p).click(function(){
      var $li = $(this).parent();
      if ($li.hasClass('active') || $li.hasClass('disabled')) {
        return false;
      }
      go($(this).attr('id'));
    });
  });
  simulateClick($search, $fil);
  $('#reset').click(function(){
    window.location.href = '/topic';
  });
});

var $top = $('a[tid]');

$(document).ready(function(){
  if ($top.length) {
    $.each($top, function(i, p){
      $(p).click(function(){
        if ($(p).hasClass('disabled')) {
          return false;
        }
        $(p).addClass('disabled');
        $.ajax({
          type: 'POST',
          url: '/toggleTop',
          data: { tid : $(p).attr('tid') },
          dataType: 'text',
          error: function() {
            $(p).removeClass('disabled');
            ShowMessage('无法连接到服务器！');
          }
        }).done(function(){
          window.location.reload(true);
        });
      });
    });
  }
});