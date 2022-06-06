import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {Modal, Portal, Card, Avatar, Provider} from 'react-native-paper';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = 'es';



const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const events = {
    "2022-06-01": [
        {
            "name": "comer patatas",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],
    "2022-06-02": [
        {
            "name": "estudiar",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],
    "2022-06-03": [
        {
            "name": "si",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],
    "2022-06-04": [
        {
            "name": "mas o menos",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],
    "2022-06-10": [
        {
            "name": "solo a veces",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],
    "2022-06-14": [
        {
            "name": "solo de vez en cuando",
            "height": {height: Math.max(50, Math.floor(Math.random() * 150))},
        }
    ],


}

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};


Date.prototype.remDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
};


const Calendar =  () => {
    const [items, setItems] = useState({});
    const tempItems = {};
    

    const loadItems = (day) => {
        let date = new Date(day['dateString']);
        date = date.remDays(50)
        setTimeout(() => {
            for (let i = 0; i < 100; i++) {
                date=date.addDays(1)
                if(events[timeToString(date)]){
                    tempItems[timeToString(date)] = events[timeToString(date)];
                }else
                {
                    tempItems[timeToString(date)] = [];
                }
            }
            setItems(tempItems)
        }, 1000)
    }



    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                <Card>
                    <Card.Content>
                        <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="J" />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{flex: 1}}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={timeToString(new Date())}
                renderItem={renderItem}
                showClosingKnob={true}
                theme={theme}
            />
        </View>
    )
}


const theme = {
    backgroundColor: '#111',
    calendarBackground: '#111',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#ffffff',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    monthTextColor: 'white',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }


export default Calendar;