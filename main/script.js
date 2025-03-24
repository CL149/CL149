session1Time=new Date()
session2Time=new Date()
session3Time=new Date()

loadText=(data,language)=>{
    console.log(data)
    passage=[
        [
            ["Self-transcendence (Benevolence and Universalism) values are among the most important to most people in most societies. They play a critical role in endorsing social harmony and predicting pro-social behaviors. Studies have indicated that benevolence values are positively associated with prosocial behaviors such as helping others, voicing constructive suggestions, donating money, volunteering, and demonstrating social sensitivity. Universalism values refer to fairness, associating with awareness concerning moral dilemmas and expressing readiness for social contact with out-group members. Consider, for instance, a scenario within a work team where a member decides whether to report a colleague's inappropriate behavior to a supervisor. Suppose this individual possesses a robust ethical framework characterized by benevolence and universalism. In that case, they are more inclined to consider the potential ramifications of such a decision on the colleague's professional trajectory and psychological welfare. This internal conflict between professional ethics and interpersonal allegiance exhibits a disposition that balances prosocial concern with a commitment to equitable principles. Moreover, they were further found to be related to having a “calling” orientation toward work and job performance for employees with strong prosocial values; they are more willing to invest time and energy in performing effectively. Employees with strong prosocial values care about doing work that positively impacts others. "],
            ["在社會中擁有自我超越的價值觀及特質, (例如仁慈和公正) 對自身以及群體來說都是非常重要的，這些價值觀在促進社會和諧和利他行為方面發揮著關鍵作用。研究表明，仁慈及公正的價值觀與親社會行為呈正比，越重視仁慈及公正的人越容易幫助他人、提出建設性建議、捐款和參加志願服。此外，重視這些價值觀的人並多會表現出對社會議題的敏感性、對道德困境的認識，以及較尊重及包容不同文化及不同群體成員。例如在一個工作團隊中，當成員可能需要決定是否向上級報告同事的不當行為時，如果該成員擁有強烈的仁慈和公正的價值觀，他們更可能會額外考慮到這一舉動對同事的職業生涯及心理健康的影響，從而在道德責任和對同事的忠誠之間掙扎示，展出關懷他人同時重視公正的特質。這類人除了更易受到他人喜愛外，研究進一步發現，這些價值觀與「使命感」、積極的工作態度及良好工作表現有關，他們更願意投入時間和精力以有效地執行工作，也會關心能否從事對他人產生積極影響的工作(例如社工及教師)，同時也較容易在這些領域取得成就。 "]
        ],[
            ["Self-enhancement values emphasize the pursuit of self-interest by focusing on gaining control over people and resources (power), demonstrating ambition and competence according to social standards, and attaining success (achievement). Although it might motivate unethical conduct due to their emphasis on promoting the self at the expense of others, such behaviors may include lying (dishonesty), deceit, and cheating. Yet, an individual who endorses self-enhancement values will also consider it important to do better than others, be in charge, demonstrate their abilities, lead, and be influential. ",
            "The unethicality might be regarded as a small cost for later success. For example, some students might cheat on exams to obtain higher grades. In the pursuit of profit, some might choose to deliberately ignore environmental regulations, thereby causing damage to the environment. These behaviors indicate that they prioritize short-term gains over ethical standards. Research has shown that self-enhancement values are linked to important outcomes in various societal domains, such as voting preferences, environmental and behavioral intentions, ethical decision-making in organizations, and attitudes toward new technological developments. Self-enhancement values also have distinct effects on school achievement. Students reported gaining higher scores at self-enhancement values tended to achieve better academic outcomes."],
            ["自我增強的價值觀 (重視權力及成就) 強調通過控制他人及資源、展示野心和能力以獲取權力，以此達成目標。這些價值觀會以犧牲他人為代價來促進自我，從而誘發不道德的行為，例如包括撒謊、作弊及欺騙等。然而，重視自我增強的人也會認為超越他人、掌控局面、具有影響力是重要的特質。過程中的不道德的行為會被視為成功所需支付的代價。例如，某些學生可能會在考試中作弊，以考取更高的成績。在追求利潤時，可能會選擇刻意忽視環保規範，進而對環境造成損害。這些行為顯示比起道德規範他們更重視短期利益。 ",
            "雖然有可能誘發不道德行為。但據研究顯示，自我增強的價值觀更能促使各個社會領域發展。例如熱心參與政治活動，推動社會變革、在組織中追求創新和效率，造出果斷及大膽的決策，從而提高整體工作表現和團隊合作，同時更能在商業以及金融行業取得成功。此外，自我增強的價值觀對學術成就也有明顯的影響。報告顯示，擁有較高自我增強價值觀的人往往會取得更好的學業成績，他們更有動力在學業上設立高目標及參與課外活動、追求多方面的卓越成就及全面發展。這些學生也更常在學校中擔任領導角色，激勵同儕共同進步，創造積極的學習環境 。"]
        ],[
            ["Values are abstract goals that serve as guiding principles in people’s lives and represent people’s conceptualizations of what is good and desirable. In several important ways, it is viewed as a central aspect of the self-concept, distinct from other stable personal attributes, such as traits, needs, motives, and attitudes. Since values are close to the ideal self, individuals are not motivated to perceive values as mutable to avoid internal conflict. Thus, people believe that their values are stable and that they have little power to change them, even if they wish to do so. However, Value change is still possible. Few studies documented a shift in value priorities following a significant life event that could trigger one or more of these mechanisms (e.g., immigration). They may find that their views on family and social responsibility change. The new environment's cultural and social values can influence their thinking and behavior. For instance, someone who valued individual success before immigrating might begin to value social responsibility and teamwork after seeing the value of community cooperation and collective effort in the new environment.  Cross-sectional research comparing age groups has also shown mean-level value change across the lifespan. Young people may focus more on freedom and adventure, pursuing new experiences. As they age, they may start to value stability and family, which may prompt them to emphasize education and family values more. "],
            ["價值觀主導人們的原則及對事物的標準，代表了他們對「好」及「不好」的看法同時也代表著個人喜好。價值觀在自我概念中同樣扮演著重要角色，與性格和態度有所不同，價值觀關係著理想的自我，想成為怎樣的人。因此人們通常不太認為自己的價值觀會改變。他們相信自己的價值觀是穩定的，即使有時希望改變，也覺得自己幾乎無法做到。 ",
            "然而，價值觀的改變是有可能的。例如，當人們經歷重大生活事件時，例如移民到另一個國家，他們可能會發現自己對於家庭、社會責任的看法發生變化。新環境中的文化和社會價值觀可能會影響他們的思維方式和行為。例如可能在移民前時重視個人成功，但在新環境中，看到社區合作和集體努力的價值後，可能會開始重視社會責任和團隊合作。", 
            "此外，年齡的增長也會影響人們的價值觀。年輕人可能更加注重自由和冒險，追求新體驗。而隨著年齡的增長，他們可能會開始重視穩定性和家庭，這可能會促使他們將教育和家庭價值放在更重要的位置。這種變化不僅反映了個體生活階段的不同，還顯示了人們在面對不同的生活時，價值觀如何發生轉變。" ,
            "總的來說，雖然人們通常認為自己的價值觀是穩定的，但生活中的重大轉變和年齡的增長都可能促使他們重新思考和調整自己的價值觀。這種靈活性使得人們能夠適應不斷變化的環境，並在不同的生活階段找到新的意義和方向。 "]
        ]
    ]
    
    id=0
    document.getElementById("groupNo").value=data
    document.querySelector("h1").style.display="flex"
    for(message of passage[data][language]){
        words=document.createElement("p")
        words.setAttribute("id","p"+id.toString())
        words.innerHTML=message
        document.getElementById("Texts").appendChild(words)
    }
    main(language)
}

getText=(language)=>{
    document.getElementById("language").style.display="none"
    document.getElementById("nextSession").style.display="block"
    let url="https://script.google.com/macros/s/AKfycbwaSOcW5s2gAz1C0gCG-GrbuUvTHekoSHNQ7_9KhORoE4KF0hbexGsgw4_l4WOaMMzt/exec"
    fetch(url,{
        method:"GET"
    })
    .then(r=>r.text())
    .then(data=>loadText(data,language))
}

main=(language)=>{
    const startTime=new Date()
    read=false
    const currentTime=new Date()
    const checktime=new Date()
    // checktime.setSeconds(currentTime.getSeconds()+30)
    console.log(checktime)
    currentHeight=0    
    
    checkEligibility=()=>{
        const currentTime=new Date()
        consent=document.getElementById("Texts")
        if (currentTime>checktime){
            session1Time=startTime
            session2Time=new Date()
            nextSession1(language)
        }
        else{
            alert("Please read the passage carefully")
        }
    }
}

nextSession1=(language)=>{
    document.getElementById('session 1').style.display="none"
    document.getElementById('session 2').style.display="block"
    
    selections=[
        [["Offering advice to others (e.g., personal, academic, occupational)","Providing emotional or physical support to others","Giving gifts to others","Donate money to any charity","Engaging in volunteering activities"],
        ["向他人提供建議 (例如:個人生活, 學業, 工作)","向他人提供情感或物質上的支持","贈送禮物予他人","曾經捐贈給慈善機構 ","自發性參與志願活動 "]],
        [["Be late on purpose without reasonable explanation","Lies to get away from troubles or any other personal reason ","Ever cheated on a quiz or an examination","Breaking the rule for own goods (e.g., cutting line) ","Committed petty crime (e.g., jaywalking, throwing rubbish)"],
        ["無重大理由故意遲到","說謊以擺脫困境或其他個人理由","曾經在小考或考試中作弊","為自身利益違反規則（例如：插隊）","犯輕微罪行（例如：亂穿馬路、亂丟垃圾）"]],
        [["Encountering major life events (e.g., relationship breakdown; losing family members)","Rapid changing of the social environment (e.g., studying overseas)","Fitting and adapting to different clubs, teams or groups","Receive persuasion on certain values (e.g., Religion; Disciplinary forces)","Going through different stages of life"],
        ["遭遇重大人生事件（例如結束長期關係、喪親）","激烈的社交環境變化（例如：進入大學、出國留學）","加入及適應不同的群體及社團","被灌輸並接受特定的價值觀 (例如: 宗教信仰、紀律部隊訓練)","經歷及適應不同的人生階段"]]
    ]

    id=0
    for(message of selections[document.getElementById('groupNo').value][language]){
        div=document.createElement("div")
        selection=document.createElement("input")
        selection.setAttribute("type","checkbox")
        selection.setAttribute("id","s"+id.toString())
        selection.setAttribute("style","display:flex;")
        div.appendChild(selection)
        words=document.createElement("span")
        words.innerHTML=message
        div.appendChild(words)
        document.getElementById("selections").appendChild(div)
        id++
    }
}

checkDuration=()=>{
    const checktime=new Date()
    checktime.setTime(session2Time)
    // checktime.setSeconds(checktime.getSeconds()+10)
    const currentTime=new Date()
    consent=document.getElementById("Texts")
    if (currentTime>checktime){
        session3Time=new Date()
        nextSession2()
    }
    else{
        alert("Please select wisely.")
    }
}

nextSession2=()=>{
    choices=document.getElementById("session 2").querySelectorAll("input")
    answer=[]
    for(choice of choices){
        answer.push(choice.checked)
    }
    console.log(answer)
    document.querySelector('body').style.overflow="hidden"
    document.getElementById('session 2').style.display="none"
    document.getElementById('session 3').style.display="block"
    sign=document.getElementById("signature")
    ctx=sign.getContext("2d")
    optimized=document.getElementById("optimized")
    octx=optimized.getContext("2d")

    sign.width=window.innerWidth*0.97
    sign.height=window.innerHeight*0.7

    initials=document.getElementById("name")

    ctx.lineWidth=3;
    ctx.lineJoin=ctx.lineCap='round'
    ctx.fillStyle="#ddd"
    ctx.strokeStyle='#ddd'
    visual=ctx.createImageData(sign.width,sign.height)

    stats=false

    del=()=>{
        ctx.clearRect(0,0,sign.width,sign.height)
        image = new Image()
    }

    sign.addEventListener("mousedown",(event)=>{
        stats=true;
        mouse={"x":event.clientX-event.target.getBoundingClientRect().x,"y":event.clientY-event.target.getBoundingClientRect().y}
        ctx.fillRect(mouse["x"],mouse["y"],3,3)
        ctx.beginPath();
        ctx.moveTo(mouse["x"],mouse["y"])
    })

    sign.addEventListener("mousemove",(event)=>{
        if(!stats) {return}
        
        mouse={"x":event.clientX-event.target.getBoundingClientRect().x,"y":event.clientY-event.target.getBoundingClientRect().y}
        ctx.lineTo(mouse["x"],mouse["y"])
        ctx.stroke()
    })

    sign.addEventListener("mouseup",()=>{
        stats=false
        image = new Image()
        image.src=sign.toDataURL('image/png')
    })


    sign.addEventListener("touchstart",(event)=>{
        mouse={"x":event.changedTouches[0].pageX-event.target.getBoundingClientRect().x,"y":event.changedTouches[0].pageY-event.target.getBoundingClientRect().y}
        ctx.beginPath();
        ctx.moveTo(mouse["x"],mouse["y"])
    })

    sign.addEventListener("touchmove",(event)=>{
        mouse={"x":event.changedTouches[0].pageX-event.target.getBoundingClientRect().x,"y":event.changedTouches[0].pageY-event.target.getBoundingClientRect().y}
        ctx.lineTo(mouse["x"],mouse["y"])
        ctx.stroke()
    })

    sign.addEventListener("touchend",()=>{
        image = new Image()
        image.src=sign.toDataURL('image/png')
    })

    save=()=>{
        try{image}catch{
            alert("Please sign on the designated area!")
        }
        octx.clearRect(0,0,optimized.width,optimized.height)
        octx.drawImage(image,0,0,optimized.width,optimized.height)
        visual = octx.getImageData(0,0,optimized.width,optimized.height).data
        visual=check_location(visual)
        console.log(visual)
        if (visual.length>20){
            let url="https://script.google.com/macros/s/AKfycbwon7d1JmN-MPshpgAzfW0fY_sgNyyXdVe1NEM5e-lQ2pRHDOBDSH0sTvdCgmawa3T6tg/exec"
            let spt= image.src.split("base64,")
            let obj={
                base64:spt[1],
                type:spt[0],
                name:initials.value+" ("+document.getElementById('groupNo').value+") "+new Date().toString(),
                initial:initials.value,
                group:document.getElementById('groupNo').value,
                time1:session1Time.toString(),
                time2:session2Time.toString(),
                time3:session3Time.toString(),
                response1:answer[0],
                response2:answer[1],
                response3:answer[2],
                response4:answer[3],
                response5:answer[4]
            }
            fetch(url,{
                method:"POST",
                body:JSON.stringify(obj)
            })
            .then(r=>r.text())
            .then(data=>test(data))
        }
        else{alert("Please sign on the designated area!")}
    }

    check_location=(imageData)=>{
        l=0
        data=[]
        white=false
        for(i=0;i<imageData.length;i+=4){
            if ((imageData[i]==0 && white) || (imageData[i]!=0 && !white)){
                data.push(l)
                white=!white
                l=0
            }
            else{
                l++
            }
        }
        data.push(l)
        return data
    }

    success=()=>{
        console.log(visual.length)
    }

    test=(reply)=>{
        {
            if (reply=="image uploaded"){
                location.href=""
            }
            else{
                alert("Failed to upload data, please do again later.")
            }
        console.log(initials.value+" ("+document.getElementById('groupNo').value+") "+new Date().toString())
        }
    }
}