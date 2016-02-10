  (function(){
    "use strict";


      var Moosipurk = function(){

        //singelton pattern
        if(Moosipurk.instance){
          return Moosipurk.instance;
        }
        Moosipurk.instance = this; //this=Moosipurk

        console.log('moosipurgi sees');

      };

      window.onload = function(){
        var app = new Moosipurk();
        var app2 = new Moosipurk();

      };

  }) ();
