const readline=require('readline-sync')
console.log("###################################################### Welcome to Navgurukul Kbl Game #############################################");
let questions=["1.What is the name of the capital of our country ????","2.In what year did the Great October Socialist Revolution take place","3.What is the largest lake in the world?","4.Which planet in the solar system is known as the “5.Red Planet”?","Who wrote the novel War and Peace?","6.What is the capital of Japan?","7.Which river is the longest in the world?","8.What gas is used to extinguish fires?",
"9.What animal is the national symbol of Australia?","10.Which of the following planets is not a gas giant?","11.What is the name of the process by which plants convert sunlight into energy?","12.What chemical element is designated as “Hg”?","13.In what year was the first international modern Olympiad held?","14.For which of these disciplines Nobel Prize is awarded?","15.Entomology is the science that studies:","16.Hitler's party is known as:"];
let options=["1.Delhi\n2.kokata\n3.Chandigarh\n4.Himachal Pradesh","1.1917\n2.1923\n3.1914\n4.1920","1.Caspian Sea\n2.Baikal\n3.Lake Superior\n4.Ontario","1.Venus\n2.Earth\n3.\nMars4.Jupiter","1.Anton Chekhov\n2.Fyodor Dostoevsky\n3.Leo Tolstoy\n4.Ivan Turgenev","1.Beijing\n2.Tokyo\n3.Seoul\n4.Bangkok","1.Amazon\n2.Mississippi\n3.Nile\n4.Yangtze","1.Oxygen\n2.Nitrogen\n3.Carbon dioxide\n4.Hydrogen","1.Kangaroo\n2.Koala\n3.Emu\n4.Crocodile","1.Mars\n2.Jupiter\n3.Saturn\n4.Uranus","1.Respiration\n2.Photosynthesis\n3.Oxidation\n4.Evolution","1.Silver\n2.Tin3.Copper4.Mercury","1.18962.1900\n3.1912\n4.1924","1.Physics-Chemistry\n2.Physiology\n3.Medicine\n4.All of the above","1.Behavior of human beings\n2.Insects\n3.The origin and history of technical and scientific terms\n4.The formation of rocks","1.Labour Party\n2.Nazi Party\n3.Ku-Klux-Klan\n4.Democratic Party"];
let answers=[1,1,2,3,3,2,3,2,1,1,2,2,1,4,2,2];
let ammount=0;
for(let i=0;i<questions.length;i++)
    {   
        if(ammount>=0){
        console.log(questions[i]);
        console.log(options[i]);
        let ans=readline.questionInt(`Enter your answer=`);
        if(ans==answers[i])
            {   
                ammount+=2000;
                console.log(`Yeah correct answer the current winnigs=${ammount}`);

            }
            else
            {
                ammount-=2000;
                console.log(`Sorry the answer is wrong the current winnings=${ammount}`);
            }
        }else{
            console.log('You Have lost the game thank you see you soon');
            break;
        }
    }

    if(ammount<0)
        {
            console.log(`The overall winnings=0`);
        }
        else
        {
            console.log(`The overall winnings=${ammount}`)   
        }