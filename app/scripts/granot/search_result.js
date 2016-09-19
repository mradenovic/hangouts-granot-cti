console.log('search_result.js')
var results = $('a[target="_blank"]');
if (results.length == 1) {
  result = results.get(0);
  $(result).attr('target', '_self');
  result.click();
}
