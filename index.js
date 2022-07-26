var jsonObj={
    "Candidates":[
       {Resume1:
     { Details:{
        name: "John Doe",
      label: "Programmer",
      
      email: "john@gmail.com",
      phone: "(912) 555-4321",
      website: "http://johndoe.com",
      summary: "A summary of John Doe...",
      location: {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      }
    },
    Education:{
        School:"Don Bosco",
        College:"Stanford",
    },
    Hobbies:{
       1:"Reading",2:"Badminton",3:"quiz"
    }
    
    }},
    

        {Resume2: 
            {Details:{
        name: "Brian Acton",
        label: "Designer",
        
        email: "brian@gmail.com",
        phone: "(912) 666-4312",
        website: "http://brianacton.com",
        summary: "A summary of Brian Acton...",
        location: {
          "address": "2732 Coastway St",
          "postalCode": "CA 73912",
          "city": "San Jose",
          "countryCode": "US",
          "region": "California"
        }
      },
      Education:{
          School:"Michigan",
          College:"Michigan",
      },
      Hobbies:{
         1: "Reading", 2:"Soccer", 3:"Swimming"
      }
    }}
]     
};


for(var i=0;i<jsonObj.Candidates.length;i++){
    console.log( jsonObj[i].Resume1.Education);
}

for(const key of jsonObj){
    console.log(key.College);

}

Candidates.forEach((element) => {
    console.log(element.Details);
    
});

for(const key in Resume1.Details)
{
    console.log(key,Details[key]);
}