import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*export default function App() {
  return (
     <NavigationContainer>
        <Tab.Navigator>
           <Tab.Screen name="Home" component={MyStack} />
           <Tab.Screen name="Settings" component={Items25} />
        </Tab.Navigator>
     </NavigationContainer>
  );
}*/




 export default function MyStack () {
  return (
    <Items25/>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>

        <Stack.Screen name="Sven" component={Sven}/>
        <Stack.Screen name="Anti-Mage" component={AntiMage}/>
        <Stack.Screen name="Vaiper" component={Vaiper} />
        <Stack.Screen name="Blood Seeker" component={BloodSeeker}/>
        <Stack.Screen name="Drow Ranger" component={DrowRanger}/>
        <Stack.Screen name="Lina" component={Lina}/>
        <Stack.Screen name="Ursa" component={Ursa}/>
        <Stack.Screen name="Earth Shaker" component={EarthShaker}/>
        <Stack.Screen name="Phoenix" component={Phoenix}/>
        <Stack.Screen name="Phantom Assassin" component={Phantom_Assassin}/>
        <Stack.Screen name="Pugna" component={Pugna}/> 
        <Stack.Screen name="Qeen of Pain" component = {QeenofPain}/> 
        <Stack.Screen name ="Invoker" component = {Invoker}/>


          <Stack.Screen name ="Items" component = {Items25}/>
      </Stack.Navigator>
      </NavigationContainer>*/
      );
};



import {Home} from './Home';
import {AntiMage} from './heroes/Intelect';
import {Sven} from './heroes/Sven';
import {Vaiper} from './heroes/Vaiper';
import {BloodSeeker} from './heroes/BloodSeeker';
import {DrowRanger} from './heroes/DrowRanger';
import {Lina} from './heroes/Lina';
import {Ursa} from './heroes/Ursa';
import {EarthShaker} from './heroes/EarthShaker';
import {Phoenix} from './heroes/Phoenix';
import {QeenofPain} from './heroes/Intelect';
import {Phantom_Assassin} from './heroes/Phantom_Assassin';
import {Pugna} from './heroes/Pugna';
import {Invoker} from './heroes/Intelect';

import {Items25} from './Header/items25';

import {Header} from './Header/header';

// const Home = lazy(() => import('./Home'));

// const AntiMage = React.lazy(()=> import('./heroes/Intelect'));
// const Vaiper = lazy(() => import('./heroes/Vaiper'));
// const BloodSeeker = lazy(() => import('./heroes/BloodSeeker'));
// const DrowRanger = lazy(() => import('./heroes/DrowRanger'));
// const Lina = lazy(() => import('./heroes/Lina'));
// const Sven = lazy(() => import('./heroes/Sven'));
// const Ursa = lazy(() => import('./heroes/Ursa'));
// const EarthShaker = lazy(() => import('./heroes/EarthShaker'));
// const Phoenix = lazy(() => import('./heroes/Phoenix'));
// // const QeenofPain = lazy(() => import('./heroes/Intelect'));
// const Phantom_Assassin = lazy(() => import('./heroes/Phantom_Assassin'));
// const Pugna = lazy(() => import('./heroes/Pugna'));
// const Invoker = lazy(() => import('./heroes/Intelect'));

import { createDrawerNavigator } from '@react-navigation/drawer';









{/* <Menu active = {menuActive} setActive = {setMenuActive} header = 'Hello' items = {items}/> */}
{/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Hello"  component={Home} />
        <Stack.Screen name="AntiMage"   options={{ 
      title: <Image style={{ width: 250, height: 50 }}
      source = {'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/antimage_full.png?v=6299534?v=6299534'}/> 
    }}  component={AntiMage} />
        <Stack.Screen name="DrowRanger" component={DrowRanger} />
        <Stack.Screen name="Vaiper" component={Vaiper} />
        <Stack.Screen name="BloodSeeker" component={BloodSeeker} />
        <Stack.Screen name="Lina" component={Lina} />
        <Stack.Screen name="Sven" component={Sven} />
        <Stack.Screen name="Ursa" component={Ursa} />
        <Stack.Screen name="EarthShaker" component={EarthShaker} />
        <Stack.Screen name="Phoenix" component={Phoenix} />
        <Stack.Screen name="QeenofPain" component={QueenofPain} />
        <Stack.Screen name="Phantom_Assasin" component={Phantom_Assassin} />
        <Stack.Screen name="Pugna" component={Pugna} />  
        <Stack.Screen name='Invoker' component={Invoker}/>         
      </Stack.Navigator>
    </NavigationContainer> */}


    {/* <BrowserRouter>
    
   
     
            <Header/> 
        
  
            <div>
             <Route path='/heroes/Intelect/AntiMage' component = {AntiMage}/>
             <Route path='/heroes/Vaiper' component = {Vaiper}/>
             <Route path='/heroes/BloodSeeker' component = {BloodSeeker}/>
             <Route path='/heroes/DrowRanger' component = {DrowRanger}/>
             <Route path='/heroes/Lina' component = {Lina}/> 
             <Route path='/heroes/Sven' component = {Sven}/>
             <Route path='/heroes/Ursa' component = {Ursa}/>
             <Route path='/heroes/EarthShaker' component = {EarthShaker}/>
             <Route path='/heroes/Phoenix' component = {Phoenix}/>
             <Route path='/heroes/Intelect/QueenofPain' component = {QueenofPain}/>
             <Route path='/heroes/Phantom_Assassin' component = {Phantom_Assassin}/>
             <Route path='/heroes/Pugna' component = {Pugna}/>
             <Route path='/heroes/Intelect/Invoker' component = {Invoker}/>
             
             <Route path='/Home' component = {Home}/> 
           </div> 
   
   </BrowserRouter> */}