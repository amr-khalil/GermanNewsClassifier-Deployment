$(document).ready(function(){
        $(".progress-bar").each(function(){
          var percentage = parseInt($(this).html());
          if(percentage > 0){
            $(this).animate({'width':''+percentage*11+'px'}, 800);
          }else{
            $(this).css({'color':'black', 'background':'none'}, 800);
          }
        })
      })
