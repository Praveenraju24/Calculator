document.querySelector(".btn").addEventListener("click",function()
{
   var h=document.querySelector(".fname").value;
   console.log(h);
   var s=h,temp=[],ans=[];
   temp.push("(");
   s=s.trim();
   s=s+")";
   var n=s.length;
   var last=' ';
   for(var i=0;i<n;i++)
   {
      if(s.charAt(i)=='(')
      temp.push("(");
      else if(s.charAt(i)==')')
      {
          while(temp.length>0 && !(temp[temp.length-1]==="("))
          {
             ans.push(temp.pop());
          }
          if(temp.length>0)
          temp.pop();
      }
      else if(s.charAt(i)=='+' || s.charAt(i)=='-')
      {
          if(s.charAt(i)=='-')
          {
            if(last=='(' || last==' ')
            {
              ans.push("0");
            }
            if((last>='0' && last<='9')||(last==')'))
              {
                  while(temp.length>0 && !(temp[temp.length-1]==="("))
                  {
                    ans.push(temp.pop());
                  }
                  
               }
            temp.push(s.charAt(i)+"");
          }
          else
          {
            while(temp.length>0 && !(temp[temp.length-1]==="("))
                 {
                    ans.push(temp.pop());
                 }
                 temp.push(s.charAt(i)+"");
          }
      }
      else if(s.charAt(i)=='/' || s.charAt(i)=='*' ||s.charAt(i)=='%')
      {
          if(temp.length>0 && !(temp[temp.length-1]==="("))
          {
              if(temp[temp.length-1]==="*" || temp[temp.length-1]==="/" || temp[temp.length-1]==="%")
              ans.push(temp.pop());
          }
          temp.push(s.charAt(i));
      }
      else if(s.charAt(i)!=' ')
      {
          var str=""+s.charAt(i);
          if(i-1>-1 && s.charAt(i-1)>='0' && s.charAt(i-1)<='9')
          {
             str=ans.pop()+""+s.charAt(i);
             
          }
            ans.push(str);
      }
      if(s.charAt(i)!=' ')
      last=s.charAt(i);
     
   }
   document.querySelector("input").value=Eval_postfix(ans,temp);
});
document.querySelector(".plus").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"+";
    
});
document.querySelector(".minus").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"-";
});
document.querySelector(".div").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"/";
});

document.querySelector(".mul").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"*";
});
document.querySelector(".one").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"1";
});
document.querySelector(".two").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"2";
});
document.querySelector(".three").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"3";
});
document.querySelector(".four").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"4";
});
document.querySelector(".five").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"5";
});
document.querySelector(".six").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"6";
});
document.querySelector(".seven").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"7";
});
document.querySelector(".eight").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"8";
});
document.querySelector(".nine").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"9";
});
document.querySelector(".zero").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"0";
});
document.querySelector(".clear").addEventListener("click",function()
{
   document.querySelector("input").value="";
});
document.querySelector(".lb").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"(";
});
document.querySelector(".rb").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+")";
});
document.querySelector(".mod").addEventListener("click",function()
{
   document.querySelector("input").value=document.querySelector("input").value+"%";
});
document.querySelector(".fact").addEventListener("click",function(){
   var n=parseInt(document.querySelector("input").value);
   fact=factorial(n);
   document.querySelector("input").value="Factorial of "+n+" is "+fact[n];
});
document.querySelector(".npr").addEventListener("click",function(){
   var str=(document.querySelector("input").value).split(" ");
   var n=parseInt(str[0]),r=parseInt(str[1]);
   var fact=factorial(n);
   document.querySelector("input").value="The value of "+str[0]+"p"+str[1]+" is "+(fact[n]/fact[n-r]);
});
document.querySelector(".ncr").addEventListener("click",function(){
   var str=(document.querySelector("input").value).split(" ");
   var n=parseInt(str[0]),r=parseInt(str[1]);
   var fact=factorial(n);
   document.querySelector("input").value="The value of "+str[0]+"c"+str[1]+" is "+(fact[n]/(fact[n-r]*fact[r]));
});
document.querySelector(".prime").addEventListener("click",function(){
   var val=parseInt(document.querySelector("input").value);
   var n=square_root(val);
   var flag=false;
   for(var i=2;i<=n;i++)
   {
       if(val%i==0)
       {
         flag=true;
         break;
       }
   }
   if(flag || val<=1)
      document.querySelector("input").value=val+" is not a prime number";
   else
   document.querySelector("input").value=val+" is a prime number";
});
document.querySelector(".sqrt").addEventListener("click",function(){
   var n=parseInt(document.querySelector("input").value); 
   ans=square_root(n);
   document.querySelector("input").value="The square root of "+n+" is "+ans;
});
document.querySelector(".gcd").addEventListener("click",function(){
   var str=(document.querySelector("input").value).split(" ");
   var n=parseInt(str[0]),r=parseInt(str[1]);
   var fact=factorial(n);
   document.querySelector("input").value="The GCD of "+n+" and "+r+" is "+(gcd(n,r));
});
document.querySelector(".lcm").addEventListener("click",function(){
   var str=(document.querySelector("input").value).split(" ");
   var n=parseInt(str[0]),r=parseInt(str[1]);
   var fact=factorial(n);
   document.querySelector("input").value="The LCM of "+n+" and "+r+" is "+((n*r)/gcd(n,r));
});
document.querySelector(".arm").addEventListener("click",function(){
   var str=document.querySelector("input").value; 
   var size=str.length,n=parseInt(str);
   var temp=n,sum=0;
   while(temp>0)
   {
       sum=sum+(Math.pow(temp%10,size));
       temp=parseInt(temp/10);
   }
   if(n==sum)
   document.querySelector("input").value=str+" is a Armstrong number ";
   else
   document.querySelector("input").value=str+" is not a Armstrong number ";
});

function gcd(a,b)
{
   while(a%b!=0)
   { 
      var temp=a%b;
      a=b;
      b=temp;
   } 
   return b;
}
function square_root(n)
{
   var l=1,h=n,ans=0;
   while(l<=h)
   {
      var mid=parseInt((l+h)/2);
      if(mid*mid<=n)
      {
         ans=mid;
         l=mid+1;
      }
      else
      h=mid-1;
   }
   return ans;
}
function Eval_postfix(ans,temp)
{
   var n=ans.length;
   for(var i=0;i<n;i++)
   {
       switch(ans[i])
       {
          case "+":
            var r1=parseFloat(temp.pop()),r2=parseFloat(temp.pop());
            temp.push((r1+r2)+"");
            break;
          case "-":
            var n1=parseFloat(temp.pop()),n2=parseFloat(temp.pop());
            temp.push((n2-n1)+"");
            break; 
           
          case "/":
            var n1=parseFloat(temp.pop()),n2=parseFloat(temp.pop());
            temp.push((n2/n1)+"");
            break; 
         case "*":
            var n1=parseFloat(temp.pop()),n2=parseFloat(temp.pop());
            temp.push((n2*n1)+"");
            break; 
         case "%":
            var n1=parseFloat(temp.pop()),n2=parseFloat(temp.pop());
            temp.push((n2%n1)+"");
            break; 
          default:
           temp.push(ans[i]);
       }
   }
   return parseFloat(temp.pop());
}
function factorial(n)
{
    fact=[1]
    for(var i=1;i<=n;i++)
    fact.push(fact[i-1]*i);
    return fact;
}