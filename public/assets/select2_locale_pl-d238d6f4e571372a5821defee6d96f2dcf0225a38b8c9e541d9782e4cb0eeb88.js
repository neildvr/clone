!function(e){"use strict";function t(e,t,n){return" "+e+" "+t+(1==e?"":5>e%10&&e%10>1&&(5>e%100||e%100>20)?n:"\xf3w")}e.fn.select2.locales.pl={formatNoMatches:function(){return"Brak wynik\xf3w"},formatInputTooShort:function(e,n){return"Wpisz co najmniej"+t(n-e.length,"znak","i")},formatInputTooLong:function(e,n){return"Wpisana fraza jest za d\u0142uga o"+t(e.length-n,"znak","i")},formatSelectionTooBig:function(e){return"Mo\u017cesz zaznaczy\u0107 najwy\u017cej"+t(e,"element","y")},formatLoadMore:function(e){return"\u0141adowanie wynik\xf3w\u2026"},formatSearching:function(){return"Szukanie\u2026"}},e.extend(e.fn.select2.defaults,e.fn.select2.locales.pl)}(jQuery);