 

const svg =document.getElementById('chart')
const data=[300,100,70,90,234,12]

//set spacing betwen the point 
const spacing=80
const maxheight=200
const offsety=100
//lets conver data to svg points
let points =""
data.forEach((value,index)=>{
    const x=index*spacing
    const y= maxheight-value+offsety
    points += `${x},${y} `
})

//draw my line 

const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
polyline.setAttribute("points",points.trim())
polyline.setAttribute("fill","none")
polyline.setAttribute("stroke","red")
polyline.setAttribute("stroke-width","2")
svg.appendChild(polyline)



 data.forEach((value, i) => {
  const x = i * spacing;
  const y = maxheight - value + offsety;
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", "15");
  circle.setAttribute("fill", "red");
  svg.appendChild(circle);
});


 
 

const axisStyle={
  stroke:'black',
  'stroke-width':'2'
}

//Y axis (vertical)
const yAxis=document.createElementNS('http://www.w3.org/2000/svg', 'line')
yAxis.setAttribute('x1','50')
yAxis.setAttribute('y1','30')
yAxis.setAttribute('x2','50')
yAxis.setAttribute('y2','250')
Object.entries(axisStyle).forEach(([Key,value])=>{
  yAxis.setAttribute(Key,value)
})

svg.appendChild(yAxis)
//x axis horisontal

const xAxis=document.createElementNS('http://www.w3.org/2000/svg','line')
xAxis.setAttribute('x1','50')
xAxis.setAttribute('y1','250')
xAxis.setAttribute('x2','550')
xAxis.setAttribute('y2','250')
Object.entries(axisStyle).forEach(([x,t])=>{
  xAxis.setAttribute(x,t)
})


svg.appendChild(xAxis)


 


for (let i=0;i<=200;i+=50){

  const y=250 - i 

  // tickline

  const tick=document.createElementNS('http://www.w3.org/2000/svg','line')
  tick.setAttribute('x1','45')
  tick.setAttribute('y1',y)
  tick.setAttribute('x2','50')
  tick.setAttribute('y2',y)

  tick.setAttribute('stroke','black')
  svg.appendChild(tick)

//text label

const lbl =document.createElementNS('http://www.w3.org/2000/svg','text')
lbl.setAttribute('x','35')
lbl.setAttribute('y',y)
lbl.setAttribute('font-size','10')
lbl.setAttribute('text-anchor','end')
lbl.textContent=i
svg.appendChild(lbl)

}

let myex=['july','may','octobre','xherjay','nari','9wadt','wa3','xher twil','w9','79dt','l3z mti']

for (let i=0;i<550;i+=50){
  const x=i 
//tickline
  const tick=document.createElementNS('http://www.w3.org/2000/svg','line')
  tick.setAttribute('x1',x+50)
  tick.setAttribute('x2',x+50)
  tick.setAttribute('y1','250')
  tick.setAttribute('y2','260')
  tick.setAttribute('stroke','black')
  svg.appendChild(tick)

//text label 

const lbl1=document.createElementNS('http://www.w3.org/2000/svg','text')
lbl1.setAttribute('x',x+50)
lbl1.setAttribute('y','270')
lbl1.setAttribute('font-size','10')
lbl1.setAttribute('text-anchor','end')
lbl1.textContent=myex[i/50]
svg.appendChild(lbl1)





}