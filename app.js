function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    // vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
$( document ).ready(function() {
  $('#url').text(window.location.pathname);
  var params = getUrlVars();
  var list = $('#paramsList');
console.log(params);
  for (var key in params) {
    // skip loop if the property is from prototype
    if (!params.hasOwnProperty(key)) continue;
    list.append('<li><span class="left-label">'+key+':</span><span>'+params[key] +'</span></li></li>');
  }

});
