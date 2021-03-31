import React from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import './skills.css';



export function Invoker2(props){
  return(
<nav>

    <h1 style = {{marginBlockStart: 70}}>{props.name}</h1>
    <img style= {{height:150}} src = {props.img}></img>



<div className = 'skills' >



      <TouchableOpacity onPress = {()=>{ return alert(props.skill1)}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src = {props.img1}></img> 
       <Text style = {{color:'#fff'}}>  {props.skillname1}</Text>
          </div>
          </TouchableOpacity>  
         
      <TouchableOpacity onPress = {()=>{ return alert(props.skill2)}}>
          <div className = 'blink' > 
      <img style = {{width: 105, height:105}} src = {props.img2}></img> 
       <Text style = {{color:'#fff'}}>  {props.skillname2}</Text>
          </div>
          </TouchableOpacity> 
          
      <TouchableOpacity onPress = {()=>{ return alert(props.skill3)}}>
          <div className = 'conterSpell' > 
      <img style = {{width: 105, height:105}} src = {props.img3}></img> 
       <Text style = {{color:'#fff'}}>  {props.skillname3}</Text>
          </div>
          </TouchableOpacity> 
          
      <TouchableOpacity onPress = {()=>{ return alert(props.skill4)}}>
          <div className = 'ultimate' > 
      <img style = {{width: 105, height:105}} src = {props.img4}></img> 
       <Text style = {{color:'#fff'}}>  {props.skillname4}</Text>
          </div>
          </TouchableOpacity> 

          </div>



          <TouchableOpacity onPress = {()=>{alert(props.aganimScepter)}}>
<div className = 'AganimScepter'>
  
  <img  style = {{width: 70}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/ultimate_scepter_lg.png'/> <Text style = {{color: '#fff'}}> Aganim's Scepter</Text> 
  </div>
  </TouchableOpacity>


<TouchableOpacity onPress = {()=>{alert(props.aganimShard)}}>
<div className = 'AganimShard'>
  
  <img  style = {{width: 70}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/aghanims_shard_lg.png?3'/> <Text style = {{color: '#fff'}}> Aganim's Shard</Text> 
  </div>
  </TouchableOpacity>




  <div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> alert(props.item_Early[0])}>
<img  style = {{width: 86}} className = 'early' order = '1' src = {props.item_Early_img[0]}/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert(props.item_Early[1])}}>
<img   style = {{width: 86}}  className = 'early' src = {props.item_Early_img[1]}/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Early[2])}}>
<img   style = {{width: 86}} className = 'early' src = {props.item_Early_img[2]}/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Early[3])}}>
<img  style = {{width: 86}} className = 'early' src = {props.item_Early_img[3]}/>
</TouchableOpacity>

  <text className = 'earlyText'> Early game </text> {props.empptyPlace1.map((el)=>{return(el)})}
  


  {/* <TouchableOpacity className = 'early' order = '1' onPress = {()=> alert(props.item_Mid[0])}>
<img  style = {{width: 86}} className = 'early' order = '1' src = {props.item_Mid_img[0]}/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert(props.item_Mid[1])}}>
<img   style = {{width: 86}}  className = 'early' src = {props.item_Mid_img[1]}/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Mid[2])}}>
<img   style = {{width: 86}} className = 'early' src = {props.item_Mid_img[2]}/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Mid[3])}}>
<img  style = {{width: 86}} className = 'early' src = {props.item_Mid_img[3]}/>
</TouchableOpacity> */}
     
     {props.item_Mid_img.map((el)=>{return(<View> <TouchableOpacity style = {{marginBlockStart:20}}  onPress = {()=> {alert(props.item_Mid[props.item_Mid_img.indexOf(el)])}}> <img style = {{width: 86}} src = {el}></img></TouchableOpacity></View>)})}
   <text className = 'midText'> Mid game </text>  {props.empptyPlace2.map((el)=>{return(el)})}



   {/* <TouchableOpacity className = 'early' order = '1' onPress = {()=> alert(props.item_Late[0])}>
<img  style = {{width: 86}} className = 'early' order = '1' src = {props.item_Mid_img[0]}/>    
  </TouchableOpacity>
  <TouchableOpacity className = 'early' onPress = {()=>{alert(props.item_Late[1])}}>
<img   style = {{width: 86}}  className = 'early' src = {props.item_Mid_img[1]}/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Late[2])}}>
<img   style = {{width: 86}} className = 'early' src = {props.item_Mid_img[2]}/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert(props.item_Late[3])}}>
<img  style = {{width: 86}} className = 'early' src = {props.item_Late_img[3]}/>
</TouchableOpacity> */}

{props.item_Late_img.map((el)=>{return(<View> <TouchableOpacity style = {{marginBlockStart:20}}  onPress = {()=> alert(props.item_Late[props.item_Late_img.indexOf(el)])}> <img style = {{width: 86}} src = {el}></img></TouchableOpacity></View>)})}
    <text className = 'lateText'> Late game</text> 
    </div>

<div className = 'others'>
  {/* <TouchableOpacity order = '1' onPress = {()=> {alert('Monkey King Bar\nЦена: 4,850\n+ 42 к урону\n+ 35 к скорости атаки\nПассивная: Pierce\nКаждая атака может с вероятностью в 75% пройти сквозь уклонение и нанести 100 дополнительного магического урона.\nМогущественный посох, принадлежавший блистательному воину.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/monkey_king_bar_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/black_king_bar_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Assault Cuirass\nЦена: 5,075\n+ 30 к скорости атаки\n+ 10 к броне\nПассивная: Assault Aura\nУвеличивает броню союзных построек и существ на 5, а их скорость атаки — на 30. Снижает броню врагов на -5.\nРадиус: 1200\nЭтот жуткий доспех, выкованный в кузнях нижних пределов, способен укрепить и ускорить целую армию.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/assault_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Satanic\nЦена: 5,800\n+ 25 к силе\n+ 25 к урону\n+ 30% к сопротивлению эффектам\nАктивируемая: Unholy Rage\nУвеличивает эффект вампиризма до 200% на 5.0 сек.\nПассивная: Lifesteal\nКаждая атака восстанавливает владельцу здоровье в размере 25% от нанесённого урона.\nКулдаун: 35\nЭффект можно развеять.\nКолоссальная сила в обмен на вашу душу.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/satanic_lg.png?3'/>    
  </TouchableOpacity>
  <TouchableOpacity order = '1' onPress = {()=> {alert('Butterfly\nЦена: 5,275\n+ 30 к ловкости\n+ 35% к уклонению\n+ 30 к скорости атаки\n+ 25 к урону\nСкладывается по закону убывающей полезности с другими источниками уклонения.\nЭтот клинок могут обуздать лишь самые могучие и опытные воины, но владельцу он даёт невероятное проворство в бою.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/butterfly_lg.png?3'/>    
  </TouchableOpacity> */}
  {props.item_Late_img.map((el)=>{return(<View> <TouchableOpacity style = {{marginBlockStart:20}}  onPress = {()=> alert(props.item_Others[props.item_Others_img.indexOf(el)])}> <img style = {{width: 86}} src = {el}></img></TouchableOpacity></View>)})}
  <text className = 'otherText'> Other</text>
    </div>

 <div className = 'Talents'>
          <TouchableOpacity onPress = {()=> {alert(props.talents)}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

<div className='stats'>
  <img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 200}} src = 'https://ru.dotabuff.com/assets/hero_str-eac64b6191e66b593d7f1ac81bb262afed6565794d8f9014d66b0cbc99fa3d01.png'></img>
 <img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 200}} src = 'https://ru.dotabuff.com/assets/hero_agi-693306f455235ff5628c3429a80f2dc7e7795c013c540832dbba61ab691a73b5.png'></img>
 <img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 200}} src = 'https://ru.dotabuff.com/assets/hero_int-76ea2af3bdf60a1c92d82a1fc0845d47a071cfacfca111aa2d5e43fbae01b580.png'></img>
     <Text style = {{color: '#fff', marginLeft: 200}}>{props.сила}</Text>
     <Text style = {{color: '#fff', marginLeft: 200}}>{props.agility}</Text>
     <Text style = {{color: '#fff', marginLeft: 200}}>{props.intelect}</Text>
     <Text style = {{color: '#fff', fontSize: 15}}><br/> Скорость передвижения	 {props.stats1}<br/> Поле зрения	 {props.stats2}<br/> Броня	 {props.stats3}<br/> Базовое время атаки	 {props.stats4}<br/> Урон	 {props.stats5}<br/> Замах на атаку 	{props.stats6}</Text>
    </div>

<div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src= {props.img1}/> 
     {/* <div className= 'block1'>1</div>    <div className= 'block1'> </div>    <div className= 'block1'>3</div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>    */}
     {props.skillPoint1.map((el)=>{return(<View>  <div className= 'block1'>{el}</div> </View>)})}
    <img style={{width:80,  marginBlockStart: 15}} src={props.img2} />
     {props.skillPoint2.map((el)=>{return(<View>  <div className= 'block1'>{el}</div> </View>)})}
    <img style={{width:80,  marginBlockStart: 15}} src = {props.img3}/>
    {props.skillPoint3.map((el)=>{return(<View>  <div className= 'block1'>{el}</div> </View>)})}
    <img style={{width:80,  marginBlockStart: 15}} src = {props.img4}/>
     {props.skillPoint4.map((el)=>{return(<View>  <div className= 'block1'>{el}</div> </View>)})}
    <img style={{width:80, height:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>

</nav>
  );
};