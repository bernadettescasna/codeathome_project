   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          
                          {q:'There are many science fiction stories about cloning and genetic engineering. A few years ago a genetic engineering technique in molecular biology was discovered by which the genomes of living organisms can be modified. How is it called ?',options:['CRISPR','ELISA','FISH','blotting'],answer:1},
                        
                          {q:'Bacteria are known to play an important role in ecosystems on Earth. As the human body is also an ecosystem, what do you think: How many bacteria cells does your (healthy) body contain compared to human cells?', options:['<5%','20%','35%','>50%'],answer:4},

                          {q:'Which is the largest cell in the human body and visible without a microscope?', options:['bone cell','female ovum/egg','male sperm cell','brain cell'],answer:2},

                          {q:'What does "Bioremediation" mean?', options:['the process of adding minerals while growing plants','the process of using microorganisms to degrade target pollutants from contaminated media (water, soil, ...)','the spread of a species in a new unpopulated area','the process of degradation of dead organic material'],answer:2},

                          {q:'Which organ keeps on growing during the whole life?', options:['brain','liver & kidneys','nose & ears','genitals'],answer:3},

                          {q:'The human blood is red because of red blood cells. But what makes them red?', options:['iron','copper','zinc','calcium'],answer:1},

                          {q:'Which gas is the most common in the atmosphere with almost 80 % ?', options:['oxygen','ozone','nitrogen','carbon dioxide'],answer:3},

                          {q:'Carbon dioxide (CO2) affects the climate on our earth. The more CO2 gets into the atmosphere, the warmer it gets on Earth, therefore CO2 is called greenhouse gas. How much CO2 (volume %) is currently in the atmosphere?', options:['~ 40%','~ 10%','<2%','<0.5 %'],answer:4},

                          {q:'When was the first film ever made?', options:['1975','1899','1920','1888'],answer:4},

                          {q:'Which one of these films was directed by Quentin Tarantino?', options:['Titanic','Pulp Fiction','Joker','Grease'],answer:2},

                          {q:'Which of the books in the series <em>Harry Potter</em> has the most pages?', options:['Harry Potter and The Goblet of Fire','Harry Potter and the Chamber of Secrets','Harry Potter and the Prisoner of Azkaban','Harry Potter and the Order of the Pheonix'],answer:4},

                          {q:'Which animal has the biggest ears in relation to its size?', options:['Elephant','Jerboa','Rabbit','Fennec Fox'],answer:2},

                          {q:'Which one of these fruits is the lowest in Vitamin C?', options:['strawberries','lemons','guavas','kiwifruit'],answer:2},

                          {q:'Which planet in the Solar System is the biggestC?', options:['Jupiter','Venus','Saturn','Mars'],answer:1},

                          {q:'How many alphabets does Japanee language use?', options:['1','2','3','4'],answer:3},

                          {q:'Who founded apple computer?', options:['Bill Gates', 'Steve Jobs', 'Johny Ive','none of the above'],answer:2},
                       
                          {q:'Which of these is not a peripheral, in computer terms?', options:['Keyboard', 'Speakers', 'Graphics Card', 'none of the above'], answer:3},
                       
                          {q:'What does the Internet prefix "WWW" stand for?', options:['World Wide Web', 'Wide Width Wickets', 'Worldwide Weather', 'none of the above'], answer:1},
                       
                          {q:'Which of these is not an operating system?', options:['Android', 'Opera', 'Linux', 'none of the above'], answer:2},
                       
                          {q:'Which of these is bigger?', options:['1MB', '1000000KB', '10GB', '1ZP'], answer:4},
                       
                          {q:'What is the name of a computer pointing device?', options:['Monitor', 'Modem', 'Mouse', 'none of the above'], answer:3},
                       
                          {q:'What is considered to be the brain of the computer?', options:['Motherboard', 'none of these', 'CPU', 'RAM'], answer:3},
                       
                          {q:'What is considered to be hardware?', options:['An operating system', 'A RAM module', 'The internet', 'none of the above'], answer:2},
                       
                          {q:'What was the title of operation devised in the United States that would support contruction workers with the usage of nuclear bombs?', options:['Operation Blowtorch', 'Operation Cobra', 'Operation Construction', 'Operation Plowshare'], answer:4},
                       
                          {q:'What is the longest river according to the Brazilian Institute of Geography and Statistics?', options:['Yangtze', 'Nile', 'Amazon River', 'Yellow River'], answer:3},
                       
                          {q:'Who is often mistakenly considered the creator of modern manga comics?', options:['Eiichiro Oda', 'Katsushika Hokusai', 'Masashi Kishimoto', 'Walter Elias Disney'], answer:2},
                       
                          {q:'Which one of these animals can only be found in China?', options:['Pika', 'American pika', 'Collared pika', 'Ili pika'], answer:4},
                       
                          {q:'How small is Europe?', options:['Smaller than Russia', 'Smaller than Australia', 'Smaller than China', 'Smaller than Canada'], answer:1},
                       
                          {q:'Which country owns snake island?', options:['Japan', 'New Zealand', 'Brazil', 'Denmark'], answer:3},
                       
                          {q:'Which of these is the largest lake?', options:['Aral Sea', 'Lake Superior', 'Lake Michigan-Huron', 'Caspian Sea'], answer:4},


                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



