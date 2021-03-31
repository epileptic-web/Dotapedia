import React, { useReducer, useState } from 'react';
import { Button } from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import './skills.css';
// import ColorCounter from './Lina';

const ColorCounter = (props) =>{
  return(
<View>
  <Text>  {props.color1}</Text>
    <Button title = {`increase ${props.color1}`} onPress = {props.onIncrease} />
    <Button title = {`decrease ${props.color1}`} onPress = {props.onDecrease} />

</View>
  );
}



const Reducer1 = (state, action) => {
  //state = {red: 0, green: 0, blue: 0}
  //action = {colorChange = 'red' || 'green' || 'blue',  amount: 10 || -10 }
  switch(action.colorChange){
    case 'red': 
    if(state.red + action.amount > 255 || state.red + action.amount < 0){
      return state;
    } else {
    return{...state, red : state.red + action.amount};
    }
     case 'green':
    if(state.green + action.amount > 255 || state.green + action.amount < 0){
    return state;
    } else {
     return{...state, green : state.green + action.amount};
    }
    case 'blue': 
    if(state.blue + action.amount > 255 || state.blue + action.amount < 0){
      return state; 
    }else{
      return{...state, blue : state.blue + action.amount};
    }
    default: return{...state };
  }
}

export  function BloodSeeker() {

  const [state, dispatch] = useReducer(Reducer1, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
 
 
  const CheckColor=(color25, change, stateCOLOR)=>{
  if(25>5 ){
  if(color25 + change > 255 || color25 + change < 0){
    return;
  } else {
     stateCOLOR(color25 + change);
  }
}
}

  return (
    <View>
      <Text style = {{marginBlockStart:50}}></Text>



  <ColorCounter onIncrease = {()=> dispatch({ colorChange: 'red', amount: 10})  }     
    onDecrease = {()=>dispatch({ colorChange: 'red', amount: -10}) } color1 = 'red'       />
  <ColorCounter onIncrease = {()=> dispatch({ colorChange: 'green', amount: 10})}   onDecrease = {()=> dispatch({ colorChange: 'green', amount: -10}) } color1 = 'green' />
  <ColorCounter onIncrease = {()=> dispatch({ colorChange: 'blue', amount: 10})}     onDecrease = {()=> dispatch({ colorChange: 'blue', amount: -10})} color1 = 'blue'     />
   
   <View style = {{width:150, height:150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` , borderBottomColor: '#fff' }} />
   <Text>Red: {red} <br/>Green: {green} <br/>Blue: {blue}</Text>
   </View>
   
   
   
   
    /* <nav >
      
      <h1 className = 'name'> Blood Seeker </h1>
       <img style={{height:150}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/bloodseeker_full.png?v=6299534?v=6299534'/>
<div className = 'skills' >
  
        
          <TouchableOpacity onPress = {()=>{ return (alert('СПОСОБНОСТЬ:Unit Target\nДЕЙСТВУЕТ: Allied Heroes\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nПробуждает в существе жажду крови, из-за которой оно атакует быстрее и наносит больше урона заклинаниями, но каждую секунду теряет долю от своего здоровья. Даёт союзным героям половину от скорости атаки.\nЭту способность можно применить на себя или на вражеских существ.\nДЛИТЕЛЬНОСТЬ: 8.0\nДОП. СКОРОСТЬ АТАКИ: 50 / 80 / 110 / 140\nДОП. УРОН ОТ ЗАКЛИНАНИЙ: 15% / 20% / 25% / 30%\nПОТЕРЯ МАКС. ЗДОРОВЬЯ В СЕКУНДУ: 2.2% / 2.3% / 2.4% / 2.5%\nВремя каста: 0.2s\nКулдаун: 14 / 12 / 10 / 8\nМана: 25\nСтригвир делится с другими своей животной жаждой кровопролития.'))}}>
          <div className = 'MB' > 
      <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/bloodseeker_bloodrage_hp1.png?v=6299534'></img> 
        <Text style = {{color:'#fff'}}>  BLOODRAGE</Text>
          </div>
          </TouchableOpacity>
                     <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Point Target\nУРОН: чистый\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nМОЖНО РАЗВЕЯТЬ: Да\nГерой окропляет выбранную область святой кровью. Через 2.9 сек. ритуал завершается, нанося противникам урон и запрещая им применять способности.\nОБЛАСТЬ ДЕЙСТВИЯ: 600\nДЛИТЕЛЬНОСТЬ БЕЗМОЛВИЯ: 3 / 4 / 5 / 6\nУРОН: 120 / 180 / 240 / 300\nВремя каста: 0.3s\nКулдаун: 12\nМана: 70 / 80 / 90 / 100\nБескожие близнецы всегда готовы помочь тем, кто проливает кровь на поле боя.'); }}>
                     <div className = 'blink'>
                       <img style = {{width: 105, height:105}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/bloodseeker_blood_bath_hp1.png?v=6299534'/>
                     <Text style = {{color:'#fff'}}>  BLOOD RITE</Text>
                     </div>
                     </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Passive\nСКВОЗЬ НЕВОСПР. К МАГИИ: No\nГерой упивается ранениями противников, излечиваясь при убийстве любого вражеского существа. Он также получает дополнительную скорость передвижения, когда здоровье вражеского героя становится меньше 75%. Чем ниже уровень здоровья, тем сильнее эффект. Если здоровье вражеского героя упадёт ниже 25%, его станет видно в любой точке карты, даже если он невидим. Бонусы от разных противников складываются и позволяют превысить максимальную скорость передвижения. Не реагирует на иллюзии.\nМИН. ПОРОГ ЗДОРОВЬЯ: 75%\nМАКС. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ ЗА ГЕРОЯ: 14% / 24% / 34% / 44%\nЛЕЧЕНИЕ ОТ МАКС. ЗДОРОВЬЯ ГЕРОЕВ: 12% / 18% / 24% / 30%\nЛЕЧЕНИЕ ОТ МАКС. ЗДОРОВЬЯ КРИПОВ: 8% / 12% / 16% / 20%\nРАДИУС ПОЛОВИННОГО ЛЕЧЕНИЯ: 300\nПОРОГ ЗДОРОВЬЯ ДЛЯ ВИДИМОСТИ: 25%\nКогда проливается кровь, Стригвира охватывает неистовство.')}}>
    <div className = 'conterSpell'>
       <img style = {{width: 105, height:105}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/bloodseeker_thirst_hp1.png?v=6299534'/>
  <Text style = {{color:'#fff'}}>  THIRST</Text>
  </div>
  </TouchableOpacity >
            <TouchableOpacity onPress = {()=>{ alert('СПОСОБНОСТЬ: Unit Target\nДЕЙСТВУЕТ: Enemy Units\nУРОН: чистый\nСКВОЗЬ НЕВОСПР. К МАГИИ: Yes\nМОЖНО РАЗВЕЯТЬ: Нет\nРазрывает кожу врага. Если цель передвигается, то она получает урон, проходящий сквозь невосприимчивость к магии.\nУлучшение Аганимом: Перезарядка заменяется 2 зарядами. Один заряд восстанавливается каждые 40сек.\nДЛИТЕЛЬНОСТЬ: 10 / 11 / 12\nУРОН ПРИ ПЕРЕДВИЖЕНИИ: 30% / 45% / 60%\nДАЛЬНОСТЬ ПРИМЕНЕНИЯ: 0\nЗАРЯДОВ СО СКИПЕТРОМ: 2\nВРЕМЯ ВОССТАНОВЛЕНИЯ ЗАРЯДА: 40\nВремя каста: 0.4s\nКулдаун: 70\nМана: 200 / 225 / 250\nКогда за тобой охотится Стригвир, любая рана становится смертельной.')}}><div className = 'ultimate'>
       <img style = {{width: 105, height:105}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/bloodseeker_rupture_hp1.png?v=6299534"/>
            <Text style = {{color:'#fff'}}>  RUPTURE</Text>
            </div> </TouchableOpacity>
</div>

<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
   <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg'/>    
  </TouchableOpacity>
  
  <text className = 'earlyText'> Early game </text> <img></img>
  <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Wraith Band\nЦена: 510\n+ 5 к ловкости\n+ 2 к силе\n+ 2 к интеллекту\n+ 5 к скорости атаки\n+ 1.5 к броне\nТиара, от которой доносится лёгкий шёпот.')}}>
     <img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg'/>
     </TouchableOpacity>
  <TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Phase Boots\nЦена: 1,500\n+ 45 к скорости передвижения\n+ 18 к урону (БЛИЖНИЙ БОЙ)\n+ 12 к урону (ДАЛЬНИЙ БОЙ)\n+ 4 к броне\nАктивная: Phase\nУвеличивает скорость передвижения на 20% для героев ближнего боя и на 10% для героев дальнего боя, а также позволяет проходить сквозь существ и поворачиваться быстрее. Действует 3.0 сек.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 8\nБотинки, которые позволяют владельцу путешествовать между слоями реальности.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className = 'mid' onPress = {()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>   
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='mid' onPress={()=>{alert('Radiance\nЦена: 5,150\n+ 60 к урону\nПереключаемая: Burn\nЕсли включена, каждую секунду наносит наносит противникам 60 магического урона и ослепляет их, вынуждая промахиваться в 17% случаев. На иллюзиях наносит 35 магического урона в секунду.\nРадиус: 700\nБожественный меч, окружающий владельца ярким сиянием, которое обращает в пепел всех врагов вокруг.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/radiance-d474b0b33aaa6079a050c6e8bd22791dd2d6e2bd0968ce31c7818cf3328d0231.jpg'/>  
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='mid' onPress={()=>{alert('Yasha\nЦена: 2,050\n+ 16 к ловкости\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nСчитается самым стремительным оружием на свете.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/yasha-c316c68a618d4959e34a821f2e2007263b5f0d0d2dfed29bbc4b540d31622187.jpg'/>    
</TouchableOpacity> 

   <text className = 'midText'> Mid game </text>   <img></img>  
   <TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Aghanims Scepter\nЦена: 4,200\n+ 10 ко всем атрибутам\n+ 175 к здоровью\n+ 175 к мане\nПассивная: Ability Upgrade\nУлучшает ульт и некоторые способности.\nСкипетр колдуна, мощью сходного с полубогами.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/aghanims-scepter-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg'/>       
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Phase Boots\nЦена: 1,500\n+ 45 к скорости передвижения\n+ 18 к урону (БЛИЖНИЙ БОЙ)\n+ 12 к урону (ДАЛЬНИЙ БОЙ)\n+ 4 к броне\nАктивная: Phase\nУвеличивает скорость передвижения на 20% для героев ближнего боя и на 10% для героев дальнего боя, а также позволяет проходить сквозь существ и поворачиваться быстрее. Действует 3.0 сек.\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 8\nБотинки, которые позволяют владельцу путешествовать между слоями реальности.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Radiance\nЦена: 5,150\n+ 60 к урону\nПереключаемая: Burn\nЕсли включена, каждую секунду наносит наносит противникам 60 магического урона и ослепляет их, вынуждая промахиваться в 17% случаев. На иллюзиях наносит 35 магического урона в секунду.\nРадиус: 700\nБожественный меч, окружающий владельца ярким сиянием, которое обращает в пепел всех врагов вокруг.')}}>
<img  className ='late' src= 'https://ru.dotabuff.com/assets/items/radiance-d474b0b33aaa6079a050c6e8bd22791dd2d6e2bd0968ce31c7818cf3328d0231.jpg'/>    
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Manta Style\nЦена: 4,600\n+ 10 к силе\n+ 26 к ловкости\n+ 10 к интеллекту\n+ 12 к скорости атаки\n+ 8% к скорости передвижения\nАктивная: Mirror Image\nСоздаёт 2 иллюзии вашего героя, которые существуют 20 сек.\nИллюзии ближнего боя наносят 33% урона и получают 350% урона.\nИллюзии дальнего боя наносят 28% урона и получают 400% урона.\nУ героев дальнего боя перезаряжается на 15.0 сек. дольше.\nТип развеивания: нормальное\nКулдаун: 45\тМана: 125\nПредмет используется 0.1 сек., во время которой его владелец неуязвим.\nИспользование снимает многие эффекты.\nБонусы к скорости от нескольких предметов на основе Yasha не складываются.\nТопор, созданный из отражающих материалов, которые вызывают смятение во вражеских рядах.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/manta-style-23dd1f7dc982b93e8b7b90ec76fc776fd22d88b94403aecfc4017d37625eea96.jpg'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} className='late' onPress={()=>{alert('Black King Bar\nЦена: 4,050\n+ 10 к силе\n+ 24 к урону\nАктивная: Avatar\nДаёт невосприимчивость к магии. Длительность уменьшается с каждым использованием.\nДлительность: 10.0 / 9.0 / 8.0 / 7.0 / 6.0 / 5.0\nТип развеивания: нормальное\nКулдаун: 70\nПокупка другого Black King Bar не обновит время его действия.\nИспользование Black King Bar снимает некоторые положительные эффекты.\nМощный посох, наделённый силой гигантов.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg'/>      
   </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>


<div className = 'itemsHero'>
  <TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Tango\nЦена: 90 \nСъедает дерево, увеличивая восстановление здоровья на 7.0. Действует 16.0 сек. Если съесть деревце от Iron Branch, то восстановится в два раза больше здоровья. Изначально имеет 3 заряда. Можно применить на союзного героя, чтобы дать ему один Tango.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/tango-daa148575735568e612a4d16bb0055cc20ce83849d14d1aac3c54a05ccb1afb3.jpg'/>    
  </TouchableOpacity>
   <TouchableOpacity className = 'early' onPress = {()=>{alert('Quelling Blade\nЦена: 130\nАктивная: Chop Tree\nУничтожает выбранное дерево.\nДальность применения: 350\nПассивная: Quell\nУвеличивает урон от атак по существам, не являющимися героями, на 15 для героев ближнего боя или на 6 — для дальнего.\nКулдаун: 4\nЭффекты от нескольких копий этого предмета не сочетаются.\nТопор павшего гнома, позволяющий с лёгкостью продираться сквозь лес.')}}>
<img   style = {{width: 86}}  className = 'early' src = 'https://ru.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg'/>    
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Iron Branch\nЦена: 50\n+ 1 ко всем атрибутам\nИспользование: Plant Tree\nСажает в указанное место маленькое счастливое деревце, которое исчезнет через 20 секунд.\nДальность применения: 400\nОбычная, казалось бы, веточка дарует владельцу стойкость железного дерева, с которого она срублена.')}}>
<img   style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg'/> 
</TouchableOpacity>
<TouchableOpacity className = 'early' onPress={()=>{alert('Circlet\nЦена: 155 \n+ 2 ко всем атрибутам\nЭлегантная тиара, предназначенная для человеческих принцесс.')}}>
<img  style = {{width: 86}} className = 'early' src = 'https://ru.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg'/>
</TouchableOpacity>
<TouchableOpacity className = 'early' order = '1' onPress = {()=> {alert('Faerie Fire\nЦена: 70\n+ 2 к урону\nИспользование: Imbue\nМгновенно восстанавливает 85 здоровья.\nКулдаун: 5\nПризрачное пламя с незатухающих останков Древа доброты горит в любом мире.')}}>
<img  style = {{width: 86}} className = 'early' order = '1' src = 'https://ru.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg'/>    
  </TouchableOpacity>
  
  <text className = 'earlyText'> Early game </text> <img></img>
  <TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
  </TouchableOpacity>
  <TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Arcane Boots\nЦена: 1,400\n+ 45 к скорости передвижения\n+ 250 к мане\nАктивная: Replenish Mana\nВосстанавливает 160 маны всем союзникам вокруг.\nРадиус: 1200\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 55\nНе работает на клонах Meepo.\nМагу, что носит эти ботинки, всегда рады в бою.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/arcane-boots-d9f539b66d3cc7b66772e3fbba0c18d0572e64ba2d70bf17fc08627b07ef49fa.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Veil of Discord\nЦена: 1,525\n+ 4 ко всем атрибутам\nАктивная: Magic Weakness\nОслабляет врагов в области радиусом 600, отчего они получают на 18% больше урона от заклинаний.\nДальность применения: 1000\nДлительность: 16.0 сек.\nПассивная: Basilius Aura\nУвеличивает восстановление маны союзников на 1.5.\nРадиус: 1200\nКулдаун: 25\nМана: 50\nЭффект можно развеять.\nГоловной убор испорченных магов.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg'/>   
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>  
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress = {()=>{alert('Pipe of Insight\nЦена: 3,425\n+ 8.5 к восстановлению здоровья\n+ 30% к сопротивлению магии\nАктивная: Barrier\nСоздаёт на владельце и окружающих его союзниках барьер, блокирующий 400 магического урона. Действует 12 сек.\nРадиус: 1200\nПассивная: Insight Aura\nДействует на союзников вокруг. Увеличивает их восстановление здоровья на 2.0 и сопротивление магии на 10%.\nРадиус: 1200\nКулдаун: 60\nМана: 100\nЭффект от нескольких Barrier не складывается.\nСочетается по закону убывающей полезности с другими источниками сопротивления магии.\nМогущественный артефакт таинственного происхождения. Он создаёт барьеры, защищающие от магических сил.')}}>
<img  className ='mid' src = 'https://ru.dotabuff.com/assets/items/pipe-of-insight-d9956adace54ad2dc44c2ae87bfa21f106e64a230882612220a35d750f84c1f8.jpg'/>    
</TouchableOpacity> 

   <text className = 'midText'> Mid game </text>  <img></img>   
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Magic Wand\nЦена: 450\n+ 3 ко всем атрибутам\nАктивная: Energy Charge\nМгновенно восстанавливает 15 здоровья и маны за каждый имеющийся заряд.\nМожет иметь до 20 зарядов. Получает один заряд каждый раз, когда видимый враг в радиусе 1200 использует способность.\nКулдаун: 13\nПолучает заряды, когда видимый враг в радиусе 1200 использует способность.\nПредметы и некоторые способности не добавляют зарядов.\nПростая волшебная палочка, в которой концентрируют магическую энергию начинающие волшебники и великие колдуны.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg'/>
  </TouchableOpacity>  
  <TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Guardian Greaves\nЦена: 4,975\n+ 50 к скорости передвижения\n+ 250 к мане\n+ 4 к броне\nАктивная: Mend\nВосстанавливает 300 здоровья и 200 маны всем союзникам вокруг, а также снимает с владельца большинство отрицательных эффектов.\nРадиус: 1200\nТип развеивания: нормальное\nПассивная: Guardian Aura\nУвеличивает восстановление здоровья союзников на 2.5 и их броню на 3.0. Союзным героям с уровнем здоровья ниже 20% аура восстанавливает 16 здоровья в секунду и увеличивает броню на 10.\nРадиус: 1200\nБонусы к скорости передвижения от нескольких пар ботинок не складываются.\nКулдаун: 40\nАура усиливается только на героях.\nОдин из множества священных инструментов, созданных во славу Всезнания.')}}>     
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/guardian-greaves-9074138bd6e55fcba6d627022300ae1d497d26e860b8609f318606bb2623b530.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Veil of Discord\nЦена: 1,525\n+ 4 ко всем атрибутам\nАктивная: Magic Weakness\nОслабляет врагов в области радиусом 600, отчего они получают на 18% больше урона от заклинаний.\nДальность применения: 1000\nДлительность: 16.0 сек.\nПассивная: Basilius Aura\nУвеличивает восстановление маны союзников на 1.5.\nРадиус: 1200\nКулдаун: 25\nМана: 50\nЭффект можно развеять.\nГоловной убор испорченных магов.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg'/>
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Euls Scepter of Divinity\nЦена: 2,725\n+ 10 к интеллекту\n+ 5.0 к восстановлению маны\n+ 20 к скорости передвижения\nАктивная: Cyclone\nПоднимает выбранную цель в воздух, делая её неуязвимой на 2.5 сек. Можно использовать только на себя или противника.\nЕсли применить на врага, то по приземлении он получит 50 магического урона.\nДальность применения: 575\nТип развеивания: нормальное\nКулдаун: 23\nМана: 175\nНельзя применять на союзников.\nИспользование на себя проходит сквозь невосприимчивость к магии.\nИспользование снимает некоторые положительные и отрицательные эффекты.\nЭффект можно развеять.\nЗагадочный скипетр, прошедший сквозь века, позволяет творить своими непокорными ветрами как добрые, так и злые дела.')}}>
<img  className ='late' src= 'https://ru.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg'/>    
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Pipe of Insight\nЦена: 3,425\n+ 8.5 к восстановлению здоровья\n+ 30% к сопротивлению магии\nАктивная: Barrier\nСоздаёт на владельце и окружающих его союзниках барьер, блокирующий 400 магического урона. Действует 12 сек.\nРадиус: 1200\nПассивная: Insight Aura\nДействует на союзников вокруг. Увеличивает их восстановление здоровья на 2.0 и сопротивление магии на 10%.\nРадиус: 1200\nКулдаун: 60\nМана: 100\nЭффект от нескольких Barrier не складывается.\nСочетается по закону убывающей полезности с другими источниками сопротивления магии.\nМогущественный артефакт таинственного происхождения. Он создаёт барьеры, защищающие от магических сил.')}}>
<img  className ='late' src = 'https://ru.dotabuff.com/assets/items/pipe-of-insight-d9956adace54ad2dc44c2ae87bfa21f106e64a230882612220a35d750f84c1f8.jpg'/>        
</TouchableOpacity>
<TouchableOpacity  style = {{width: 86}} onPress={()=>{alert('Shivas Guard\nЦена: 4,850\n+ 30 к интеллекту\n+ 15 к броне\nАктивная: Arctic Blast\nВыпускает морозную волну, которая наносит противникам 200 магического урона и на 4.0 сек. снижает их скорость передвижения на -40%.\nРадиус: 900\nПассивная: Freezing Aura\nСнижает скорость атаки противников на -45, а их лечение, восстановление здоровья и вампиризм — на 25%.\nРадиус: 1200\nКулдаун: 30\nМана: 100\nВолна распространяется за 2,57сек.\nМорозная волна следует за владельцем.\nЭффект от нескольких Freezing Aura не складывается.\nЭффект можно развеять.\nГоворят, когда-то этот артефакт принадлежал богине, и он не теряет былого могущества по сей день.')}}>
<img  className = 'late' src = 'https://ru.dotabuff.com/assets/items/shivas-guard-c5ca9a34428ba32ea0600cfdf9db58c92151629057f3a6ccce6016a27f7d6005.jpg'/>      
   </TouchableOpacity>
    <text className = 'lateText'> Late game</text>
    </div>



    <div className = 'Talents'>
      <TouchableOpacity onPress = {()=> {alert('Poison Attack действует на постройки\n    25 level\nNethertoxin запрещает применять способности\n\n+70 к урону\n    20 level\n+80 к урону в секунду от Viper Strike\n\n+5 к показателям Corrosive Skin\n    15 level\n+100 к дальности атаки\n\n+8% к вампиризму заклинаниями\n    10 level\n+20 к скорости атаки')}}>
        <img style = {{ width: 150, height: 130 }} src='https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg' />
    </TouchableOpacity>
    <img style={{width:1000}}></img>
    </div>

    


    <div className='block'>
      <img style={{width:80,  marginBlockStart: 15}} className='' src='https://ru.dotabuff.com/assets/skills/bloodseeker-bloodrage-5015-e844cc9f34cc05d25767a4c0325991f9b4b59adbcd6108e3f2fe98e88f2ebc34.jpg'/> 
     <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>11</div>   <div className= 'block1'>  </div>   <div className= 'block1'>13</div>    <div className= 'block1'>14</div>    <div className= 'block1'></div>   <div className= 'block1'>16</div>   <div className= 'block1'></div>  <div className= 'block1'></div>   
    <img style={{width:80,  marginBlockStart: 15}} src='https://ru.dotabuff.com/assets/skills/bloodseeker-blood-rite-5016-54e8f095d69af6f9140126e5be63f2b8ca4f1ba7f1c0e2e13377c53544e50e1f.jpg'/>
     <div className= 'block1'>1</div>     <div className= 'block1'> </div>   <div className= 'block1'> 3</div>   <div className= 'block1'> </div>     <div className= 'block1'>5</div>   <div className= 'block1'> </div>   <div className= 'block1'>7</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/bloodseeker-thirst-5017-3397131a8fed770c42479d1cccc0f5d84d8613da7c23b380d8ace9bcdb1dd096.jpg'/>
     <div className= 'block1'> </div>     <div className= 'block1'>2</div>   <div className= 'block1'> </div>    <div className= 'block1'>4</div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>8</div>   <div className= 'block1'>9</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>    <div className= 'block1'>  </div>   <div className= 'block1'></div>   <div className= 'block1'>  </div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    <img style={{width:80,  marginBlockStart: 15}} src = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/abilities/bloodseeker_rupture_hp1.png?v=6299534"/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'>6</div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>   <div className= 'block1'>12</div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'></div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'>18</div>
    <img style={{width:80,  marginBlockStart: 15}} src = 'https://ru.dotabuff.com/assets/skills/talent-4de3b26139290418b6d5c15d06719860a08d04d57a5ebc6c0ef30fce86cc8efb.jpg'/>
     <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>    <div className= 'block1'> </div>     <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'> </div>   <div className= 'block1'>10</div>   <div className= 'block1'>  </div>   <div className= 'block1'>  </div>  <div className= 'block1'>  </div>    <div className= 'block1'>  </div>    <div className= 'block1'>15</div>   <div className= 'block1'></div>   <div className= 'block1'></div>  <div className= 'block1'></div>
    </div>
    </nav>*/
  );
}
