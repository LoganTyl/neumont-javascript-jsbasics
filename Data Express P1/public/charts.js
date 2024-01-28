let url = 'http://localhost:3000/api';
let results;

const create_chart = (name, data) =>{
    const canvas = document.getElementById(name);
    ctx = canvas.getContext("2d");
    let answers = data['answers']; 
    let total = 0
    for(let i = 0; i < answers.length; i++){
        total += answers[i][1];
    }
    let start = 0;
    let end = 0;
    let slice_color;
    for(let i = 0; i < answers.length; i++){
        start = end;
        end = start + 2*Math.PI * answers[i][1] / total;
        if(i == 0){slice_color = '#d1674f';}
        if(i == 1){slice_color = '#78B31E';}
        if(i == 2){slice_color = '#25D1FF';}
        if(i == 3){slice_color = '#ebcd59';}
        ctx.fillStyle = slice_color
        ctx.beginPath();
        ctx.moveTo(canvas.clientWidth/2,canvas.clientHeight/2-40);
        ctx.arc(canvas.clientWidth/2,canvas.clientHeight/2-40,225/2,start,end)
        ctx.closePath();
        ctx.fill();
        ctx.fillRect(10,canvas.clientHeight-(40+i*20),18,18);
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial'
        ctx.fillText(answers[i][0],30,canvas.clientHeight-(25+i*20));
        
        //The first quadrant will be 0 - PI / 2 where x = large+, y = large+
        //Second quadrant PI / 2 - PI where x = small-, y = large+
        //Third quadrant PI - 3/2 * PI where x = small-, y = small-
        //Last quadrant 3/2 * PI - 2 * PI where x = large+, y = small-
        let x
        let y
        let base = (start + end) / 2
        if(base < ((Math.PI*2)/4)*3 && base > ((Math.PI*2)/4)){
            x = (canvas.clientWidth-20)/3 + 112 * Math.cos(base)
        } else{
            x = canvas.clientWidth/2 + 112 * Math.cos(base)
        }
        if(base <= Math.PI){
            y = (canvas.clientHeight+40)/2-40 + 112 * Math.sin((base))
        }else{
            y = canvas.clientHeight/2-45 + 112 * Math.sin((base))         
        }
        if(answers[i][1] > 0){
            ctx.fillText((answers[i][1]/total * 100).toFixed(2) + "%",x,y);
        }
    }
    ctx.textAlign = 'center';
    ctx.font = '20px Arial'
    ctx.fillText(data['question'],canvas.clientWidth/2,30); 
    
    ctx.fillStyle = '#eee'
    ctx.beginPath();
    ctx.arc(canvas.clientWidth/2,canvas.clientHeight/2-40,240/4,0,2*Math.PI)
    ctx.fill();
    
    
}

fetch(url)
.then(response => response.json())
.then(promise_data =>{
    results = promise_data['results']
    for(let i = 0; i < results.length; i++){
        create_chart("chart"+i,results[i]);
    }
});
