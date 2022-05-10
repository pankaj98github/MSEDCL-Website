var a;
        var b;
        var result1=0;
        var result2=0;

        function CalculateUnit()
        {
            {
                a = parseInt(document.f1.curr.value);
                b = parseInt(document.f1.pre.value);
            }

            result1=a-b;

            document.f1.unit.value=result1;

        }

        function CalculateBill()
        {
            if(result1<=100)
        {
            result2=result1*7;
        }

            else if(result1>100 && result1<=200)
        {
            result2=100*7 + (result1-100)*8;       
        }

            else if(result1>200 && result1<=300)
        {
            result2=100*7 + 100*8 + (result1-200)*9;   
        }

            else if(result1>300)
        {
            result2=100*7 + 100*8 + 100*9 + (result1-300)*10;    
        }

        document.f1.bill.value=result2;
    }
