import Ontario from "./OntarioTax.js";
import Federal from "./FederalTax.js";


import "https://code.jquery.com/jquery-1.12.1.min.js";
import "https://code.jquery.com/jquery-1.12.4.min.js";


$(document).ready(()=>{
    $("#calculate").submit((evt)=>{
        evt.preventDefault();
        const nAmt = $("#income").val();
        const nOwn = $("#deducted").val();
        const oOntario = new Ontario();
        const oFederal = new Federal();
        $("#amount").html(nAmt);
        $("#amount1").html(nAmt);
        $("#amount2").html(nAmt);
        $("#amount3").html(nOwn);

        try{
                  $("#ontariotax").html(oOntario.calculate(nAmt));
                  $("#federaltax").html(oFederal.calculate(nAmt));
                  $("#totaltax").html((oOntario.calculate(nAmt))+(oFederal.calculate(nAmt)));
                  $("#owing").html(((oOntario.calculate(nAmt))+(oFederal.calculate(nAmt)))-nOwn);
                  $("#goodMessage").show();
                  $("#errorMessage").hide();
                
                }
                  catch(e){
                      $("#errorMessage").html(`Error:${e}`);
                      $("#errorMessage").show();
                      $("#goodMessage").hide();
                  }
  
    })
    $('body').on('keydown', 'input, select', function(e) {
        if (e.key === "Enter") {
            var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            focusable = form.find('input,input').filter(':visible');
            next = focusable.eq(focusable.index(this)+1);
            if (next.length) {
                next.focus();
            } else {
                form.submit();
            }
            return false;
        }
    });
    
});


