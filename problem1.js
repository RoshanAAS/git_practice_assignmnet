

  // Problem 1 : Check whether a number is Prime or not//

    let num=13;
      
    let count=0;

     for(let i=0; i<=num; i++)
     {
        if(i%num==0)
        {
            count++
        }
     }

       if(count!=0)
       {
        console.log("Yes")
       }
       else
       {
         console.log("No")
       }