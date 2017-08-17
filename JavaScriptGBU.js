var myIndex = 0;
carousel()

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }

// GAMESTUFF
  var femalewords = ["Helpful", "Shy", "Uptight", "Cautious", "High-maintenance", "Desperate", "Fake", "Neat", "Gentle", "Pushy", "Responsible", "Moody", "Understanding", "Emotional", "Nagging", "Compliant"]
  var malewords = ["Brave", "Mischievous", "Risk-taking", "Impulsive", "Athletic", "Entrepreneurial", "Confident", "Direct", "Narcissist", "Competitive", "Dominant", "Ambitious", "Leader", "Breadwinner", "Immature", "Strong"]
  var neutralwords = ["Creative", "Abrasive","Hardworking"]

  var femaleandmale = femalewords.concat(malewords);
  var allwords = femaleandmale.concat(neutralwords);
  var allwordsforindex = femaleandmale.concat(neutralwords);

  var defslist = ["Women are more often associated with being helpful than leaders themselves.", "Women are more often perceived as gentle, neat and shy, instead of bold and powerful.", "Uptight and pushy are adjectives more commonly associated with women, while men are perceived as determined or hardworking, thereby subtly discouraging women from being powerful leaders.", "Women are commonly seen as cautious and responsible, and are not open to taking risks and making changes.", "High-maintenance is often associated with females, as they are often stereotyped as materialistic and clingy.", "One common stereotype associated with females is that they are desperate, attention-seeking, and clingy.", "Fake is often used to describe women in a way that contributes to the stereotype that women are superficial and materialistic.", "Women are more often perceived as neat, tidy, and collected.", 'Women are more often perceived as gentle, instead of bold and powerful.',
  "Pushy is a trait more frequently associated with females, while males are seen as determined or hard-working.", "This subtly discourages women from being powerful leaders.", "Women are more commonly labeled as responsible, and are stereotypically less open to taking risks.", "Females are often labeled as moody or emotional, which results in the perception that women are irrational and not capable of making important decisions.", "Women are more often associated with being understanding, empathetic, and caring than males are.", "Females are often labeled as moody,emotional, or hormonal, which results in the perception that women are irrational and not capable of making important decisions.", "Nagging or being bossy are actions more commonly associated with females, while men are more frequently perceived as determined and hardworking.", "Men might be categorized as brave more often, but women are brave as well.",
  "The stereotype that men or boys are mischevious and immature is dangerous because it can be used as justification for harmful actions.", "Men are commonly perceived as risk-takers, while women are stereotyped as cautious and responsible.", "Men are commonly perceived as more risk-taking, impulsive, and confident, while women are stereotyped as cautious and responsible.", "Due to a perception that muscle equates masculinity, men are categorized as more 'athletic' and 'stronger'. They are more often pushed to engage in physical activities over females who are considered weaker. This can also have adverse effects on men who feel as if they are not masculine enough because they are not athletic enough.", "Men are usually labeled as entrepreneurial, competitive, and ambitious.", "Confident and direct are typically associated with males, while a woman who is up-front would often be perceived as bossy or full of herself.",
  "Direct and confident are typically associated with males, while a woman who is up-front, would often be perceived as bossy or full of herself.", "The word narcissist is more commonly associated with males than females.", "Men are usually labeled as competitive, entrepreneurial, and ambitious. This stems from the notion that men have greater potential for success and greater confidence than women.", "Dominant is typically associated with males because males are perceived as leaders while women are more often perceived as the helpers or secretaries.", "Men are usually labeled as competitive, entrepreneurial, and ambitious. This stems from the notion that men have greater potential for success and greater confidence than women.", "The word leader is typically associated with males, often because power is more associated with males than females.",
  "Due to issues such as the gender pay gap and workplace discrimination, men tend to earn more money for the same job than their female counterparts. This contributes to why the term 'breadwinner' is more often associated with males, despite the fact that many women support their families as the sole breadwinner.", "The stereotype that men are immature and mischevious is dangerous because it can be used as justification for harmful actions.", "Men are more often perceived as strong, athletic and take-charge.", "Creative is a term that is not always associated with either gender.", "Abrasive is a term that is not always associated with either gender.",
  "Hardworking is a term not always associated with one gender or the other."]

  function printwords () {
    var i=0;
    document.getElementById("theword").innerHTML=allwords[i];
    if (i<35) {
      return i;
    }
    }

  function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  var yourfemalewords=[]
  var yourmalewords=[]

  function keyDownHandler(e) {
      if(e.keyCode == 70) {
        yourfemalewords.push(allwords[x]);
        if (x<34) {
          x=x+1;
          document.getElementById("theword").innerHTML=allwords[x];
      }
        else{
          document.getElementById("gameContainer").style.display = 'none';
          document.getElementById("printedwordstable").style.display= 'block';


          for (i=0; i<yourfemalewords.length; i++){

            var element=document.getElementById("fwords");

            var newcurrent=document.createElement("h1");
            newcurrent.setAttribute("class", "tooltipf");
            element.appendChild(newcurrent);

            var node=document.createTextNode(yourfemalewords[i]);
            newcurrent.appendChild(node);

            var popup=document.createElement("h1");
            popup.setAttribute("class", "tooltiptextf");
            newcurrent.appendChild(popup);

            var hovertext=document.createTextNode(defslist[allwordsforindex.indexOf(yourfemalewords[i])]);
            popup.appendChild(hovertext);

            var brek=document.createElement("br");
            element.appendChild(brek);
          }
          for (i=0; i<yourmalewords.length; i++){

            var element=document.getElementById("mwords");

            var newcurrent=document.createElement("h1");
            newcurrent.setAttribute("class", "tooltipm");
            element.appendChild(newcurrent);

            var node=document.createTextNode(yourmalewords[i]);
            newcurrent.appendChild(node);

            var popup=document.createElement("h1");
            popup.setAttribute("class", "tooltiptextm");
            newcurrent.appendChild(popup);

            var hovertext=document.createTextNode(defslist[allwordsforindex.indexOf(yourmalewords[i])]);
            popup.appendChild(hovertext);

            var brek=document.createElement("br");
            element.appendChild(brek);

          }

          document.removeEventListener("keydown", keyDownHandler)
        }
      }
      else if(e.keyCode == 77) {
        yourmalewords.push(allwords[x]);
        if (x<34) {
          x=x+1;
          document.getElementById("theword").innerHTML=allwords[x];
      }
        else{
          document.getElementById("gameContainer").style.display = 'none';
          document.getElementById("printedwordstable").style.display= 'block';

          for (i=0; i<yourfemalewords.length; i++){

            var element=document.getElementById("fwords");

            var newcurrent=document.createElement("h1");
            newcurrent.setAttribute("class", "tooltipf");
            element.appendChild(newcurrent);

            var node=document.createTextNode(yourfemalewords[i]);
            newcurrent.appendChild(node);

            var popup=document.createElement("h1");
            popup.setAttribute("class", "tooltiptextf");
            newcurrent.appendChild(popup);

            var hovertext=document.createTextNode(defslist[allwordsforindex.indexOf(yourfemalewords[i])]);
            popup.appendChild(hovertext);

            var brek=document.createElement("br");
            element.appendChild(brek);
          }

          for (i=0; i<yourmalewords.length; i++){

            var element=document.getElementById("mwords");

            var newcurrent=document.createElement("h1");
            newcurrent.setAttribute("class", "tooltipm");
            element.appendChild(newcurrent);

            var node=document.createTextNode(yourmalewords[i]);
            newcurrent.appendChild(node);

            var popup=document.createElement("h1");
            popup.setAttribute("class", "tooltiptextm");
            newcurrent.appendChild(popup);

            var hovertext=document.createTextNode(defslist[allwordsforindex.indexOf(yourmalewords[i])]);
            popup.appendChild(hovertext);

            var brek=document.createElement("br");
            element.appendChild(brek);

          }

          document.removeEventListener("keydown", keyDownHandler)
        }
      }
  }


  function display() {
    var x = document.getElementById("gameContainer");
    x.style.display = 'block';
  }

  function button() {
  document.getElementById("startgamebutton").style.display = 'none';
  document.getElementById("gameheader").style.display = 'none';
  document.getElementById("gameinstructions").style.display = 'none';
  display();
  shuffle(allwords);
  x=printwords();
  document.addEventListener("keydown", keyDownHandler);
  }


  document.getElementById("printedwordstable").style.display= 'none';
  document.getElementById("gameContainer").style.display = 'none';
