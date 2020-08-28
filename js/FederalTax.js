export default class Federal{
    calculate( nAmt) {
      let rc = 0;
      
          if (nAmt <= 45282.00) {
            rc = ((nAmt - 0.0) * 0.15 )+ 0.0;
          }
          
       
         else if (nAmt > 45282.00 && nAmt<= 90563.00) {
            rc = ((nAmt - 45282.00) * 0.205) + 6792.00;
          }
      
       
          else if (nAmt > 90563.00 && nAmt<= 140388.00) {
            rc = ((nAmt - 90563.00) * 0.26) + 16075.00;
          }
         
       
         else  if (nAmt > 140388.00 && nAmt<= 200000.00) {
            rc = ((nAmt - 140388.00) * 0.29) + 29029;
          }
         
     
         else if (nAmt > 200000.00) {
            rc = ((nAmt - 200000.00) * 0.33) + 46317.00;
          }
        
        
     
      return Number(rc.toFixed(2));
    }
  }