export default class Ontario{
   calculate( nAmt) {
    let rc = 0;
    
    
        if (nAmt <= 40922.00) {
          rc = ((nAmt - 0.0) * 0.0505) + 0.0;
        }
        
      
        else if (nAmt > 40922.00 && nAmt <= 81847.00) {
          rc = ((nAmt - 40922.00) * 0.09150)+ 2067;
        }
        
     
       else if (nAmt > 81847.00 && nAmt<= 150000.00) {
          rc = ((nAmt - 81847.00) * 0.1116) + 5811.00;
        }
        
     
        else if (nAmt > 150000.00 && nAmt<= 220000.00) {
          rc = ((nAmt - 150000.00) * 0.1216) + 13417.00;
        }
       
    
        else if (nAmt > 220000.00 ) {
          rc = ((nAmt - 220000.00) * 0.1316) + 21929.00;
        }
        
      
        
    
    return Number(rc.toFixed(5));
  }
}
