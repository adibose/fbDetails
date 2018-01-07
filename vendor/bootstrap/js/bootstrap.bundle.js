$(document).ready(function(){
    $("#feedDetails").hide();
     $("#profileDetails").hide();
     $("#front").show();
     $("#home").hide();
     function getinfo(){
       var facebookToken =$("#token").val(); 
       console.log(facebookToken);
       var i;
       var showValue;

             // $("#profile").click(function(){
             //     $("#feedDetails").hide();
             //     $("#profileDetails").show();
                 $.ajax("https://graph.facebook.com/me?fields=id,feed,relationship_status,name,location,about,education,email,address,birthday,picture,work,hometown,first_name,last_name,gender&&access_token="+facebookToken,{
                    
                     success : function(response){
                        alert("Successful.....Click on Profile Page and feed page for your details..");
                                console.log(typeof(response));
                    console.log(response);
                    $("#myEmail").text(response.email);
                    console.log(response.email);
                    $("#fName").text(response.first_name);
                    $("#lName").text(response.last_name)
                    $("#gender").text(response.gender);
                    $("#relatn").text(response.relationship_status);
                    //$("#myProfileId").html('<a target" href="https://facebook.com/'+data.id+'">https://facebook.com/'+data.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                     $("#wrk").text(response.work[0].employer.name);
                     $("#pos").text(response.work[0].position.name); 
                     $("#deg").text(response.education[2].concentration[0].name);
                     $("#school").text(response.education[1].school.name);
                     $("#univ").text(response.education[2].school.name);
                     $("#loc").text(response.location.name);
                     $.each(response.feed.data,function(i,showValue){
                        console.log(showValue.story);
                        $("#feeds").append("<li> Post:"+showValue.story + "</li>"+"\n"+"Posted on:"+showValue.created_time+"<br>"+"<br>");
                        });
                    },
                    error : function(request,errorType,errorMessage){
                                console.log(request);
                               console.log(errorType);
                               if (facebookToken== "") {
                              alert("NO URL GIVEN PLEASE TYPE THE URL");
                                }
                               else{
                               console.log(errorMessage);
                                alert("WRONG API GIVEN OR API IS DOWN!!!");
                                }                           

                               
                                },

                    timeout:5000, 

                               beforeSend : function(){

                                $("#feedDetails").show();
                                $("#profileDetails").show();

                               },

                              complete : function(){

                              $("#feedDetails").hide();
                              $("#profileDetails").hide();

                               }
            });
               }
            $("#clickbtn").on('click',getinfo)
               
                 $("#profile").click(function(){
                    $("#home").show();
                   $("#feedDetails").hide();
                   $("#profileDetails").show();
                   $("#front").hide();
                 });

                 $("#feed").click(function(){
                    $("#home").show();
                   $("#profileDetails").hide();
                    $("#feedDetails").show();
                    $("#front").hide();
                  });
                
                $("#home").click(function(){ 
                    $("#token").val(" ");
                    $("#front").show();
                    $("#feedDetails").hide();
                    $("#profileDetails").hide();
                });


     });       