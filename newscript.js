//create a request variable by 
//creating an instance of XML HTTP request
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function() {
	var data = JSON.parse(this.response);
    //console.log(data);
    var res=data.filter(function(element,index) {
            //console.log(element.population)
            if (element.population<200000) {
                console.log(element.name)

            }
                
            
    }) 

   
    
}




//output
//prints all the countries with population less than 2 lakh
//total 63 countries





var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function() {
	var data = JSON.parse(this.response);
    console.log(data);
    var cap=[]
    var names=[]
    var flag=[]

    data.forEach(function(element,index) {
            cap.push(element.capital)

            names.push(element.name)
            console.log(element.flag)



            
                
            
    }) 

    console.log(cap)
    console.log(names)
   
    
}




//output
//prints all the countries names,capital,flags 
//total 250 countries






var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function() {
	var data = JSON.parse(this.response);
    console.log(data);
    
 var X=  data.filter(function (element,index) {
     let flag=false
    X.currencies.forEach(item=>{
        if(item.code==="USD")
        flag=true

    })
            if(flag==true)
            return true
            })
            console.log(X)


    //console.log(data)
    
   

  
   
    
}

//output=
//prints countries name with currency usd



var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function() {
	var data = JSON.parse(this.response);
    console.log(data);

    var res=data.reduce((acc,curr)=>{
        return acc+curr.population
    },0)
    console.log(res)
    
   
    
}




//output
//prints total population using reduce method




var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function() {
	var data = JSON.parse(this.response);
    console.log(data);
    var res=data.filter(function(element,index) {
            //console.log(element.region)
            if (element.region==="Asia") {
                document.write(element.name)

            }
                
            
    }) 

   
    
}



//output
//prints all the countries names with region Asia
































