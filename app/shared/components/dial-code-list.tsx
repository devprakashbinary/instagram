import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { RestApiService } from '@app/core/services/restapi.service';
import { CountryDialCode } from '@app/core/models/interface/CountryDialCode'
import { ApiEndPoints } from '@app/core/models/interface/ApiEndPoint';
import { gray } from '@app/app.style.config';
import { dialCodes } from '@app/core/mock/CountryCodes';
const restApiService = new RestApiService();

function getCountries(setCountryDialCode: any) {
    setTimeout(() => {
        setCountryDialCode(dialCodes)
    }, 1000);
    // restApiService.invoke(ApiEndPoints.GET_ALL_DIAL_CODE).then((res: any) => {
    //     setCountryDialCode(res)
    // });
}

export default (props: any) => {
    const [countryDialCode, setCountryDialCode] = useState([]);

    getCountries(setCountryDialCode);

    const _renderCountryList = (item: CountryDialCode) => (<TouchableOpacity style={style.listItem} onPress={() => props.onSelect(item)}>
        <Text style={{fontSize: 18, color: '#000'}}>{item.name}</Text>
        <Text style={{fontSize: 18, color: gray}}>{item.dial_code}</Text>
    </TouchableOpacity>)

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.visible}
        >
            <View style={style.headerContainer}>
                <TouchableOpacity onPress={() => props.close(false)} style={{ width: '35%' }}><Text style={{ fontSize: 18 }}>Cancel</Text></TouchableOpacity>
                <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold' }}>Select Country</Text>
            </View>
            <View>
                <Text style={style.allCountryHd}>ALL COUNTRIES</Text>
                <View style={{paddingLeft: 15}}>
                    {countryDialCode && countryDialCode.length > 0 && <FlatList
                        data={countryDialCode}
                        renderItem={({ item }) => _renderCountryList(item)}
                    />}
                </View>
            </View>
        </Modal>
    )
}


const style = StyleSheet.create({
    allCountryHd: { 
        paddingHorizontal: 15, 
        paddingTop: 25, 
        paddingBottom: 5, 
        borderBottomColor: gray, 
        borderBottomWidth: 1,
        fontWeight: 'bold',
        fontSize: 18 
    }, 
    headerContainer: { 
        flexDirection: 'row', 
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        borderColor: gray, 
        borderBottomWidth: 1 
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 15,
        borderBottomColor: gray,
        borderBottomWidth: 1
    }
})

