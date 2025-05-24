const svg =document.getElementById('chart')
const data=[130,40,60,23,18,33]
const lbl = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const barWidth=40
const spacing=80
const chartHeight=80
const offsetX=60
const offsetY=250
//yaxis 
const yAxis=document.createElementNS('http://www.w3.org/2000/svg','line')
yAxis.setAttribute('x1',offsetX)
yAxis.setAttribute('y1','30')
yAxis.setAttribute('x2',offsetX)
yAxis.setAttribute('y2',offsetY)
yAxis.setAttribute('stroke','black')
svg.appendChild(yAxis)


// Xaxis

const xAxis=document.createElementNS('http://www.w3.org/2000/svg','line')
xAxis.setAttribute('x1',offsetX)
xAxis.setAttribute('y1',offsetY)
xAxis.setAttribute('x2',offsetX+250)
xAxis.setAttribute('y2',offsetY)
xAxis.setAttribute('stroke','black')
svg.appendChild(xAxis)


// draw bars

 data.forEach((value, i) => {
  const height = value;
  const x = offsetX + i * spacing + 10;
  const y = offsetY - height;

  // Create bar
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', x);
  rect.setAttribute('y', y);
  rect.setAttribute('width', barWidth);
  rect.setAttribute('height', height);
  rect.setAttribute('fill', 'teal');
  svg.appendChild(rect);

  // Add label under bar
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', x + barWidth / 2);
  text.setAttribute('y', offsetY + 15);
  text.setAttribute('font-size', '12');
  text.setAttribute('text-anchor', 'middle');
  text.textContent = labels[i];
  svg.appendChild(text);
});
