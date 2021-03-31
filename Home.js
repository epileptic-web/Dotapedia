import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavbarLink} from 'react-dom';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';


export function Home({navigation}) {
  return (
    <View>
      
      
      <h1>Герои</h1>


     
<div className = 'СилаАтрибут'>
<img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 2}} src = 'https://ru.dotabuff.com/assets/hero_str-eac64b6191e66b593d7f1ac81bb262afed6565794d8f9014d66b0cbc99fa3d01.png'></img>
 <Text style = {{marginEnd: 50, marginLeft: 10, color: '#fff'}}>Сила</Text></div> 


      <div className='Сила'>
        <TouchableOpacity onPress={() => navigation.navigate('Sven', {name: 'Jane'})}>
          <img style = {{width: 100}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/sven_full.png?v=6432756?v=6432756'/>
        </TouchableOpacity>
 
<TouchableOpacity onPress={() => navigation.navigate('Phoenix', {name: 'Jane'})}>
      <img style = {{width: 100}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phoenix_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Earth Shaker', {name: 'Jane'})}>
      <img style = {{width: 100}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/earthshaker_full.png?v=6432756?v=6432756'/>
      </TouchableOpacity>
     
      
</div>
 
  

<div className = 'AgilityAtrebut'>
<img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 2}} src = 'https://ru.dotabuff.com/assets/hero_agi-693306f455235ff5628c3429a80f2dc7e7795c013c540832dbba61ab691a73b5.png'></img>
 <Text style = {{marginEnd: 50, marginLeft: 10, color: '#fff'}}>Ловкость</Text></div>   





<div className = 'Agility'>
      <TouchableOpacity onPress={() => navigation.navigate('Anti-Mage', {name: 'Jane'})}>
<img className = 'Home25' style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/antimage_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate('Vaiper', {name: 'Jane'})}>
        <img className = 'Home25' style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/viper_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Blood Seeker', {name: 'Jane'})}>
        <img className = 'Home25' style = {{width: 150}} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/bloodseeker_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Drow Ranger', {name: 'Jane'})}>
        <img className = 'Home25' style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/drow_ranger_full.png?v=6432756?v=6432756'/>
      </TouchableOpacity>
    
           <TouchableOpacity onPress={() => navigation.navigate('Ursa', {name: 'Jane'})}>
        <img className = 'Home25' style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/ursa_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
     
           <TouchableOpacity onPress={() => navigation.navigate('Phantom Assassin', {name: 'Jane'})}>
        <img style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
      
    

</div>






<div className = 'IntellectAtrebut'>
<img style = {{width: 50, height: 50, marginBlockStart: 5, marginLeft: 2}} src = 'https://ru.dotabuff.com/assets/hero_int-76ea2af3bdf60a1c92d82a1fc0845d47a071cfacfca111aa2d5e43fbae01b580.png'></img>
 <Text style = {{marginEnd: 50, marginLeft: 10, color: '#fff'}}>Интелект</Text></div>   

<div className = 'Intellect'>

      <TouchableOpacity onPress={() => navigation.navigate('Lina', {name: 'Jane'})}>
        <img className = 'Home25' style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/lina_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Qeen of Pain', {name: 'Jane'})}>
        <img style = {{width: 150}} className = 'Home25' src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/queenofpain_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity> 
          
     <TouchableOpacity onPress={() => navigation.navigate('Pugna', {name: 'Jane'})}>
        <img style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/pugna_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Invoker', {name: 'Jane'})}>
        <img style = {{width: 150}} src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/invoker_full.png?v=6299534?v=6299534'/>
      </TouchableOpacity>
</div >



<TouchableOpacity onPress={() => navigation.navigate('Items', {name: 'Jane'})}>Items</TouchableOpacity>

<div className='Home2'>
      <a className='Home25'>Hello</a>  <a className='Home25'>Hello</a>
      <a className='Home25'>gbriubgeakdnszjkNKJBBL</a>  <a className='Home25'>Hello</a> 
</div>
    </View>
  );
}