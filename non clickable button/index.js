const button=document.querySelector('button')
document.addEventListener('mousemove',(Event)=>{
    const mx=Event.clientX;
    const my=Event.clientY; 
    const rect =button.getClientRects()[0]
    const bx=rect.x
    const by=rect.y
    if(mx>bx-20&&my>by-20 &&mx<(bx+rect.width)+20&&my<(by+rect.height)+20){
        movebutton()
    }

})

function movebutton(){
    const h=document.body.clientHeight
    const w=document.body.clientWidth
const brect=button.getClientRects()[0];
    button.style.top=Math.abs((h*Math.random())-brect.height)+"px"
    button.style.left=Math.abs((w*Math.random())-brect.width)+"px"
}
