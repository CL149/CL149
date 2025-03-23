loadText=(data)=>{
    console.log(data)
    passage=[
        [
            "This is passage 1"
        ],[
            "This is passage 2"
        ],[
            "This is passage 3"
        ]
    ]
    
    id=0
    document.getElementById("groupNo").value=data
    for(message of passage[data]){
        words=document.createElement("p")
        words.setAttribute("id","p"+id.toString())
        words.innerHTML=message
        document.getElementById("Texts").appendChild(words)
    }
    main()
}

getText=()=>{
    let url="https://script.google.com/macros/s/AKfycbwaSOcW5s2gAz1C0gCG-GrbuUvTHekoSHNQ7_9KhORoE4KF0hbexGsgw4_l4WOaMMzt/exec"
    fetch(url,{
        method:"GET"
    })
    .then(r=>r.text())
    .then(data=>loadText(data))
}

main=()=>{
    Lengths=[]
    paragraphs=document.getElementsByTagName("p")
    for(i=0;i<paragraphs.length;i++){
        Lengths.push(paragraphs.item(i).innerText.valueOf().split(" ").length)
    }
    read=[]
    const currentTime=new Date()
    const checktime=new Date()
    checktime.setSeconds(currentTime.getSeconds()+Lengths[0]/5)
    currentHeight=0
    
    progressBar=()=>{
        consent=document.getElementById("Texts")
        progress_bar=document.getElementById("progress")
        position=consent.scrollTop
        total=consent.scrollHeight-window.innerHeight
        progress=(position/total*100).toString()+"%"
        progress_bar.style.width=progress
    }
    
    
    checkDuration=()=>{
        speed =300
        
        const currentTime=new Date()
        consent=document.getElementById("Texts")
        position=consent.scrollTop
        if(position>=(currentHeight-window.innerHeight+paragraphs.item(read.length).scrollHeight) && position<=currentHeight+paragraphs.item(read.length).scrollHeight){
            if (currentTime>checktime){
                currentHeight+=paragraphs.item(read.length).scrollHeight
                // paragraphs.item(read.length).style.color="blue"
                read.push(true)
                console.log("Next")
                checktime.setSeconds(currentTime.getSeconds()+Lengths[read.length]*60/speed)
            }
        }
        else{
            checktime.setSeconds(currentTime.getSeconds()+Lengths[read.length]*60/speed)
        }
    }
    
    checkEligibility=()=>{
        read.length==Lengths.length? location.href="../CL149/recollection?groupNo="+document.getElementById("groupNo").value:alert("Please read the passage carefully")
    }
    
    setInterval(checkDuration,10)
}
getText()