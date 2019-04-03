$(function(){
  var $range=$('input[type="range"]');
  var $txtAge=$('#age');
  $range.change(function(){
    $txtAge.html($range.val());  //sapn标签设置值
  })
});
